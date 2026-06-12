'use client';

import { useState } from 'react';
import { mockQuotes, quoteStatusColor, quoteStatusLabel, type QuoteRequest, type QuoteStatus } from '@/data/admin-mock';

interface QuoteForm {
  unitPrice: string;
  moldFee: string;
  leadTime: string;
  payment: string;
  notes: string;
}

function EmailPreview({ quote, form }: { quote: QuoteRequest; form: QuoteForm }) {
  const total = form.unitPrice
    ? (parseFloat(form.unitPrice) * quote.quantity + (parseFloat(form.moldFee) || 0)).toLocaleString()
    : '—';

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden text-sm">
      {/* Email header */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 space-y-1 text-xs text-gray-500">
        <div className="flex gap-2"><span className="w-10 font-semibold">寄件</span><span>service@zhengtai.com.tw（正台國際）</span></div>
        <div className="flex gap-2"><span className="w-10 font-semibold">收件</span><span className="text-gray-900 font-medium">{quote.email}</span></div>
        <div className="flex gap-2"><span className="w-10 font-semibold">主旨</span><span className="text-gray-900 font-medium">【正台國際】報價單 {quote.id}</span></div>
      </div>
      {/* Email body */}
      <div className="bg-white px-5 py-4 space-y-4 text-gray-700 leading-relaxed">
        <p>親愛的 <span className="font-semibold text-gray-900">{quote.company}</span> 您好，</p>
        <p>感謝您向正台國際詢價，以下是您的報價詳情，請確認後回覆是否接受。</p>

        <div className="bg-gray-50 rounded-lg px-4 py-3 space-y-2 text-sm border border-gray-100">
          <div className="flex justify-between"><span className="text-gray-500">詢價單號</span><span className="font-mono font-semibold text-gray-900">{quote.id}</span></div>
          <div className="flex justify-between"><span className="text-gray-500">產品</span><span className="font-medium text-gray-900">{quote.stickerType} {quote.size}</span></div>
          <div className="flex justify-between"><span className="text-gray-500">數量</span><span className="font-medium text-gray-900">{quote.quantity.toLocaleString()} 張</span></div>
          <div className="border-t border-gray-200 pt-2 mt-2 space-y-1">
            <div className="flex justify-between"><span className="text-gray-500">單價</span><span className="font-medium text-gray-900">NT${form.unitPrice || '—'} / 張</span></div>
            {form.moldFee && <div className="flex justify-between"><span className="text-gray-500">模具費</span><span className="font-medium text-gray-900">NT${parseInt(form.moldFee).toLocaleString()}（一次性）</span></div>}
            <div className="flex justify-between font-semibold"><span>總計</span><span className="text-amber-600">NT${total}</span></div>
          </div>
          {form.payment && <div className="flex justify-between pt-1 border-t border-gray-200 mt-1"><span className="text-gray-500">付款條件</span><span className="font-medium text-gray-900">{form.payment}</span></div>}
          {form.leadTime && <div className="flex justify-between"><span className="text-gray-500">交貨期</span><span className="font-medium text-gray-900">確認訂單後 {form.leadTime} 個工作天</span></div>}
        </div>

        {form.notes && <p className="text-gray-600 text-sm bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">{form.notes}</p>}

        <div className="text-center pt-1">
          <div className="inline-block bg-amber-500 text-white font-bold px-6 py-2.5 rounded-lg text-sm">確認報價，前往 Step 02</div>
          <p className="text-xs text-gray-400 mt-2">此連結將引導您至確認頁面，單號已自動帶入</p>
        </div>

        <p className="text-gray-500 text-xs pt-2 border-t border-gray-100">如有任何問題，請直接回覆此郵件或致電業務窗口。<br />正台國際股份有限公司 · service@zhengtai.com.tw</p>
      </div>
    </div>
  );
}

