import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Full-Stack Developer Portfolio | Next.js, TypeScript, AI Systems",
    template: "%s | AI Full-Stack Developer",
  },
  description:
    "AI-focused Full-Stack Developer building production-grade web and mobile applications with Next.js, TypeScript, Tailwind CSS, and AI-powered backends.",
  openGraph: {
    title: "AI Full-Stack Developer Portfolio | Next.js, TypeScript, AI Systems",
    description:
      "Discover production-ready AI-powered web and mobile projects built with Next.js, TypeScript, Tailwind CSS, and modern cloud infrastructure.",
    url: "https://initial-ai-full-stack-portfolio.vercel.app",
    siteName: "AI Full-Stack Developer Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Full-Stack Developer Portfolio | Next.js, TypeScript, AI Systems",
    description:
      "AI-driven full-stack engineer delivering modern, scalable web and mobile solutions for product teams and recruiters.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
