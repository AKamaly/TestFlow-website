'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

// Add gtag type definition
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Analytics tracking utility
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      page_path: window.location.pathname,
      timestamp: new Date().toISOString(),
      ...parameters
    })
  }
}

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string, additionalData?: Record<string, any>) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location,
    ...additionalData
  })
}

// Track form submissions
export const trackFormSubmission = (formType: string, success: boolean, additionalData?: Record<string, any>) => {
  trackEvent('form_submission', {
    form_type: formType,
    success: success,
    ...additionalData
  })
}

// Track section views
export const trackSectionView = (sectionName: string, additionalData?: Record<string, any>) => {
  trackEvent('section_view', {
    section_name: sectionName,
    ...additionalData
  })
}

// Track CTA interactions
export const trackCTAClick = (ctaType: string, ctaText: string, location: string) => {
  trackEvent('cta_click', {
    cta_type: ctaType,
    cta_text: ctaText,
    cta_location: location
  })
}

// Track video interactions
export const trackVideoInteraction = (action: string, videoTitle?: string) => {
  trackEvent('video_interaction', {
    action: action,
    video_title: videoTitle || 'unknown'
  })
}

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link_click', {
    destination_url: url,
    link_text: linkText
  })
}

// Track page-specific events
export const trackPageSpecificEvent = (eventType: string, data: Record<string, any>) => {
  trackEvent(`page_${eventType}`, data)
}

// Section visibility tracker component
export function SectionTracker({ sectionId, sectionName }: { sectionId: string, sectionName: string }) {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView(sectionName, {
              section_id: sectionId,
              page_path: pathname
            })
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    )

    const element = document.getElementById(sectionId)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [sectionId, sectionName, pathname])

  return null
}

// Time on page tracker
export function TimeTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const startTime = Date.now()
    
    const trackTimeSpent = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000) // in seconds
      trackEvent('time_on_page', {
        time_spent_seconds: timeSpent,
        page_path: pathname
      })
    }

    // Track time spent when user leaves the page
    const handleBeforeUnload = () => {
      trackTimeSpent()
    }

    // Track time spent at intervals
    const interval = setInterval(() => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      if (timeSpent % 30 === 0 && timeSpent > 0) { // Every 30 seconds
        trackEvent('time_milestone', {
          time_spent_seconds: timeSpent,
          page_path: pathname
        })
      }
    }, 1000)

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      clearInterval(interval)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      trackTimeSpent()
    }
  }, [pathname])

  return null
}

// Enhanced page tracker with more detailed information
export function EnhancedPageTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const handleRouteChange = (path: string) => {
      // Determine page category based on URL
      let pageCategory = 'other'
      
      if (path.includes('/semiconductor')) pageCategory = 'industry_semiconductor'
      else if (path.includes('/electronics')) pageCategory = 'industry_electronics'
      else if (path.includes('/automotive')) pageCategory = 'industry_automotive'
      else if (path.includes('/research-labs')) pageCategory = 'industry_research'
      else if (path.includes('/blog')) pageCategory = 'content_blog'
      else if (path.includes('/docs')) pageCategory = 'content_documentation'
      else if (path.includes('/contact')) pageCategory = 'conversion_contact'
      else if (path.includes('/careers')) pageCategory = 'recruitment'
      else if (path === '/') pageCategory = 'homepage'

      // Track enhanced page view
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'enhanced_page_view', {
          page_path: path,
          page_title: document.title,
          page_category: pageCategory,
          timestamp: new Date().toISOString()
        })
      }
    }

    // Track route changes
    handleRouteChange(pathname)

  }, [pathname]) // Add pathname to dependencies

  return null
} 