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
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

const solutionItems = [
  {
    label: "Semiconductor",
    href: "/semiconductor",
    icon: Cpu,
    description: "For semiconductor manufacturing and testing"
  },
  {
    label: "Research Labs",
    href: "/research-labs",
    icon: Flask,
    description: "For research laboratories and academic institutions"
  },
  {
    label: "Electronics",
    href: "/electronics",
    icon: CircuitBoard,
    description: "For consumer and industrial electronics"
  },
  {
    label: "Automotive",
    href: "/automotive",
    icon: Car,
    description: "For automotive components and systems"
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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
              Solutions
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[400px] p-3 bg-black/90 backdrop-blur-xl border border-white/10">
              <div className="grid grid-cols-1 gap-1">
                {solutionItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <DropdownMenuItem key={item.label} asChild className="cursor-pointer focus:bg-transparent">
                      <Link 
                        href={item.href} 
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white/90">{item.label}</div>
                          <div className="text-xs text-gray-400">{item.description}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </div>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem asChild className="cursor-pointer focus:bg-transparent">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-500/10 transition-colors"
                >
                  <span className="text-sm font-medium text-blue-400">Custom solution</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </Link>
              </DropdownMenuItem>
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

