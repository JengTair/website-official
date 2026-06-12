'use client';

import { useState } from 'react';
import { mockCustomers, type Customer } from '@/data/admin-mock';

function CustomerDetailModal({ customer, onClose }: { customer: Customer; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <p className="text-xs font-bold text-amber-500 tracking-widest uppercase">{customer.id}</p>
            <h2 className="text-lg font-bold text-gray-900 mt-0.5">{customer.company}</h2>
          </div>
          <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="px-6 py-5 space-y-5">
          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">聯絡資訊</h3>
            <div className="space-y-2.5">
              {[
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: customer.email },
                { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: customer.phone },
                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: customer.address },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="text-sm text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 業務數據 */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">業務數據</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">{customer.totalQuotes}</p>
                <p className="text-xs text-gray-500 mt-0.5">詢價次數</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">{customer.totalOrders}</p>
                <p className="text-xs text-gray-500 mt-0.5">成交訂單</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-100">
                <p className="text-2xl font-bold text-amber-600">
                  {customer.totalAmount >= 1000 ? `${(customer.totalAmount / 1000).toFixed(0)}K` : customer.totalAmount}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">累積金額</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <a href={`mailto:${customer.email}`}
              className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors text-sm text-center">
              發送 Email
            </a>
            <button className="flex-1 py-2.5 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-lg transition-colors text-sm">
              查看訂單紀錄
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CustomersPage() {
  const [customers] = useState(mockCustomers);
  const [selected, setSelected] = useState<Customer | null>(null);
  const [search, setSearch] = useState('');

  const filtered = customers.filter(c =>
    c.company.includes(search) || c.email.includes(search) || c.industry.includes(search)
  );

  const totalAmount = customers.reduce((sum, c) => sum + c.totalAmount, 0);

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">客戶管理</h1>
          <p className="text-gray-500 text-sm mt-1">共 {customers.length} 位客戶，累積金額 NT${totalAmount.toLocaleString()}</p>
        </div>
        <div className="relative">
          <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="搜尋公司、Email、產業..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-amber-500 w-64"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-6 py-3.5 font-semibold text-gray-600">公司</th>
              <th className="text-left px-6 py-3.5 font-semibold text-gray-600">產業</th>
              <th className="text-left px-6 py-3.5 font-semibold text-gray-600">聯絡人</th>
              <th className="text-center px-6 py-3.5 font-semibold text-gray-600">詢價</th>
              <th className="text-center px-6 py-3.5 font-semibold text-gray-600">訂單</th>
              <th className="text-right px-6 py-3.5 font-semibold text-gray-600">累積金額</th>
              <th className="text-left px-6 py-3.5 font-semibold text-gray-600">最後往來</th>
              <th className="text-left px-6 py-3.5 font-semibold text-gray-600">狀態</th>
              <th className="px-6 py-3.5"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{c.company}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{c.id}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">{c.industry}</span>
                </td>
                <td className="px-6 py-4 text-gray-600">{c.email}</td>
                <td className="px-6 py-4 text-center font-semibold text-gray-900">{c.totalQuotes}</td>
                <td className="px-6 py-4 text-center font-semibold text-gray-900">{c.totalOrders}</td>
                <td className="px-6 py-4 text-right font-semibold text-gray-900">
                  {c.totalAmount > 0 ? `NT$${c.totalAmount.toLocaleString()}` : '—'}
                </td>
                <td className="px-6 py-4 text-gray-500">{c.lastActivity}</td>
                <td className="px-6 py-4">
                  <span className={'text-xs font-semibold px-2.5 py-1 rounded-full ' + (c.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500')}>
                    {c.status === 'active' ? '往來中' : '沉睡'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => setSelected(c)}
                    className="text-xs font-semibold text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg transition-colors">
                    查看
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">沒有符合的客戶</div>
        )}
      </div>

      {selected && <CustomerDetailModal customer={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
