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
  if (typeof window !== 'undefined') {
    // Track in Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, {
        page_path: window.location.pathname,
        timestamp: new Date().toISOString(),
        ...parameters
      })
    }
    
    // Track in Microsoft Clarity
    if ((window as any).clarity) {
      (window as any).clarity('event', eventName, parameters)
    }
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

// Track feature interactions with more detail
export const trackFeatureInteraction = (featureName: string, interactionType: string, details?: Record<string, any>) => {
  trackEvent('feature_interaction', {
    feature_name: featureName,
    interaction_type: interactionType,
    feature_category: details?.category || 'general',
    interaction_duration: details?.duration,
    interaction_success: details?.success,
    timestamp: new Date().toISOString()
  })
}

// Track user engagement level
export const trackEngagementScore = (score: number, factors: string[]) => {
  trackEvent('engagement_score', {
    score: score,
    contributing_factors: factors,
    session_duration: Math.round((Date.now() - window.performance.timing.navigationStart) / 1000),
    page_scroll_percentage: getScrollPercentage(),
    interactions_count: getInteractionsCount()
  })
}

// Helper function to calculate scroll percentage
const getScrollPercentage = () => {
  const h = document.documentElement
  const b = document.body
  const st = 'scrollTop'
  const sh = 'scrollHeight'
  return Math.round((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100)
}

// Helper function to track interaction count (implement in your state management)
const getInteractionsCount = () => {
  return (window as any).interactionCount || 0
}

// Enhanced section tracker with more metrics
export function EnhancedSectionTracker({ 
  sectionId, 
  sectionName, 
  category 
}: { 
  sectionId: string, 
  sectionName: string,
  category?: string 
}) {
  useEffect(() => {
    let viewStartTime: number
    let interactionCount = 0

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            viewStartTime = Date.now()
            trackSectionView(sectionName, {
              section_id: sectionId,
              section_category: category,
              viewport_percentage: Math.round(entry.intersectionRatio * 100)
            })
          } else if (viewStartTime) {
            // Track when user leaves section
            const viewDuration = Date.now() - viewStartTime
            trackEvent('section_engagement', {
              section_name: sectionName,
              view_duration_seconds: Math.round(viewDuration / 1000),
              interaction_count: interactionCount
            })
          }
        })
      },
      { 
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px'
      }
    )

    const element = document.getElementById(sectionId)
    if (element) {
      observer.observe(element)
      
      // Track interactions within section
      element.addEventListener('click', () => {
        interactionCount++
      })
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [sectionId, sectionName, category])

  return null
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
      else if (path.includes('/testflow-agent')) pageCategory = 'product_testflow_agent'
      else if (path.includes('/pricing')) pageCategory = 'conversion_pricing'
      else if (path.includes('/startups')) pageCategory = 'solution_startups'
      else if (path.includes('/midmarket')) pageCategory = 'solution_midmarket'
      else if (path.includes('/enterprise')) pageCategory = 'solution_enterprise'
      else if (path === '/') pageCategory = 'homepage'

      // Track enhanced page view with a delay to ensure title is set
      setTimeout(() => {
        if (typeof window !== 'undefined' && window.gtag) {
          const pageTitle = document.title || 'Atoms TestFlow - AI-powered validation platform'
          window.gtag('event', 'enhanced_page_view', {
            page_path: path,
            page_title: pageTitle,
            page_category: pageCategory,
            timestamp: new Date().toISOString()
          })
        }
      }, 100);
    }

    // Track route changes
    handleRouteChange(pathname)

  }, [pathname]) // Add pathname to dependencies

  return null
} 