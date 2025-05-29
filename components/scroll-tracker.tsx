'use client'

import { useEffect, useState } from 'react'

export function ScrollTracker() {
  const [maxScroll, setMaxScroll] = useState(0)
  const [hasTracked, setHasTracked] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100
      
      if (scrollPercent > maxScroll) {
        setMaxScroll(scrollPercent)
        
        // Track at specific scroll depths
        const depths = [25, 50, 75, 100]
        depths.forEach(depth => {
          if (scrollPercent >= depth && !hasTracked[`${depth}`]) {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'scroll_depth', {
                depth: depth,
                page_path: window.location.pathname,
                timestamp: new Date().toISOString()
              })
            }
            setHasTracked(prev => ({ ...prev, [`${depth}`]: true }))
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [maxScroll, hasTracked])

  return null
} 