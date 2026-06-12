'use client';

import { useState, useEffect } from 'react';

const inputClass =
  'w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2C4A38] focus:ring-1 focus:ring-[#2C4A38] transition';
const labelClass = 'block text-sm font-semibold text-gray-700 mb-1.5';

// ── 報價估算公式 ──────────────────────────────────────────────
const BASE_PRICES: Record<string, number> = {
  '防水貼紙': 0.8,
  '透明貼紙': 0.9,
  '燙金貼紙': 2.5,
  '反光貼紙': 1.8,
  '鐳射貼紙': 2.0,
  '其他': 1.0,
};

function calcEstimate(type: string, width: number, height: number, qty: number) {
  const base = BASE_PRICES[type];
  if (!base || width <= 0 || height <= 0 || qty <= 0) return null;
  const areaMultiplier = (width * height) / 25;
  const discount = qty >= 5000 ? 0.7 : qty >= 1000 ? 0.85 : 1.0;
  const mid = base * areaMultiplier * qty * discount;
  const lower = Math.floor((mid * 0.9) / 1000) * 1000;
  const upper = Math.ceil((mid * 1.1) / 1000) * 1000;
  return { lower, upper };
}

// ── 設計稿分析警告 ─────────────────────────────────────────────
type DesignIssue = { level: 'error' | 'warning' | 'info'; message: string };

const ISSUE_COLORS: Record<string, string> = {
  error: 'bg-red-50 border-red-200 text-red-700',
  warning: 'bg-amber-50 border-amber-200 text-amber-700',
  info: 'bg-blue-50 border-blue-200 text-blue-700',
};
const ISSUE_ICONS: Record<string, string> = {
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
};

function SuccessMessage({ message }: { message: string }) {
  return (
    <div className="text-center py-8">
      <div className="w-14 h-14 rounded-full bg-[#E8EDE9] flex items-center justify-center mx-auto mb-4">
        <svg className="w-7 h-7 text-[#2C4A38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-gray-700 font-medium">{message}</p>
    </div>
  );
}

function generateQuoteRef(): string {
  const d = new Date();
  const date = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `ZT-${date}-${rand}`;
}

const stickerTypes = ['防水貼紙', '透明貼紙', '燙金貼紙', '反光貼紙', '鐳射貼紙', '其他'];

