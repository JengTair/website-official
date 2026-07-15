import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import homepageData from '@/data/homepage.json';

export const metadata: Metadata = {
  title: 'IP 授權商品 | 正台國際',
  description: '正台國際擁有蠟筆小新、三麗鷗等國際知名 IP 官方授權，提供合法、高質感的 IP 授權商品製造服務。',
};

const ACCENT = '#C87B61';
const ACCENT_L = '#FBF7F5';
const G900 = '#1A1A1A';
const G500 = '#737373';
const G100 = '#F5F5F5';
const SAND = '#E8DBB3';
const CREAM = '#FFFDEB';
const WHITE = '#FFFFFF';

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="6" width="28" height="20" rx="3" stroke={ACCENT} strokeWidth="1.5"/>
        <path d="M10 16l4 4 8-8" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '官方授權保障',
    desc: '持有蠟筆小新、三麗鷗等多個國際 IP 的正式授權文件，確保商品合法合規，杜絕侵權風險。',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" stroke={ACCENT} strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: '品牌形象升級',
    desc: '利用知名 IP 形象提升商品吸引力，讓您的產品在通路貨架上更具辨識度與競爭力。',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 12h16M8 16h10M8 20h12" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="4" y="6" width="24" height="22" rx="2" stroke={ACCENT} strokeWidth="1.5"/>
      </svg>
    ),
    title: '商品企劃全支援',
    desc: '從授權取得、商品開發、設計打樣到量產交付，提供一站式 IP 商品企劃服務。',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 6h20v4H6zM6 14h20v4H6zM6 22h14v4H6z" stroke={ACCENT} strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'OEM 客製製造',
    desc: '支援 OEM 代工模式，依照客戶需求量身打造 IP 授權商品，最低起訂量彈性洽談。',
  },
];

const licenses = [
  { name: '蠟筆小新', desc: '日本超人氣動漫 IP，全年齡層高度辨識', color: '#F5A623' },
  { name: '三麗鷗', desc: 'Hello Kitty、美樂蒂等全球授權品牌', color: '#FF6B9D' },
  { name: 'OEM 授權', desc: '協助客戶取得指定 IP 授權資格', color: ACCENT },
];

const specs = [
  { label: '起訂量', value: '依品項洽談，支援小批量試產' },
  { label: '交期', value: '打樣 7–14 天，量產依訂單規模' },
  { label: '認證', value: 'SGS、REACH、BSCI 等國際認證' },
  { label: '服務範圍', value: '台灣、亞太、歐美市場均可出貨' },
  { label: '付款方式', value: '電匯、信用狀，依訂單條件洽談' },
  { label: '包裝', value: '依 IP 品牌規範提供標準或客製包裝' },
];

