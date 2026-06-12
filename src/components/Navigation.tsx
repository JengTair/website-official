'use client';

import { useState } from 'react';

const BLUE = '#7DAACB';
const BLUE_D = '#5B8EAF';
const RED = '#CE2626';
const RED_D = '#A81E1E';
const G900 = '#1A1A1A';
const G500 = '#737373';
const SAND = '#E8DBB3';
const CREAM = 'rgba(255,253,235,0.97)';
const WHITE = '#FFFFFF';

interface NavItem { label: string; href: string; children?: { label: string; href: string }[]; }
interface NavigationProps { items: NavItem[]; }

export default function Navigation({ items = [] }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: CREAM,
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${SAND}`,
      boxShadow: '0 1px 0 rgba(232,219,179,0.5)',
    }}>
      <style>{`
        .nav-desktop { display: none; }
        .nav-burger { display: block; }
        .nav-mobile-menu { display: flex; }
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-burger { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-container { padding: 0 16px !important; }
        }
        .nav-dropdown-wrap { position: relative; }
        .nav-dropdown-panel {
          position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
          background: #fff; border: 1px solid ${SAND}; border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0,0,0,.10);
          min-width: 160px; padding: 14px 0 6px; z-index: 200;
          animation: dd-in .15s ease;
        }
        @keyframes dd-in { from { opacity:0; transform: translateX(-50%) translateY(-4px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }
        .nav-dropdown-panel a {
          display: block; padding: 10px 20px;
          font-size: 14px; color: ${G500}; text-decoration: none;
          transition: background .15s, color .15s;
          white-space: nowrap;
        }
        .nav-dropdown-panel a:hover { background: #f7f3e8; color: ${G900}; }
        .nav-dd-arrow { display: inline-block; margin-left: 4px; font-size: 10px; transition: transform .2s; vertical-align: middle; }
        .nav-dd-arrow.open { transform: rotate(180deg); }
      `}</style>
      <nav className="nav-container" style={{
        maxWidth: 1140, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64, padding: '0 32px',
      }}>

        {/* Logo — 左側 */}
        <a href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/正台國際-LOGO-1.png" alt="正台國際" style={{ height: 52, width: 'auto', display: 'block' }} />
          <span style={{ fontSize: 19, fontWeight: 900, color: G900, letterSpacing: '-0.3px' }}>正台國際有限公司</span>
        </a>

        {/* 桌機選單 — 右側（CSS media query 控制） */}
        <div className="nav-desktop" style={{ gap: 32, alignItems: 'center' }}>
          {items.map(item => {
            const isContact = item.label === '聯絡我們';
            const hasChildren = item.children && item.children.length > 0;
            if (hasChildren) {
              return (
                <div key={item.href} className="nav-dropdown-wrap"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span style={{ fontSize: 14, color: openDropdown === item.label ? G900 : G500, fontWeight: 500, cursor: 'pointer', transition: 'color .2s', userSelect: 'none' }}>
                    {item.label}
                    <span className={`nav-dd-arrow${openDropdown === item.label ? ' open' : ''}`}>▾</span>
                  </span>
                  {openDropdown === item.label && (
                    <div className="nav-dropdown-panel">
                      {item.children!.map(child => (
                        <a key={child.href} href={child.href}>{child.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a key={item.href} href={item.href}
                style={isContact
                  ? { fontSize: 14, color: BLUE, fontWeight: 600, textDecoration: 'none', border: `1px solid ${BLUE}`, borderRadius: 6, padding: '6px 16px', transition: 'all .2s' }
                  : { fontSize: 14, color: G500, fontWeight: 500, textDecoration: 'none', transition: 'color .2s' }
                }
                onMouseEnter={e => isContact
                  ? (e.currentTarget.style.background = BLUE, e.currentTarget.style.color = WHITE)
                  : (e.currentTarget.style.color = G900)
                }
                onMouseLeave={e => isContact
                  ? (e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = BLUE)
                  : (e.currentTarget.style.color = G500)
                }
                onClick={e => handleClick(e, item.href)}
              >{item.label}</a>
            );
          })}
          <a href="/quote"
            style={{ background: RED, color: WHITE, padding: '8px 22px', borderRadius: 6, fontWeight: 700, fontSize: 14, textDecoration: 'none', transition: 'background .2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => (e.currentTarget.style.background = RED_D)}
            onMouseLeave={e => (e.currentTarget.style.background = RED)}
          >詢問報價</a>
        </div>

        {/* 漢堡按鈕 — 手機版（CSS media query 控制） */}
        <button className="nav-burger" onClick={() => setIsOpen(!isOpen)}
          style={{ padding: 8, background: 'none', border: 'none', cursor: 'pointer', lineHeight: 0 }}
          aria-label="開關選單">
          <svg width="24" height="24" fill="none" stroke={G900} strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
            {isOpen
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* 手機下拉選單 */}
      {isOpen && (
        <div className="nav-mobile-menu" style={{
          borderTop: `1px solid ${SAND}`,
          background: CREAM,
          padding: '16px 32px 24px',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {items.map(item => {
            const isContact = item.label === '聯絡我們';
            const hasChildren = item.children && item.children.length > 0;
            const expanded = mobileExpanded === item.label;
            if (hasChildren) {
              return (
                <div key={item.href}>
                  <div
                    style={{ fontSize: 15, color: G500, fontWeight: 500, padding: '10px 0', borderBottom: expanded ? 'none' : `1px solid ${SAND}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                    onClick={() => setMobileExpanded(expanded ? null : item.label)}
                  >
                    {item.label}
                    <span style={{ fontSize: 11, transition: 'transform .2s', display: 'inline-block', transform: expanded ? 'rotate(180deg)' : 'none' }}>▾</span>
                  </div>
                  {expanded && (
                    <div style={{ background: '#f7f3e8', borderRadius: 8, padding: '4px 0', marginBottom: 4, borderBottom: `1px solid ${SAND}` }}>
                      {item.children!.map(child => (
                        <a key={child.href} href={child.href}
                          style={{ display: 'block', fontSize: 14, color: G900, textDecoration: 'none', padding: '9px 16px' }}
                          onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                        >{child.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a key={item.href} href={item.href}
                style={{ fontSize: 15, color: isContact ? BLUE : G500, fontWeight: isContact ? 600 : 500, textDecoration: 'none', padding: '10px 0', borderBottom: `1px solid ${SAND}` }}
                onClick={e => handleClick(e, item.href)}
              >{item.label}</a>
            );
          })}
          <a href="/quote"
            style={{ background: RED, color: WHITE, padding: '12px', borderRadius: 6, fontWeight: 700, fontSize: 14, textDecoration: 'none', textAlign: 'center', marginTop: 16 }}
            onClick={() => setIsOpen(false)}
          >詢問報價</a>
        </div>
      )}
    </header>
  );
}
