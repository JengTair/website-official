'use client';

import { useState, useMemo } from 'react';
import { mockOrders, stepLabels, stepStatusColor, stepStatusLabel, type Order, type OrderStep, type OrderStepStatus } from '@/data/admin-mock';

interface ProofForm { fileName: string; message: string; deadline: string; }

function ProofEmailPreview({ order, form }: { order: Order; form: ProofForm }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden text-sm">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 space-y-1 text-xs text-gray-500">
        <div className="flex gap-2"><span className="w-10 font-semibold">寄件</span><span>service@zhengtai.com.tw（正台國際）</span></div>
        <div className="flex gap-2"><span className="w-10 font-semibold">收件</span><span className="text-gray-900 font-medium">{order.email}</span></div>
        <div className="flex gap-2"><span className="w-10 font-semibold">主旨</span><span className="text-gray-900 font-medium">【正台國際】打樣稿確認通知 - {order.id}</span></div>
      </div>
      <div className="bg-white px-5 py-4 space-y-4 text-gray-700 leading-relaxed">
        <p>親愛的 <span className="font-semibold text-gray-900">{order.company}</span> 您好，</p>
        <p>您的訂單打樣稿已完成，請確認後回覆是否通過。</p>

        <div className="bg-gray-50 rounded-lg px-4 py-3 space-y-2 text-sm border border-gray-100">
          <div className="flex justify-between"><span className="text-gray-500">訂單編號</span><span className="font-mono font-semibold text-gray-900">{order.id}</span></div>
          <div className="flex justify-between"><span className="text-gray-500">產品</span><span className="font-medium text-gray-900">{order.stickerType} · {order.quantity.toLocaleString()} 張</span></div>
          {form.fileName && (
            <div className="flex justify-between items-center pt-1 border-t border-gray-200 mt-1">
              <span className="text-gray-500">附件</span>
              <span className="font-medium text-blue-600 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                {form.fileName}
              </span>
            </div>
          )}
          {form.deadline && <div className="flex justify-between"><span className="text-gray-500">確認截止</span><span className="font-semibold text-red-600">{form.deadline}</span></div>}
        </div>

        {form.message && <p className="text-gray-600 text-sm bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">{form.message}</p>}

        <div className="flex gap-3 pt-1">
          <div className="flex-1 text-center bg-amber-500 text-white font-bold px-4 py-2.5 rounded-lg text-sm">通過打樣，前往 Step 04</div>
          <div className="flex-1 text-center border border-gray-300 text-gray-700 font-bold px-4 py-2.5 rounded-lg text-sm">需要修改</div>
        </div>

        <p className="text-gray-500 text-xs pt-2 border-t border-gray-100">如有任何問題，請直接回覆此郵件或致電業務窗口。<br />正台國際股份有限公司 · service@zhengtai.com.tw</p>
      </div>
    </div>
  );
}