const productGroups = [
  {
    brand: '三麗鷗',
    color: '#FF6B9D',
    desc: 'Hello Kitty、美樂蒂等全球授權品牌',
    items: [
      { id: 5,  img: '/images/三麗鷗/三麗鷗行李箱貼.jpg',        name: '行李箱貼',        tags: ['行李箱', '旅遊'] },
      { id: 6,  img: '/images/三麗鷗/三麗鷗火漆印.jpg',          name: '火漆印',          tags: ['火漆印', '封蠟'] },
      { id: 7,  img: '/images/三麗鷗/三麗鷗水鑽貼.jpg',          name: '水鑽貼',          tags: ['水鑽', '閃亮'] },
      { id: 8,  img: '/images/三麗鷗/三麗鷗Q萌刺繡貼.jpg',      name: 'Q萌刺繡貼',      tags: ['刺繡', '亮片'] },
      { id: 9,  img: '/images/三麗鷗/三麗鷗燙金線條轉印貼.jpg',  name: '燙金線條轉印貼',  tags: ['燙金', '轉印'] },
      { id: 10, img: '/images/三麗鷗/三麗鷗毛巾布刺繡貼.jpg',    name: '閃亮絨毛貼',      tags: ['絨毛', '金邊刺繡'], layout: 'mosaic' },
    ],
  },
  {
    brand: '蠟筆小新',
    color: '#F5A623',
    desc: '日本超人氣動漫 IP',
    items: [
      { id: 1,  img: '/images/蠟筆小新/蠟筆小新浮雕貼.jpg',          name: '浮雕貼',           tags: ['浮雕', '3D 立體'] },
      { id: 2,  img: '/images/蠟筆小新/蠟筆小新造型捲狀貼.png',      name: '造型捲狀貼',       tags: ['捲狀', '造型貼紙'] },
      { id: 3,  img: '/images/蠟筆小新/蠟筆小新油水貼.jpg',          name: '油水貼',           tags: ['油水貼', '亮面'] },
      { id: 5,  img: '/images/蠟筆小新/蠟筆小新立體吊飾.jpg',        name: '立體吊飾',         tags: ['吊飾', '立體'] },
      { id: 4,  img: '/images/蠟筆小新/蠟筆小新屁屁貼.jpg',          name: '屁屁貼',           tags: ['造型貼紙'] },
      { id: 11, img: '/images/蠟筆小新/蠟筆小新飄帶.jpg',            name: '飄帶',             tags: ['飄帶'] },
      { id: 12, img: '/images/蠟筆小新/蠟筆小新DIY飄帶.jpg',         name: 'DIY飄帶',          tags: ['飄帶', 'DIY'] },
    ],
  },
  {
    brand: '授權周邊',
    color: ACCENT,
    desc: '其他授權相關商品',
    items: [
      { id: 12, img: '/images/授權周邊/樂蓋貼印機4款.jpg', name: '樂蓋貼印機',      tags: ['貼印機', '機器'] },
    ],
  },
];

