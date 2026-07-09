import Image from 'next/image';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import homepageData from '@/data/homepage.json';

export const metadata: Metadata = {
  title: '貼紙製造 | 正台國際',
  description: '正台國際 46 年專業貼紙製造，提供防水、抗UV、燙金壓凹、3D浮雕等多種工藝，客製化解決方案。',
};

const ACCENT = '#7DAACB';
const ACCENT_D = '#5B8EAF';
const ACCENT_L = '#F3F7F7';
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
        <path d="M6 8h20v16a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" stroke={ACCENT} strokeWidth="1.5"/>
        <path d="M6 8l4-4h12l4 4" stroke={ACCENT} strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 16h10M11 20h6" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: '46 年製造經驗',
    desc: '自 1980 年創立至今，深耕貼紙製造領域超過 46 年，累積豐富的材質與工藝技術。',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke={ACCENT} strokeWidth="1.5"/>
        <path d="M10 16l4 4 8-8" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '防水抗UV',
    desc: '採用特殊材質與印刷工藝，貼紙具備防水、防刮、抗紫外線等功能，耐久性佳。',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 4h16l4 8H4l4-8z" stroke={ACCENT} strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 12v16h24V12" stroke={ACCENT} strokeWidth="1.5"/>
        <path d="M12 20h8M12 24h5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: '多元加工工藝',
    desc: '提供燙金、壓凹、上光、3D浮雕、鏤空等豐富後加工選項，提升商品質感。',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke={ACCENT} strokeWidth="1.5"/>
        <path d="M10 12h12M10 16h8M10 20h10" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: '完整解決方案',
    desc: '從材質選擇、結構設計、印刷打樣到量產交付，一站式服務省去繁瑣溝通。',
  },
];

const materials = [
  { name: '貼紙製造機', desc: '可搭配不同主題與授權IP開發，打造兼具創意與互動性的DIY商品' },
  { name: '3D 浮雕貼', desc: '立體觸感與視覺層次兼具，適合品牌形象與高質感包裝' },
  { name: '泡棉貼', desc: '具有厚度與立體效果，適合裝飾、活動與展示用途' },
  { name: '轉印水晶貼', desc: '晶亮透明感強，轉印效果細緻，常用於精品與文創商品' },
  { name: '油水貼', desc: '內含流動亮片，兼具趣味互動與視覺效果' },
  { name: '行李箱貼(防水貼)', desc: '防水耐磨，適合長時間使用與戶外展示情境' },
  { name: '紓壓貼(屁屁貼)', desc: '趣味造型與觸感兼具，適合活動贈送與話題商品' },
  { name: '刺繡貼', desc: '具布感與精緻立體紋理，適合潮流、服飾與品牌聯名' },
  { name: '贈品', desc: '香氛貼、香氛卡、防水貼，適合活動贈送與品牌推廣' },
];

const crafts = [
  '燙金 / 燙銀', '壓凹 / 壓凸', '上光 / 局部上光',
  '3D 浮雕', '鏤空雕刻', '螢光印刷',
  '夜光印刷', '防偽貼紙', '貼紙製造機加工',
];

const specs = [
  { label: '最小尺寸', value: '10mm × 10mm' },
  { label: '最大尺寸', value: '依模具規格，可客製' },
  { label: '印刷色數', value: '最多 12 色輪轉印刷' },
  { label: '起訂量', value: '依尺寸及工藝，洽談最小起訂量' },
  { label: '交期', value: '打樣 5–10 天，量產 2–4 週' },
  { label: '認證', value: 'SGS、REACH、EN71 等國際認證' },
];

