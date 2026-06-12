'use client';

interface Capability { icon: string; title: string; description: string; }
interface CapabilitiesProps { capabilities: Capability[]; }

const BLUE = '#7DAACB';
const SAND = '#E8DBB3';
const CREAM = '#FFFDEB';
const G900 = '#1A1A1A';
const G500 = '#737373';

const milestones = [
  { year: '1980', text: '公司創立，開始貼紙製造業務' },
  { year: '2000/2002', text: '取得第一個國際 IP 授權合作；深圳工廠成立' },
  { year: '2013', text: '公司改組，正式更名為正台國際有限公司' },
  { year: '2020/2021', text: '完成 BSCI 認證，新增三麗鷗授權合作' },
];

const capExtended = [
  { num: '01', title: 'BSCI 驗廠認證', desc: '通過 BSCI 社會責任驗廠，確保勞工操作符合國際標準，讓每一個合作品牌都能信任我們的工廠。' },
  { num: '02', title: 'REACH 環保製造', desc: '符合歐盟 REACH 環保規範，原物料嚴格管控，守護地球也守護品牌聲譽。' },
  { num: '03', title: '國際 IP 授權', desc: '擁有三麗鷗、蠟筆小新等多項國際 IP 授權，為您的產品增添正版授權價值，打造消費者喜愛的聯名商品。' },
  { num: '04', title: '快速交期保證', desc: '高效生產排程，明確交期承諾。從樣品確認到批量出貨，全程即時追蹤。' },
  { num: '05', title: '客製化設計', desc: '資深設計師團隊，從尺寸、材質、工藝到印刷效果，提供完整客製方案。' },
  { num: '06', title: '全球出口經驗', desc: '產品遍及歐美亞太，熟悉各市場法規要求，讓您的訂單跨境無阻礙。' },
];

export default function Capabilities({ capabilities }: CapabilitiesProps) {
  void capabilities;
  return (
    <section
      id="capabilities"
      style={{
        background: CREAM,
        borderTop: `1px solid ${SAND}`,
        borderBottom: `1px solid ${SAND}`,
        padding: '52px 40px',
      }}
    >
      <style>{`
        .cap-section { padding: 52px 40px; }
        .cap-two-col { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; align-items: start; }
        .cap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
        @media (max-width: 767px) {
          .cap-section { padding: 40px 20px; }
          .cap-two-col { grid-template-columns: 1fr; gap: 32px; }
          .cap-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 24, height: 1, background: BLUE }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: BLUE, textTransform: 'uppercase' }}>
            About Us &amp; Why Choose Us
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 900, letterSpacing: '-0.5px', color: G900, lineHeight: 1.1, marginBottom: 32 }}>
          46年製造經驗 · <span style={{ fontWeight: 300, color: BLUE }}>選擇正台的理由</span>
        </h2>

        {/* Two-column: intro + capabilities grid */}
        <div className="cap-two-col">

          {/* Left: company intro */}
          <div>
            <p style={{ fontSize: 14, color: G500, lineHeight: 1.8, marginBottom: 16 }}>
              正台國際有限公司（Jeng Tair International Ltd.）創立於 1980 年，總部位於台灣，大陸設有工廠負責組裝與包裝，是專業的 IP 授權商品、貼紙及客製化軟包裝製造商。
            </p>
            <p style={{ fontSize: 13, color: G500, lineHeight: 1.75, marginBottom: 10 }}>
              <strong style={{ color: G900 }}>國際品牌：</strong>Avery、Sun-star、可口可樂、寶格麗
            </p>
            <p style={{ fontSize: 13, color: G500, lineHeight: 1.75, marginBottom: 10 }}>
              <strong style={{ color: G900 }}>通路夥伴：</strong>Walmart、TESCO、Disney Store、LEGOLAND、全家 / 7-ELEVEN / 萊爾富、屈臣氏、康是美、家樂福
            </p>
            <p style={{ fontSize: 13, color: G500, lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: G900 }}>OEM 客戶：</strong>咖波、黃阿瑪、星展銀行
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: BLUE, flexShrink: 0 }}>{m.year}</span>
                  <span style={{ fontSize: 12, color: G500 }}>{m.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3×2 capabilities grid */}
          <div className="cap-grid">
            {capExtended.map((cap, i) => (
              <div
                key={i}
                style={{
                  padding: '18px 16px',
                  background: i % 2 === 0 ? 'rgba(125,170,203,0.07)' : CREAM,
                  borderLeft: `3px solid ${i % 3 === 0 ? BLUE : 'transparent'}`,
                  transition: 'background .2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(125,170,203,0.14)')}
                onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? 'rgba(125,170,203,0.07)' : CREAM)}
              >
                <span style={{ fontSize: 10, fontWeight: 700, color: BLUE, display: 'block', marginBottom: 6, letterSpacing: '1px' }}>{cap.num}</span>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: G900, marginBottom: 5 }}>{cap.title}</h3>
                <p style={{ fontSize: 11, color: G500, lineHeight: 1.6, margin: 0 }}>{cap.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
