'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'
import localFont from "next/font/local"
import "./globals.css"
import { GoogleAnalytics } from "@/components/google-analytics"
import { ScrollTracker } from '@/components/scroll-tracker'
import { EnhancedPageTracker, TimeTracker } from '@/components/analytics-tracker'

// Track page views
function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Wait for a short delay to ensure title is set
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        const pageTitle = document.title || 'Atoms TestFlow - AI-powered validation platform'
          ; (window as any).gtag('event', 'page_view', {
            page_path: pathname,
            page_search: searchParams.toString(),
            page_title: pageTitle
          });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, searchParams])

  return null
}

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>AI-Powered Hardware Testing | TestFlow</title>
        <meta name="description" content="TestFlow automates lab hardware testing with AI — complete lab automation in minutes, from setup to results." />
        <meta name="keywords" content="hardware testing, lab automation, AI testing platform, semiconductor validation, TestFlow" />
        <link rel="canonical" href="https://testflowinc.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "TestFlow",
              "alternateName": "TestFlow AI",
              "url": "https://testflowinc.com",
              "applicationCategory": "AI Hardware Testing Platform",
              "description": "TestFlow automates lab hardware testing using AI — complete lab automation in minutes.",
              "creator": {
                "@type": "Organization",
                "name": "TestFlow Technologies Inc.",
                "alternateName": "TestFlow AI"
              }
            })
          }}
        />
        <meta property="og:title" content="TestFlow — AI Chip Validation Platform" />
        <meta property="og:description" content="Automate lab hardware testing with AI — complete lab automation in minutes." />
        <meta property="og:url" content="https://testflowinc.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TestFlow" />
        <meta property="og:image" content="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/TestFlow.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="TestFlow — AI-Powered Hardware Testing Platform" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TestFlow — AI-Powered Hardware Testing" />
        <meta name="twitter:description" content="Automate lab hardware testing with AI — complete lab automation in minutes." />
        <meta name="twitter:image" content="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/TestFlow.png" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        <GoogleAnalytics />

        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v6ta3ljt69");
            `
          }}
        />
      </head>
      <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black font-sans`}>
        <Suspense fallback={null}>
          <PageViewTracker />
          <EnhancedPageTracker />
          <TimeTracker />
        </Suspense>
        <ScrollTracker />
        {children}
      </body>
    </html>
  )
}
