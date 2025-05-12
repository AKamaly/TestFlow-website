"use client"

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { DocsContent } from './docs-content'
import { DocsSidebar } from './docs-sidebar'
import { SiteHeader } from "@/components/site-header"

export function DocsPageClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentSection, setCurrentSection] = useState("getting-started")

  // Update the URL when section changes
  useEffect(() => {
    const section = searchParams.get('section')
    if (section) {
      setCurrentSection(section)
    }
  }, [searchParams])

  // Handle section change
  const handleSectionChange = (section: string) => {
    setCurrentSection(section)
    router.push(`/docs?section=${section}`, { scroll: false })
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1 pt-20">
        <DocsSidebar currentSection={currentSection} onSectionChange={handleSectionChange} />
        <DocsContent currentSection={currentSection} />
      </div>
    </div>
  )
} 