export default function StickerPage() {
  return (
    <>
      <Navigation items={homepageData.navigation} />

      {/* Hero */}
      <section style={{ background: ACCENT_L, borderBottom: `1px solid rgba(125,170,203,0.2)`, padding: '72px 40px 60px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 24, height: 1, background: ACCENT }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: ACCENT, textTransform: 'uppercase' }}>Sticker Manufacturing</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: G900, letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 20 }}>
            貼紙製造
          </h1>
          <p style={{ fontSize: 16, color: G500, lineHeight: 1.8, maxWidth: 600, marginBottom: 32 }}>
            46 年專業貼紙製造技術，從材質選擇、結構設計、印刷工藝到後加工，提供完整的客製化貼紙解決方案。防水、抗UV、多種工藝，滿足各類場景與品牌需求。
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['貼紙製造機', '3D浮雕貼', '防水貼紙', '燙金壓凹', '特殊材質'].map(t => (
              <span key={t} style={{ fontSize: 12, color: ACCENT, padding: '5px 12px', background: WHITE, borderRadius: 4, border: `1px solid rgba(125,170,203,0.3)`, fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 貼紙款式 */}
      <section style={{ background: CREAM, padding: '60px 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: G900, marginBottom: 8 }}>貼紙款式</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 32 }}>可搭配不同主題與授權IP開發，打造兼具創意與互動性的DIY商品</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16 }}>
            {materials.map(m => (
              <div key={m.name} style={{ background: ACCENT_L, borderRadius: 8, padding: '16px 16px 24px', border: `1px solid rgba(125,170,203,0.2)` }}>
                {m.name === '貼紙製造機' ? (
                  <div style={{ display: 'grid', gap: 12, marginBottom: 14 }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/貼紙製造/產品卡片圖-自有貼紙機-02.jpg"
                        alt="貼紙製造機 02"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/貼紙製造/產品卡片圖-自有貼紙機-03.jpg"
                        alt="貼紙製造機 03"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                ) : m.name === '3D 浮雕貼' ? (
                  <div style={{ display: 'grid', gap: 12, marginBottom: 14 }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/小新/產品卡片圖-小新3D浮雕貼-02.jpg"
                        alt="小新3D浮雕貼 02"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/小新/產品卡片圖-小新3D浮雕貼-03.jpg"
                        alt="小新3D浮雕貼 03"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                ) : m.name === '行李箱貼(防水貼)' ? (
                  <div style={{ display: 'grid', gap: 12, marginBottom: 14 }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/貼紙製造/產品卡片圖-行李箱貼-02.jpg"
                        alt="行李箱貼 02"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/貼紙製造/產品卡片圖-行李箱貼-03.jpg"
                        alt="行李箱貼 03"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                ) : m.name === '轉印水晶貼' ? (
                  <div style={{ display: 'grid', gap: 12, marginBottom: 14 }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/貼紙製造/產品卡片圖-冰雪星鑽貼-02.jpg"
                        alt="冰雪星鑽貼 02"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/貼紙製造/產品卡片圖-冰雪星鑽貼-03.jpg"
                        alt="冰雪星鑽貼 03"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                ) : m.name === '泡棉貼' ? (
                  <div style={{ display: 'grid', gap: 12, marginBottom: 14 }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/三麗鷗/產品卡片圖-三麗鷗泡棉貼-02.jpg"
                        alt="三麗鷗泡棉貼 02"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/三麗鷗/產品卡片圖-三麗鷗泡棉貼-04.jpg"
                        alt="三麗鷗泡棉貼 04"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                ) : m.name === '紓壓貼(屁屁貼)' ? (
                  <div style={{ display: 'grid', gap: 12, marginBottom: 14 }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/小新/產品卡片圖-小新屁屁貼-02.jpg"
                        alt="小新屁屁貼 02"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/小新/產品卡片圖-小新屁屁貼-03.jpg"
                        alt="小新屁屁貼 03"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                ) : m.name === '刺繡貼' ? (
                  <div style={{ display: 'grid', gap: 12, marginBottom: 14 }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/三麗鷗/產品卡片圖-三麗鷗刺繡貼-02.jpg"
                        alt="三麗鷗刺繡貼 02"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: WHITE }}>
                      <Image
                        src="/images/02_產品卡片圖800x600px-200KB/三麗鷗/產品卡片圖-三麗鷗刺繡貼-03.jpg"
                        alt="三麗鷗刺繡貼 03"
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                ) : null}
                <h3 style={{ fontSize: 15, fontWeight: 700, color: G900, marginBottom: 6 }}>{m.name}</h3>
                <p style={{ fontSize: 13, color: G500, lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 加工工藝 */}
      <section style={{ background: SAND, padding: '60px 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: G900, marginBottom: 8 }}>加工工藝</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 32 }}>豐富的後加工選項，提升商品質感與獨特性</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {crafts.map(c => (
              <span key={c} style={{ fontSize: 13, fontWeight: 600, color: ACCENT, padding: '8px 18px', background: WHITE, borderRadius: 6, border: `1px solid rgba(125,170,203,0.35)` }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 服務特色 */}
      <section style={{ background: CREAM, padding: '60px 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: G900, marginBottom: 8 }}>服務特色</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 36 }}>46 年技術積累，品質與交期雙重保障</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {features.map(f => (
              <div key={f.title} style={{ background: ACCENT_L, borderRadius: 8, padding: '28px 24px', border: `1px solid rgba(125,170,203,0.2)` }}>
                <div style={{ marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: G900, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: G500, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 規格與條件 */}
      <section style={{ background: SAND, padding: '60px 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: G900, marginBottom: 8 }}>規格與條件</h2>
          <p style={{ fontSize: 14, color: G500, marginBottom: 32 }}>詳細規格請聯絡業務洽談</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {specs.map(s => (
              <div key={s.label} style={{ padding: '20px 24px', borderRadius: 8, border: `1px solid rgba(125,170,203,0.25)`, background: WHITE }}>
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
          <h2 style={{ fontSize: 28, fontWeight: 900, color: WHITE, marginBottom: 12 }}>開始您的貼紙製造計畫</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 32 }}>
            填寫詢價表單，提供尺寸、數量、工藝需求，業務將在 24 小時內回覆報價。
          </p>
          <a href="/quote" style={{ display: 'inline-block', background: WHITE, color: ACCENT_D, padding: '14px 36px', borderRadius: 6, fontWeight: 700, fontSize: 15, textDecoration: 'none', letterSpacing: '0.04em' }}>
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
