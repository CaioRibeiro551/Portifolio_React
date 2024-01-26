import './globals.scss';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const inter = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  title: 'Caio Ribeiro',
  description: 'Caio Ribeiro is a Software Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
