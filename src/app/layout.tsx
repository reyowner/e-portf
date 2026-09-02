import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://e-portfolio-reyowners-projects.vercel.app'),
  title: {
    default: 'Renato Reoner Jr. | Fullstack Developer',
    template: '%s | Renato Reoner Jr.',
  },
  description:
    'Fullstack Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
  openGraph: {
    title: 'Renato Reoner Jr. | Fullstack Developer',
    description:
      'Fullstack Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
    type: 'website',
    siteName: 'Renato Reoner Jr.',
  },
  twitter: {
    card: 'summary',
    title: 'Renato Reoner Jr. | Fullstack Developer',
    description:
      'Fullstack Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
