import { Plus_Jakarta_Sans, Noto_Serif_TC, Noto_Sans_TC, Klee_One, Hina_Mincho, BIZ_UDPGothic } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '700', '800'] });
const notoSans = Noto_Sans_TC({ subsets: ['latin'], weight: ['400', '500', '700'], preload: false });
const notoSerif = Noto_Serif_TC({ subsets: ['latin'], weight: ['400', '700', '900'], preload: false });
const kleeOne = Klee_One({ subsets: ['latin'], weight: ['400', '600'], preload: false });
const hinaMincho = Hina_Mincho({ subsets: ['latin'], weight: ['400'], preload: false });
const bizGothic = BIZ_UDPGothic({ subsets: ['latin'], weight: ['400', '700'], preload: false });

const G900 = '#1A1A1A';
const G500 = '#737373';
const BLUE = '#7DAACB';
const SAND = '#E8DBB3';
const CREAM = '#FFFDEB';

const combos = [
  {
    label: 'M — 明黑混排｜業界標準',
    desc: 'Noto Serif TC 標題 + Noto Sans TC 內文 — 台灣品牌網站最常見策略',
    headZH: notoSerif.className,
    body: notoSans.className,
    accent: '#5B8EAF',
  },
  {
    label: 'N — Klee One｜溫柔細膩',
    desc: 'Klee One — 介於楷體和圓體之間，手感溫潤',
    headZH: kleeOne.className,
    body: kleeOne.className,
    accent: '#C87B61',
  },
  {
    label: 'O — Hina Mincho｜纖細雜誌感',
    desc: 'Hina Mincho — 極細明體，有時尚雜誌質感',
    headZH: hinaMincho.className,
    body: hinaMincho.className,
    accent: '#374151',
  },
  {
    label: 'P — BIZ UDPGothic｜人文黑體',
    desc: 'BIZ UDPGothic — 比 Noto Sans 更有人文溫度的黑體',
    headZH: bizGothic.className,
    body: bizGothic.className,
    accent: '#0D9488',
  },
];

export default function FontPreviewPage() {
  return (
    <div style={{ background: '#f8f8f8', minHeight: '100vh', padding: '40px 24px' }}>
      <h1 style={{ textAlign: 'center', fontSize: 18, fontWeight: 700, color: G500, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 48 }}>
        字體預覽 — Font Preview
      </h1>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }}>
        {combos.map((c) => (
          <div key={c.label} style={{ background: CREAM, borderRadius: 16, overflow: 'hidden', border: `1px solid ${SAND}`, boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}>
            {/* 色條 */}
            <div style={{ height: 5, background: c.accent }} />
            <div style={{ padding: '32px 36px' }}>
              {/* 英文小標（固定 Jakarta Sans） */}
              <div className={jakarta.className} style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: c.accent, textTransform: 'uppercase', marginBottom: 10 }}>
                Taiwan Manufacturing · 46 Years
              </div>
              {/* 中文大標 */}
              <h2 className={c.headZH} style={{ fontSize: 36, fontWeight: 900, color: G900, lineHeight: 1.2, marginBottom: 6 }}>
                創意 × 品質 × 生活
              </h2>
              <h2 className={c.headZH} style={{ fontSize: 36, fontWeight: 900, color: c.accent, lineHeight: 1.2, marginBottom: 20 }}>
                為品牌創造更多可能
              </h2>
              {/* 內文 */}
              <p className={c.body} style={{ fontSize: 15, color: G500, lineHeight: 1.85, marginBottom: 24 }}>
                正台國際持有蠟筆小新、三麗鷗等多個國際知名 IP 的官方授權資格，協助品牌商及通路商製造合法、高質感的 IP 商品，46 年製造經驗守護每一件授權商品的品質。
              </p>
              {/* 按鈕示意 */}
              <div style={{ display: 'flex', gap: 10 }}>
                <span className={c.body} style={{ background: c.accent, color: '#fff', padding: '10px 24px', borderRadius: 7, fontWeight: 700, fontSize: 13 }}>立即詢價</span>
                <span className={c.body} style={{ border: `1.5px solid ${c.accent}`, color: c.accent, padding: '10px 24px', borderRadius: 7, fontWeight: 600, fontSize: 13 }}>瞭解更多</span>
              </div>
              {/* 標籤 */}
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${SAND}`, fontSize: 11, color: G500 }}>
                <strong style={{ color: G900 }}>{c.label}</strong><br />
                <span style={{ fontSize: 10, opacity: 0.7 }}>{c.desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