export default function IPLicensingPage() {
  return (
    <>
      <Navigation items={homepageData.navigation} />

      {/* Hero */}
      <section style={{ background: ACCENT_L, borderBottom: `1px solid ${SAND}`, padding: '72px 40px 60px', position: 'relative', overflow: 'hidden' }}>
        {/* 蠟筆小新品牌色裝飾圓點 */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '10%', right: '3%', width: 80, height: 80, borderRadius: '50%', background: '#F5A623', opacity: 0.12, animation: 'ip-float1 6s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', top: '55%', right: '8%', width: 44, height: 44, borderRadius: '50%', background: '#F5A623', opacity: 0.18, animation: 'ip-float2 8s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '12%', right: '18%', width: 28, height: 28, borderRadius: '50%', background: '#F5A623', opacity: 0.22, animation: 'ip-float1 5s ease-in-out infinite reverse' }} />
          <div style={{ position: 'absolute', top: '20%', left: '0%', width: 60, height: 60, borderRadius: '50%', background: '#FF6B9D', opacity: 0.08, animation: 'ip-float2 7s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '8%', left: '5%', width: 36, height: 36, borderRadius: '50%', background: ACCENT, opacity: 0.14, animation: 'ip-float1 9s ease-in-out infinite' }} />
        </div>

        <style>{`
          @keyframes ip-float1 { 0%,100%{ transform: translateY(0) rotate(0deg); } 50%{ transform: translateY(-12px) rotate(8deg); } }
          @keyframes ip-float2 { 0%,100%{ transform: translateY(0) rotate(0deg); } 50%{ transform: translateY(-8px) rotate(-6deg); } }
        `}</style>

        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 28, alignItems: 'center' }}>
          {/* 左側文字 */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 24, height: 1, background: ACCENT }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: ACCENT, textTransform: 'uppercase' }}>IP Licensed Products</span>
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: G900, letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 20 }}>
              IP 授權商品
            </h1>
            <p style={{ fontSize: 16, color: G500, lineHeight: 1.8, maxWidth: 540, marginBottom: 32 }}>
              正台國際持有蠟筆小新、三麗鷗等多個國際知名 IP 的官方授權資格，協助品牌商及通路商製造合法、高質感的 IP 商品，46 年製造經驗守護每一件授權商品的品質。
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['蠟筆小新', '三麗鷗', 'OEM授權製造', '商品企劃'].map(t => (
                <span key={t} style={{ fontSize: 12, color: ACCENT, padding: '5px 12px', background: WHITE, borderRadius: 4, border: `1px solid ${SAND}`, fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>

          {/* 右側：授權商品主圖 */}
          <div style={{ position: 'relative', width: 620, height: 680, flexShrink: 0 }} className="ip-hero-deco">
            <div aria-hidden style={{ position: 'absolute', top: 0, right: 6, width: 110, height: 110, borderRadius: '50%', background: '#F5A623', opacity: 0.05, filter: 'blur(2px)' }} />
            <div aria-hidden style={{ position: 'absolute', bottom: 26, left: 14, width: 88, height: 88, borderRadius: '50%', background: ACCENT, opacity: 0.05, filter: 'blur(2px)' }} />
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: 'transparent' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/01_HERO背景圖1920x1080px-500KB/IP授權產品-情境照03.png" alt="IP 授權產品情境照" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center center', display: 'block', filter: 'drop-shadow(0 10px 18px rgba(200,123,97,0.08))' }} />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) { .ip-hero-deco { display: block !important; } }
      `}</style>

      {/* 授權品牌 + 產品目錄（合併） */}
      <section style={{ background: G100, padding: '72px 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div style={{ width: 24, height: 1, background: ACCENT }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: ACCENT, textTransform: 'uppercase' }}>Licensed Brands &amp; Product Catalog</span>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: G900, letterSpacing: '-0.5px', marginBottom: 8 }}>授權品牌與產品目錄</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 28 }}>持有以下國際 IP 官方授權，如需詢價請點擊卡片下方按鈕</p>

          {/* 品牌卡片（可點選，跳至對應分類） */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 56 }}>
            {productGroups.map(g => (
              <a key={g.brand} href={`#brand-${g.brand}`} className="ip-brand-card" style={{ ['--bc' as string]: g.color }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: g.color, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: G900, marginBottom: 3 }}>{g.brand}</div>
                  <div style={{ fontSize: 12, color: G500, lineHeight: 1.5 }}>{g.desc}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, opacity: 0.3 }}>
                  <path d="M8 3l5 5-5 5M3 8h10" stroke={G900} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>

          <style>{`
            .ip-brand-card { background: ${WHITE}; border-radius: 10px; padding: 20px 22px; border: 1.5px solid rgba(0,0,0,0.07); display: flex; align-items: center; gap: 14px; text-decoration: none; transition: border-color .2s, box-shadow .2s, transform .2s; }
            .ip-brand-card:hover { border-color: var(--bc); box-shadow: 0 4px 20px color-mix(in srgb, var(--bc) 20%, transparent); transform: translateY(-3px); }
            .ip-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
            .ip-card { background: ${WHITE}; border-radius: 14px; overflow: hidden; border: 1px solid rgba(0,0,0,0.07); cursor: pointer; transition: transform .25s ease, box-shadow .25s ease; }
            .ip-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.12); }
            .ip-card-img { position: relative; aspect-ratio: 3/4; overflow: hidden; background: ${ACCENT_L}; }
            .ip-card-img img { position: absolute; inset: 8px; width: calc(100% - 16px); height: calc(100% - 16px); object-fit: contain; object-position: center center; transition: transform .5s ease; }
            .ip-card-img--wide img { inset: 14px 8px; width: calc(100% - 16px); height: calc(100% - 28px); }
            .ip-card-img--mosaic { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 6px; padding: 10px; }
            .ip-card-mosaic-cell { border-radius: 6px; background-repeat: no-repeat; background-size: 400% 100%; transition: transform .5s ease; }
            .ip-card:hover .ip-card-img img { transform: scale(1.06); }
            .ip-card:hover .ip-card-mosaic-cell { transform: scale(1.02); }
            .ip-card-body { padding: 16px 18px 20px; }
            .ip-card-name { font-size: 15px; font-weight: 700; color: ${G900}; margin-bottom: 10px; line-height: 1.35; }
            .ip-card-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 14px; }
            .ip-card-tag { font-size: 11px; color: ${G500}; background: ${G100}; padding: 2px 8px; border-radius: 3px; }
            .ip-card-btn { display: block; text-align: center; font-size: 12px; font-weight: 700; color: ${ACCENT}; border: 1.5px solid ${ACCENT}; border-radius: 6px; padding: 8px; text-decoration: none; transition: background .2s, color .2s; }
            .ip-card-btn:hover { background: ${ACCENT}; color: ${WHITE}; }
            @media (max-width: 1023px) { .ip-grid { grid-template-columns: repeat(3, 1fr); } }
            @media (max-width: 767px)  { .ip-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } }
          `}</style>

          {/* 分品牌顯示 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 52 }}>
            {productGroups.map(g => (
              <div key={g.brand} id={`brand-${g.brand}`} style={{ scrollMarginTop: 80 }}>
                {/* 品牌分組標題 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 4, height: 22, borderRadius: 2, background: g.color }} />
                  <span style={{ fontSize: 18, fontWeight: 800, color: G900 }}>{g.brand}</span>
                  <span style={{ fontSize: 12, color: G500, marginLeft: 4 }}>{g.desc}</span>
                  <span style={{ fontSize: 11, color: g.color, background: g.color + '18', padding: '2px 10px', borderRadius: 20, fontWeight: 600, marginLeft: 'auto' }}>
                    {g.items.length} 件商品
                  </span>
                </div>
                <div className="ip-grid">
                  {g.items.map(p => (
                    <div key={p.id} className="ip-card">
                      <div className={`ip-card-img ${p.layout === 'mosaic' ? 'ip-card-img--mosaic' : p.name === '樂蓋貼印機' ? 'ip-card-img--wide' : ''}`}>
                        {p.layout === 'mosaic' ? (
                          <>
                            <div className="ip-card-mosaic-cell" style={{ backgroundImage: `url(${p.img})`, backgroundPosition: '0% center' }} />
                            <div className="ip-card-mosaic-cell" style={{ backgroundImage: `url(${p.img})`, backgroundPosition: '33.333% center' }} />
                            <div className="ip-card-mosaic-cell" style={{ backgroundImage: `url(${p.img})`, backgroundPosition: '66.666% center' }} />
                            <div className="ip-card-mosaic-cell" style={{ backgroundImage: `url(${p.img})`, backgroundPosition: '100% center' }} />
                          </>
                        ) : (
                          <img src={p.img} alt={p.name} />
                        )}
                      </div>
                      <div className="ip-card-body">
                        <div className="ip-card-name">{p.name}</div>
                        <div className="ip-card-tags">
                          {p.tags.map(t => <span key={t} className="ip-card-tag">{t}</span>)}
                        </div>
                        <a href="/quote" className="ip-card-btn">詢價 →</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服務特色 */}
      <section style={{ background: SAND, padding: '60px 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: G900, marginBottom: 8 }}>服務特色</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 36 }}>從授權申請到商品量產的完整支援</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {features.map(f => (
              <div key={f.title} style={{ background: WHITE, borderRadius: 8, padding: '28px 24px', border: `1px solid rgba(0,0,0,0.06)` }}>
                <div style={{ marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: G900, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: G500, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 規格與條件 */}
      <section style={{ background: CREAM, padding: '60px 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: G900, marginBottom: 8 }}>規格與條件</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 32 }}>詳細規格請聯絡業務洽談</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {specs.map(s => (
              <div key={s.label} style={{ padding: '20px 24px', borderRadius: 8, border: `1px solid ${SAND}`, background: ACCENT_L }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: ACCENT, textTransform: 'uppercase', marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 14, color: G900, fontWeight: 500 }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: ACCENT, padding: '60px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: WHITE, marginBottom: 12 }}>開始您的 IP 授權商品計畫</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 32 }}>
            填寫詢價表單，業務團隊將在 24 小時內與您聯繫，提供專業授權諮詢。
          </p>
          <a href="/quote" style={{ display: 'inline-block', background: WHITE, color: ACCENT, padding: '14px 36px', borderRadius: 6, fontWeight: 700, fontSize: 15, textDecoration: 'none', letterSpacing: '0.04em' }}>
            立即詢價 →
          </a>
        </div>
      </section>

      {/* Footer Back */}
      <div style={{ background: SAND, padding: '24px 40px', borderTop: `1px solid ${SAND}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <a href="/" style={{ fontSize: 13, color: G500, textDecoration: 'none' }}>← 返回首頁</a>
        </div>
      </div>
    </>
  );
}
