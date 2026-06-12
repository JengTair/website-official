'use client';

const BLUE = '#7DAACB';
const SAND = '#E8DBB3';
const CREAM = '#FFFDEB';
const G900 = '#1A1A1A';
const G500 = '#737373';

interface FooterProps {
  companyName: string;
  companyDescription: string;
  email: string;
  location: string;
  navigation: { label: string; href: string }[];
  year: number;
}

export default function HomeFooter({ companyName, companyDescription, email, location, navigation = [], year }: FooterProps) {
  return (
    <footer style={{ background: CREAM, borderTop: `4px solid ${BLUE}` }}>
      <style>{`
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; padding: 48px 40px 32px; }
        .footer-bottom { padding: 24px 40px; }
        @media (max-width: 767px) {
          .footer-grid { grid-template-columns: 1fr; gap: 32px; padding: 40px 20px 24px; }
          .footer-bottom { padding: 20px 20px; }
        }
      `}</style>
      <div style={{ maxWidth: 1160, margin: '0 auto' }} className="footer-grid">
        <div>
          <a href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <img src="/正台國際-LOGO-1.png" alt="正台國際" style={{ height: 48, width: 'auto', display: 'block' }} />
            <span style={{ fontSize: 19, fontWeight: 900, color: G900, letterSpacing: '-0.3px' }}>正台國際有限公司</span>
          </a>
          <p style={{ fontSize: 13, color: G500, lineHeight: 1.7, maxWidth: 280, margin: 0 }}>{companyDescription}</p>
        </div>

        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: G900, marginBottom: 16 }}>快速連結</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {navigation.map(item => (
              <li key={item.href}>
                <a href={item.href} style={{ fontSize: 13, color: G500, textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = G900)}
                  onMouseLeave={e => (e.currentTarget.style.color = G500)}
                >{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: G900, marginBottom: 16 }}>聯絡方式</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <li><a href={`mailto:${email}`} style={{ fontSize: 13, color: G500, textDecoration: 'none' }}>{email}</a></li>
            <li style={{ fontSize: 13, color: G500 }}>{location}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{ borderTop: `1px solid ${SAND}`, maxWidth: 1160, margin: '0 auto' }}>
        <p style={{ fontSize: 12, color: G500, margin: 0 }}>© {year} {companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
