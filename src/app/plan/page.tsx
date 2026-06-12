import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import homepageData from '@/data/homepage.json';

export const metadata: Metadata = {
  title: 'PrintFlow AI 規劃書 | 正台國際',
  description: 'PrintFlow AI — AI 驅動的自助印刷平台完整規劃書，12週建立軟包裝數位印刷新事業群。',
};

const iterations = [
  {
    num: '01',
    weeks: '第 1–2 週',
    title: '報價工具 + 業務調研',
    desc: '建出 AI 報價計算器，深入理解報價邏輯，用 3 個實際訂單驗證準確度。',
    items: ['AI 報價計算器', '材質 / 工藝費用規則引擎', '報價邏輯工作坊（銷售 + 財務）', '驗收：10 筆訂單準確率 100%'],
  },
  {
    num: '02',
    weeks: '第 3–4 週',
    title: '設計審核 + 訂單基礎',
    desc: '建出設計稿自動審核工具，連接訂單系統，Line 官方帳號上線。',
    items: ['設計稿自動審核（DPI / 色彩 / 出血）', '訂單管理後台', 'Line 官方帳號基本版', '驗收：審核準確度 ≥ 95%'],
  },
  {
    num: '03',
    weeks: '第 5–8 週',
    title: '訂單管理深化 + 數據積累',
    desc: '系統進入日常運營，累積 50+ 真實訂單，為 AI 訓練建立數據基礎。',
    items: ['訂單歷史查詢 + 快速重複下單', '批量訂單管理', '成本分析看板（初版）', '驗收：50 筆訂單完整生命週期'],
  },
  {
    num: '04',
    weeks: '第 9–12 週',
    title: 'AI 升級 + 智能優化',
    desc: '用 100+ 筆訂單數據訓練 ML 模型，推薦引擎上線，多渠道廣告全面啟動。',
    items: ['ML 報價模型（準確率 ≥ 97%）', '推薦引擎（交叉銷售）', 'Google + Facebook 廣告投放', '驗收：推薦引擎轉化率 ≥ 15%'],
  },
];

const plans = [
  {
    name: '快速驗證版',
    budget: 'NT$350,000',
    weeks: '8 週',
    coverage: '60%',
    orders: '30–50 筆',
    revenue: 'NT$150–250K',
    features: ['迭代 1–2（報價 + 審核）', 'Line + Facebook 社團引流', '快速驗證市場'],
    cons: ['功能較簡單', '難以長期留客'],
    highlight: false,
  },
  {
    name: '完整版',
    budget: 'NT$462,400',
    weeks: '12 週',
    coverage: '100%',
    orders: '150 筆',
    revenue: 'NT$750,000',
    features: ['迭代 1–4 全部實現', '5 大引流渠道（Line / FB / IG / LinkedIn / Google 廣告）', 'AI 報價 + 推薦引擎', '12 週成本收回率 91%'],
    cons: ['投資規模較大', '需深度配合 12 週'],
    highlight: true,
  },
  {
    name: '精簡版',
    budget: 'NT$380,000',
    weeks: '10 週',
    coverage: '80%',
    orders: '80–100 筆',
    revenue: 'NT$400–500K',
    features: ['迭代 1–3 完整', '迭代 4 只做推薦，不做 ML', 'Line + FB + Instagram 引流'],
    cons: ['功能不如完整版', '後續仍需補投'],
    highlight: false,
  },
];

const channels = [
  { name: 'Line 官方帳號', priority: '必做', timing: '迭代 2', color: 'bg-green-500' },
  { name: 'Facebook 設計師社團', priority: '必做', timing: '迭代 2', color: 'bg-green-500' },
  { name: 'Instagram', priority: '重要', timing: '迭代 3', color: 'bg-amber-500' },
  { name: 'LinkedIn B2B', priority: '重要', timing: '迭代 3', color: 'bg-amber-500' },
  { name: 'Google + Facebook 廣告', priority: '重要', timing: '迭代 4', color: 'bg-amber-500' },
];

