'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { ArrowRight, ChevronDown, Cpu, FlaskRoundIcon as Flask, Car, CircuitBoard, Book, FileText, Users, Rocket, Building2, PlayCircle, Menu, X, ChevronRight } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import React from "react"

const solutionItems = [
  {
    label: "Startups",
    href: "/startups",
    icon: Rocket,
    description: "Launch faster than ever before with AI-powered validation designed for startups"
  },
  {
    label: "Midmarket",
    href: "/midmarket",
    icon: Building2,
    description: "Enterprise features at midmarket prices - scale your validation efficiently"
  },
  {
    label: "Enterprise",
    href: "/enterprise",
    icon: Users,
    description: "Complete enterprise-grade validation platform for large organizations"
  }
]

const industryItems = [
  {
    label: "Automotive",
    href: "/automotive",
    icon: Car,
    description: "For automotive components and systems"
  }
]

const resourceItems = {
  company: [
    {
      label: "About Us",
      href: "/about",
      icon: Users,
      description: "Learn about our mission and team"
    },
    {
      label: "Careers",
      href: "/careers",
      icon: Building2,
      description: "Join our growing team"
    },
    {
      label: "Newsroom",
      href: "/blog",
      icon: FileText,
      description: "Latest news and updates"
    },
    {
      label: "Atoms Labs",
      href: "#",
      icon: Rocket,
      description: "Coming Soon",
      badge: "Soon"
    }
  ],
  learn: [
    {
      label: "Demos",
      href: "#",
      icon: PlayCircle,
      description: "Coming Soon",
      badge: "Soon"
    },
    {
      label: "Help Center",
      href: "/help-center",
      icon: Book,
      description: "Guides and documentation"
    },
    {
      label: "Documentation",
      href: "/docs",
      icon: FileText,
      description: "Comprehensive guides and API reference"
    }
  ],
  discover: [
    {
      label: "Blog",
      href: "/blog",
      icon: FileText,
      description: "Insights and articles"
    },
    {
      label: "Case Studies",
      href: "#",
      icon: Book,
      description: "Coming Soon",
      badge: "Soon"
    },
    {
      label: "Changelog",
      href: "#",
      icon: FileText,
      description: "Coming Soon",
      badge: "Soon"
    }
  ]
}

