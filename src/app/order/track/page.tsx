'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import homepageData from '@/data/homepage.json';
import { mockOrders, stepLabels, type Order, type OrderStep } from '@/data/admin-mock';

export default function OrderTrackPage() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Order | null | 'not-found'>(null);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    const found = mockOrders.find(
      o => o.id.toLowerCase() === q || o.email.toLowerCase() === q
    );
    setResult(found ?? 'not-found');
  }

  return (
    <>
      <Navigation items={homepageData.navigation} />
      <main className="min-h-screen bg-gray-50 pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">訂單狀態查詢</h1>
            <p className="text-gray-500 mt-2 text-sm">輸入訂單編號或聯絡 Email，即可查詢最新進度</p>
          </div>

          <form onSubmit={handleSearch} className="flex gap-2 mb-8">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="ZT-20260410-5521 或 your@email.com"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 bg-white shadow-sm"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors text-sm whitespace-nowrap"
            >
              查詢
            </button>
          </form>

          {result === 'not-found' && (
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900">查無此訂單</p>
              <p className="text-sm text-gray-500 mt-1">請確認訂單編號或 Email 是否正確</p>
            </div>
          )}

          {result && result !== 'not-found' && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100 flex items-start justify-between">
                <div>
                  <p className="font-mono text-xs text-gray-400 mb-1">{result.id}</p>
                  <h2 className="text-lg font-bold text-gray-900">{result.company}</h2>
                  <p className="text-sm text-gray-500 mt-0.5">{result.stickerType}・{result.quantity.toLocaleString()} 張</p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <p className="text-xs text-gray-400">預計出貨日</p>
                  <p className="font-semibold text-gray-900 mt-0.5">{result.estimatedDate}</p>
                </div>
              </div>

              <div className="px-6 pt-8 pb-6">
                <div className="relative">
                  <div className="absolute top-5 left-[10%] right-[10%] h-0.5 bg-gray-200" />
                  <div
                    className="absolute top-5 left-[10%] h-0.5 bg-amber-500 transition-all"
                    style={{ width: `${((result.step - 1) / 4) * 80}%` }}
                  />
                  <div className="relative flex justify-between">
                    {([1, 2, 3, 4, 5] as OrderStep[]).map(step => {
                      const isDone = step < result.step;
                      const isCurrent = step === (result as Order).step;
                      return (
                        <div key={step} className="flex flex-col items-center gap-2.5" style={{ width: '20%' }}>
                          <div className={
                            'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ' +
                            (isDone ? 'bg-amber-500 text-white' :
                              isCurrent ? 'bg-amber-500 text-white ring-4 ring-amber-100' :
                                'bg-gray-100 text-gray-400')
                          }>
                            {isDone ? (
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : step}
                          </div>
                          <span className={
                            'text-xs text-center leading-tight ' +
                            (isCurrent ? 'font-bold text-amber-600' : isDone ? 'text-gray-500' : 'text-gray-300')
                          }>
                            {stepLabels[step]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className={
                  'rounded-xl px-4 py-3 text-sm border ' +
                  (result.stepStatus === 'waiting_customer'
                    ? 'bg-amber-50 border-amber-200'
                    : 'bg-blue-50 border-blue-100')
                }>
                  <p className={'font-semibold ' + (result.stepStatus === 'waiting_customer' ? 'text-amber-700' : 'text-blue-700')}>
                    目前階段：{stepLabels[result.step]}
                  </p>
                  <p className={'mt-0.5 ' + (result.stepStatus === 'waiting_customer' ? 'text-amber-600' : 'text-blue-600')}>
                    {result.stepStatus === 'waiting_customer'
                      ? '正在等待您的確認，請查收 Email 並儘快回覆。'
                      : '我們正在積極處理您的訂單，如有疑問請聯絡業務窗口。'}
                  </p>
                </div>
              </div>
            </div>
          )}

          <p className="text-center text-sm text-gray-400 mt-8">
            找不到訂單或需要協助？請聯絡
            <a href="mailto:service@zhengtai.com.tw" className="text-amber-600 hover:underline ml-1">
              service@zhengtai.com.tw
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