export default function PlanPage() {
  return (
    <>
      <Navigation items={homepageData.navigation} />

      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="w-full bg-gray-900 text-white py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 text-center">
            <span className="inline-block text-xs font-bold text-amber-400 tracking-widest uppercase mb-4">新事業群規劃書</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">PrintFlow AI</h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              AI 驅動的自助印刷平台 — 讓台灣設計師和中小製造商快速、透明、自動化地下單
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: '規劃週期', value: '12 週' },
                { label: '預期投資', value: 'NT$462K' },
                { label: '第12週營業額', value: 'NT$750K' },
                { label: '成本收回', value: '第 20 週' },
              ].map((s) => (
                <div key={s.label} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                  <p className="text-xl font-bold text-amber-400">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 目標客群 */}
        <section className="w-full py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold text-amber-500 tracking-widest uppercase mb-2">目標客群</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">兩大核心客群</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: '設計師 & 品牌方',
                  badge: '客群 1',
                  pain: ['報價慢：等 1–2 天才有回覆', '修改多：打樣往返 3–5 次', '溝通煩：電話 + 郵件 + LINE 資訊散亂'],
                  value: ['秒出報價，對比 3 個替代方案', '上傳設計 1 小時內自動審核', 'Line 實時推送訂單進度'],
                  order: '500–2,000 件',
                },
                {
                  title: '中小製造商 & 電商',
                  badge: '客群 2',
                  pain: ['採購流程複雜，每次都要多方溝通', '無法準確預估月度成本', '重複訂單沒有優惠'],
                  value: ['自助批量報價（一次報 10+ 個訂單）', '成本分析看板（預測月度支出）', 'API 接入自己的 ERP / 購物網'],
                  order: '1,000–5,000 件/月',
                },
              ].map((g) => (
                <div key={g.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-bold text-amber-600 bg-amber-100 rounded-full px-3 py-1">{g.badge}</span>
                    <h3 className="font-bold text-gray-900 text-lg">{g.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">訂單規模</p>
                  <p className="text-sm text-gray-600 mb-5">{g.order}</p>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">主要痛點</p>
                  <ul className="space-y-1.5 mb-5">
                    {g.pain.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>{p}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">我們提供的價值</p>
                  <ul className="space-y-1.5">
                    {g.value.map((v) => (
                      <li key={v} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>{v}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 個迭代 */}
        <section className="w-full py-16 md:py-20 bg-gray-900">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold text-amber-400 tracking-widest uppercase mb-2">教練式開發</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">4 個迭代 · 12 週交付</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {iterations.map((it) => (
                <div key={it.num} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl font-bold text-amber-500/40 leading-none">{it.num}</span>
                    <span className="text-xs text-gray-400 bg-gray-700 rounded-full px-3 py-1">{it.weeks}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{it.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{it.desc}</p>
                  <ul className="space-y-1.5">
                    {it.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-amber-500 mt-0.5 flex-shrink-0">·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 引流策略 */}
        <section className="w-full py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold text-amber-500 tracking-widest uppercase mb-2">引流策略</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">多渠道聯動引流</h2>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto mb-10">
              {channels.map((c) => (
                <div key={c.name} className="flex items-center gap-4 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
                  <div className={`w-2 h-8 rounded-full flex-shrink-0 ${c.color}`} />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                    <p className="text-xs text-gray-400">啟動時機：{c.timing}</p>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.color === 'bg-green-500' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {c.priority}
                  </span>
                </div>
              ))}
            </div>

            {/* 漏斗 */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-center font-bold text-gray-900 mb-6">第 12 週引流漏斗目標</h3>
              <div className="space-y-3">
                {[
                  { label: '認知層（Top of Funnel）', value: '1,000+ 人認識 PrintFlow', width: 'w-full', bg: 'bg-gray-100', text: 'text-gray-700' },
                  { label: '參與層（Middle）', value: '300+ 人試用', width: 'w-4/5 mx-auto', bg: 'bg-amber-100', text: 'text-amber-800' },
                  { label: '轉化層（Bottom）', value: '150+ 付費訂單 / NT$750K', width: 'w-3/5 mx-auto', bg: 'bg-amber-500', text: 'text-white' },
                ].map((f) => (
                  <div key={f.label} className={`${f.width} ${f.bg} rounded-xl px-5 py-3 text-center`}>
                    <p className={`text-xs font-semibold ${f.text} mb-0.5`}>{f.label}</p>
                    <p className={`text-sm font-bold ${f.text}`}>{f.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 三個方案 */}
        <section className="w-full py-16 md:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold text-amber-500 tracking-widest uppercase mb-2">給客戶的選擇</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">三個方案，選擇最適合的節奏</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 flex flex-col relative ${
                    plan.highlight
                      ? 'bg-gray-900 border-2 border-amber-500 text-white'
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full">推薦</span>
                  )}
                  <h3 className={`font-bold text-lg mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                  <p className={`text-3xl font-bold mb-1 ${plan.highlight ? 'text-amber-400' : 'text-gray-900'}`}>{plan.budget}</p>
                  <p className={`text-sm mb-5 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.weeks}完成</p>

                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {[
                      { label: '功能完整度', value: plan.coverage },
                      { label: '預期訂單', value: plan.orders },
                      { label: '預期營業額', value: plan.revenue },
                    ].map((m) => (
                      <div key={m.label} className={`rounded-lg p-2 ${plan.highlight ? 'bg-gray-800' : 'bg-gray-50'}`}>
                        <p className={`text-xs mb-0.5 ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>{m.label}</p>
                        <p className={`text-sm font-bold ${plan.highlight ? 'text-amber-300' : 'text-gray-800'}`}>{m.value}</p>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-1.5 mb-4 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>{f}
                      </li>
                    ))}
                    {plan.cons.map((c) => (
                      <li key={c} className={`flex items-start gap-2 text-sm ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>
                        <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 風險表 */}
        <section className="w-full py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold text-amber-500 tracking-widest uppercase mb-2">風險管理</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">已識別風險與應急方案</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase">風險</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase">可能性</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase">影響</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase">應急方案</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { risk: '報價邏輯複雜', prob: '30%', impact: '中', action: '先用簡化版上線，後優化' },
                    { risk: 'AI 審核不準', prob: '40%', impact: '中', action: '提供人工二審選項' },
                    { risk: '客戶配合度低', prob: '35%', impact: '高', action: '簽署 SLA，提供遠端支持' },
                    { risk: '引流效果差', prob: '45%', impact: '中', action: '加大社團投入；邀請現有客戶推薦' },
                    { risk: '資金流緊張', prob: '30%', impact: '高', action: '分期支付；減少前期廣告預算' },
                    { risk: '競爭對手出現', prob: '15%', impact: '中', action: '加速進行；強調本地支持差異化' },
                  ].map((r, i) => (
                    <tr key={r.risk} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 font-medium text-gray-900">{r.risk}</td>
                      <td className="py-3 px-4 text-gray-500">{r.prob}</td>
                      <td className="py-3 px-4">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${r.impact === '高' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`}>
                          {r.impact}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{r.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 md:py-20 bg-amber-500">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">準備好啟動 PrintFlow AI 了嗎？</h2>
            <p className="text-amber-100 mb-8 text-lg max-w-xl mx-auto">確認方案後，第一週即可啟動報價邏輯工作坊，12 週建立完整競爭力</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${homepageData.companyInfo.email}`}
                className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors"
              >
                聯繫我們討論方案
              </a>
              <a
                href="/quote"
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold rounded-lg transition-colors"
              >
                試用詢價流程
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-950 text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 text-center text-sm">
          <p>© {new Date().getFullYear()} {homepageData.companyInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
