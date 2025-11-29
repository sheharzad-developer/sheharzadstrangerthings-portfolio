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
  title: "Sheharzad Salahuddin | Full-Stack Developer",
  description: "Full-Stack Developer & Design Enthusiast. Building scalable web applications with React, Next.js, Python, and modern technologies.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Python", "Web Development", "Portfolio"],
  authors: [{ name: "Sheharzad Salahuddin" }],
  creator: "Sheharzad Salahuddin",
  openGraph: {
    title: "Sheharzad Salahuddin | Full-Stack Developer",
    description: "Full-Stack Developer & Design Enthusiast. Building scalable web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheharzad Salahuddin | Full-Stack Developer",
    description: "Full-Stack Developer & Design Enthusiast",
    creator: "@sheharzad_sala1",
  },
  robots: {
    index: true,
    follow: true,
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