function UploadProofModal({ order, onClose, onSent }: { order: Order; onClose: () => void; onSent: (id: string) => void }) {
  const [modalStep, setModalStep] = useState<'form' | 'preview' | 'sent'>('form');
  const [form, setForm] = useState<ProofForm>({ fileName: '', message: '', deadline: '' });

  function handlePreview(e: React.FormEvent) {
    e.preventDefault();
    setModalStep('preview');
  }

  function handleSend() {
    setModalStep('sent');
    setTimeout(() => { onSent(order.id); onClose(); }, 1400);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full max-w-xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 flex-shrink-0">
          <div>
            <p className="text-xs font-bold text-amber-500 tracking-widest uppercase">Step 03 — 上傳打樣稿</p>
            <h2 className="text-lg font-bold text-gray-900 mt-0.5">{order.company}</h2>
          </div>
          <div className="flex items-center gap-3">
            {modalStep !== 'sent' && (
              <div className="flex text-xs font-semibold rounded-lg border border-gray-200 overflow-hidden">
                <span className={'px-3 py-1.5 ' + (modalStep === 'form' ? 'bg-amber-500 text-white' : 'text-gray-400')}>填寫資料</span>
                <span className={'px-3 py-1.5 ' + (modalStep === 'preview' ? 'bg-amber-500 text-white' : 'text-gray-400')}>預覽 Email</span>
              </div>
            )}
            <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1">
          {modalStep === 'sent' && (
            <div className="px-6 py-12 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="font-bold text-gray-900">打樣稿已發送</p>
              <p className="text-sm text-gray-500 mt-1">確認通知已寄至 {order.email}</p>
            </div>
          )}

          {modalStep === 'form' && (
            <form id="proof-form" onSubmit={handlePreview} className="px-6 py-5 space-y-4">
              <div className="bg-gray-50 rounded-lg px-4 py-3 text-sm space-y-1 text-gray-600">
                <div className="flex justify-between"><span>訂單編號</span><span className="font-mono font-medium text-gray-900">{order.id}</span></div>
                <div className="flex justify-between"><span>產品</span><span className="font-medium text-gray-900">{order.stickerType} · {order.quantity.toLocaleString()} 張</span></div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">打樣稿檔案 <span className="text-amber-500">*</span></label>
                <label className="flex items-center gap-3 w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span className={'text-sm ' + (form.fileName ? 'text-gray-900' : 'text-gray-400')}>
                    {form.fileName || '上傳 PDF / AI / JPG 打樣稿'}
                  </span>
                  <input type="file" required accept=".pdf,.ai,.jpg,.jpeg,.png" className="hidden"
                    onChange={e => setForm(f => ({ ...f, fileName: e.target.files?.[0]?.name ?? '' }))} />
                </label>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">給客戶的說明</label>
                <textarea rows={3} placeholder="例：打樣稿已完成，請確認色彩與版面，如有需要修改請於 3 個工作天內回覆..."
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 resize-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">確認截止日期</label>
                <input type="date" value={form.deadline}
                  onChange={e => setForm(f => ({ ...f, deadline: e.target.value }))}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500" />
              </div>
            </form>
          )}

          {modalStep === 'preview' && (
            <div className="px-6 py-5">
              <ProofEmailPreview order={order} form={form} />
            </div>
          )}
        </div>

        {modalStep !== 'sent' && (
          <div className="px-6 py-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
            {modalStep === 'form' && (
              <button form="proof-form" type="submit" className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors">
                預覽 Email →
              </button>
            )}
            {modalStep === 'preview' && (
              <>
                <button onClick={() => setModalStep('form')} className="flex-1 py-3 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-lg transition-colors">
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

function ResendNoticeModal({ order, onClose }: { order: Order; onClose: () => void }) {
  const [sent, setSent] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <p className="text-xs font-bold text-amber-500 tracking-widest uppercase">重發確認通知</p>
            <h2 className="text-lg font-bold text-gray-900 mt-0.5">{order.company}</h2>
          </div>
          <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="px-6 py-5">
          {sent ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="font-bold text-gray-900">通知已重新發送</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-700">
                Step {order.step} 正在等待客戶確認，將重新寄送提醒 Email 至<span className="font-semibold"> {order.email}</span>。
              </div>
              <div className="flex gap-3">
                <button onClick={onClose} className="flex-1 py-2.5 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-lg transition-colors text-sm">
                  取消
                </button>
                <button
                  onClick={() => setSent(true)}
                  className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors text-sm"
                >
                  確認重發
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function exportCSV(orders: Order[]) {
  const headers = ['訂單編號', '公司', 'Email', '產品', '數量', '步驟', '狀態', '建立日期', '預計出貨', '地址'];
  const rows = orders.map(o => [
    o.id, o.company, o.email, o.stickerType, o.quantity,
    `Step ${o.step} ${stepLabels[o.step]}`, stepStatusLabel[o.stepStatus],
    o.createdAt, o.estimatedDate, o.address,
  ]);
  const csv = [headers, ...rows].map(r => r.map(v => `"${v}"`).join(',')).join('\n');
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `orders-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function OrdersPage() {
  const [orders, setOrders] = useState(mockOrders);
  const [uploadTarget, setUploadTarget] = useState<Order | null>(null);
  const [resendTarget, setResendTarget] = useState<Order | null>(null);
  const [search, setSearch] = useState('');
  const [filterStep, setFilterStep] = useState<OrderStep | 0>(0);
  const [filterStatus, setFilterStatus] = useState<OrderStepStatus | ''>('');

  function handleProofSent(id: string) {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, stepStatus: 'waiting_customer' as OrderStepStatus } : o));
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return orders.filter(o => {
      if (q && !o.id.toLowerCase().includes(q) && !o.company.toLowerCase().includes(q)) return false;
      if (filterStep && o.step !== filterStep) return false;
      if (filterStatus && o.stepStatus !== filterStatus) return false;
      return true;
    });
  }, [orders, search, filterStep, filterStatus]);

  const activeSteps = (filterStep ? [filterStep] : [2, 3, 4, 5]) as OrderStep[];

  return (
    <div className="p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">訂單管理</h1>
          <p className="text-gray-500 text-sm mt-1">
            {filtered.length === orders.length
              ? `共 ${orders.length} 筆進行中訂單`
              : `顯示 ${filtered.length} / ${orders.length} 筆`}
          </p>
        </div>
        <button
          onClick={() => exportCSV(filtered)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 rounded-lg transition-colors flex-shrink-0"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          匯出 CSV
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 mb-6 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-48">
          <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="搜尋公司名稱或訂單編號..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-xs text-gray-400 mr-1">步驟</span>
          {([0, 2, 3, 4, 5] as (OrderStep | 0)[]).map(s => (
            <button
              key={s}
              onClick={() => setFilterStep(s)}
              className={
                'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ' +
                (filterStep === s ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200')
              }
            >
              {s === 0 ? '全部' : `Step ${String(s).padStart(2, '0')}`}
            </button>
          ))}
        </div>

        <select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value as OrderStepStatus | '')}
          className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500 text-gray-600 flex-shrink-0"
        >
          <option value="">所有狀態</option>
          <option value="in_progress">進行中</option>
          <option value="waiting_customer">待客戶確認</option>
          <option value="completed">已完成</option>
        </select>

        {(search || filterStep !== 0 || filterStatus) && (
          <button
            onClick={() => { setSearch(''); setFilterStep(0); setFilterStatus(''); }}
            className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 flex-shrink-0"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            清除篩選
          </button>
        )}
      </div>

      {filtered.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 py-12 text-center text-gray-400 text-sm">
          無符合條件的訂單
        </div>
      )}

      {activeSteps.map((step) => {
        const stepOrders = filtered.filter(o => o.step === step);
        if (stepOrders.length === 0) return null;
        return (
          <div key={step} className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                {String(step).padStart(2, '0')}
              </span>
              <h2 className="font-bold text-gray-700">{stepLabels[step]}</h2>
              <span className="text-xs text-gray-400 ml-1">{stepOrders.length} 筆</span>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">訂單編號</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">公司</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">產品</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">預計出貨</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">狀態</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {stepOrders.map((o) => (
                    <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-gray-500">{o.id}</td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900">{o.company}</p>
                        <p className="text-xs text-gray-400">{o.email}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{o.stickerType} · {o.quantity.toLocaleString()} 張</td>
                      <td className="px-6 py-4 text-gray-700">{o.estimatedDate}</td>
                      <td className="px-6 py-4">
                        <span className={'text-xs font-semibold px-2.5 py-1 rounded-full ' + stepStatusColor[o.stepStatus]}>
                          {stepStatusLabel[o.stepStatus]}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-2 items-center">
                        {step === 3 && o.stepStatus === 'in_progress' && (
                          <button
                            onClick={() => setUploadTarget(o)}
                            className="text-xs font-semibold text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                          >
                            上傳打樣稿
                          </button>
                        )}
                        {o.stepStatus === 'waiting_customer' && (
                          <button
                            onClick={() => setResendTarget(o)}
                            className="text-xs font-semibold text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                          >
                            重發通知
                          </button>
                        )}
                        {step !== 3 && o.stepStatus === 'in_progress' && (
                          <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap">
                            更新進度
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      {uploadTarget && (
        <UploadProofModal
          order={uploadTarget}
          onClose={() => setUploadTarget(null)}
          onSent={handleProofSent}
        />
      )}
      {resendTarget && (
        <ResendNoticeModal
          order={resendTarget}
          onClose={() => setResendTarget(null)}
        />
      )}
    </div>
  );
}
