import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import homepageData from '@/data/homepage.json';

export const metadata: Metadata = {
  title: '客製化軟包裝 | 正台國際',
  description: '正台國際提供二封袋、三封袋、站立袋、背封袋等客製化軟包裝製造服務，鋁箔/電鍍/透明PET/尼龍多種材質，支援全彩數位印刷，無版費少量多樣。',
};

const G900 = '#1A1A1A';
const G700 = '#404040';
const G500 = '#737373';
const SAND = '#E8DBB3';
const CREAM = '#FFFDEB';
const WHITE = '#FFFFFF';
const BLUE = '#7DAACB';
const BLUE_D = '#5B8EAF';
const ACCENT_L = '#F0F3F5';

// SVG icons matching PDF page 4 style exactly
const C = '#4A7CB5'; // stroke color

const BagIcon2Seal = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <defs>
      <radialGradient id="bagGlow" cx="0.5" cy="0.46" r="0.6">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="45%" stopColor="#F7FBFF" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#DCEAF8" stopOpacity="0.35" />
      </radialGradient>
    </defs>
    {/* outer body */}
    <rect x="10" y="8" width="32" height="36" rx="2" stroke={C} strokeWidth="1.7" fill="url(#bagGlow)"/>
    {/* top seal band */}
    <rect x="10" y="8" width="32" height="5" rx="1.5" stroke={C} strokeWidth="1.2" fill={C} fillOpacity="0.18"/>
    <line x1="10" y1="14" x2="42" y2="14" stroke={C} strokeWidth="1.1" strokeDasharray="2 1.5" opacity="0.9"/>
    {/* bottom seal band */}
    <rect x="10" y="39" width="32" height="5" rx="1.5" stroke={C} strokeWidth="1.2" fill={C} fillOpacity="0.18"/>
    <line x1="10" y1="38" x2="42" y2="38" stroke={C} strokeWidth="1.1" strokeDasharray="2 1.5" opacity="0.9"/>
    {/* center glow */}
    <circle cx="26" cy="26" r="10" fill="#FFFFFF" fillOpacity="0.42"/>
    <circle cx="26" cy="26" r="4.8" fill="#FFFFFF" fillOpacity="0.24"/>
  </svg>
);

const BagIcon3Seal = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    {/* outer body */}
    <rect x="6" y="6" width="40" height="40" rx="2" stroke={C} strokeWidth="1.8" fill="none"/>
    {/* top seal band */}
    <rect x="6" y="6" width="40" height="6" rx="2" stroke={C} strokeWidth="1.4" fill={C} fillOpacity="0.12"/>
    {/* bottom seal band */}
    <rect x="6" y="40" width="40" height="6" rx="2" stroke={C} strokeWidth="1.4" fill={C} fillOpacity="0.12"/>
    {/* left seal band */}
    <rect x="6" y="6" width="7" height="40" rx="2" stroke={C} strokeWidth="1.4" fill={C} fillOpacity="0.12"/>
  </svg>
);

const BagIcon3Zipper = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    {/* outer body */}
    <rect x="6" y="6" width="40" height="40" rx="2" stroke={C} strokeWidth="1.8" fill="none"/>
    {/* top seal band */}
    <rect x="6" y="6" width="40" height="6" rx="2" stroke={C} strokeWidth="1.4" fill={C} fillOpacity="0.12"/>
    {/* bottom seal band */}
    <rect x="6" y="40" width="40" height="6" rx="2" stroke={C} strokeWidth="1.4" fill={C} fillOpacity="0.12"/>
    {/* left seal band */}
    <rect x="6" y="6" width="7" height="40" rx="2" stroke={C} strokeWidth="1.4" fill={C} fillOpacity="0.12"/>
    {/* zipper rail */}
    <rect x="14" y="17" width="28" height="5" rx="2.5" stroke={C} strokeWidth="1.4" fill="none"/>
    {/* zipper teeth */}
    {[17, 21, 25, 29, 33, 37].map(x => (
      <rect key={x} x={x - 1} y="18.5" width="2" height="2" rx="0.5" fill={C} opacity="0.8"/>
    ))}
    {/* lock icon top-right */}
    <rect x="34" y="8" width="8" height="7" rx="1.5" stroke={C} strokeWidth="1.2" fill="white" fillOpacity="0.6"/>
    <path d="M36 8 Q36 5 40 5 Q44 5 44 8" stroke={C} strokeWidth="1.2" fill="none"/>
    <circle cx="40" cy="11.5" r="1.2" fill={C}/>
  </svg>
);

