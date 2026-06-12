import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import QuoteForm from '@/components/QuoteForm';
import QuoteSteps from '@/components/QuoteSteps';
import homepageData from '@/data/homepage.json';

export const metadata: Metadata = {
  title: '訂單流程 | 正台國際',
  description: '了解正台國際的訂單流程，從需求填寫到產品交付，全程專業服務。',
};


const faqs = [
  {
    q: '最低訂購數量是多少？',
    a: '依產品類型不同，最低訂購量約 500～1,000 張起，歡迎來信詢問。',
  },
  {
    q: '交貨期需要多久？',
    a: '一般訂單約 15～25 個工作天，急單可依需求加急處理，請洽業務確認。',
  },
  {
    q: '可以提供樣品嗎？',
    a: '可提供現有材質與印刷樣品，客製化打樣需收取樣品費，正式下單後可折抵。',
  },
  {
    q: '支援哪些設計格式？',
    a: '接受 AI、EPS、PDF 向量格式，解析度需 300dpi 以上。',
  },
];

export default function QuotePage() {
  return (
    <>
      <Navigation items={homepageData.navigation} />

      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="w-full bg-gray-900 text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">訂單流程</h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              從需求提交到產品交付，我們提供透明、專業的全程服務
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
            <QuoteSteps />
          </div>
        </section>

        {/* Step 02 不同意方案討論 */}
        <section className="w-full py-16 md:py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold text-amber-500 tracking-widest uppercase mb-2">Step 02 設計討論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">當客戶不同意報價時，系統怎麼做？</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">以下三種方案供評估，確認方向後即可實作</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 方案 A */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 font-bold text-sm flex items-center justify-center flex-shrink-0">A</span>
                  <h3 className="font-bold text-gray-900">通知業務跟進</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  客戶選「需要再討論」後直接送出，系統標記此詢價為「待討論」狀態，並自動發 Email 通知業務主動聯繫客戶。
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600">客戶操作最簡單，無需額外填寫</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600">業務主導後續溝通</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-gray-600">業務聯繫前不知道客戶的具體疑慮</span>
                  </div>
                </div>
                <span className="inline-block text-xs font-semibold text-gray-400 border border-gray-200 rounded-full px-3 py-1 w-fit">待確認</span>
              </div>

              {/* 方案 B */}
              <div className="bg-white rounded-2xl border-2 border-amber-400 p-6 flex flex-col relative">
                <span className="absolute -top-3 left-6 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full">推薦</span>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 font-bold text-sm flex items-center justify-center flex-shrink-0">B</span>
                  <h3 className="font-bold text-gray-900">客戶填寫反饋</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  選「需要再討論」後展開欄位，讓客戶填寫疑慮（價格、交期、規格等），業務收到 Email 時已知道問題點，可針對性回覆。
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600">業務溝通前已掌握疑慮，效率高</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600">客戶有明確管道表達意見</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-gray-600">客戶需多填一個欄位</span>
                  </div>
                </div>
                <span className="inline-block text-xs font-semibold text-gray-400 border border-gray-200 rounded-full px-3 py-1 w-fit">待確認</span>
              </div>

              {/* 方案 C */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 font-bold text-sm flex items-center justify-center flex-shrink-0">C</span>
                  <h3 className="font-bold text-gray-900">引導重新詢價</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  選「需要再討論」後提示客戶修改需求，並提供「重新填寫 Step 01」的按鈕，讓客戶調整規格或數量後重新送出詢價。
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600">適合需求面有調整空間的情況</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600">流程閉環，客戶可自助修改</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-gray-600">若是價格問題，重填需求並不能解決</span>
                  </div>
                </div>
                <span className="inline-block text-xs font-semibold text-gray-400 border border-gray-200 rounded-full px-3 py-1 w-fit">待確認</span>
              </div>
            </div>
          </div>
        </section>

        {/* Step 03 有問題方案討論 */}
        <section className="w-full py-16 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold text-amber-500 tracking-widest uppercase mb-2">Step 03 設計討論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">客戶對打樣有問題時，系統怎麼做？</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">以下三種方案供評估，確認方向後即可實作</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 方案 A */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 font-bold text-sm flex items-center justify-center flex-shrink-0">A</span>
                  <h3 className="font-bold text-gray-900">設計師直接修改重發</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  客戶填寫修改說明送出後，系統通知設計師，設計師依說明修改完成後直接重新寄出打樣稿，客戶再次進入 Step 03 確認。
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600">流程簡單，來回次數少</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600">客戶不需等待確認電話</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-gray-600">修改說明若不夠清楚，容易改錯</span>
                  </div>
                </div>
                <span className="inline-block text-xs font-semibold text-gray-400 border border-gray-200 rounded-full px-3 py-1 w-fit">待確認</span>
              </div>

              {/* 方案 B */}
              <div className="bg-gray-50 rounded-2xl border-2 border-amber-400 p-6 flex flex-col relative">
                <span className="absolute -top-3 left-6 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full">推薦</span>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 font-bold text-sm flex items-center justify-center flex-shrink-0">B</span>
                  <h3 className="font-bold text-gray-900">業務確認後再修改</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  客戶送出修改需求後，業務先聯繫客戶電話或 Email 確認細節，雙方對齊後設計師再動工，完成後重發打樣稿進入下一輪 Step 03。
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600">確保修改方向正確，減少反覆</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600">複雜修改需求有人工把關</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-gray-600">多一個確認步驟，耗時較長</span>
                  </div>
                </div>
                <span className="inline-block text-xs font-semibold text-gray-400 border border-gray-200 rounded-full px-3 py-1 w-fit">待確認</span>
              </div>

              {/* 方案 C */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 font-bold text-sm flex items-center justify-center flex-shrink-0">C</span>
                  <h3 className="font-bold text-gray-900">客戶上傳標注稿</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  要求客戶將修改點直接標注在設計稿上（如 PDF 批注）並上傳，設計師依標注稿修改，減少文字描述造成的誤解。
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600">修改指示最清楚，誤解最少</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-600">適合有設計背景的客戶</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-gray-600">一般客戶可能不會標注設計稿</span>
                  </div>
                </div>
                <span className="inline-block text-xs font-semibold text-gray-400 border border-gray-200 rounded-full px-3 py-1 w-fit">待確認</span>
              </div>
            </div>
          </div>
        </section>

        {/* AI 功能討論區 */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800 border-t border-gray-700">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold text-amber-400 tracking-widest uppercase mb-3">AI 功能規劃討論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Step 01 可以加入哪些 AI 功能？</h2>
              <p className="text-gray-400 text-sm max-w-xl mx-auto">以下三個方向供評估，確認優先順序後即可開始實作</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 功能 A：自然語言助手 */}
              <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-lg flex items-center justify-center flex-shrink-0">A</span>
                  <h3 className="font-bold text-white">自然語言需求助手</h3>
                </div>
                {/* Mock UI */}
                <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-gray-700">
                  <p className="text-xs text-gray-500 mb-2">用白話文描述你的需求</p>
                  <div className="bg-gray-800 rounded-lg px-3 py-2 text-sm text-gray-300 mb-3 border border-gray-600">
                    我要 1,000 張防水貼紙，大概 5x5 公分，戶外使用
                  </div>
                  <div className="flex gap-2 mb-3">
                    <div className="flex-1 h-7 rounded bg-amber-500/80 flex items-center justify-center text-xs text-white font-bold">✦ AI 解析 →</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[['類型', '防水貼紙'], ['尺寸', '5 × 5 cm'], ['數量', '1,000 張'], ['備註', '戶外使用']].map(([k, v]) => (
                      <div key={k} className="bg-gray-700 rounded px-2 py-1">
                        <p className="text-xs text-gray-400">{k}</p>
                        <p className="text-xs text-amber-300 font-medium">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                  客戶用一句話描述需求，AI 自動解析並填入下方各欄位（類型、尺寸、數量），不熟悉貼紙術語的客戶也能快速完成詢價。
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">降低填表門檻，對新客戶友善</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">減少因術語不熟造成的詢價錯誤</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-gray-300">需串接 Claude API，有每次呼叫費用</span>
                  </div>
                </div>
                <span className="inline-block text-xs font-semibold text-gray-400 border border-gray-600 rounded-full px-3 py-1 w-fit">待確認</span>
              </div>

              {/* 功能 B：即時報價估算 */}
              <div className="bg-gray-800 rounded-2xl border-2 border-amber-500/60 p-6 flex flex-col relative">
                <span className="absolute -top-3 left-6 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">建議優先</span>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-lg flex items-center justify-center flex-shrink-0">B</span>
                  <h3 className="font-bold text-white">即時報價估算</h3>
                </div>
                {/* Mock UI */}
                <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-gray-700">
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[['類型', '防水貼紙'], ['尺寸', '5×5 cm'], ['數量', '1,000']].map(([k, v]) => (
                      <div key={k} className="bg-gray-800 rounded-lg px-2 py-2 border border-gray-600">
                        <p className="text-xs text-gray-500">{k}</p>
                        <p className="text-xs text-white font-medium">{v}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/40 rounded-xl px-4 py-3 text-center">
                    <p className="text-xs text-amber-400 mb-1">參考報價區間</p>
                    <p className="text-xl font-bold text-white">NT$ 720 – NT$ 880</p>
                    <p className="text-xs text-gray-500 mt-1">以業務正式報價為準</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                  客戶填完類型、尺寸、數量後，頁面即時顯示 NT$ 參考區間。純前端公式計算，零延遲、零 API 費用，讓客戶送出詢價前先有預期。
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">不呼叫 AI，即時顯示，零額外費用</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">減少客戶因不知道價格而放棄詢價</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-gray-300">估算可能與實際報價有落差，需明確標示</span>
                  </div>
                </div>
                <span className="inline-block text-xs font-semibold text-gray-400 border border-gray-600 rounded-full px-3 py-1 w-fit">待確認</span>
              </div>

              {/* 功能 C：設計稿 AI 分析 */}
              <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-lg flex items-center justify-center flex-shrink-0">C</span>
                  <h3 className="font-bold text-white">設計稿 AI 自動檢查</h3>
                </div>
                {/* Mock UI */}
                <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-gray-700">
                  <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2 mb-3 border border-gray-600">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                    <span className="text-xs text-gray-400">logo_design_v3.jpg</span>
                    <span className="text-xs text-amber-400 ml-auto">分析完成</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 bg-red-900/30 border border-red-700/40 rounded-lg px-3 py-2">
                      <span className="text-red-400 text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
                      <p className="text-xs text-red-300">字體大小約 4pt，印刷後可能模糊</p>
                    </div>
                    <div className="flex items-start gap-2 bg-amber-900/30 border border-amber-700/40 rounded-lg px-3 py-2">
                      <span className="text-amber-400 text-xs font-bold mt-0.5 flex-shrink-0">!</span>
                      <p className="text-xs text-amber-300">顏色模式為 RGB，建議轉換為 CMYK</p>
                    </div>
                    <div className="flex items-start gap-2 bg-blue-900/30 border border-blue-700/40 rounded-lg px-3 py-2">
                      <span className="text-blue-400 text-xs font-bold mt-0.5 flex-shrink-0">i</span>
                      <p className="text-xs text-blue-300">未偵測到出血區，建議預留 3mm</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                  客戶上傳設計稿後，AI 自動分析常見印刷問題（字體大小、色彩模式、出血區、解析度），在送出前先告知風險，減少打樣來回修改次數。
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">提前攔截設計問題，降低打樣成本</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">讓客戶在送出前就能自行修正</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-gray-300">AI 分析僅支援 JPG / PNG / PDF，不支援 .ai 向量檔</span>
                  </div>
                </div>
                <span className="inline-block text-xs font-semibold text-gray-400 border border-gray-600 rounded-full px-3 py-1 w-fit">待確認</span>
              </div>
            </div>
          </div>
        </section>

        {/* 回頭客 Step 01 討論區 */}
        <section className="w-full py-16 md:py-20 bg-gray-800 border-t border-gray-700">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold text-amber-400 tracking-widest uppercase mb-3">回頭客體驗討論</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">第二次下單還需要填一樣的資料嗎？</h2>
              <p className="text-gray-400 text-sm max-w-xl mx-auto">兩個方向供評估，可以同時進行</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* 方向 A：localStorage */}
              <div className="bg-gray-900 rounded-2xl border-2 border-amber-500/60 p-6 flex flex-col relative">
                <span className="absolute -top-3 left-6 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Step 01 改善</span>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-lg flex items-center justify-center flex-shrink-0">A</span>
                  <h3 className="font-bold text-white">自動記住基本資料</h3>
                </div>
                {/* Mock UI */}
                <div className="bg-gray-800 rounded-xl p-4 mb-4 border border-gray-700">
                  <p className="text-xs text-gray-500 mb-3">第二次開啟 Step 01 時自動帶入：</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2">
                      <svg className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-xs text-gray-300">公司名稱：<span className="text-amber-300 font-medium">XX 有限公司</span></span>
                    </div>
                    <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2">
                      <svg className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-xs text-gray-300">Email：<span className="text-amber-300 font-medium">buyer@company.com</span></span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2">
                      <span className="text-xs text-gray-400">貼紙類型、尺寸、數量</span>
                      <span className="text-xs text-gray-500 ml-auto">仍需填寫</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                  第一次送出後，瀏覽器記住公司名稱和 Email。下次開啟表單自動帶入，不需要後端，也不需要登入。貼紙規格照常填，因為每次需求可能不同。
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">不需後端，現在就能做</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">B2B 客戶固定用公司電腦，效果好</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-gray-300">換裝置後資料消失</span>
                  </div>
                </div>
                <span className="inline-block text-xs font-semibold text-gray-400 border border-gray-600 rounded-full px-3 py-1 w-fit">待確認</span>
              </div>

              {/* 方向 B：從信件再下單 */}
              <div className="bg-gray-900 rounded-2xl border border-gray-700 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-lg flex items-center justify-center flex-shrink-0">B</span>
                  <h3 className="font-bold text-white">從確認信一鍵再下單</h3>
                </div>
                {/* Mock UI - email mockup */}
                <div className="bg-gray-800 rounded-xl p-4 mb-4 border border-gray-700">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-amber-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 text-xs font-bold">正</span>
                    </div>
                    <div>
                      <p className="text-xs text-white font-medium">正台國際 詢價確認</p>
                      <p className="text-xs text-gray-500">ZT-20260427-3842 已收到</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">您好，您的詢價已收到，業務將於 1 個工作天內回覆...</p>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-amber-500 rounded-lg py-2 text-center text-xs text-white font-bold">前往 Step 02 確認報價</div>
                    <div className="flex-1 bg-gray-700 border border-gray-600 rounded-lg py-2 text-center text-xs text-gray-300 font-medium">以相同規格再下單</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                  客戶收到詢價確認信後，信件底部加一個「以相同規格再下單」按鈕。點擊後開啟 Step 01，公司名稱、Email、貼紙類型、尺寸、數量全部帶入，客戶只需確認或微調即可送出。
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">連規格都帶入，回頭客體驗最好</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">換裝置也能用（連結在信件裡）</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-gray-300">需要後端儲存訂單、Email 發送功能</span>
                  </div>
                </div>
                <span className="inline-block text-xs font-semibold text-gray-400 border border-gray-600 rounded-full px-3 py-1 w-fit">待確認</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">常見問題</h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 md:py-20 bg-amber-500">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              準備好開始了嗎？
            </h2>
            <p className="text-amber-100 mb-8 text-lg">
              聯繫我們的業務團隊，開始您的訂單
            </p>
            <a
              href={`mailto:${homepageData.companyInfo.email}`}
              className="inline-block px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors duration-200 text-lg"
            >
              {homepageData.companyInfo.email}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
