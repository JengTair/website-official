import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import HomeCTA from '@/components/HomeCTA';
import HomeFooter from '@/components/HomeFooter';
import homepageData from '@/data/homepage.json';

export const metadata: Metadata = {
  title: '正台國際 | 46年貼紙設計製造領導者',
  description:
    '正台國際：擁有三麗鷗、蠟筆小新授權的專業貼紙製造商。提供客製化貼紙解決方案，46年專業經驗，BSCI認證，符合環保標準。',
  keywords: [
    '貼紙製造',
    '客製化貼紙',
    '迪士尼授權',
    '貼紙代工',
    '台灣製造',
    'SGS認證',
  ],
  openGraph: {
    title: '正台國際 | 46年貼紙設計製造領導者',
    description:
      '擁有迪士尼、辛普森家族授權的專業貼紙製造商，提供客製化貼紙解決方案',
    url: 'http://www.smilekid.com',
    siteName: '正台國際',
    locale: 'zh_TW',
    type: 'website',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: homepageData.companyInfo.name,
    alternateName: homepageData.companyInfo.name_en,
    url: homepageData.companyInfo.website,
    email: homepageData.companyInfo.email,
    description: homepageData.companyInfo.description,
    foundingDate: homepageData.companyInfo.founded,
    location: {
      '@type': 'Place',
      name: homepageData.companyInfo.location,
    },
    knowsAbout: ['貼紙設計', '貼紙製造', '客製化設計', 'Disney授權', 'SGS認證'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/[\u007f-\uffff]/g, c => `\\u${c.charCodeAt(0).toString(16).padStart(4, '0')}`) }}
      />

      <Navigation items={homepageData.navigation} />

      <main className="min-h-screen">
        <Hero
          title={homepageData.hero.title}
          subtitle={homepageData.hero.subtitle}
          description={homepageData.hero.description}
          backgroundImage={homepageData.hero.backgroundImage}
          cta={homepageData.hero.cta}
        />

        <Capabilities capabilities={homepageData.capabilities} />

        <HomeCTA />
      </main>

      <HomeFooter
        companyName={homepageData.companyInfo.name}
        companyDescription={homepageData.companyInfo.description}
        email={homepageData.companyInfo.email}
        location={homepageData.companyInfo.location}
        navigation={homepageData.navigation}
        year={new Date().getFullYear()}
      />
    </>
  );
}