const BagIcon3Stand = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    {/* doypack body — wider at bottom */}
    <path d="M15 6 L37 6 L41 40 Q41 44 26 46 Q11 44 11 40 Z" stroke={C} strokeWidth="1.8" fill="none"/>
    {/* top seal */}
    <rect x="15" y="6" width="22" height="5" rx="1" stroke={C} strokeWidth="1.2" fill={C} fillOpacity="0.12"/>
    {/* bottom gusset oval */}
    <ellipse cx="26" cy="44" rx="13" ry="3.5" stroke={C} strokeWidth="1.4" fill="none"/>
    {/* zipper line */}
    <line x1="17" y1="17" x2="35" y2="17" stroke={C} strokeWidth="1.2" strokeDasharray="2 2"/>
  </svg>
);

const BagIconPillow = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    {/* outer body */}
    <rect x="9" y="6" width="34" height="40" rx="2" stroke={C} strokeWidth="1.8" fill="none"/>
    {/* top seal band */}
    <rect x="9" y="6" width="34" height="6" rx="2" stroke={C} strokeWidth="1.4" fill={C} fillOpacity="0.12"/>
    {/* bottom seal band */}
    <rect x="9" y="40" width="34" height="6" rx="2" stroke={C} strokeWidth="1.4" fill={C} fillOpacity="0.12"/>
    {/* center vertical back seam */}
    <line x1="26" y1="6" x2="26" y2="46" stroke={C} strokeWidth="1.2" strokeDasharray="3 2.5"/>
  </svg>
);

const BagIconGusset = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    {/* front panel */}
    <rect x="11" y="6" width="30" height="40" rx="2" stroke={C} strokeWidth="1.8" fill="none"/>
    {/* top seal */}
    <rect x="11" y="6" width="30" height="5" rx="2" stroke={C} strokeWidth="1.2" fill={C} fillOpacity="0.12"/>
    {/* bottom seal */}
    <rect x="11" y="41" width="30" height="5" rx="2" stroke={C} strokeWidth="1.2" fill={C} fillOpacity="0.12"/>
    {/* left gusset — vertical dashed line */}
    <line x1="18" y1="6" x2="18" y2="46" stroke={C} strokeWidth="1.2" strokeDasharray="3 2.5"/>
    {/* right gusset — vertical dashed line */}
    <line x1="34" y1="6" x2="34" y2="46" stroke={C} strokeWidth="1.2" strokeDasharray="3 2.5"/>
    {/* center back seam */}
    <line x1="26" y1="6" x2="26" y2="46" stroke={C} strokeWidth="1" strokeDasharray="2 2" opacity="0.45"/>
  </svg>
);

const BagIconRoll = () => (
  <svg width="56" height="52" viewBox="0 0 56 52" fill="none">
    {/* main roll body */}
    <ellipse cx="24" cy="28" rx="16" ry="20" stroke={C} strokeWidth="1.8" fill="white"/>
    {/* inner hollow */}
    <ellipse cx="24" cy="28" rx="7" ry="8" stroke={C} strokeWidth="1.4" fill="none"/>
    {/* core hole */}
    <ellipse cx="24" cy="28" rx="3" ry="3.5" stroke={C} strokeWidth="1.2" fill={C} fillOpacity="0.15"/>
    {/* unwinding sheet tab */}
    <path d="M40 20 Q50 20 50 28 L50 36 Q49 40 40 40" stroke={C} strokeWidth="1.6" fill="none"/>
    <line x1="40" y1="20" x2="40" y2="40" stroke={C} strokeWidth="1.4"/>
    {/* roll top/bottom arcs */}
    <ellipse cx="24" cy="8" rx="16" ry="4" stroke={C} strokeWidth="1.4" fill="none" opacity="0.5"/>
  </svg>
);

