'use client';

import { useState } from 'react';

const stickerTypes = [
  '防水貼紙',
  '透明貼紙',
  '燙金貼紙',
  '反光貼紙',
  '鐳射貼紙',
  '其他',
];

export default function QuoteForm() {
  const [fileName, setFileName] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : '');
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">已收到您的需求</h3>
        <p className="text-gray-600">我們將於 1 個工作天內以 Email 回覆您的報價。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 公司名稱 */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          公司名稱 <span className="text-amber-500">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="例：XX 有限公司"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          聯絡 Email <span className="text-amber-500">*</span>
        </label>
        <input
          type="email"
          required
          placeholder="example@company.com"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
        />
      </div>

      {/* 貼紙類型 */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          貼紙類型 <span className="text-amber-500">*</span>
        </label>
        <select
          required
          defaultValue=""
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition appearance-none bg-white"
        >
          <option value="" disabled>請選擇貼紙類型</option>
          {stickerTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* 設計檔上傳 */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          設計檔案 <span className="text-gray-400 font-normal text-xs ml-1">（AI / PDF / JPG，最大 20MB）</span>
        </label>
        <label className="flex items-center gap-3 w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition group">
          <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <span className={`text-sm ${fileName ? 'text-gray-900' : 'text-gray-400'}`}>
            {fileName || '點擊上傳或拖曳檔案至此'}
          </span>
          <input
            type="file"
            accept=".ai,.pdf,.jpg,.jpeg,.png,.eps"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {/* 備註 */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          其他說明 <span className="text-gray-400 font-normal text-xs ml-1">（選填）</span>
        </label>
        <textarea
          rows={4}
          placeholder="請描述您的需求，例如：尺寸、數量、特殊材質要求..."
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors duration-200 text-lg"
      >
        送出需求
      </button>
    </form>
  );
}
