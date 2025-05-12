"use client"

import { cn } from "@/lib/utils"
import { Book, Cpu, Workflow, Wrench, Webhook, Terminal, Shield, Puzzle, Search, Bot } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface DocsSidebarProps {
  currentSection: string
  onSectionChange: (section: string) => void
}

const sections = [
  {
    title: "Introduction",
    items: [
      { id: "getting-started", label: "Getting Started", icon: Book },
      { id: "core-concepts", label: "Core Concepts", icon: Cpu },
      { id: "workflow-basics", label: "Workflow Basics", icon: Workflow },
    ],
  },
  {
    title: "Guides",
    items: [
      { id: "instrument-setup", label: "Instrument Setup", icon: Wrench },
      { id: "ai-model", label: "AI Models", icon: Bot },
      { id: "integrations", label: "Integrations", icon: Webhook },
    ],
  },
  {
    title: "Advanced",
    items: [
      { id: "security", label: "Security", icon: Shield },
    ],
  },
]

export function DocsSidebar({ currentSection, onSectionChange }: DocsSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase())),
    }))
    .filter((section) => section.items.length > 0)

  return (
    <div className="w-80 h-[calc(100vh-3.5rem)] border-r border-white/5 bg-black/40 backdrop-blur-sm p-6 sticky top-14 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <Input
            type="search"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border-white/10 pl-8 text-sm text-white placeholder:text-white/40"
          />
        </div>
      </div>

      <div className="space-y-8">
        {filteredSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-medium text-white/40 mb-3">{section.title}</h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={cn(
                    "flex items-center gap-2 w-full rounded-lg px-3 py-2 text-sm transition-colors duration-200",
                    currentSection === item.id
                      ? "bg-violet-500/10 text-violet-400"
                      : "text-white/60 hover:text-white hover:bg-white/5",
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

