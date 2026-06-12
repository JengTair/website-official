import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import homepageData from '@/data/homepage.json';

export const metadata: Metadata = {
  title: '關於我們 | 正台國際',
  description: '正台國際有限公司，1980年創立，擁有迪士尼、辛普森家族授權，專業貼紙設計製造逾40年，SGS認證，符合歐盟環保標準。',
};

const milestones = [
  { year: '1980', text: '正台國際創立，專注貼紙設計與製造' },
  { year: '1996', text: '取得迪士尼台灣授權，開啟品牌合作里程碑' },
  { year: '1997', text: '導入 TQM 全面品質管理系統' },
  { year: '1998', text: '引進 12 色輪轉印刷機，提升印刷精度與產能' },
  { year: '2002', text: '深圳廠房啟用、香港辦公室成立，建立兩岸三地生產體系' },
  { year: '2005', text: '導入 ERP 企業資源規劃系統' },
  { year: '2013', text: '正台國際有限公司正式成立；取得 Sedex 認證' },
  { year: '2014', text: '取得 SQP 認證' },
  { year: '2015', text: '取得辛普森家族（The Simpsons）授權' },
  { year: '2016', text: '通過 BSCI / WCA 認證；通過 NBCUniversal 稽核' },
];

const certifications = [
  { name: 'SGS 認證', desc: '全產品通過 SGS 國際認證，品質有保障' },
  { name: '歐盟 REACH 標準', desc: '符合歐盟最新環保法規與 REACH 標準' },
  { name: 'Disney FAMA 稽核', desc: '通過迪士尼工廠稽核，符合授權製造規範' },
  { name: 'NBCUniversal 稽核', desc: '通過 NBCUniversal 品牌授權稽核' },
  { name: 'Sedex 認證', desc: '符合國際企業社會責任標準' },
  { name: 'BSCI / WCA', desc: '通過歐洲商業社會規範稽核' },
];

const products = [
  '貼紙 & 標籤', '文具用品', '家居裝飾', '禮品贈品',
  '消費性電子配件', 'PP 袋', '辦公用品', '印刷品',
];

export default function AboutPage() {
  return (
    <>
      <Navigation items={homepageData.navigation} />

      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="w-full bg-gray-900 text-white py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold text-amber-400 tracking-widest uppercase mb-4">關於我們</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                正台國際有限公司
              </h1>
              <div className="w-16 h-1 bg-amber-500 mb-6" />
              <p className="text-lg text-gray-300 leading-relaxed">
                1980 年創立，深耕貼紙設計與製造逾 40 年。擁有迪士尼、辛普森家族等國際 IP 授權，工廠遍及台灣台北及中國深圳，年度新品超過 300 款。
              </p>
            </div>
          </div>
        </section>

        {/* 核心數據 */}
        <section className="w-full py-12 bg-amber-500">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '1980', label: '年創立' },
                { value: '40+', label: '年製造經驗' },
                { value: '300+', label: '年度新品款數' },
                { value: '2 國', label: '台灣 & 中國廠房' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-sm text-amber-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 公司簡介 */}
        <section className="w-full py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block text-xs font-bold text-amber-500 tracking-widest uppercase mb-3">公司簡介</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">專業製造，品質領先</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    正台國際專精 12 色輪轉印刷、絹印、模切及燙金等多種工藝，全系列產品通過 SGS 認證，符合歐盟最新環保標準及 REACH 規範。
                  </p>
                  <p>
                    自 1996 年取得迪士尼台灣授權以來，陸續與 The Simpsons、NBCUniversal 等國際品牌建立授權合作關係，成為亞太地區重要的授權貼紙製造商。
                  </p>
                  <p>
                    旗下 Smile Kid 品牌與迪士尼系列年度新品超過 300 款，客製化服務可依客戶需求調整規格，滿足 B2B 採購商的多樣需求。
                  </p>
                </div>
              </div>

              {/* 產品範疇 */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">主要產品範疇</h3>
                <div className="grid grid-cols-2 gap-2">
                  {products.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm text-gray-600 bg-white rounded-lg px-3 py-2 border border-gray-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-3">授權品牌</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Disney', 'The Simpsons', 'NBCUniversal'].map((b) => (
                      <span key={b} className="text-xs font-semibold bg-amber-100 text-amber-700 rounded-full px-3 py-1">{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 發展歷程 */}
        <section className="w-full py-16 md:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold text-amber-500 tracking-widest uppercase mb-2">發展歷程</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">40 年品牌里程碑</h2>
            </div>
            <div className="relative max-w-3xl mx-auto">
              {/* 垂直線 */}
              <div className="absolute left-[72px] md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 -translate-x-1/2" />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={m.year} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* 年份區塊 */}
                    <div className={`md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-end md:pr-10' : 'md:justify-start md:pl-10'}`}>
                      <div className="bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm max-w-xs w-full md:w-auto ml-16 md:ml-0">
                        <p className="text-xs font-bold text-amber-500 mb-0.5">{m.year}</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{m.text}</p>
                      </div>
                    </div>
                    {/* 中心圓點 */}
                    <div className="absolute left-[72px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow top-3" />
                    {/* 佔位 */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 認證 */}
        <section className="w-full py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold text-amber-500 tracking-widest uppercase mb-2">品質認證</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">國際認證，品質保證</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((c) => (
                <div key={c.name} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">{c.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 md:py-20 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">與正台國際合作</h2>
            <p className="text-gray-300 mb-8 text-lg">40 年製造經驗，國際授權品質保證</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors">
                詢問報價
              </a>
              <a href="/contact" className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-lg transition-colors">
                聯絡我們
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="w-full bg-gray-950 text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 text-center text-sm">
          <p>© {new Date().getFullYear()} {homepageData.companyInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