function SendQuoteModal({ quote, onClose, onSent }: { quote: QuoteRequest; onClose: () => void; onSent: (id: string) => void }) {
  const [step, setStep] = useState<'form' | 'preview' | 'sent'>('form');
  const [form, setForm] = useState<QuoteForm>({ unitPrice: '', moldFee: '', leadTime: '', payment: '', notes: '' });

  function handlePreview(e: React.FormEvent) {
    e.preventDefault();
    setStep('preview');
  }

  function handleSend() {
    setStep('sent');
    setTimeout(() => { onSent(quote.id); onClose(); }, 1400);
  }

  const paymentOptions = ['30 天期票', '下單付50%，出貨付50%', '貨到付款', '預付全額'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full max-w-xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 flex-shrink-0">
          <div>
            <p className="text-xs font-bold text-amber-500 tracking-widest uppercase">Step 02 — 發送報價</p>
            <h2 className="text-lg font-bold text-gray-900 mt-0.5">{quote.company}</h2>
          </div>
          <div className="flex items-center gap-3">
            {step === 'form' && (
              <div className="flex text-xs font-semibold rounded-lg border border-gray-200 overflow-hidden">
                <span className="px-3 py-1.5 bg-amber-500 text-white">填寫報價</span>
                <span className="px-3 py-1.5 text-gray-400">預覽 Email</span>
              </div>
            )}
            {step === 'preview' && (
              <div className="flex text-xs font-semibold rounded-lg border border-gray-200 overflow-hidden">
                <span className="px-3 py-1.5 text-gray-400">填寫報價</span>
                <span className="px-3 py-1.5 bg-amber-500 text-white">預覽 Email</span>
              </div>
            )}
            <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1">
          {step === 'sent' && (
            <div className="px-6 py-12 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="font-bold text-gray-900">報價已發送</p>
              <p className="text-sm text-gray-500 mt-1">Email 已寄至 {quote.email}</p>
            </div>
          )}

          {step === 'form' && (
            <form id="quote-form" onSubmit={handlePreview} className="px-6 py-5 space-y-4">
              <div className="bg-gray-50 rounded-lg px-4 py-3 text-sm space-y-1 text-gray-600">
                <div className="flex justify-between"><span>詢價單號</span><span className="font-mono font-medium text-gray-900">{quote.id}</span></div>
                <div className="flex justify-between"><span>產品</span><span className="font-medium text-gray-900">{quote.stickerType} {quote.size}</span></div>
                <div className="flex justify-between"><span>數量</span><span className="font-medium text-gray-900">{quote.quantity.toLocaleString()} 張</span></div>
                {quote.notes && <div className="flex justify-between"><span>備註</span><span className="font-medium text-gray-900 text-right max-w-48">{quote.notes}</span></div>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">單價（元/張）<span className="text-amber-500">*</span></label>
                  <input type="number" required min={0} step={0.01} placeholder="例：2.50" value={form.unitPrice}
                    onChange={e => setForm(f => ({ ...f, unitPrice: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">模具費（元）</label>
                  <input type="number" min={0} placeholder="例：3000" value={form.moldFee}
                    onChange={e => setForm(f => ({ ...f, moldFee: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-amber-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">交貨期（工作天）<span className="text-amber-500">*</span></label>
                  <input type="number" required min={1} placeholder="例：20" value={form.leadTime}
                    onChange={e => setForm(f => ({ ...f, leadTime: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">付款條件</label>
                  <select value={form.payment} onChange={e => setForm(f => ({ ...f, payment: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 appearance-none bg-white text-gray-900">
                    <option value="">請選擇</option>
                    {paymentOptions.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">備註說明</label>
                <textarea rows={2} placeholder="補充說明、有效期限等..." value={form.notes}
                  onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 resize-none text-gray-900" />
              </div>
            </form>
          )}

          {step === 'preview' && (
            <div className="px-6 py-5">
              <EmailPreview quote={quote} form={form} />
            </div>
          )}
        </div>

        {/* Footer */}
        {step !== 'sent' && (
          <div className="px-6 py-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
            {step === 'form' && (
              <button form="quote-form" type="submit" className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors">
                預覽 Email →
              </button>
            )}
            {step === 'preview' && (
              <>
                <button onClick={() => setStep('form')} className="flex-1 py-3 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-lg transition-colors">
                  ← 返回修改
                </button>
                <button onClick={handleSend} className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors">
                  確認發送
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState(mockQuotes);
  const [sendTarget, setSendTarget] = useState<QuoteRequest | null>(null);

  function handleSent(id: string) {
    setQuotes(prev => prev.map(q => q.id === id ? { ...q, status: 'quoted' as QuoteStatus } : q));
  }

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">詢價管理</h1>
          <p className="text-gray-500 text-sm mt-1">共 {quotes.length} 筆詢價</p>
        </div>
        <div className="flex gap-2">
          {(['pending', 'quoted', 'confirmed', 'rejected'] as QuoteStatus[]).map((s) => (
            <span key={s} className={'text-xs font-semibold px-3 py-1.5 rounded-full border ' + quoteStatusColor[s]}>
              {quoteStatusLabel[s]} {quotes.filter(q => q.status === s).length}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-6 py-3.5 font-semibold text-gray-600">詢價單號</th>
              <th className="text-left px-6 py-3.5 font-semibold text-gray-600">公司</th>
              <th className="text-left px-6 py-3.5 font-semibold text-gray-600">產品</th>
              <th className="text-left px-6 py-3.5 font-semibold text-gray-600">數量</th>
              <th className="text-left px-6 py-3.5 font-semibold text-gray-600">日期</th>
              <th className="text-left px-6 py-3.5 font-semibold text-gray-600">狀態</th>
              <th className="px-6 py-3.5"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {quotes.map((q) => (
              <tr key={q.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-mono text-xs text-gray-500">{q.id}</td>
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{q.company}</p>
                  <p className="text-xs text-gray-400">{q.email}</p>
                </td>
                <td className="px-6 py-4 text-gray-700">{q.stickerType} {q.size}</td>
                <td className="px-6 py-4 text-gray-700">{q.quantity.toLocaleString()} 張</td>
                <td className="px-6 py-4 text-gray-500">{q.createdAt}</td>
                <td className="px-6 py-4">
                  <span className={'text-xs font-semibold px-2.5 py-1 rounded-full ' + quoteStatusColor[q.status]}>
                    {quoteStatusLabel[q.status]}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {q.status === 'pending' && (
                    <button onClick={() => setSendTarget(q)}
                      className="text-xs font-semibold text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap">
                      發送報價
                    </button>
                  )}
                  {q.notes && <p className="text-xs text-gray-400 mt-1 max-w-32 truncate" title={q.notes}>{q.notes}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sendTarget && <SendQuoteModal quote={sendTarget} onClose={() => setSendTarget(null)} onSent={handleSent} />}
    </div>
  );
}