const packageTypes = [
  { name: '二封袋', Icon: BagIcon2Seal, desc: '上下兩邊封合，最基本的袋型，適合輕量乾貨，成本最低。', tags: ['平口', '輕量', '低成本'] },
  { name: '三封袋', Icon: BagIcon3Seal, desc: '三邊封合，簡約實用，可印全彩圖案，通用於各類商品包裝。', tags: ['通用型', '全彩印刷', '多尺寸'] },
  { name: '三封夾鏈袋', Icon: BagIcon3Zipper, desc: '三邊封加夾鏈設計，方便反覆開關，防潮防塵效果優異。', tags: ['可重複封口', '防潮', '零食文具'] },
  { name: '三封站立袋', Icon: BagIcon3Stand, desc: '底部折角結構，可自立站立，陳列展示效果佳，適合食品飲品。', tags: ['自立展示', '食品飲品', '貨架陳列'] },
  { name: '背封袋', Icon: BagIconPillow, desc: '背面中央縱向熱封，正面平整，枕頭狀外觀，適合零食、糖果、咖啡隨身包等大量量產包裝。', tags: ['枕頭袋', '零食量產', '成本效益'] },
  { name: '夾邊背封袋', Icon: BagIconGusset, desc: '背封加側邊折角，兼具平整外觀與站立功能，更具質感。', tags: ['側折角', '質感升級', '高端包裝'] },
  { name: '捲膜', Icon: BagIconRoll, desc: '成捲供應，配合自動充填包裝機使用，適合大批量自動化生產。', tags: ['自動化', '大批量', '充填機配套'] },
];

const materials = [
  { code: 'A', name: '鋁箔', feature: '高阻隔', color: '#C0C0C0', desc: '最強阻隔性，防水防氣防光，適合保健食品、咖啡、茶包等需長期保鮮的商品。' },
  { code: 'B', name: '電鍍', feature: '金屬光澤', color: '#D4AF37', desc: '具金屬質感外觀，兼顧阻隔性與美觀，常用於高端零食、保養品包裝。' },
  { code: 'C', name: '透明PET', feature: '透明可視', color: '#87CEEB', desc: '高透明度，讓消費者直接看到商品內容，適合文具、小物件等展示性強的商品。' },
  { code: 'D', name: '尼龍NY', feature: '耐穿刺', color: '#98FB98', desc: '耐穿刺、耐摩擦，強度高，適合形狀不規則或有尖角的商品，如五金零件。' },
  { code: 'E', name: '三氧化二鋁', feature: '透明高阻隔', color: '#DDA0DD', desc: '結合透明度與高阻隔性，是鋁箔的透明替代方案，適合要看見商品又需高保鮮的應用。' },
];

const materialLogic = [
  { need: '看得到內容物', recommend: '透明PET', color: '#87CEEB' },
  { need: '高阻隔保鮮', recommend: '鋁箔', color: '#C0C0C0' },
  { need: '金屬質感外觀', recommend: '電鍍', color: '#D4AF37' },
  { need: '耐穿刺耐磨', recommend: '尼龍 NY', color: '#98FB98' },
  { need: '透明 + 高阻隔', recommend: '三氧化二鋁', color: '#DDA0DD' },
];

const laminationOptions = [
  { code: '01', spec: 'PET16 亮', form: '成捲', finish: '亮面', finishColor: '#F5C842' },
  { code: '02', spec: 'OPP20 亮', form: '成袋', finish: '亮面', finishColor: '#F5C842' },
  { code: '03', spec: 'MOPP20 霧', form: '成袋 / 成捲', finish: '霧面', finishColor: '#7DAACB' },
];

