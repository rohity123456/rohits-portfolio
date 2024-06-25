import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/theme';
import Header from '@/components/header';
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Rohit's Portfolio",
  description:
    'This is Rohit Yadav portfolio website, Rohit is a full stack engineer and a tech enthusiast.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang='en'>
        <body className={`${inter.className} 2xl:grid place-items-center`}>
          <div className='w-full max-w-[1920px]'>
            <div className='w-full'>
              <Header />
              <main className='w-full'>{children}</main>
            </div>
          </div>
        </body>
      </html>
      <Analytics />
    </ThemeProvider>
  );
}
