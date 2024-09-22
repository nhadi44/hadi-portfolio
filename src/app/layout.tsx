import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hadi Nurhidayat - Web Developer & Tech Enthusiast",
  description:
    "Welcome to Hadi Nurhidayat's site, where you can find insights on web development, the latest technology trends, and valuable tips to enhance your coding skills.",
  keywords:
    "Hadi Nurhidayat, web developer, technology, coding tips, tutorials, JavaScript, React, Next.js",
  authors: [{ name: "Hadi Nurhidayat" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