const printCompare = [
  { label: '數位印刷', points: ['無版費', '少量多樣', '交期快', '適合打樣測試'], highlight: true },
  { label: '凹版印刷', points: ['大量生產成本低', '適合長單固定品項', '色彩穩定性高'], highlight: false },
];

const applications = [
  { icon: '💊', name: '保健食品' },
  { icon: '☕', name: '咖啡' },
  { icon: '🍵', name: '茶包' },
  { icon: '🍿', name: '零食' },
  { icon: '🧴', name: '粉末包裝' },
];

const processSteps = [
  { num: '1', label: '客戶詢價' },
  { num: '2', label: '確認規格' },
  { num: '3', label: '報價' },
  { num: '4', label: '打樣' },
  { num: '5', label: '下單' },
  { num: '6', label: '生產' },
  { num: '7', label: '出貨' },
];

const quoteChecklist = ['產品內容物', '袋型', '尺寸', '數量', '材質', '成袋或成捲', '亮面或霧面'];

const faqs = [
  { q: 'MOQ 最低訂購量是多少？', a: '依袋型與尺寸不同，數位印刷可少量起印，具體 MOQ 請洽業務確認。' },
  { q: '交期需要多久？', a: '打樣約 7–14 個工作天，量產視數量與袋型約 2–4 週。' },
  { q: '有版費嗎？', a: '數位印刷無需版費，可直接少量生產；凹版印刷需制版費，適合大量長單。' },
  { q: '可以先打樣嗎？', a: '可以，我們提供打樣服務，確認材質、尺寸、印刷效果後再下量產訂單。' },
];

const specs = [
  { label: '材質', value: 'PET、鋁箔、電鍍、尼龍NY、三氧化二鋁，複合材質可客製' },
  { label: '上光膜', value: 'PET16 亮（成捲）/ OPP20 亮（成袋）/ MOPP20 霧（成袋/成捲）' },
  { label: '印刷色數', value: '最多 8 色，支援 CMYK 及專色' },
  { label: '尺寸', value: '依商品尺寸全面客製，無固定限制' },
  { label: '起訂量', value: '數位印刷少量起印，凹版適合大批量，洽談確認' },
  { label: '認證', value: 'SGS、食品級（依材質）、REACH' },
];