export function Step01Form({ onSuccess, onGoToStep02 }: { onSuccess: (quoteRef: string) => void; onGoToStep02?: () => void }) {
  // 表單欄位 state（受控）
  const [stickerType, setStickerType] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileObj, setFileObj] = useState<File | null>(null);

  // 提交後狀態
  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');
  const [copied, setCopied] = useState(false);

  // AI 助手狀態
  const [aiInput, setAiInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  // 即時估價
  const estimate = calcEstimate(
    stickerType,
    parseFloat(width) || 0,
    parseFloat(height) || 0,
    parseInt(quantity) || 0,
  );

  // 設計稿分析狀態
  const [designIssues, setDesignIssues] = useState<DesignIssue[] | null>(null);
  const [designLoading, setDesignLoading] = useState(false);
  const [designError, setDesignError] = useState('');

  // 每次換檔案就重跑分析
  useEffect(() => {
    if (!fileObj) return;
    const ext = fileObj.name.split('.').pop()?.toLowerCase() ?? '';
    if (ext === 'ai' || ext === 'eps') {
      setDesignIssues([{ level: 'info', message: 'AI 分析不支援向量格式，請轉存為 PDF 或 JPG' }]);
      setDesignError('');
      return;
    }
    setDesignIssues(null);
    setDesignError('');
    setDesignLoading(true);
    const form = new FormData();
    form.append('file', fileObj);
    fetch('/api/quote-design-check', { method: 'POST', body: form })
      .then(async (res) => {
        if (!res.ok) throw new Error('api_error');
        return res.json() as Promise<DesignIssue[]>;
      })
      .then((data) => { setDesignIssues(data); })
      .catch(() => { setDesignError('設計稿分析暫時無法使用'); })
      .finally(() => { setDesignLoading(false); });
  }, [fileObj]);

  async function handleAiParse() {
    if (!aiInput.trim()) {
      setAiError('請先輸入需求描述');
      return;
    }
    setAiError('');
    setAiLoading(true);
    try {
      const res = await fetch('/api/quote-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput: aiInput }),
      });
      if (!res.ok) throw new Error('api_error');
      const data = await res.json() as {
        stickerType?: string;
        width?: number | null;
        height?: number | null;
        quantity?: number | null;
        notes?: string;
      };
      if (data.stickerType && stickerTypes.includes(data.stickerType)) setStickerType(data.stickerType);
      if (data.width != null) setWidth(String(data.width));
      if (data.height != null) setHeight(String(data.height));
      if (data.quantity != null) setQuantity(String(data.quantity));
      if (data.notes) setNotes(data.notes);
    } catch {
      setAiError('AI 解析失敗，請手動填寫');
    } finally {
      setAiLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-[#E8EDE9] flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-[#2C4A38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-gray-900 font-bold text-lg mb-1">已收到您的詢價需求</p>
        <p className="text-gray-500 text-sm mb-5">我們將於 1 個工作天內以 Email 回覆報價</p>
        <div className="bg-[#E8EDE9] border border-[#2C4A38] rounded-xl px-5 py-4 mb-5">
          <p className="text-xs text-[#2C4A38] font-semibold mb-1 uppercase tracking-wide">您的詢價單號</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl font-bold text-gray-900 tracking-widest">{quoteRef}</span>
            <button
              type="button"
              onClick={() => { navigator.clipboard.writeText(quoteRef); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
              className="text-[#2C4A38] hover:text-[#1C3428] transition"
              title="複製單號"
            >
              {copied
                ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              }
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-5">收到業務報價後，請憑此單號進行下一步</p>
        {onGoToStep02 && (
          <button
            type="button"
            onClick={onGoToStep02}
            className="w-full py-3 bg-gray-900 hover:bg-gray-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            前往 Step 02 確認報價
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const ref = generateQuoteRef();
      setQuoteRef(ref);
      setSubmitted(true);
      onSuccess(ref);
    }} className="space-y-5">

      {/* ── AI 自然語言助手 ── */}
      <div className="bg-gradient-to-br from-[#F0F4F6] to-[#F5F8F6] border border-[#9BAAB5] rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4 text-[#2C4A38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.347A3.001 3.001 0 0112 17a3 3 0 01-2.121-.879l-.347-.347z" />
          </svg>
          <span className="text-sm font-semibold text-[#2C4A38]">AI 快速填表助手</span>
        </div>
        <p className="text-xs text-[#4A7060] mb-3">用白話文描述您的需求，AI 自動幫您填入下方欄位</p>
        <textarea
          value={aiInput}
          onChange={(e) => setAiInput(e.target.value)}
          rows={2}
          placeholder="例：我需要 1000 張防水貼紙，大約 5×5 公分，用於產品包裝"
          className="w-full px-3 py-2.5 text-sm border border-[#9BAAB5] rounded-lg text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:border-[#2C4A38] focus:ring-1 focus:ring-[#2C4A38] resize-none transition"
        />
        {aiError && <p className="text-xs text-red-500 mt-1">{aiError}</p>}
        <button
          type="button"
          onClick={handleAiParse}
          disabled={aiLoading}
          className="mt-2 px-4 py-2 bg-[#2C4A38] hover:bg-[#1C3428] disabled:bg-[#7A9E8E] text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
        >
          {aiLoading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              解析中...
            </>
          ) : '✦ AI 自動填表'}
        </button>
      </div>

      <div>
        <label className={labelClass}>公司名稱 <span className="text-amber-500">*</span></label>
        <input type="text" required placeholder="例：XX 有限公司" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>聯絡 Email <span className="text-amber-500">*</span></label>
        <input type="email" required placeholder="example@company.com" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>貼紙類型 <span className="text-amber-500">*</span></label>
        <select
          required
          value={stickerType}
          onChange={(e) => setStickerType(e.target.value)}
          className={`${inputClass} appearance-none bg-white`}
        >
          <option value="" disabled>請選擇貼紙類型</option>
          {stickerTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className={labelClass}>寬度 (cm)</label>
          <input
            type="number"
            min={0.1}
            step={0.1}
            placeholder="例：5"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>高度 (cm)</label>
          <input
            type="number"
            min={0.1}
            step={0.1}
            placeholder="例：5"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>數量 <span className="text-amber-500">*</span></label>
          <input
            type="number"
            required
            min={1}
            placeholder="例：1000"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* ── 即時報價估算 ── */}
      {estimate && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-green-700">
            參考報價區間：<span className="font-bold">NT$ {estimate.lower.toLocaleString()} – NT$ {estimate.upper.toLocaleString()}</span>
            <span className="text-xs font-normal ml-1">（以業務正式報價為準）</span>
          </p>
        </div>
      )}

      <div>
        <label className={labelClass}>
          設計稿 <span className="text-gray-400 font-normal text-xs ml-1">（AI / PDF / JPG）</span>
        </label>
          <label className="flex items-center gap-3 w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#2C4A38] hover:bg-[#E8EDE9] transition group">
          <svg className="w-5 h-5 text-gray-400 group-hover:text-[#2C4A38] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <span className={`text-sm ${fileName ? 'text-gray-900' : 'text-gray-400'}`}>
            {fileName || '點擊上傳或拖曳檔案至此'}
          </span>
          <input type="file" accept=".ai,.pdf,.jpg,.jpeg,.png,.eps" className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0] ?? null;
              setFileName(f?.name ?? '');
              setFileObj(f);
            }} />
        </label>

        {/* 設計稿分析結果 */}
        {designLoading && (
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4 animate-spin text-[#2C4A38]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            分析中...
          </div>
        )}
        {designError && (
          <p className="mt-2 text-xs text-gray-400">{designError}</p>
        )}
        {!designLoading && designIssues !== null && (
          <div className="mt-2 space-y-1.5">
            {designIssues.length === 0 ? (
              <p className="text-sm text-green-600 font-medium">設計稿看起來沒有明顯問題 ✓</p>
            ) : (
              designIssues.map((issue, i) => (
                <div key={i} className={`flex items-start gap-2 border rounded-lg px-3 py-2 text-sm ${ISSUE_COLORS[issue.level] ?? ISSUE_COLORS.info}`}>
                  <span className="font-bold flex-shrink-0">{ISSUE_ICONS[issue.level]}</span>
                  <span>{issue.message}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div>
        <label className={labelClass}>備註 <span className="text-gray-400 font-normal text-xs ml-1">（選填）</span></label>
        <textarea
          rows={3}
          placeholder="特殊材質要求、參考資料等..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button type="submit" className="w-full py-3.5 bg-[#2C4A38] hover:bg-[#1C3428] text-white font-bold rounded-lg transition-colors">
        送出詢價需求
      </button>
    </form>
  );
}

export function Step02Form({ onSuccess, quoteRef }: { onSuccess: () => void; quoteRef?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [decision, setDecision] = useState('');

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-[#E8EDE9] flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-[#2C4A38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-gray-900 font-bold text-lg mb-1">報價確認完成</p>
        <p className="text-gray-500 text-sm mb-5">設計團隊將開始製作打樣稿</p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 text-left">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-blue-700 leading-relaxed">
              打樣稿完成後，業務將寄送 Email 通知您，並附上<span className="font-semibold">直接進入 Step 03 確認打樣</span>的連結。
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); onSuccess(); }} className="space-y-5">
      {quoteRef && (
        <div className="flex items-center gap-2 bg-[#E8EDE9] border border-[#2C4A38] rounded-lg px-4 py-3">
          <svg className="w-4 h-4 text-[#2C4A38] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm text-[#2C4A38]">詢價單號：<span className="font-bold tracking-wide">{quoteRef}</span></span>
        </div>
      )}
      <div>
        <label className={labelClass}>詢價單號 <span className="text-amber-500">*</span></label>
        <input type="text" required defaultValue={quoteRef ?? ''} placeholder="例：ZT-20260427-3842" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>聯絡 Email <span className="text-amber-500">*</span></label>
        <input type="email" required placeholder="example@company.com" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>報價決定 <span className="text-amber-500">*</span></label>
        <div className="flex gap-4">
          {['接受報價，準備下單', '需要再討論'].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="decision" value={opt} required
                onChange={() => setDecision(opt)}
                className="accent-amber-500 w-4 h-4" />
              <span className="text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      {decision === '接受報價，準備下單' && (
        <div>
          <label className={labelClass}>付款方式偏好</label>
          <select defaultValue="" className={`${inputClass} appearance-none bg-white`}>
            <option value="">請選擇（選填）</option>
            <option>銀行匯款</option>
            <option>信用卡</option>
            <option>其他</option>
          </select>
        </div>
      )}
      <div>
        <label className={labelClass}>收件地址 <span className="text-amber-500">*</span></label>
        <input type="text" required placeholder="出貨時使用，例：台北市信義區XX路X號" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>特殊配送需求 <span className="text-gray-400 font-normal text-xs ml-1">（選填）</span></label>
        <input type="text" placeholder="例：指定時段、需電梯搬運等" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>疑問或備註 <span className="text-gray-400 font-normal text-xs ml-1">（選填）</span></label>
        <textarea rows={2} placeholder="對報價有任何疑問請在此說明..." className={`${inputClass} resize-none`} />
      </div>
      <button type="submit" className="w-full py-3.5 bg-[#2C4A38] hover:bg-[#1C3428] text-white font-bold rounded-lg transition-colors">
        送出確認
      </button>
    </form>
  );
}

export function Step03Form({ onSuccess }: { onSuccess: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState('');
  const [fileName, setFileName] = useState('');

  if (submitted) return <SuccessMessage message="已收到您的打樣確認，設計團隊將進行後續處理。" />;

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); onSuccess(); }} className="space-y-5">
      <div>
        <label className={labelClass}>聯絡 Email <span className="text-amber-500">*</span></label>
        <input type="email" required placeholder="example@company.com" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>打樣結果 <span className="text-amber-500">*</span></label>
        <div className="flex gap-4">
          {['通過，可以進入生產', '需要修改'].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="result" value={opt} required
                onChange={() => setResult(opt)}
                className="accent-amber-500 w-4 h-4" />
              <span className="text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      {result === '需要修改' && (
        <>
          <div>
            <label className={labelClass}>修改說明 <span className="text-amber-500">*</span></label>
            <textarea rows={3} required placeholder="請描述需要修改的部分..." className={`${inputClass} resize-none`} />
          </div>
          <div>
            <label className={labelClass}>參考圖 <span className="text-gray-400 font-normal text-xs ml-1">（選填）</span></label>
            <label className="flex items-center gap-3 w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#2C4A38] hover:bg-[#E8EDE9] transition group">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-[#2C4A38] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span className={`text-sm ${fileName ? 'text-gray-900' : 'text-gray-400'}`}>
                {fileName || '上傳參考圖片'}
              </span>
              <input type="file" accept=".jpg,.jpeg,.png,.pdf" className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')} />
            </label>
          </div>
        </>
      )}
      <button type="submit" className="w-full py-3.5 bg-[#2C4A38] hover:bg-[#1C3428] text-white font-bold rounded-lg transition-colors">
        送出確認
      </button>
    </form>
  );
}

