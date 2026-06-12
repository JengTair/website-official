'use client';

const BLUE = '#7DAACB';
const SAND = '#E8DBB3';
const CREAM = '#FFFDEB';
const RED = '#CE2626';
const RED_D = '#A81E1E';
const G900 = '#1A1A1A';

export default function HomeCTA() {
  return (
    <div style={{ background: BLUE, borderRadius: 20, padding: 72, textAlign: 'center', margin: '0 32px 96px' }}>
      <h2 style={{ fontSize: 40, fontWeight: 900, color: CREAM, letterSpacing: '-1px', marginBottom: 14 }}>
        準備開始了嗎？<br />
        <span style={{ color: SAND }}>讓正台成為您的製造夥伴</span>
      </h2>
      <p style={{ fontSize: 16, color: 'rgba(255,253,235,0.7)', marginBottom: 40 }}>
        從初次諮詢到批量生產，我們全程陪伴每一個品牌成長
      </p>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
        <a href="/quote"
          style={{ background: RED, color: CREAM, padding: '14px 36px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'background .2s', boxShadow: '0 2px 12px rgba(206,38,38,0.4)' }}
          onMouseEnter={e => (e.currentTarget.style.background = RED_D)}
          onMouseLeave={e => (e.currentTarget.style.background = RED)}
        >立即詢問報價</a>
        <a href="/contact"
          style={{ border: `1px solid rgba(255,253,235,0.35)`, color: 'rgba(255,253,235,0.75)', padding: '13px 30px', borderRadius: 8, fontWeight: 700, fontSize: 15, background: 'transparent', textDecoration: 'none', transition: 'all .2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = CREAM; e.currentTarget.style.color = CREAM; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,253,235,0.35)'; e.currentTarget.style.color = 'rgba(255,253,235,0.75)'; }}
        >聯絡我們</a>
      </div>
    </div>
  );
}
