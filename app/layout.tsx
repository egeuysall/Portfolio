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
    default: "Ege Uysal Portfolio | Creativity",
    template: "%s | Ege Uysal",
  },
  description: "Discover the portfolio of Ege Uysal, a creative professional specializing in photography, web development, and UI/UX design. Explore innovative projects showcasing modern web technologies, photography expertise, and digital design.",
  keywords: [
    "Photography Portfolio", "Web Development", "UI/UX Design", "Ege Uysal", "React Developer", "Next.js", 
    "JavaScript", "CSS", "Web Design", "Front-End Development", "App Development", "Creative Technology",
    "Photography", "Web Designer", "Tech Portfolio", "Full-Stack Developer", "Front-End Developer", 
    "UI/UX", "Creative Projects", "Digital Design"
  ],
  authors: [{ name: "Ege Uysal", url: "https://egeuysal.com" }],
  creator: "Ege Uysal",
  publisher: "Ege Uysal",
  applicationName: "Ege Uysal Portfolio",
  metadataBase: new URL("https://egeuysal.com"),

  alternates: {
    canonical: "https://egeuysal.com",
    languages: {
      "en-US": "https://egeuysal.com/",
      "tr-TR": "https://egeuysal.com/",
    },
  },

  openGraph: {
    title: "Ege Uysal Portfolio | Photography & Web Development",
    description: "Explore Ege Uysal's portfolio, featuring a diverse range of creative projects in photography, web development, and UI/UX design. See how modern technologies and design principles merge for impactful results.",
    url: "https://egeuysal.com",
    siteName: "Ege Uysal",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ege Uysal Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@egecreates",
    creator: "@egecreates",
    title: "Ege Uysal Portfolio | Photography & Web Development",
    description: "Discover Ege Uysal's portfolio, highlighting photography, web development, and UI/UX design projects with cutting-edge technologies.",
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
