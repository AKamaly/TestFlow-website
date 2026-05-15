import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'AI-Powered Hardware Testing | TestFlow',
  description: 'TestFlow automates lab hardware testing with AI — complete lab automation in minutes, from setup to results.',
  keywords: 'hardware testing, lab automation, AI testing platform, semiconductor validation, TestFlow',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'TestFlow — AI-Powered Hardware Testing',
    description: 'Automate lab hardware testing with AI — complete lab automation in minutes.',
    url: 'https://testflowinc.com',
    siteName: 'TestFlow',
    images: [
      {
        url: 'https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Tool%20Photo%20with%20humans-pTsgaiPajUSGimzCDl4ibwBqC3kqok.png?v=2',
        width: 1200,
        height: 630,
        alt: 'TestFlow — AI-Powered Hardware Testing Platform'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TestFlow — AI-Powered Hardware Testing',
    description: 'Automate lab hardware testing with AI — complete lab automation in minutes.',
    images: ['https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Tool%20Photo%20with%20humans-pTsgaiPajUSGimzCDl4ibwBqC3kqok.png?v=2'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#5B21B6',
  alternates: {
    canonical: 'https://testflowinc.com',
  },
} 