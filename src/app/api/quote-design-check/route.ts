import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

function createClient() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;
  return new Anthropic({ apiKey });
}

const SUPPORTED_IMAGE_TYPES: Record<string, 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp'> = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
};

export async function POST(req: NextRequest) {
  const client = createClient();
  if (!client) {
    return NextResponse.json({ error: 'anthropic_not_configured' }, { status: 503 });
  }

  const formData = await req.formData();
  const file = formData.get('file') as File | null;

  if (!file) {
    return NextResponse.json({ error: 'no_file' }, { status: 400 });
  }

  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';

  if (ext === 'ai' || ext === 'eps') {
    return NextResponse.json([
      { level: 'info', message: 'AI 分析不支援向量格式，請轉存為 PDF 或 JPG' },
    ]);
  }

  const arrayBuffer = await file.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString('base64');

  const prompt = `這是一張即將送印的設計稿。請分析是否有常見的印刷問題，以 JSON 陣列回傳：
[
  {"level": "error|warning|info", "message": "<繁體中文說明>"}
]
檢查項目：
- 字體大小（小於 6pt 會模糊）
- 顏色模式（RGB vs CMYK，印刷建議 CMYK）
- 細線（小於 0.25pt 可能斷線）
- 出血區（建議 3mm）
- 影像解析度（低於 300dpi 會模糊）
只回傳 JSON 陣列，不要其他文字。若無問題，回傳空陣列 []。`;

  let content: Anthropic.MessageParam['content'];

  if (ext === 'pdf') {
    content = [
      {
        type: 'document',
        source: {
          type: 'base64',
          media_type: 'application/pdf',
          data: base64,
        },
      } as unknown as Anthropic.TextBlockParam,
      { type: 'text', text: prompt },
    ];
  } else if (SUPPORTED_IMAGE_TYPES[ext]) {
    content = [
      {
        type: 'image',
        source: {
          type: 'base64',
          media_type: SUPPORTED_IMAGE_TYPES[ext],
          data: base64,
        },
      },
      { type: 'text', text: prompt },
    ];
  } else {
    return NextResponse.json([
      { level: 'info', message: '不支援此檔案格式，請上傳 JPG、PNG 或 PDF' },
    ]);
  }

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 512,
    messages: [{ role: 'user', content }],
  });

  const text = message.content[0].type === 'text' ? message.content[0].text : '[]';
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 500 });
  }

  return NextResponse.json(parsed);
}
