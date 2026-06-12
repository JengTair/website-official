import { mockQuotes, mockOrders, stepLabels, stepStatusColor, stepStatusLabel } from '@/data/admin-mock';

const stats = [
  { label: '待報價', value: mockQuotes.filter(q => q.status === 'pending').length, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
  { label: '已報價', value: mockQuotes.filter(q => q.status === 'quoted').length, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  { label: '生產中訂單', value: mockOrders.filter(o => o.step === 4).length, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
  { label: '待出貨', value: mockOrders.filter(o => o.step === 5).length, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">儀表板</h1>
        <p className="text-gray-500 text-sm mt-1">2026年4月27日</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className={'rounded-xl border p-5 ' + s.bg + ' ' + s.border}>
            <p className="text-sm text-gray-500 mb-1">{s.label}</p>
            <p className={'text-3xl font-bold ' + s.color}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 最新詢價 */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">最新詢價</h2>
            <a href="/admin/quotes" className="text-sm text-amber-600 hover:text-amber-700 font-medium">查看全部</a>
          </div>
          <div className="divide-y divide-gray-50">
            {mockQuotes.slice(0, 4).map((q) => (
              <div key={q.id} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{q.company}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{q.id} · {q.stickerType} {q.quantity.toLocaleString()} 張</p>
                </div>
                <span className={'text-xs font-semibold px-2.5 py-1 rounded-full ' +
                  (q.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                   q.status === 'quoted' ? 'bg-blue-100 text-blue-700' :
                   q.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500')}>
                  {q.status === 'pending' ? '待報價' : q.status === 'quoted' ? '已報價' : q.status === 'confirmed' ? '已確認' : '已拒絕'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 進行中訂單 */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">進行中訂單</h2>
            <a href="/admin/orders" className="text-sm text-amber-600 hover:text-amber-700 font-medium">查看全部</a>
          </div>
          <div className="divide-y divide-gray-50">
            {mockOrders.map((o) => (
              <div key={o.id} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{o.company}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{o.id} · Step {o.step} {stepLabels[o.step]}</p>
                </div>
                <span className={'text-xs font-semibold px-2.5 py-1 rounded-full ' + stepStatusColor[o.stepStatus]}>
                  {stepStatusLabel[o.stepStatus]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
