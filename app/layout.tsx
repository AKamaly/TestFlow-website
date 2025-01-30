import localFont from "next/font/local"
import "./globals.css"
import { GoogleAnalytics } from "@/components/google-analytics"

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

export const metadata = {
  title: "Atoms TestFlow - Hardware Validation Platform",
  description: "Validate and launch your hardware faster with AI-powered automation",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <style>{`
          html {
            zoom: 1.05;
            -moz-transform: scale(1.05);
            -moz-transform-origin: 0 0;
          }
        `}</style>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
