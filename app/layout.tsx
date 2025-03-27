import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Metadata, Viewport } from 'next';

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: 'Do more things with Warp - Discover & Share Terminal Use Cases',
  description: 'Explore curated Warp objects from the Warp team and community. Find productivity-boosting workflows, prompts, notebooks, and more, try them out, and share your own.',
  metadataBase: new URL('https://dothings.warp.dev'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Do things with Warp - Discover & Share Terminal Use Cases',
    description: 'Explore curated Warp objects from the Warp team and community. Find productivity-boosting workflows, prompts, notebooks, and more, try them out, and share your own.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Do more things with Warp',
    url: 'https://dothings.warp.dev',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Do more things with Warp - Discover and share terminal productivity use cases',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Do things with Warp - Discover & Share Terminal Use Cases',
    description: 'Explore curated Warp objects from the Warp team and community. Find productivity-boosting workflows, prompts, notebooks, and more, try them out, and share your own.',
    images: ['/images/og-image.png'],
    creator: '@warpdotdev',
    site: '@warpdotdev',
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
  verification: {
    google: 'your-google-site-verification', // TODO: update this
  },
  category: 'technology',
  keywords: ['warp', 'terminal', 'use cases', 'packs', 'productivity', 'developer tools', 'command line', 'shell', 'AI', 'artificial intelligence', 'LLM-assisted coding', 'AI assistant', 'AI workflows', 'AI prompts', 'AI automation', 'AI devtools', 'AI tools', 'AI agents', 'AI agents tools', 'AI agents workflows', 'AI agents prompts', 'AI agents automation', 'AI agents devtools'],
  authors: [{ name: 'hongyi-chen' }],
  creator: 'hongyi-chen',
  publisher: 'Warp',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
