"use client"

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { DocsContent } from './docs-content'
import { DocsSidebar } from './docs-sidebar'
import { SiteHeader } from "@/components/site-header"
import { motion } from 'framer-motion'
import { Book, ArrowRight, Search, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DocsPageClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentSection, setCurrentSection] = useState("getting-started")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

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
    setSidebarOpen(false) // Close mobile sidebar
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-4"
                >
                  <Book className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs text-blue-400 font-medium">Documentation</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                >
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Learn TestFlow
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base md:text-lg text-gray-400 mb-6 max-w-lg mx-auto lg:mx-0"
                >
                  Master AI-powered validation with our comprehensive guides and tutorials.
                </motion.p>
                
                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                >
                  <Button 
                    onClick={() => handleSectionChange('getting-started')}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full h-10 px-6 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleSectionChange('ai-assistant')}
                    className="border-white/20 hover:bg-white/5 hover:border-white/30 rounded-full h-10 px-6 text-sm transition-all duration-300"
                  >
                    AI Assistant
                  </Button>
                </motion.div>
              </div>
              
              {/* Right Content - Search and Quick Links */}
              <div className="flex-1 max-w-md w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
                >
                  {/* Search Bar */}
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      type="search"
                      placeholder="Search docs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/5 border-white/10 pl-10 h-10 text-sm text-white placeholder:text-gray-500 rounded-lg hover:bg-white/[0.07] focus:bg-white/10 transition-colors"
                    />
                  </div>
                  
                  {/* Popular Topics */}
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Popular Topics</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'getting-started', label: 'Quick Start', icon: '🚀' },
                        { id: 'workflow-builder', label: 'Workflows', icon: '⚡' },
                        { id: 'ai-assistant', label: 'AI Assistant', icon: '🤖' },
                        { id: 'data-analysis', label: 'Analytics', icon: '📊' },
                      ].map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => handleSectionChange(topic.id)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] hover:border-white/10 transition-all duration-200 group"
                        >
                          <span className="text-sm">{topic.icon}</span>
                          <span className="text-xs text-gray-300 group-hover:text-white transition-colors">{topic.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex relative">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <div className={`
          fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-80 bg-black/60 backdrop-blur-xl border-r border-white/10 z-50 transform transition-transform duration-300 lg:transform-none
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <DocsSidebar 
            currentSection={currentSection} 
            onSectionChange={handleSectionChange}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-24 left-4 z-50 lg:hidden bg-black/60 backdrop-blur-xl border border-white/10"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <DocsContent currentSection={currentSection} />
        </div>
      </div>
    </div>
  )
} 