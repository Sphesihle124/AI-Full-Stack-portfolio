import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://initial-ai-full-stack-portfolio.vercel.app"),
  title: {
    default: "AI Full-Stack Developer | Next.js, TypeScript, AI Systems",
    template: "%s | AI Full-Stack Developer",
  },
  description:
    "AI-focused full-stack developer delivering production-ready web and mobile platforms using Next.js, TypeScript, Tailwind CSS, and modern AI APIs.",
  openGraph: {
    title: "AI Full-Stack Developer Portfolio",
    description:
      "Explore real AI-powered full-stack projects: intelligent dashboards, content tools, and automation built with Next.js, TypeScript, and cloud-native services.",
    url: "/",
    siteName: "AI Full-Stack Developer Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Full-Stack Developer Portfolio",
    description:
      "Portfolio showcasing AI-driven, production-grade web and mobile applications for modern product teams and recruiters.",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
