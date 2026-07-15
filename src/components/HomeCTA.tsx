'use client';

const BLUE = '#7DAACB';
const SAND = '#E8DBB3';
const CREAM = '#FFFDEB';
const RED = '#CE2626';
const RED_D = '#A81E1E';

export default function HomeCTA() {
  const images = [
    '/images/02_產品卡片圖800x600px-200KB/貼紙製造/產品卡片圖-授權貼紙機-02.jpg',
    '/images/02_產品卡片圖800x600px-200KB/三麗鷗/產品卡片圖-三麗鷗刺繡貼-02.jpg',
    '/images/02_產品卡片圖800x600px-200KB/小新/產品卡片圖-小新油水貼-02.jpg',
  ];

  return (
    <div style={{ background: BLUE, borderRadius: 20, padding: 56, margin: '0 32px 96px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 18, marginBottom: 34 }}>
        {images.map((src, index) => (
          <div key={src} style={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: 16, overflow: 'hidden', boxShadow: '0 10px 24px rgba(0,0,0,0.12)', border: '1px solid rgba(255,255,255,0.22)' }}>
            <img
              src={src}
              alt={`產品照片 ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 40, fontWeight: 900, color: CREAM, letterSpacing: '-1px', marginBottom: 14 }}>
          準備開始了嗎？<br />
          <span style={{ color: SAND }}>讓正台成為您的製造夥伴</span>
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,253,235,0.7)', marginBottom: 40 }}>
          從初次諮詢到批量生產，我們全程陪伴每一個品牌成長
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/quote"
            style={{ background: RED, color: CREAM, padding: '14px 36px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'background .2s', boxShadow: '0 2px 12px rgba(206,38,38,0.4)' }}
            onMouseEnter={e => (e.currentTarget.style.background = RED_D)}
            onMouseLeave={e => (e.currentTarget.style.background = RED)}
          >
            立即詢問報價
          </a>
          <a
            href="/contact"
            style={{ border: `1px solid rgba(255,253,235,0.35)`, color: 'rgba(255,253,235,0.75)', padding: '13px 30px', borderRadius: 8, fontWeight: 700, fontSize: 15, background: 'transparent', textDecoration: 'none', transition: 'all .2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = CREAM; e.currentTarget.style.color = CREAM; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,253,235,0.35)'; e.currentTarget.style.color = 'rgba(255,253,235,0.75)'; }}
          >
            聯絡我們
          </a>
        </div>
      </div>
    </div>
  );
}
