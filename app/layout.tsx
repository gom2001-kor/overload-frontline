import type {Metadata} from 'next';
import { Newsreader, Public_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '방치된 위협, 도로 위의 시한폭탄 과적 차량',
  description: '과적 차량 실태 보고서 및 정책 제안서',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko" className={`${newsreader.variable} ${publicSans.variable}`}>
      <body className="font-sans antialiased selection:bg-tertiary selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
