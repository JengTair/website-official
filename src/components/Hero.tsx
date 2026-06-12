'use client';

const BLUE = '#7DAACB';
const BLUE_D = '#5B8EAF';
const SAND = '#E8DBB3';
const CREAM = '#FFFDEB';
const RED = '#CE2626';
const RED_D = '#A81E1E';
const G900 = '#1A1A1A';
const G500 = '#737373';
const WHITE = '#FFFFFF';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage?: string;
  cta?: {
    primary?: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
}

const stats = [
  { value: '30+', label: '年製造經驗' },
  { value: '500+', label: '合作品牌' },
  { value: '1000+', label: '產品種類' },
];

export default function Hero({ description, cta }: HeroProps) {
  return (
    <>
      <style>{`
        .hero-section { min-height: 70vh; display: flex; align-items: center; border-bottom: 1px solid ${SAND}; background: radial-gradient(ellipse 80% 60% at 100% 100%, rgba(232,219,179,0.45) 0%, transparent 70%), ${CREAM}; position: relative; overflow: hidden; }
        .hero-content { padding: 80px 40px; max-width: 1160px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; position: relative; }
        .hero-text { display: flex; flex-direction: column; position: relative; }
        .hero-ctas { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; margin-bottom: 0; position: relative; }
        .hero-images { display: grid; grid-template-columns: 1.15fr 0.85fr; grid-template-rows: 1fr 1fr; gap: 10px; height: 460px; }
        .hero-img-main { grid-row: 1 / 3; border-radius: 18px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.15); }
        .hero-img-main img { width: 100%; height: 100%; object-fit: cover; object-position: center; transform: translateY(-14%) scale(1.18); transition: transform .7s ease; }
        .hero-img-main:hover img { transform: translateY(-14%) scale(1.22); }
        .hero-img-side { border-radius: 14px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.10); }
        .hero-img-side img { width: 100%; height: 100%; object-fit: cover; object-position: center; transform: translateY(-14%) scale(1.18); transition: transform .7s ease; }
        .hero-img-side:hover img { transform: translateY(-14%) scale(1.22); }
        .hero-img-side:first-of-type { transform: translateY(-6px); }
        .hero-img-side:last-of-type { transform: translateY(6px); }
        /* C方案：型錄卡片堆疊 */
        .hero-cards { position: relative; height: 460px; display: flex; align-items: center; justify-content: center; }
        .hero-card { position: absolute; width: 68%; border-radius: 14px; overflow: hidden; aspect-ratio: 3/4; transition: transform .4s ease, box-shadow .4s ease; }
        .hero-card img { width: 100%; height: 100%; object-fit: cover; object-position: center 28%; display: block; }
        .hero-card:nth-child(1) { transform: translate(-30px, -10px) rotate(-7deg); box-shadow: 0 4px 18px rgba(0,0,0,0.10); z-index: 1; filter: brightness(0.92); }
        .hero-card:nth-child(2) { transform: translate(10px, 14px) rotate(4deg); box-shadow: 0 8px 28px rgba(0,0,0,0.13); z-index: 2; filter: brightness(0.96); }
        .hero-card:nth-child(3) { transform: translate(-8px, 0px) rotate(-1deg); box-shadow: 0 14px 44px rgba(0,0,0,0.18); z-index: 3; }
        .hero-cards:hover .hero-card:nth-child(1) { transform: translate(-60px, -20px) rotate(-10deg); }
        .hero-cards:hover .hero-card:nth-child(2) { transform: translate(50px, 20px) rotate(7deg); }
        .hero-cards:hover .hero-card:nth-child(3) { transform: translate(-6px, 0px) rotate(-1deg); }
        /* B方案：IP品牌標籤 */
        .hero-ip-badges { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 28px; padding-top: 20px; border-top: 1px solid ${SAND}; }
        .hero-ip-label { font-size: 10px; font-weight: 600; letter-spacing: .08em; color: ${G500}; text-transform: uppercase; }
        .hero-ip-tag { font-size: 11px; font-weight: 700; color: ${G900}; background: ${SAND}; padding: 4px 12px; border-radius: 20px; white-space: nowrap; }
        .products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .products-section { padding: 48px 40px; }
        .stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); text-align: center; }
        @media (max-width: 767px) {
          .hero-content { grid-template-columns: 1fr; gap: 40px; padding: 48px 20px; }
          .hero-ctas { flex-direction: column; align-items: stretch; }
          .hero-ctas a { text-align: center; box-sizing: border-box; justify-content: center; }
          .hero-cards { height: 300px; }
          .hero-card { width: 60%; }
          .hero-cards:hover .hero-card:nth-child(1) { transform: translate(-30px, -10px) rotate(-10deg); }
          .hero-cards:hover .hero-card:nth-child(2) { transform: translate(25px, 12px) rotate(7deg); }
          .hero-ip-badges { flex-wrap: wrap; gap: 6px; }
          .products-grid { grid-template-columns: 1fr; }
          .products-section { padding: 40px 20px; }
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .hero-deco { position: absolute; pointer-events: none; }
        @keyframes hero-float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-10px) rotate(8deg)} }
        @keyframes hero-spin  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes hero-pulse { 0%,100%{opacity:.18} 50%{opacity:.32} }
        @keyframes hero-wiggle { 0%,100%{transform:rotate(-8deg)} 50%{transform:rotate(8deg)} }
        @keyframes hero-pop { 0%,100%{transform:scale(1)} 50%{transform:scale(1.12)} }
      `}</style>
      {/* Hero */}
      <section className="hero-section" id="hero">
        {/* 背景裝飾：浮動貼紙形狀 */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {/* 左上 — 粉圓 */}
          <div style={{ position:'absolute', top:'8%', left:'2%', width:52, height:52, borderRadius:'50%', background:'#FFB7C5', opacity:.28, boxShadow:'0 4px 12px rgba(255,183,197,.5)', animation:'hero-float 7s ease-in-out infinite' }}/>
          {/* 左上小 — 藍方 */}
          <div style={{ position:'absolute', top:'18%', left:'7%', width:30, height:30, borderRadius:8, background:BLUE, opacity:.22, boxShadow:'0 3px 10px rgba(125,170,203,.4)', animation:'hero-float 5s ease-in-out infinite 1s', transform:'rotate(14deg)' }}/>
          {/* 左中 — 黃橢圓 */}
          <div style={{ position:'absolute', top:'50%', left:'1%', width:44, height:32, borderRadius:16, background:'#F5C842', opacity:.24, boxShadow:'0 4px 12px rgba(245,200,66,.4)', animation:'hero-float 8s ease-in-out infinite 2s', transform:'rotate(-20deg)' }}/>
          {/* 左下 — 沙色圓 */}
          <div style={{ position:'absolute', bottom:'18%', left:'4%', width:38, height:38, borderRadius:'50%', background:SAND, opacity:.35, boxShadow:'0 3px 10px rgba(232,219,179,.5)', animation:'hero-float 6s ease-in-out infinite 0.5s' }}/>
          {/* 左下小 — 紅方 */}
          <div style={{ position:'absolute', bottom:'8%', left:'10%', width:22, height:22, borderRadius:6, background:RED, opacity:.18, boxShadow:'0 2px 8px rgba(206,38,38,.3)', animation:'hero-float 9s ease-in-out infinite 3s', transform:'rotate(30deg)' }}/>
          {/* 右上 — 藍大圓 */}
          <div style={{ position:'absolute', top:'6%', right:'4%', width:46, height:46, borderRadius:'50%', background:BLUE, opacity:.2, boxShadow:'0 4px 14px rgba(125,170,203,.4)', animation:'hero-float 6s ease-in-out infinite 1.2s' }}/>
          {/* 右上小 — 粉方 */}
          <div style={{ position:'absolute', top:'20%', right:'2%', width:26, height:26, borderRadius:7, background:'#FFB7C5', opacity:.25, boxShadow:'0 2px 8px rgba(255,183,197,.4)', animation:'hero-float 7s ease-in-out infinite 2.5s', transform:'rotate(-18deg)' }}/>
          {/* 右中 — 黃圓 */}
          <div style={{ position:'absolute', top:'48%', right:'2%', width:36, height:36, borderRadius:'50%', background:'#F5C842', opacity:.2, boxShadow:'0 3px 10px rgba(245,200,66,.35)', animation:'hero-float 5s ease-in-out infinite 0.8s' }}/>
          {/* 右下 — 藍橢圓 */}
          <div style={{ position:'absolute', bottom:'15%', right:'3%', width:50, height:34, borderRadius:18, background:BLUE_D, opacity:.18, boxShadow:'0 4px 12px rgba(91,142,175,.3)', animation:'hero-float 8s ease-in-out infinite 1.8s', transform:'rotate(12deg)' }}/>
          {/* 右下小 — 沙方 */}
          <div style={{ position:'absolute', bottom:'6%', right:'9%', width:24, height:24, borderRadius:7, background:SAND, opacity:.3, boxShadow:'0 2px 8px rgba(232,219,179,.5)', animation:'hero-float 6s ease-in-out infinite 3.5s', transform:'rotate(-25deg)' }}/>
          {/* 頂中 — 粉小圓 */}
          <div style={{ position:'absolute', top:'4%', left:'42%', width:18, height:18, borderRadius:'50%', background:'#FFB7C5', opacity:.25, boxShadow:'0 2px 8px rgba(255,183,197,.4)', animation:'hero-float 9s ease-in-out infinite 1s' }}/>

          {/* ── 小插畫 ── */}


          {/* 閃爍四芒星 — 左文字區右側 */}
          <div style={{ position:'absolute', top:'38%', left:'24%', animation:'hero-pop 3s ease-in-out infinite 0.5s', opacity:.7 }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2 L15.5 12 L26 14 L15.5 16 L14 26 L12.5 16 L2 14 L12.5 12 Z" fill="#7DAACB" opacity=".9"/>
            </svg>
          </div>

          {/* 小愛心 — 左下角文字旁 */}
          <div style={{ position:'absolute', bottom:'28%', left:'20%', animation:'hero-wiggle 4s ease-in-out infinite 1s', opacity:.7 }}>
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
              <path d="M13 21S2 14 2 7.5A5.5 5.5 0 0113 5.5 5.5 5.5 0 0124 7.5C24 14 13 21 13 21z" fill="#FFB7C5" stroke="#FF8FAB" strokeWidth="1.3"/>
            </svg>
          </div>

          {/* 魔法棒 — 右側卡片旁 */}
          <div style={{ position:'absolute', top:'22%', right:'16%', animation:'hero-float 7s ease-in-out infinite 2s', opacity:.72, transform:'rotate(-30deg)' }}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <line x1="6" y1="28" x2="26" y2="8" stroke="#C87B61" strokeWidth="2.5" strokeLinecap="round"/>
              <rect x="22" y="4" width="8" height="8" rx="2" fill="#C87B61" transform="rotate(45 26 8)"/>
              <circle cx="7" cy="8" r="2.2" fill="#F5C842"/>
              <circle cx="14" cy="3" r="1.5" fill="#FFB7C5"/>
              <circle cx="4" cy="15" r="1.2" fill="#7DAACB"/>
            </svg>
          </div>



          {/* 小彩帶 — 右下 */}
          <div style={{ position:'absolute', bottom:'22%', right:'15%', animation:'hero-wiggle 5s ease-in-out infinite 0.8s', opacity:.65 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M8 4 Q16 12 8 20 Q16 28 24 20 Q16 12 24 4 Q16 12 8 4Z" fill="#FFB7C5" opacity=".8"/>
              <circle cx="16" cy="12" r="3" fill="#FF8FAB"/>
              <path d="M13 24 Q16 28 19 24" stroke="#FF8FAB" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* 星星群 A — 標題右方 */}
          <div style={{ position:'absolute', top:'25%', left:'47%', animation:'hero-pop 4s ease-in-out infinite 0.2s', opacity:.65 }}>
            <svg width="54" height="32" viewBox="0 0 54 32" fill="none">
              <path d="M8 16 L9.2 11 L10.4 16 L15.4 16 L11.4 19 L12.8 24 L9.2 21 L5.6 24 L7 19 L3 16Z" fill="#F5C842"/>
              <path d="M36 13 L37 9 L38 13 L42 13 L39 15.5 L40 19.5 L37 17 L34 19.5 L35 15.5 L32 13Z" fill="#7DAACB" opacity=".9"/>
              <path d="M26 4 L26.6 2 L27.2 4 L29.2 4 L27.6 5.2 L28.2 7.2 L26.6 6 L25 7.2 L25.6 5.2 L24 4Z" fill="#FFB7C5"/>
              <circle cx="48" cy="6" r="2" fill="#F5C842" opacity=".8"/>
              <circle cx="18" cy="6" r="1.5" fill="#C87B61" opacity=".7"/>
            </svg>
          </div>

          {/* 星星群 B — 左下 */}
          <div style={{ position:'absolute', bottom:'38%', left:'13%', animation:'hero-pop 5s ease-in-out infinite 1.2s', opacity:.55 }}>
            <svg width="48" height="28" viewBox="0 0 48 28" fill="none">
              <path d="M10 14 L11.2 9.5 L12.4 14 L16.9 14 L13.4 16.7 L14.6 21.2 L11.2 18.5 L7.8 21.2 L9 16.7 L5.5 14Z" fill="#FFB7C5"/>
              <path d="M34 10 L34.8 7.2 L35.6 10 L38.4 10 L36.2 11.7 L37 14.5 L34.8 12.8 L32.6 14.5 L33.4 11.7 L31.2 10Z" fill="#7DAACB" opacity=".8"/>
              <circle cx="24" cy="4" r="2.2" fill="#F5C842" opacity=".85"/>
              <circle cx="44" cy="18" r="1.5" fill="#C87B61" opacity=".65"/>
            </svg>
          </div>

          {/* 星星群 C — 右上 */}
          <div style={{ position:'absolute', top:'10%', right:'22%', animation:'hero-pop 3.5s ease-in-out infinite 2s', opacity:.6 }}>
            <svg width="44" height="26" viewBox="0 0 44 26" fill="none">
              <path d="M22 13 L23 9.5 L24 13 L27.5 13 L24.8 15.2 L25.8 18.7 L23 16.5 L20.2 18.7 L21.2 15.2 L18.5 13Z" fill="#F5C842"/>
              <circle cx="8" cy="8" r="2.5" fill="#FFB7C5" opacity=".85"/>
              <circle cx="38" cy="20" r="1.8" fill="#7DAACB" opacity=".8"/>
              <path d="M6 18 L6.5 16 L7 18 L9 18 L7.5 19.2 L8 21.2 L6.5 20 L5 21.2 L5.5 19.2 L4 18Z" fill="#C87B61" opacity=".7"/>
            </svg>
          </div>
        </div>
        {/* Content */}
        <div className="hero-content">
          {/* Left: text */}
          <div className="hero-text">
          {/* Subtle grid texture from v2 */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse 70% 70% at 20% 40%,black 30%,transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Eyebrow tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: BLUE,
              marginBottom: 32,
              position: 'relative',
            }}
          >
            <span style={{ display: 'inline-block', width: 24, height: 1, background: BLUE }} />
            台灣製造 · 46 年品質保證
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-2px',
              color: '#1A1A1A',
              marginBottom: 28,
              position: 'relative',
            }}
          >
            創意 x{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span aria-hidden style={{ position: 'absolute', top: -38, left: '50%', transform: 'translateX(-50%)', animation: 'hero-float 6s ease-in-out infinite 0.3s', pointerEvents: 'none' }}>
                <svg width="34" height="28" viewBox="0 0 36 30" fill="none">
                  <path d="M4 24L2 8l8 8 4-10 4 10 8-8-2 16H4z" fill="#F5C842" stroke="#E6A800" strokeWidth="1.2" strokeLinejoin="round"/>
                  <circle cx="18" cy="26" r="2" fill="#E6A800"/>
                  <circle cx="8" cy="26" r="1.5" fill="#E6A800"/>
                  <circle cx="28" cy="26" r="1.5" fill="#E6A800"/>
                  <circle cx="2" cy="8" r="2.5" fill="#FFD700"/>
                  <circle cx="34" cy="8" r="2.5" fill="#FFD700"/>
                  <circle cx="18" cy="4" r="2.5" fill="#FFD700"/>
                </svg>
              </span>
              品質
            </span>{' '}x 生活<br />
            <span style={{ color: BLUE }}>為品牌創造更多可能</span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: 17,
              color: '#737373',
              lineHeight: 1.8,
              marginBottom: 44,
              maxWidth: 420,
              position: 'relative',
            }}
          >
            {description}
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            {cta?.primary && (
              <a
                href={cta.primary.href}
                style={{
                  background: RED,
                  color: '#fff',
                  padding: '13px 32px',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: '0.3px',
                  textDecoration: 'none',
                  boxShadow: '0 2px 12px rgba(206,38,38,0.3)',
                  transition: 'background .2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = RED_D)}
                onMouseLeave={(e) => (e.currentTarget.style.background = RED)}
              >
                {cta.primary.text}
              </a>
            )}
            {cta?.secondary && (
              <a
                href={cta.secondary.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: BLUE,
                  color: CREAM,
                  fontWeight: 700,
                  fontSize: 14,
                  padding: '13px 28px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'background .2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = BLUE_D; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = BLUE; }}
                onClick={(e) => {
                  const id = cta.secondary!.href.replace(/^\/?(#)/, '');
                  const el = document.getElementById(id);
                  if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
                }}
              >
                {cta.secondary.text}
                <span style={{ fontSize: 16 }}>→</span>
              </a>
            )}
          </div>

          {/* B方案：IP 合作品牌標籤 */}
          <div className="hero-ip-badges">
            <span className="hero-ip-label">IP 授權合作</span>
            {['蠟筆小新', '三麗鷗', 'Kuromi', 'Hello Kitty', 'Cinnamoroll'].map(brand => (
              <span key={brand} className="hero-ip-tag">{brand}</span>
            ))}
          </div>
          </div>{/* end hero-text */}

          {/* C方案：型錄卡片堆疊 */}
          <div className="hero-cards" aria-hidden>
            <div className="hero-card">
              <img src="/images/hero-4.jpg" alt="" />
            </div>
            <div className="hero-card">
              <img src="/images/hero-2.jpg" alt="" />
            </div>
            <div className="hero-card">
              <img src="/images/hero-1.jpg" alt="" />
            </div>
          </div>

        </div>
      </section>

      {/* Feature cards — 三大核心產品 style */}
      <div id="products" className="products-section" style={{ background: SAND }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: 36 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <div style={{ width: 24, height: 1, background: BLUE }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: BLUE, textTransform: 'uppercase' }}>Our Products</span>
            </div>
            <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-1px', color: G900, lineHeight: 1.1, marginBottom: 8 }}>三大核心產品</h2>
            <p style={{ fontSize: 14, color: G500, lineHeight: 1.6, margin: 0 }}>從 IP 授權到客製化製造，我們提供完整的一站式解決方案</p>
          </div>

          {/* Cards */}
          <div className="products-grid">
            {/* Card 1: IP授權 */}
            <div style={{ background: '#FBF7F5', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 4, background: '#C87B61' }} />
              <div style={{ padding: '28px 28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 8, background: WHITE, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect x="2" y="6" width="28" height="20" rx="3" stroke="#C87B61" strokeWidth="1.5"/><path d="M10 16l4 4 8-8" stroke="#C87B61" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', color: '#C87B61', border: '1px solid #C87B61', borderRadius: 2, padding: '3px 8px', textTransform: 'uppercase', opacity: 0.8 }}>IP Licensed Products</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: G900, marginBottom: 4 }}>IP 授權商品</h3>
                <p style={{ fontSize: 12, color: '#C87B61', fontWeight: 500, marginBottom: 14 }}>官方授權 · 蠟筆小新、三麗鷗等知名 IP</p>
                <p style={{ fontSize: 13, color: G500, lineHeight: 1.75, marginBottom: 20, flex: 1 }}>我們擁有多個國際知名 IP 的官方授權資格，能為品牌商及通路商提供合法、高質感的 IP 授權商品製造服務，讓您的商品在市場上更具競爭力。</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {['蠟筆小新', '三麗鷗', 'OEM授權製造', '商品企劃'].map(t => <span key={t} style={{ fontSize: 11, color: G500, padding: '3px 9px', background: WHITE, borderRadius: 2, border: `1px solid ${SAND}` }}>{t}</span>)}
                </div>
                <a href="/products/ip-licensing" style={{ fontSize: 13, fontWeight: 600, color: '#C87B61', textDecoration: 'none' }}>產品瀏覽 →</a>
              </div>
            </div>

            {/* Card 2: 貼紙製造 */}
            <div style={{ background: '#F3F7F7', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 4, background: BLUE }} />
              <div style={{ padding: '28px 28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 8, background: WHITE, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M6 8h20v16a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" stroke={BLUE} strokeWidth="1.5"/><path d="M6 8l4-4h12l4 4" stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round"/><path d="M11 16h10M11 20h6" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', color: BLUE, border: `1px solid ${BLUE}`, borderRadius: 2, padding: '3px 8px', textTransform: 'uppercase', opacity: 0.8 }}>Sticker Manufacturing</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: G900, marginBottom: 4 }}>貼紙製造</h3>
                <p style={{ fontSize: 12, color: BLUE, fontWeight: 500, marginBottom: 14 }}>防水 · 抗UV · 貼紙製造機 · 多種工藝</p>
                <p style={{ fontSize: 13, color: G500, lineHeight: 1.75, marginBottom: 20, flex: 1 }}>46年專業貼紙製造經驗，提供從材質選擇、結構設計、印刷工藝到後加工的完整解決方案。多元材質與工藝，滿足各式場景需求。</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {['防水貼紙', '貼紙製造機', '燙金壓凹', '特殊材質', '3D浮雕貼'].map(t => <span key={t} style={{ fontSize: 11, color: G500, padding: '3px 9px', background: WHITE, borderRadius: 2, border: `1px solid ${SAND}` }}>{t}</span>)}
                </div>
                <a href="/products/sticker" style={{ fontSize: 13, fontWeight: 600, color: BLUE, textDecoration: 'none' }}>產品瀏覽 →</a>
              </div>
            </div>

            {/* Card 3: 客製化軟包裝 */}
            <div style={{ background: '#F0F3F5', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 4, background: G900 }} />
              <div style={{ padding: '28px 28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 8, background: WHITE, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M8 10c0-1.1.9-2 2-2h12a2 2 0 012 2v14a2 2 0 01-2 2H10a2 2 0 01-2-2V10z" stroke={G900} strokeWidth="1.5"/><path d="M12 8V6a2 2 0 014 0v2" stroke={G900} strokeWidth="1.5" strokeLinecap="round"/><path d="M12 15h8M12 19h5" stroke={G900} strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', color: G900, border: `1px solid ${G900}`, borderRadius: 2, padding: '3px 8px', textTransform: 'uppercase', opacity: 0.7 }}>Custom Soft Packaging</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: G900, marginBottom: 4 }}>客製化軟包裝</h3>
                <p style={{ fontSize: 12, color: G500, fontWeight: 500, marginBottom: 14 }}>OPP · PE · 複合材質 · 全彩印刷</p>
                <p style={{ fontSize: 13, color: G500, lineHeight: 1.75, marginBottom: 20, flex: 1 }}>提供各類軟包裝設計製造服務，包括夾鏈袋、自立袋、吊卡袋等多種包裝形式，支援品牌客製化印刷與特殊工藝，兼顧美觀與實用性。</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {['自立袋', '夾鏈袋', '吊卡包裝', '環保材質'].map(t => <span key={t} style={{ fontSize: 11, color: G500, padding: '3px 9px', background: WHITE, borderRadius: 2, border: `1px solid ${SAND}` }}>{t}</span>)}
                </div>
                <a href="/products/packaging" style={{ fontSize: 13, fontWeight: 600, color: G900, textDecoration: 'none' }}>產品瀏覽 →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div style={{ background: BLUE, padding: '18px 40px' }}>
        <div
          className="stats-grid"
          style={{
            maxWidth: 1160,
            margin: '0 auto',
          }}
        >
          {[
            { v: '30+', l: '年製造經驗' },
            { v: '500+', l: '合作品牌' },
            { v: '1000+', l: '產品種類' },
            { v: 'BSCI', l: '驗廞通過' },
            { v: 'REACH', l: '環保標準' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '8px 0', borderRight: i < 4 ? '1px solid rgba(255,253,235,0.2)' : 'none' }}>
              <strong style={{ display: 'block', fontSize: 22, fontWeight: 900, color: i < 3 ? RED : CREAM, letterSpacing: '-0.5px' }}>
                {item.v}
              </strong>
              <span style={{ fontSize: 12, color: 'rgba(255,253,235,0.65)' }}>{item.l}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
