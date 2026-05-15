'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Menu, X, Search, Sun } from 'lucide-react'
import { GuideSidebar } from './guide-sidebar'
import { GuideContent } from './guide-content'
import Link from 'next/link'

const TOP_TABS = ['User Guide', 'Developer Guide', 'API Reference', 'Help & Support']

function GuidePageInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentSection, setCurrentSection] = useState('quick-start')
  const [activeTab, setActiveTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const s = searchParams.get('section')
    if (s) setCurrentSection(s)
  }, [searchParams])

  const handleSectionChange = (id: string) => {
    setCurrentSection(id)
    router.push(`/guide?section=${id}`, { scroll: false })
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 text-[15px]">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shrink-0">

        {/* Row 1: logo · search · support · dashboard · theme */}
        <div className="flex items-center gap-4 px-6 h-[60px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 mr-2">
            {/* Simple square logo mark */}
            <div className="w-7 h-7 bg-gray-900 rounded-md flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <span className="font-semibold text-gray-900 text-[15px] tracking-tight">TestFlow</span>
          </Link>

          {/* Search — centered */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 h-9 w-full max-w-[340px] bg-gray-100 rounded-lg px-3 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
              <Search className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm text-gray-600 placeholder:text-gray-400 outline-none"
              />
              <span className="text-xs text-gray-400 border border-gray-300 rounded px-1.5 py-0.5 font-mono leading-none">⌘K</span>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
              Support
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Dashboard
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
              <Sun className="w-4 h-4" />
            </button>
            {/* Mobile hamburger */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-gray-500"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>

        {/* Row 2: section tabs */}
        <div className="flex items-end gap-0 px-6 border-t border-gray-100">
          {TOP_TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`relative px-4 py-3 text-sm transition-colors whitespace-nowrap ${
                activeTab === i
                  ? 'text-gray-900 font-semibold'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab}
              {activeTab === i && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </header>

      {/* ── Body ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* Mobile overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            w-[260px] shrink-0 border-r border-gray-200 bg-white overflow-y-auto
            fixed md:sticky top-[104px] h-[calc(100vh-104px)] z-50
            transition-transform duration-200
            ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <GuideSidebar
            currentSection={currentSection}
            onSectionChange={handleSectionChange}
            searchQuery={search}
          />
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-y-auto min-w-0 h-[calc(100vh-104px)]">
          <GuideContent currentSection={currentSection} />
        </main>
      </div>
    </div>
  )
}

export function GuidePageClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <GuidePageInner />
    </Suspense>
  )
}
