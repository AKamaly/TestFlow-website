'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { ArrowRight, ChevronDown, Cpu, FlaskRoundIcon as Flask, Car, CircuitBoard } from 'lucide-react'
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
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Atoms
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('solutions')} 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Solutions
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
              Industries
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[600px] grid grid-cols-2 gap-2">
              {industryItems.map((item) => {
                const Icon = item.icon
                return (
                  <DropdownMenuItem key={item.label} asChild className="cursor-pointer">
                    <Link href={item.href} className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-gray-400 line-clamp-2">{item.description}</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                )
              })}
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
              Schadule A Call
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

