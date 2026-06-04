import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://otoko-no-hokenshitsu.vercel.app'),
  title: '漢の保健室',
  description: '十人十漢 — 君はどの漢だ？16タイプ診断',
  openGraph: {
    title: '漢の保健室',
    description: '十人十漢 — 君はどの漢だ？16タイプ診断',
    url: 'https://otoko-no-hokenshitsu.vercel.app',
    siteName: '漢の保健室',
    images: [
      {
        url: '/group.png',
        width: 1200,
        height: 630,
        alt: '漢の保健室 — 十人十漢',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '漢の保健室',
    description: '十人十漢 — 君はどの漢だ？16タイプ診断',
    images: ['/group.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-sans antialiased bg-[#0D0705] text-[#FDF8F0]`}
      >
        {children}
      </body>
    </html>
  );
}
