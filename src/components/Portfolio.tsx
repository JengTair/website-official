'use client';

const BLUE = '#7DAACB';
const SAND = '#E8DBB3';
const CREAM = '#FFFDEB';
const NAVY = '#0D1E2E';
const G900 = '#1A1A1A';
const G500 = '#737373';

interface PortfolioItem { title: string; description: string; image?: string; }
interface PortfolioProps { items: PortfolioItem[]; }

const meta = [
  { tag: '授權產品', bg: 'linear-gradient(135deg,#f0f4f6,#e8ede9)', emoji: '🎠' },
  { tag: 'IP 合作',  bg: 'linear-gradient(135deg,#e8ede9,#d4e0d8)', emoji: '📺' },
  { tag: '品牌客製', bg: 'linear-gradient(135deg,#f5f5f5,#e8ede9)', emoji: '🛍️' },
];

const portfolioMeta = [
  { tag: '授權合作', gradient: `linear-gradient(135deg,${NAVY},#1a3a5a 60%,#2a5a8a)`, emoji: '🎠' },
  { tag: 'IP 聯名', gradient: `linear-gradient(135deg,${NAVY},#1a3a5a)`, emoji: '📺' },
  { tag: '品牌客製', gradient: `linear-gradient(135deg,${NAVY},#2a5a8a)`, emoji: '🛒' },
];

export default function Portfolio({ items }: PortfolioProps) {
  return (
    /* Dark section from v2 + asymmetric grid from v3 */
    <section
      id="portfolio"
      style={{ background: NAVY, padding: '96px 40px' }}
    >
      <style>{`
        .portfolio-grid { grid-template-columns: 2fr 1fr 1fr !important; }
        @media (max-width: 767px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
          #portfolio { padding: 48px 20px !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        {/* Heading */}
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: BLUE,
            marginBottom: 16,
          }}
        >
          Portfolio
        </div>
        <h2
          style={{
            fontSize: 38,
            fontWeight: 900,
            letterSpacing: '-1px',
            color: '#fff',
            marginBottom: 56,
          }}
        >
          精選<span style={{ color: SAND }}>合作案例</span>
        </h2>

        {/* Asymmetric grid: 1 big + 2 small */}
        <div
          className="portfolio-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: 20,
          }}
        >
          {/* Main card */}
          <div
            style={{
              borderRadius: 12,
              overflow: 'hidden',
              transition: 'transform .2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            {items[0] && (
              <>
                {items[0].image ? (
                  <div
                    style={{
                      height: 260,
                      backgroundImage: `url(${items[0].image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      height: 260,
                      background: portfolioMeta[0].gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 52,
                    }}
                  >
                    {portfolioMeta[0].emoji}
                  </div>
                )}
                <div
                  style={{
                    padding: '22px',
                    background: 'rgba(125,170,203,0.08)',
                    border: `1px solid rgba(125,170,203,0.15)`,
                    borderTop: 'none',
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: BLUE,
                      marginBottom: 6,
                    }}
                  >
                    {portfolioMeta[0].tag}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: CREAM, marginBottom: 6 }}>
                    {items[0].title}
                  </h3>
                  <p style={{ fontSize: 13, color: 'rgba(232,219,179,0.6)', lineHeight: 1.6 }}>
                    {items[0].description}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Small cards column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {items.slice(1, 3).map((item, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 12,
                  overflow: 'hidden',
                  flex: 1,
                  transition: 'transform .2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              >
                {item.image ? (
                  <div
                    style={{
                      height: 180,
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      height: 180,
                      background: portfolioMeta[i + 1]?.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 40,
                    }}
                  >
                    {portfolioMeta[i + 1]?.emoji}
                  </div>
                )}
                <div
                  style={{
                    padding: '18px 20px',
                    background: 'rgba(125,170,203,0.08)',
                    border: `1px solid rgba(125,170,203,0.15)`,
                    borderTop: 'none',
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: BLUE,
                      marginBottom: 4,
                    }}
                  >
                    {portfolioMeta[i + 1]?.tag}
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: CREAM, marginBottom: 4 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 12, color: 'rgba(232,219,179,0.6)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Third small card in its own column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {items.length > 3 && items.slice(3, 5).map((item, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 12,
                  overflow: 'hidden',
                  flex: 1,
                  transition: 'transform .2s',
                }}
              >
                <div
                  style={{
                    height: 180,
                    background: `linear-gradient(135deg,${NAVY},#2a5a8a)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 40,
                  }}
                >
                  📦
                </div>
                <div
                  style={{
                    padding: '18px 20px',
                    background: 'rgba(125,170,203,0.08)',
                    border: `1px solid rgba(125,170,203,0.15)`,
                    borderTop: 'none',
                  }}
                >
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: CREAM, marginBottom: 4 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 12, color: 'rgba(232,219,179,0.6)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            {/* Empty filler for visual balance if < 4 items */}
            {items.length <= 3 && (
              <div
                style={{
                  borderRadius: 12,
                  overflow: 'hidden',
                  flex: 1,
                  background: 'rgba(125,170,203,0.05)',
                  border: `1px solid rgba(125,170,203,0.12)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 24,
                  minHeight: 180,
                }}
              >
                <a
                  href="/quote"
                  style={{
                    textAlign: 'center',
                    color: BLUE,
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 12 }}>＋</div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>洽詢更多案例</div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
