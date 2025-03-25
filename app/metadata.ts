import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Do more things with Warp - Discover & Share Terminal Use Cases',
  description: 'Explore curated Warp objects from the Warp team and community. Find productivity-boosting workflows, prompts, notebooks, and more, try them out, and share your own.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
  },
  metadataBase: new URL('https://explore-warp-prompts.vercel.app'), // TODO: update these links
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Do more things with Warp - Discover & Share Terminal Use Cases',
    description: 'Explore curated Warp objects from the Warp team and community. Find productivity-boosting workflows, prompts, notebooks, and more, try them out, and share your own.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Do more things with Warp',
    url: 'https://explore-warp-prompts.vercel.app', // TODO: update these links
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
    title: 'Do more things with Warp - Discover & Share Terminal Use Cases',
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
