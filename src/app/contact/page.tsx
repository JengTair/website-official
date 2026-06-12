'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomeFooter from '@/components/HomeFooter';
import homepageData from '@/data/homepage.json';

const BLUE = '#7DAACB';
const SAND = '#E8DBB3';
const CREAM = '#FFFDEB';
const RED = '#CE2626';
const G900 = '#1A1A1A';
const G500 = '#737373';
const WHITE = '#FFFFFF';

const faqs = [
  { q: '最低訂購數量是多少？', a: '依產品類型不同，最低訂購量約 500～1,000 張起，歡迎來信詢問實際需求。' },
  { q: '交貨期需要多久？', a: '一般訂單約 15～25 個工作天，急單可依需求加急處理，請洽業務確認。' },
  { q: '可以提供客製化服務嗎？', a: '可以。我們提供尺寸、材質、印刷工藝的完整客製化服務，請提供設計稿與需求說明。' },
  { q: '支援哪些設計格式？', a: '接受 AI、EPS、PDF 向量格式，解析度需 300dpi 以上。' },
  { q: '有提供樣品嗎？', a: '可提供現有材質與印刷樣品，客製化打樣需收取樣品費，正式下單後可折抵。' },
  { q: '如何取得正式報價？', a: '請填寫線上詢價表單或直接來電，業務團隊收到後將盡快回覆。' },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: CREAM, minHeight: '100vh' }}>
      <Navigation items={homepageData.navigation} />

      {/* Hero */}
      <section style={{ padding: '120px 40px 72px', borderBottom: `1px solid ${SAND}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 24, height: 1, background: BLUE }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: BLUE, textTransform: 'uppercase' }}>Contact Us</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 900, letterSpacing: '-2px', color: G900, lineHeight: 1.08, marginBottom: 20 }}>
            聯絡<span style={{ color: BLUE }}>正台</span>
          </h1>
          <p style={{ fontSize: 16, color: G500, lineHeight: 1.8, maxWidth: 480, margin: 0 }}>
            無論您有詢價、合作或客製化需求，歡迎來信或撥打電話，我們將盡快回覆。
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section style={{ padding: '64px 40px', borderBottom: `1px solid ${SAND}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: G900, letterSpacing: '-0.5px', marginBottom: 32 }}>聯絡資訊</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(125,170,203,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={BLUE} strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: G900, marginBottom: 4 }}>地址</div>
                  <div style={{ fontSize: 14, color: G500, lineHeight: 1.6 }}>台灣新北市新莊區<br />瓊林南路 212 號</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(125,170,203,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={BLUE} strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: G900, marginBottom: 4 }}>電話</div>
                  <div style={{ fontSize: 14, color: G500 }}>+886 2 2203 0555</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(125,170,203,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={BLUE} strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: G900, marginBottom: 4 }}>Email</div>
                  <div style={{ fontSize: 14, color: G500 }}>jing_li02@smilekid.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(125,170,203,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={BLUE} strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: G900, marginBottom: 4 }}>營業時間</div>
                  <div style={{ fontSize: 14, color: G500, lineHeight: 1.6 }}>週一至週五 08:30–17:30<br />週六、日及國定假日休息</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: G900, letterSpacing: '-0.5px', marginBottom: 32 }}>傳送訊息</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: G900, display: 'block', marginBottom: 6 }}>姓名</label>
                  <input type="text" placeholder="您的姓名" style={{ width: '100%', padding: '10px 14px', border: `1px solid ${SAND}`, borderRadius: 8, fontSize: 14, color: G900, background: WHITE, outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: G900, display: 'block', marginBottom: 6 }}>公司</label>
                  <input type="text" placeholder="公司名稱（選填）" style={{ width: '100%', padding: '10px 14px', border: `1px solid ${SAND}`, borderRadius: 8, fontSize: 14, color: G900, background: WHITE, outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: G900, display: 'block', marginBottom: 6 }}>Email</label>
                <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '10px 14px', border: `1px solid ${SAND}`, borderRadius: 8, fontSize: 14, color: G900, background: WHITE, outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: G900, display: 'block', marginBottom: 6 }}>詢問主題</label>
                <input type="text" placeholder="例：貼紙報價、材質諮詢" style={{ width: '100%', padding: '10px 14px', border: `1px solid ${SAND}`, borderRadius: 8, fontSize: 14, color: G900, background: WHITE, outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: G900, display: 'block', marginBottom: 6 }}>訊息內容</label>
                <textarea rows={5} placeholder="請描述您的需求..." style={{ width: '100%', padding: '10px 14px', border: `1px solid ${SAND}`, borderRadius: 8, fontSize: 14, color: G900, background: WHITE, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" style={{ padding: '14px 32px', background: RED, color: WHITE, border: 'none', borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: 'pointer', letterSpacing: '0.02em' }}>
                送出訊息
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 40px', borderBottom: `1px solid ${SAND}` }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <div style={{ width: 24, height: 1, background: BLUE }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: BLUE, textTransform: 'uppercase' }}>FAQ</span>
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 900, color: G900, letterSpacing: '-1px', marginBottom: 40 }}>常見問題</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: WHITE, border: `1px solid ${SAND}`, borderRadius: 12, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontSize: 15, fontWeight: 700, color: G900 }}>{faq.q}</span>
                  <span style={{ fontSize: 18, color: BLUE, fontWeight: 300, flexShrink: 0, marginLeft: 16 }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 18px', fontSize: 14, color: G500, lineHeight: 1.8 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', background: BLUE }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 900, color: WHITE, letterSpacing: '-1.5px', marginBottom: 16 }}>
            準備好開始了嗎？
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
            立即填寫詢價表單，我們的業務團隊將在一個工作天內與您聯繫。
          </p>
          <a href="/quote" style={{ display: 'inline-block', padding: '16px 40px', background: RED, color: WHITE, borderRadius: 8, fontSize: 16, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.02em' }}>
            立即詢問報價
          </a>
        </div>
      </section>

      <HomeFooter
        companyName={homepageData.companyInfo.name}
        companyDescription={homepageData.companyInfo.description}
        email={homepageData.companyInfo.email}
        location={homepageData.companyInfo.location}
        navigation={homepageData.navigation}
        year={new Date().getFullYear()}
      />
    </div>
  );
}
