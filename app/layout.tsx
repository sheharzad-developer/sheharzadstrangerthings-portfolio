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

const SITE_URL = "https://sheharzad-portfolio.vercel.app";
const OG_IMAGE = "/S-Logo/S-Logo.jpg";

const DESCRIPTION =
  "Full-Stack Developer specializing in AI-integrated web & mobile apps — React Native, FastAPI, Next.js, and Python.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sheharzad Salahuddin | Full-Stack Developer",
  description: DESCRIPTION,
  authors: [{ name: "Sheharzad Salahuddin", url: SITE_URL }],
  creator: "Sheharzad Salahuddin",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/S-Logo/favicon.png",
    apple: "/S-Logo/favicon.png",
    shortcut: "/S-Logo/favicon.png",
  },
  openGraph: {
    title: "Sheharzad Salahuddin | Full-Stack Developer",
    description: DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Sheharzad Salahuddin",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sheharzad Salahuddin — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheharzad Salahuddin | Full-Stack Developer",
    description: DESCRIPTION,
    creator: "@sheharzad_sala1",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "azegAu5abVs3oG9gp40RB7VGFmzozYB_q24zNevcnaQ",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sheharzad Salahuddin",
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE}`,
  jobTitle: "Full-Stack Developer",
  description: DESCRIPTION,
  sameAs: [
    "https://github.com/sheharzad-developer",
    "https://www.linkedin.com/in/sheharzad-salahuddin-frontend-developer/",
    "https://leetcode.com/u/sheharzad-developer/",
    "https://medium.com/@sheharzadsalahuddin.90",
    "https://twitter.com/sheharzad_sala1",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