// Mobile Menu Component
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentView, setCurrentView] = useState<'main' | 'solutions' | 'resources'>('main')
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const scrollToSection = (sectionId: string) => {
    onClose()
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`
      return
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  const handleBack = () => {
    setCurrentView('main')
  }

  const handleClose = () => {
    setCurrentView('main')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
      
      {/* Menu Panel */}
      <div className={`absolute right-0 top-0 h-full w-full bg-black transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          {currentView !== 'main' && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-white"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              <span>Back</span>
            </button>
          )}
          {currentView === 'main' && <div />}
          <button
            onClick={handleClose}
            className="p-2 text-white hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentView === 'main' && (
            <div className="space-y-8">
              {/* Talk to Sales Button Only */}
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  onClick={handleClose}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Talk to Sales
                </Link>
              </div>

              {/* Main Menu Items */}
              <div className="space-y-6">
                <button
                  onClick={() => setCurrentView('solutions')}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-white text-xl">Solutions</span>
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={() => setCurrentView('resources')}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-white text-xl">Resources</span>
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={() => scrollToSection('demo')}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-white text-xl">TestFlow</span>
                </button>
              </div>
            </div>
          )}

          {currentView === 'solutions' && (
            <div className="space-y-6">
              <h2 className="text-white text-2xl font-semibold mb-8">Solutions</h2>
              
              {solutionItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={handleClose}
                    className="block p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium text-lg mb-2">{item.label}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}

              {/* Demo Video */}
              <Link
                href="https://www.linkedin.com/posts/ali-kamaly_ai-semiconductors-chipvalidation-activity-7318282716632768514-wHcz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACN1KhwBnC3-LWXI3D_lSyPYWz4NXvxyEYk"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="block p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <PlayCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-lg mb-2">Watch Demo</h3>
                    <p className="text-gray-400 text-sm">See TestFlow in action</p>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {currentView === 'resources' && (
            <div className="space-y-8">
              <h2 className="text-white text-2xl font-semibold">Resources</h2>
              
              {/* Company Section */}
              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Company</h3>
                <div className="space-y-4">
                  {resourceItems.company.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={item.badge === "Soon" ? (e) => e.preventDefault() : handleClose}
                        className={`flex items-center gap-4 p-3 rounded-lg ${item.badge !== "Soon" ? "hover:bg-white/5" : "opacity-50"} transition-colors`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-white">{item.label}</span>
                          {item.badge && (
                            <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Learn Section */}
              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Learn</h3>
                <div className="space-y-4">
                  {resourceItems.learn.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={item.badge === "Soon" ? (e) => e.preventDefault() : handleClose}
                        className={`flex items-center gap-4 p-3 rounded-lg ${item.badge !== "Soon" ? "hover:bg-white/5" : "opacity-50"} transition-colors`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-white">{item.label}</span>
                          {item.badge && (
                            <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Discover Section */}
              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Discover</h3>
                <div className="space-y-4">
                  {resourceItems.discover.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={item.badge === "Soon" ? (e) => e.preventDefault() : handleClose}
                        className={`flex items-center gap-4 p-3 rounded-lg ${item.badge !== "Soon" ? "hover:bg-white/5" : "opacity-50"} transition-colors`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-white">{item.label}</span>
                          {item.badge && (
                            <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Reference for the header center dot
  const centerDotRef = React.useRef<HTMLDivElement>(null)
  
  // State to store the dot position when the dropdown opens
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  
  // Add refs for the dropdown triggers to get their positions
  const solutionsTriggerRef = React.useRef<HTMLDivElement>(null)
  const resourcesTriggerRef = React.useRef<HTMLDivElement>(null)
  
  // Add timeout refs for delayed dropdown closing
  const solutionsTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const resourcesTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  // Functions to handle mouse enter/leave with a delay
  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current)
      solutionsTimeoutRef.current = null
    }
    setIsSolutionsOpen(true)
  }

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false)
    }, 150) // 150ms delay before closing
  }

  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current)
      resourcesTimeoutRef.current = null
    }
    setIsResourcesOpen(true)
  }

  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false)
    }, 150) // 150ms delay before closing
  }
  
  // Update position when either dropdown opens
  React.useEffect(() => {
    if ((isSolutionsOpen || isResourcesOpen) && centerDotRef.current) {
      const rect = centerDotRef.current.getBoundingClientRect()
      setDotPosition({ 
        x: rect.left + rect.width / 2, 
        y: rect.bottom 
      })
    }
  }, [isSolutionsOpen, isResourcesOpen])

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg relative">
        <div className="container mx-auto max-w-[1400px] w-full flex h-16 items-center px-4 relative">
          {/* Exact center reference dot - hidden but still used for positioning */}
          <div 
            ref={centerDotRef}
            className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-transparent -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none opacity-0" 
          />
          
          {/* Desktop Layout */}
          <div className="hidden md:contents">
            {/* Logo - Fixed width */}
            <div className="w-[120px]">
              <Link href="/" className="text-xl font-bold">
                Atoms
              </Link>
            </div>

            {/* Navigation - Centered with flex-1 */}
            <nav className="flex flex-1 items-center justify-center gap-8">
              <DropdownMenu open={isSolutionsOpen} onOpenChange={setIsSolutionsOpen}>
                <div 
                  ref={solutionsTriggerRef}
                  onMouseEnter={handleSolutionsMouseEnter}
                  onMouseLeave={handleSolutionsMouseLeave}
                  className="relative"
                >
                  <DropdownMenuTrigger className="flex items-center justify-center gap-1 text-sm text-gray-400 hover:text-white transition-colors group">
                    Solutions
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </DropdownMenuTrigger>
                  {/* Invisible bridge to prevent menu from closing when moving mouse to dropdown */}
                  {isSolutionsOpen && (
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 w-[140px] h-8 bottom-0 translate-y-full z-50 bg-transparent"
                      onMouseEnter={handleSolutionsMouseEnter}
                    ></div>
                  )}
                </div>
              </DropdownMenu>
              <button 
                onClick={() => scrollToSection('demo')} 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                TestFlow
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Features
              </button>
              <DropdownMenu open={isResourcesOpen} onOpenChange={setIsResourcesOpen}>
                <div 
                  ref={resourcesTriggerRef}
                  onMouseEnter={handleResourcesMouseEnter}
                  onMouseLeave={handleResourcesMouseLeave}
                  className="relative"
                >
                  <DropdownMenuTrigger className="flex items-center justify-center gap-1 text-sm text-gray-400 hover:text-white transition-colors group">
                    Resources
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </DropdownMenuTrigger>
                  {/* Invisible bridge to prevent menu from closing when moving mouse to dropdown */}
                  {isResourcesOpen && (
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 w-[140px] h-8 bottom-0 translate-y-full z-50 bg-transparent"
                      onMouseEnter={handleResourcesMouseEnter}
                    ></div>
                  )}
                </div>
              </DropdownMenu>
            </nav>
            {/* CTA Section - Fixed width to match logo */}
            <div className="w-[120px] flex items-center justify-end gap-4">
              <Link
                href="https://testflow.atomsai.net/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Button asChild>
                <Link 
                  href="/contact" 
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-6 py-2.5 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
                >
                  Schedule A Call
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
              Atoms
            </Link>

            {/* Centered CTA Button */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Button asChild size="sm">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-4 py-2 text-sm transition-all duration-300"
                >
                  Schedule A Call
                </Link>
              </Button>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-white hover:text-gray-300 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Desktop Dropdown Menus */}
        {/* Solutions Dropdown Menu - Absolutely positioned relative to header */}
        {isSolutionsOpen && (
          <div 
            className="absolute left-1/2 top-full transform -translate-x-1/2 min-w-[900px] mt-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] animate-in fade-in-0 zoom-in-95 z-40"
            onMouseEnter={handleSolutionsMouseEnter}
            onMouseLeave={handleSolutionsMouseLeave}
          >
            {/* Ambient background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl opacity-50 blur-xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl" />
            
            <div className="relative p-6">
              <div className="grid grid-cols-4 gap-6">
                {/* Individual Card Items */}
                {solutionItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link 
                      key={item.label}
                      href={item.href}
                      className="flex flex-col p-6 h-full rounded-xl transition-all duration-300 hover:bg-white/[0.03] border border-white/10 hover:border-white/20 hover:shadow-[0_0_25px_-5px_rgba(0,0,0,0.3)] hover:scale-[1.02] relative overflow-hidden group/item"
                    >
                      {/* Card hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover/item:border-white/20 transition-colors">
                          <Icon className="w-5 h-5 text-blue-400 group-hover/item:text-blue-300 transition-colors" />
                        </div>
                        <h3 className="font-medium text-base text-white/90 group-hover/item:text-white transition-colors">{item.label}</h3>
                      </div>
                      
                      <p className="text-sm text-gray-400 group-hover/item:text-gray-300 transition-colors leading-relaxed">{item.description}</p>
                      
                      <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-blue-400">
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/item:translate-x-1" />
                      </div>
                    </Link>
                  )
                })}

                {/* Demo Video Card */}
                <Link 
                  href="https://www.linkedin.com/posts/ali-kamaly_ai-semiconductors-chipvalidation-activity-7318282716632768514-wHcz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACN1KhwBnC3-LWXI3D_lSyPYWz4NXvxyEYk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col p-6 h-full rounded-xl transition-all duration-300 hover:bg-white/[0.03] border border-white/10 hover:border-white/20 hover:shadow-[0_0_25px_-5px_rgba(0,0,0,0.3)] hover:scale-[1.02] relative overflow-hidden group/video"
                >
                  {/* Card hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="font-medium text-base text-white/90 mb-4 group-hover/video:text-white transition-colors">Watch Our Latest Demo</div>
                  
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-purple-900/30 mb-4">
                    <img
                      src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/TestFlow%20demo%20menu%20picture-tC19r3PZGgrHLt60Nph9xYfQPzY0E9.png"
                      alt="Demo Video Thumbnail"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <PlayCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-red-400">
                    <PlayCircle className="w-4 h-4" />
                    <span>Watch Demo</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Resources Dropdown Menu - Absolutely positioned relative to header */}
        {isResourcesOpen && (
          <div 
            className="absolute left-1/2 top-full transform -translate-x-1/2 min-w-[900px] mt-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] animate-in fade-in-0 zoom-in-95 z-40"
            onMouseEnter={handleResourcesMouseEnter}
            onMouseLeave={handleResourcesMouseLeave}
          >
            {/* Ambient background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl opacity-50 blur-xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl" />
            
            <div className="relative p-6">
              <div className="grid grid-cols-4 gap-6">
                {/* Company Column */}
                <div className="space-y-1">
                  <h3 className="text-xs font-medium text-gray-400 mb-2 px-2">Company</h3>
                  <div className="space-y-1">
                    {resourceItems.company.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link 
                          key={item.label}
                          href={item.href}
                          onClick={item.badge === "Soon" ? (e) => e.preventDefault() : undefined}
                          className={`flex items-center gap-2 p-2 rounded-lg ${item.badge !== "Soon" ? "hover:bg-white/[0.03]" : "cursor-default"} transition-all duration-300 group/item relative overflow-hidden`}
                        >
                          {/* Hover gradient background */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 ${item.badge !== "Soon" ? "group-hover/item:opacity-100" : ""} transition-opacity duration-500`} />
                          
                          {/* Content */}
                          <div className="relative flex items-center gap-2 w-full">
                            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 group-hover/item:border-white/20 transition-colors">
                              <Icon className="w-3.5 h-3.5 text-blue-400 group-hover/item:text-blue-300 transition-colors" />
                            </div>
                            <div className="flex items-center justify-between flex-1">
                              <span className="text-xs text-gray-300 group-hover/item:text-white transition-colors">{item.label}</span>
                              {item.badge && (
                                <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-gray-400 group-hover/item:bg-white/20 group-hover/item:text-gray-200 transition-colors">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Learn Column */}
                <div className="space-y-1">
                  <h3 className="text-xs font-medium text-gray-400 mb-2 px-2">Learn</h3>
                  <div className="space-y-1">
                    {resourceItems.learn.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link 
                          key={item.label}
                          href={item.href}
                          onClick={item.badge === "Soon" ? (e) => e.preventDefault() : undefined}
                          className={`flex items-center gap-2 p-2 rounded-lg ${item.badge !== "Soon" ? "hover:bg-white/[0.03]" : "cursor-default"} transition-all duration-300 group/item relative overflow-hidden`}
                        >
                          {/* Hover gradient background */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 ${item.badge !== "Soon" ? "group-hover/item:opacity-100" : ""} transition-opacity duration-500`} />
                          
                          {/* Content */}
                          <div className="relative flex items-center gap-2 w-full">
                            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 group-hover/item:border-white/20 transition-colors">
                              <Icon className="w-3.5 h-3.5 text-blue-400 group-hover/item:text-blue-300 transition-colors" />
                            </div>
                            <div className="flex items-center justify-between flex-1">
                              <span className="text-xs text-gray-300 group-hover/item:text-white transition-colors">{item.label}</span>
                              {item.badge && (
                                <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-gray-400 group-hover/item:bg-white/20 group-hover/item:text-gray-200 transition-colors">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Discover Column */}
                <div className="space-y-1">
                  <h3 className="text-xs font-medium text-gray-400 mb-2 px-2">Discover</h3>
                  <div className="space-y-1">
                    {resourceItems.discover.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link 
                          key={item.label}
                          href={item.href}
                          onClick={item.badge === "Soon" ? (e) => e.preventDefault() : undefined}
                          className={`flex items-center gap-2 p-2 rounded-lg ${item.badge !== "Soon" ? "hover:bg-white/[0.03]" : "cursor-default"} transition-all duration-300 group/item relative overflow-hidden`}
                        >
                          {/* Hover gradient background */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 ${item.badge !== "Soon" ? "group-hover/item:opacity-100" : ""} transition-opacity duration-500`} />
                          
                          {/* Content */}
                          <div className="relative flex items-center gap-2 w-full">
                            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 group-hover/item:border-white/20 transition-colors">
                              <Icon className="w-3.5 h-3.5 text-blue-400 group-hover/item:text-blue-300 transition-colors" />
                            </div>
                            <div className="flex items-center justify-between flex-1">
                              <span className="text-xs text-gray-300 group-hover/item:text-white transition-colors">{item.label}</span>
                              {item.badge && (
                                <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-gray-400 group-hover/item:bg-white/20 group-hover/item:text-gray-200 transition-colors">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Demo Video Card */}
                <div className="space-y-1">
                  <Link 
                    href="https://www.linkedin.com/posts/ali-kamaly_ai-semiconductors-chipvalidation-activity-7318282716632768514-wHcz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACN1KhwBnC3-LWXI3D_lSyPYWz4NXvxyEYk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/video flex flex-col h-full p-6 rounded-xl transition-all duration-300 hover:bg-white/[0.03] border border-white/10 hover:border-white/20 hover:shadow-[0_0_25px_-5px_rgba(0,0,0,0.3)] hover:scale-[1.02] relative overflow-hidden"
                  >
                    {/* Card hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="font-medium text-base text-white/90 mb-4 group-hover/video:text-white transition-colors">Watch Our Latest Demo</div>
                    
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-purple-900/30 mb-4">
                      <img
                        src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/TestFlow%20demo%20menu%20picture-tC19r3PZGgrHLt60Nph9xYfQPzY0E9.png"
                        alt="Demo Video Thumbnail"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                          <PlayCircle className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-red-400">
                      <PlayCircle className="w-4 h-4" />
                      <span>Watch Demo</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
