import type { Metadata } from 'next';
import { Playfair_Display, Poppins, Noto_Sans_TC } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-heading',
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  preload: false,
});

const poppins = Poppins({
  variable: '--font-latin',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  preload: false,
});

const notoSans = Noto_Sans_TC({
  variable: '--font-body',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('http://www.smilekid.com'),
  title: '正台國際 | 46年貼紙設計製造領導者',
  description:
    '正台國際：擁有三麗鷗、蠟筆小新授權的專業貼紙製造商。提供客製化貼紙解決方案，46年專業經驗，BSCI認證，符合環保標準。',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${playfair.variable} ${poppins.variable} ${notoSans.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
