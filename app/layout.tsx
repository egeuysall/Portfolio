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
    default: "Ege Uysal Portfolio",
    template: "%s | Ege Uysal",
  },
  description: "Explore the portfolio of Ege Uysal, showcasing photography, web development, and creative projects.",
  keywords: ["Photography", "Web Development", "Portfolio", "Ege Uysal", "Creative Projects", "React", "Next.js", "UI/UX Design", "Front-End Development", "Full-Stack Development", "JavaScript", "HTML", "CSS", "Web Design", "App Development", "Photography Portfolio", "Tech Portfolio", "Creative Technology", "Developer", "Photographer", "Web Designer", "Front-End Developer", "Back-End Developer", "Mobile Development", "Coding", "Digital Design", "User Interface", "User Experience", "Productivity Tools", "Tech Projects"],
  authors: [{ name: "Ege Uysal", url: "https://egeuysal.com" }],
  creator: "Ege Uysal",
  publisher: "Ege Uysal",
  applicationName: "Ege Uysal Portfolio",
  metadataBase: new URL("https://egeuysal.com"),

  alternates: {
    canonical: "https://yourwebsite.com",
    languages: {
      "en-US": "https://egeuysal.com/",
      "tr-TR": "https://yourwebsite.com/",
    },
  },

  openGraph: {
    title: "Ege Uysal Portfolio",
    description: "Explore the portfolio of Ege Uysal, showcasing photography, web development, and creative projects.",
    url: "https://egeuysal.com",
    siteName: "Ege Uysal",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Website Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@egecreates",
    creator: "@egecreates",
    title: "Ege Uysal Portfolio",
    description: "Explore the portfolio of Ege Uysal, showcasing photography, web development, and creative projects.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon.ico",
  },

  manifest: "/manifest.json",

  robots: {
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nosnippet: false,
      noarchive: false,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
