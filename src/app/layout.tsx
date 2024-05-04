import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/theme';
import Header from '@/components/header';

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
        <body className={`${inter.className} grid place-items-center`}>
          <div className='w-full max-w-[1400px]'>
            <div className=''>
              <Header />
              <main>{children}</main>
            </div>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
