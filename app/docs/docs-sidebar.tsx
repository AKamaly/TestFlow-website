"use client"

import { cn } from "@/lib/utils"
import { 
  Book, 
  Cpu, 
  Workflow, 
  Wrench, 
  Webhook, 
  Terminal, 
  Shield, 
  Puzzle, 
  Search, 
  Bot,
  Zap,
  Code,
  Settings,
  HelpCircle,
  FileText,
  Layers,
  Database,
  Globe,
  Users,
  Lightbulb,
  Target,
  GitBranch,
  Monitor,
  Play
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface DocsSidebarProps {
  currentSection: string
  onSectionChange: (section: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

const sections = [
  {
    title: "Getting Started",
    items: [
      { id: "getting-started", label: "Quick Start", icon: Zap, badge: "New" },
      { id: "installation", label: "Installation", icon: Settings },
      { id: "core-concepts", label: "Core Concepts", icon: Lightbulb },
    ],
  },
  {
    title: "User Guide",
    items: [
      { id: "workflow-builder", label: "Workflow Builder", icon: Workflow },
      { id: "ai-assistant", label: "AI Assistant", icon: Bot, badge: "Popular" },
      { id: "data-analysis", label: "Data Analysis", icon: Database },
    ],
  },
  {
    title: "Integrations",
    items: [
      { id: "lab-instruments", label: "Lab Instruments", icon: Monitor },
    ],
  },
]

export function DocsSidebar({ currentSection, onSectionChange, searchQuery, onSearchChange }: DocsSidebarProps) {
  const filteredSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => 
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0)

  return (
    <div className="h-full flex flex-col p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">Documentation</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <Input
            type="search"
            placeholder="Search docs..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-white/5 border-white/10 pl-10 text-sm text-white placeholder:text-white/40 rounded-lg"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-8">
        {filteredSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={cn(
                    "flex items-center gap-3 w-full rounded-lg px-3 py-2.5 text-sm transition-all duration-200 group",
                    currentSection === item.id
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/20"
                      : "text-white/70 hover:text-white hover:bg-white/5 hover:border-white/10 border border-transparent",
                  )}
                >
                  <item.icon className={cn(
                    "w-4 h-4 transition-colors",
                    currentSection === item.id 
                      ? "text-blue-400" 
                      : "text-white/40 group-hover:text-white/60"
                  )} />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "text-xs px-2 py-0.5",
                        item.badge === "New" && "bg-green-500/20 text-green-400 border-green-500/30",
                        item.badge === "Popular" && "bg-orange-500/20 text-orange-400 border-orange-500/30"
                      )}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="text-xs text-white/40 space-y-2">
          <p>Need help? <a href="/contact" className="text-blue-400 hover:text-blue-300">Contact Support</a></p>
          <p>Version 2.1.0</p>
        </div>
      </div>
    </div>
  )
}