export default function PackagingPage() {
  return (
    <>
      <style>{`
        .pkg-grid-7 { display: grid; grid-template-columns: repeat(7, 1fr); gap: 0; }
        .pkg-grid-mat { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
        .pkg-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .pkg-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .pkg-grid-apps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
        .pkg-grid-specs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 1023px) {
          .pkg-grid-7 { grid-template-columns: repeat(4, 1fr); }
          .pkg-grid-mat { grid-template-columns: repeat(3, 1fr); }
          .pkg-grid-3 { grid-template-columns: repeat(2, 1fr); }
          .pkg-grid-apps { grid-template-columns: repeat(3, 1fr); }
          .pkg-grid-specs { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 767px) {
          .pkg-grid-7 { grid-template-columns: repeat(2, 1fr); }
          .pkg-grid-mat { grid-template-columns: repeat(2, 1fr); }
          .pkg-grid-3 { grid-template-columns: 1fr; }
          .pkg-grid-2 { grid-template-columns: 1fr; }
          .pkg-grid-apps { grid-template-columns: repeat(3, 1fr); }
          .pkg-grid-specs { grid-template-columns: 1fr; }
        }
        .pkg-section { padding: 64px 40px; }
        @media (max-width: 767px) { .pkg-section { padding: 48px 20px; } }
        .process-flow { display: flex; align-items: center; gap: 0; overflow-x: auto; padding: 8px 0; }
        .process-step { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .process-arrow { color: ${BLUE}; font-size: 20px; flex-shrink: 0; padding: 0 8px; }
      `}</style>
      <Navigation items={homepageData.navigation} />

      {/* Hero */}
      <section style={{ background: ACCENT_L, borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '72px 40px 60px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 24, height: 1, background: G500 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: G500, textTransform: 'uppercase' }}>Custom Soft Packaging</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: G900, letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 20 }}>
            客製化軟包裝
          </h1>
          <p style={{ fontSize: 16, color: G500, lineHeight: 1.8, maxWidth: 620, marginBottom: 32 }}>
            提供多種袋型與複合材質選擇，支持數位印刷與凹版印刷，從少量試單到大量量產，協助品牌快速打造專屬包裝。
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['少量多樣', '交期快', '多種袋型', '多種材質'].map(t => (
              <span key={t} style={{ fontSize: 12, color: G700, padding: '5px 14px', background: WHITE, borderRadius: 20, border: `1px solid ${SAND}`, fontWeight: 600 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 常見袋型 */}
      <section className="pkg-section" style={{ background: CREAM }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 20, height: 1, background: BLUE }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: BLUE, textTransform: 'uppercase' }}>Bag Types</span>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: G900, marginBottom: 8 }}>常見袋型介紹</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 32 }}>7 種主要袋型，因應不同商品與通路需求</p>
          <div className="pkg-grid-7" style={{ gap: 12 }}>
            {packageTypes.map(p => (
              <div key={p.name} style={{ background: WHITE, borderRadius: 10, padding: '22px 16px', border: `1px solid ${SAND}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 56, marginBottom: 4 }}><p.Icon /></div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: G900, textAlign: 'center', marginBottom: 4 }}>{p.name}</h3>
                <p style={{ fontSize: 12, color: G500, lineHeight: 1.6, marginBottom: 8 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 'auto' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize: 10, color: BLUE_D, padding: '2px 7px', background: '#EBF4FB', borderRadius: 10, fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 材質總覽 */}
      <section className="pkg-section" style={{ background: ACCENT_L }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 20, height: 1, background: BLUE }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: BLUE, textTransform: 'uppercase' }}>Materials</span>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: G900, marginBottom: 8 }}>材質總覽</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 32 }}>5 種主要材質，依商品需求選擇最適合的阻隔與外觀組合</p>
          <div className="pkg-grid-mat">
            {materials.map(m => (
              <div key={m.code} style={{ background: WHITE, borderRadius: 10, padding: '24px 18px', border: `1px solid ${SAND}`, textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: m.color, margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 20, color: '#333', opacity: 0.85 }}>{m.code}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: G900, marginBottom: 4 }}>{m.name}</div>
                <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: G700, background: '#F5F5F5', padding: '2px 10px', borderRadius: 10, marginBottom: 10 }}>{m.feature}</div>
                <p style={{ fontSize: 12, color: G500, lineHeight: 1.65, textAlign: 'left' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 材質選擇邏輯 + 上光膜 */}
      <section className="pkg-section" style={{ background: SAND }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: G900, marginBottom: 8 }}>材質選擇邏輯</h2>
            <p style={{ fontSize: 13, color: G500, marginBottom: 24 }}>依您的需求快速找到適合材質</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {materialLogic.map(l => (
                <div key={l.need} style={{ display: 'flex', alignItems: 'center', gap: 14, background: WHITE, borderRadius: 8, padding: '12px 16px', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: l.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: G700, flex: 1 }}>{l.need}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: BLUE_D }}>→ {l.recommend}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: G900, marginBottom: 8 }}>上光膜選項</h2>
            <p style={{ fontSize: 13, color: G500, marginBottom: 24 }}>亮面或霧面，影響整體視覺質感</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {laminationOptions.map(l => (
                <div key={l.code} style={{ background: WHITE, borderRadius: 8, padding: '16px 20px', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 22, fontWeight: 900, color: BLUE, minWidth: 32 }}>{l.code}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: G900 }}>{l.spec}</div>
                    <div style={{ fontSize: 12, color: G500 }}>{l.form}</div>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, background: l.finishColor, color: G900, padding: '3px 10px', borderRadius: 6 }}>{l.finish}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 數位印刷 vs 凹版印刷 */}
      <section className="pkg-section" style={{ background: CREAM }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: G900, marginBottom: 8 }}>印刷方式比較</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 32 }}>依訂購數量與靈活需求選擇最適合的印刷方式</p>
          <div className="pkg-grid-2">
            {printCompare.map(p => (
              <div key={p.label} style={{ background: p.highlight ? BLUE : WHITE, borderRadius: 10, padding: '28px 28px', border: p.highlight ? 'none' : `1px solid ${SAND}` }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: p.highlight ? WHITE : G900, marginBottom: 16 }}>{p.label}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {p.points.map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: p.highlight ? 'rgba(255,255,255,0.92)' : G700 }}>
                      <span style={{ color: p.highlight ? '#FFD700' : BLUE, fontWeight: 700 }}>✓</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 適用產品案例 */}
      <section className="pkg-section" style={{ background: ACCENT_L }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: G900, marginBottom: 8 }}>實際產品應用</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 32 }}>廣泛應用於各類消費品包裝</p>
          <div className="pkg-grid-apps">
            {applications.map(a => (
              <div key={a.name} style={{ background: WHITE, borderRadius: 10, padding: '28px 16px', textAlign: 'center', border: `1px solid ${SAND}` }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{a.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: G900 }}>{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 接單流程 */}
      <section className="pkg-section" style={{ background: G900 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: WHITE, marginBottom: 8 }}>接單流程</h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 36 }}>從詢價到出貨，7 個步驟清楚透明</p>
          <div className="process-flow">
            {processSteps.map((s, i) => (
              <>
                <div className="process-step" key={s.num}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: WHITE, marginBottom: 8 }}>{s.num}</div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: WHITE, whiteSpace: 'nowrap' }}>{s.label}</span>
                </div>
                {i < processSteps.length - 1 && <div className="process-arrow" key={`arrow-${i}`}>→</div>}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* 業務詢價清單 */}
      <section className="pkg-section" style={{ background: CREAM }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: G900, marginBottom: 8 }}>詢價前請準備</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 32 }}>提供以下資訊，業務 24 小時內回覆報價</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {quoteChecklist.map((item, i) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, background: WHITE, border: `1px solid ${SAND}`, borderRadius: 8, padding: '10px 20px' }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: BLUE, color: WHITE, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: G900 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 規格與條件 */}
      <section className="pkg-section" style={{ background: ACCENT_L }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: G900, marginBottom: 8 }}>規格與條件</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 32 }}>詳細規格請聯絡業務洽談</p>
          <div className="pkg-grid-specs">
            {specs.map(s => (
              <div key={s.label} style={{ padding: '20px 24px', borderRadius: 8, border: `1px solid ${SAND}`, background: WHITE }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: BLUE, textTransform: 'uppercase', marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 14, color: G900, fontWeight: 500 }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pkg-section" style={{ background: CREAM }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: G900, marginBottom: 8 }}>常見問題</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 32 }}>MOQ、交期、版費、打樣一次解答</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map(f => (
              <div key={f.q} style={{ background: WHITE, borderRadius: 10, padding: '22px 24px', border: `1px solid ${SAND}` }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: G900, marginBottom: 8 }}>Q: {f.q}</div>
                <div style={{ fontSize: 14, color: G500, lineHeight: 1.7 }}>A: {f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: G900, padding: '64px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: WHITE, marginBottom: 12 }}>開始您的客製化包裝計畫</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 32 }}>
            提供產品內容物、袋型、尺寸、數量與材質需求，業務團隊將在 24 小時內回覆專屬報價。
          </p>
          <a href="/quote" style={{ display: 'inline-block', background: BLUE, color: WHITE, padding: '14px 40px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            立即詢價 →
          </a>
        </div>
      </section>

      <div style={{ background: SAND, padding: '24px 40px', borderTop: `1px solid ${SAND}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <a href="/" style={{ fontSize: 13, color: G500, textDecoration: 'none' }}>← 返回首頁</a>
        </div>
      </div>
    </>
  );
}


