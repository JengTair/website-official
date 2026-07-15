import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

function createClient() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;
  return new Anthropic({ apiKey });
}

export async function POST(req: NextRequest) {
  const client = createClient();
  if (!client) {
    return NextResponse.json({ error: 'anthropic_not_configured' }, { status: 503 });
  }

  const { userInput } = await req.json() as { userInput: string };

  if (!userInput || !userInput.trim()) {
    return NextResponse.json({ error: 'empty_input' }, { status: 400 });
  }

  const prompt = `你是一個台灣貼紙製造廠的詢價助手。
從以下客戶描述中擷取資訊，以 JSON 格式回傳：
{
  "stickerType": "防水貼紙|透明貼紙|燙金貼紙|反光貼紙|鐳射貼紙|其他",
  "width": <數字，公分，無法判斷則 null>,
  "height": <數字，公分，無法判斷則 null>,
  "quantity": <數字，無法判斷則 null>,
  "notes": "<其他補充說明>"
}
只回傳 JSON，不要其他文字。
客戶描述：${userInput}`;

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 256,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = message.content[0].type === 'text' ? message.content[0].text : '';
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 500 });
  }

  return NextResponse.json(parsed);
}