const mockStatus = {
  orderRef: 'ZT-20260427-3842',
  product: '防水貼紙 5×5cm',
  quantity: '1,000 張',
  stages: [
    { label: '原料備料', done: true },
    { label: '印刷製程', done: true },
    { label: '裁切加工', done: false, active: true },
    { label: '品質抽檢', done: false },
    { label: '準備出貨', done: false },
  ],
  estimatedDate: '2026-05-12',
};

export function Step04Form({ onSuccess }: { onSuccess: () => void }) {
  const [orderNum, setOrderNum] = useState('');
  const [result, setResult] = useState<'idle' | 'loading' | 'found' | 'notfound'>('idle');

  function handleQuery(e: React.FormEvent) {
    e.preventDefault();
    setResult('loading');
    setTimeout(() => {
      setResult(orderNum.trim() !== '' ? 'found' : 'notfound');
    }, 800);
  }

  if (result === 'found') {
    return (
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-0.5">訂單編號</p>
            <p className="font-bold text-gray-900">{mockStatus.orderRef}</p>
          </div>
          <span className="text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">生產中</span>
        </div>
        <div className="text-sm text-gray-500 flex gap-4">
          <span>{mockStatus.product}</span>
          <span>{mockStatus.quantity}</span>
        </div>

        {/* Progress */}
        <div className="space-y-3 py-2">
          {mockStatus.stages.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-3">
              <div className={'w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ' +
                (stage.done ? 'bg-amber-500 text-white' : stage.active ? 'bg-amber-100 border-2 border-amber-500 text-amber-600' : 'bg-gray-100 text-gray-400')}>
                {stage.done
                  ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  : i + 1}
              </div>
              <span className={'text-sm font-medium ' + (stage.done ? 'text-gray-400 line-through' : stage.active ? 'text-gray-900' : 'text-gray-400')}>
                {stage.label}
              </span>
              {stage.active && <span className="text-xs text-amber-600 font-semibold ml-auto">進行中</span>}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-600">
          預計出貨日：<span className="font-semibold text-gray-900">{mockStatus.estimatedDate}</span>
          <span className="ml-2 text-xs text-gray-400">（後端串接後即時更新）</span>
        </div>

        <button
          type="button"
          onClick={() => { setResult('idle'); setOrderNum(''); }}
          className="w-full py-3 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-lg transition-colors text-sm"
        >
          查詢其他訂單
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleQuery} className="space-y-5">
      <p className="text-sm text-gray-500">輸入訂單編號即可查看目前生產進度。</p>
      <div>
        <label className={labelClass}>訂單編號 <span className="text-amber-500">*</span></label>
        <input
          type="text"
          required
          placeholder="例：ZT-20260427-3842"
          value={orderNum}
          onChange={(e) => setOrderNum(e.target.value)}
          className={inputClass}
        />
      </div>
      {result === 'notfound' && (
        <p className="text-sm text-red-500">找不到此訂單編號，請確認後再試。</p>
      )}
      <button
        type="submit"
        disabled={result === 'loading'}
        className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-bold rounded-lg transition-colors"
      >
        {result === 'loading' ? '查詢中...' : '查詢進度'}
      </button>
      <p className="text-xs text-center text-gray-400">目前為展示版，後端串接後將顯示即時狀態</p>
    </form>
  );
}

const mockShipping = {
  orderRef: 'ZT-20260427-3842',
  product: '防水貼紙 5×5cm',
  quantity: '1,000 張',
  carrier: '黑貓宅急便',
  trackingNo: '123-4567-8901',
  stages: [
    { label: '備貨完成', done: true },
    { label: '已交付物流', done: true },
    { label: '運送中', done: false, active: true },
    { label: '已送達', done: false },
  ],
  estimatedDate: '2026-05-14',
};

export function Step05Form({ onSuccess }: { onSuccess: () => void }) {
  const [orderNum, setOrderNum] = useState('');
  const [result, setResult] = useState<'idle' | 'loading' | 'found' | 'notfound'>('idle');

  function handleQuery(e: React.FormEvent) {
    e.preventDefault();
    setResult('loading');
    setTimeout(() => {
      setResult(orderNum.trim() !== '' ? 'found' : 'notfound');
    }, 800);
  }

  if (result === 'found') {
    return (
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-0.5">訂單編號</p>
            <p className="font-bold text-gray-900">{mockShipping.orderRef}</p>
          </div>
          <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">運送中</span>
        </div>
        <div className="text-sm text-gray-500 flex gap-4">
          <span>{mockShipping.product}</span>
          <span>{mockShipping.quantity}</span>
        </div>

        <div className="bg-gray-50 rounded-lg px-4 py-3 text-sm space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-500">物流商</span>
            <span className="font-medium text-gray-900">{mockShipping.carrier}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">追蹤號碼</span>
            <span className="font-mono font-medium text-gray-900">{mockShipping.trackingNo}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">預計到貨</span>
            <span className="font-medium text-gray-900">{mockShipping.estimatedDate}</span>
          </div>
        </div>

        <div className="space-y-3 py-1">
          {mockShipping.stages.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-3">
              <div className={'w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ' +
                (stage.done ? 'bg-amber-500 text-white' : stage.active ? 'bg-blue-100 border-2 border-blue-500 text-blue-600' : 'bg-gray-100 text-gray-400')}>
                {stage.done
                  ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  : i + 1}
              </div>
              <span className={'text-sm font-medium ' + (stage.done ? 'text-gray-400 line-through' : stage.active ? 'text-gray-900' : 'text-gray-400')}>
                {stage.label}
              </span>
              {stage.active && <span className="text-xs text-blue-600 font-semibold ml-auto">進行中</span>}
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-gray-400">目前為展示版，後端串接後將顯示即時物流狀態</p>

        <button
          type="button"
          onClick={() => { setResult('idle'); setOrderNum(''); }}
          className="w-full py-3 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-lg transition-colors text-sm"
        >
          查詢其他訂單
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleQuery} className="space-y-5">
      <p className="text-sm text-gray-500">輸入訂單編號即可查看目前物流狀態與預計到貨日。</p>
      <div>
        <label className={labelClass}>訂單編號 <span className="text-amber-500">*</span></label>
        <input
          type="text"
          required
          placeholder="例：ZT-20260427-3842"
          value={orderNum}
          onChange={(e) => setOrderNum(e.target.value)}
          className={inputClass}
        />
      </div>
      {result === 'notfound' && (
        <p className="text-sm text-red-500">找不到此訂單編號，請確認後再試。</p>
      )}
      <button
        type="submit"
        disabled={result === 'loading'}
        className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-bold rounded-lg transition-colors"
      >
        {result === 'loading' ? '查詢中...' : '查詢出貨狀態'}
      </button>
      <p className="text-xs text-center text-gray-400">目前為展示版，後端串接後將顯示即時狀態</p>
    </form>
  );
}
