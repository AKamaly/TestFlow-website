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
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: pathname,
        page_search: searchParams.toString(),
        page_title: document.title
      });
    }
  }, [pathname, searchParams])

  return null
}

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
        <GoogleAnalytics />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black`}>
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
