import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { DefaultLayout } from './components/layouts/default';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hadi Nurhidayat - Web Developer & Tech Enthusiast',
  description:
    "Welcome to Hadi Nurhidayat's site, where you can find insights on web development, the latest technology trends, and valuable tips to enhance your coding skills.",
  keywords:
    'Hadi Nurhidayat, web developer, technology, coding tips, tutorials, JavaScript, React, Next.js',
  authors: [{ name: 'Hadi Nurhidayat' }],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      <DefaultLayout>
        <SpeedInsights />
        <Analytics />
        {children}
      </DefaultLayout>
    </html>
  );
}
