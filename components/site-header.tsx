'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { ArrowRight, ChevronDown, Cpu, FlaskRoundIcon as Flask, Car, CircuitBoard, Book } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const industryItems = [
  {
    label: "Semiconductor",
    href: "/semiconductor",
    icon: Cpu,
    description: "Comprehensive validation solutions for semiconductor manufacturing and testing."
  },
  {
    label: "Research Labs",
    href: "/research-labs",
    icon: Flask,
    description: "Automated testing workflows designed for research laboratories."
  },
  {
    label: "Electronics",
    href: "/electronics",
    icon: CircuitBoard,
    description: "Streamline electronics validation for consumer and industrial products."
  },
  {
    label: "Automotive",
    href: "/automotive",
    icon: Car,
    description: "Industry-standard compliance testing for automotive components."
  }
]

export function SiteHeader() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto max-w-[1400px] w-full flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Atoms
        </Link>
        <nav className="hidden md:flex items-center justify-center gap-8">
          <button 
            onClick={() => scrollToSection('solutions')} 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Solutions
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
              Industries
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[640px] p-6 bg-black/90 backdrop-blur-xl border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                {industryItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <DropdownMenuItem key={item.label} asChild className="cursor-pointer focus:bg-transparent">
                      <Link 
                        href={item.href} 
                        className="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                          <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <div className="font-medium text-base text-white/90 group-hover:text-white transition-colors">{item.label}</div>
                          <div className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors">{item.description}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-medium text-white">Need a custom solution?</div>
                    <div className="text-sm text-gray-400">Let&apos;s discuss your specific requirements</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </DropdownMenuContent>
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
          <Link 
            href="/docs" 
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Book className="w-4 h-4" />
            Documentation
          </Link>
          <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden md:inline-flex text-sm text-gray-400 hover:text-white transition-colors"
          >
            Sign in
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
    </header>
  )
}

