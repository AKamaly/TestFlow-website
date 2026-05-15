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
import { FloatingNav } from "@/components/ui/floating-navbar"
import { trackEvent, trackExternalLink } from "@/components/analytics-tracker"

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
      href: "#",
      icon: FileText,
      description: "Coming Soon",
      badge: "Soon"
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
      <div className="absolute right-0 top-0 h-full w-80 bg-black/60 backdrop-blur-3xl border-l border-white/10 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
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

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          {currentView === 'main' && (
            <div className="space-y-8">
              {/* Talk to Sales Button Only */}
              {/* Book a Demo Button */}
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  onClick={() => {
                    handleClose()
                    trackEvent('nav_click', { item: 'Book a demo', section: 'mobile_nav' })
                  }}
                  className="bg-white text-black hover:bg-gray-200 font-bold rounded-full px-8 py-3 text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Book a demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Main Menu Items */}
              <div className="space-y-6">
                <button
                  onClick={() => setCurrentView('resources')}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-white text-xl">Resources</span>
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                <Link
                  href="/pricing"
                  onClick={() => {
                    handleClose()
                    trackEvent('nav_click', { item: 'Pricing', section: 'mobile_nav' })
                  }}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-white text-xl">Pricing</span>
                </Link>

                <Link
                  href="/blog"
                  onClick={() => {
                    handleClose()
                    trackEvent('nav_click', { item: 'Blog', section: 'mobile_nav' })
                  }}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-white text-xl">Blog</span>
                </Link>

                <Link
                  href="https://app.testflowinc.com/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleClose()
                    trackExternalLink('https://app.testflowinc.com/sign-in', 'Login')
                  }}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-white text-xl">Login</span>
                </Link>
              </div>
            </div>
          )}

          {currentView === 'solutions' && (
            <div className="space-y-6">
              <h2 className="text-white text-2xl font-semibold mb-6">Solutions</h2>
              {solutionItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      handleClose()
                      trackEvent('nav_click', { item: item.label, section: 'mobile_solutions' })
                    }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{item.label}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}

          {currentView === 'resources' && (
            <div className="space-y-8">
              <h2 className="text-white text-2xl font-semibold mb-6">Resources</h2>

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
                        onClick={(e) => {
                          if (item.badge === "Soon") {
                            e.preventDefault()
                          } else {
                            handleClose()
                            trackEvent('nav_click', { item: item.label, section: 'mobile_resources_company' })
                          }
                        }}
                        className={`flex items-center gap-4 p-3 rounded-lg ${item.badge !== "Soon" ? "hover:bg-white/5" : "opacity-50"} transition-colors`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-purple-400" />
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
                        onClick={(e) => {
                          if (item.badge === "Soon") {
                            e.preventDefault()
                          } else {
                            handleClose()
                            trackEvent('nav_click', { item: item.label, section: 'mobile_resources_learn' })
                          }
                        }}
                        className={`flex items-center gap-4 p-3 rounded-lg ${item.badge !== "Soon" ? "hover:bg-white/5" : "opacity-50"} transition-colors`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-purple-400" />
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
                        onClick={(e) => {
                          if (item.badge === "Soon") {
                            e.preventDefault()
                          } else {
                            handleClose()
                            trackEvent('nav_click', { item: item.label, section: 'mobile_resources_discover' })
                          }
                        }}
                        className={`flex items-center gap-4 p-3 rounded-lg ${item.badge !== "Soon" ? "hover:bg-white/5" : "opacity-50"} transition-colors`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-purple-400" />
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Solutions", link: "#" },
    { name: "Resources", link: "#" },
    { name: "TestFlow", link: "/testflow-agent" },
    { name: "Pricing", link: "/pricing" },
  ];

  return (
    <>
      {/* Floating Navigation */}
      <FloatingNav
        navItems={navItems}
        solutionItems={solutionItems}
        resourceItems={resourceItems}
      />

      {/* Mobile Header - Only for mobile menu trigger */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="flex items-center justify-between w-full px-4 h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            TestFlow
          </Link>

          {/* Centered CTA Button */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Button asChild size="sm">
              <Link
                href="/contact"
                className="bg-white text-black hover:bg-gray-200 font-bold rounded-full px-4 py-2 text-sm transition-all duration-300"
              >
                Book a demo
              </Link>
            </Button>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-white hover:text-gray-300 transition-colors bg-white/5 border border-white/10 backdrop-blur-md rounded-full"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
