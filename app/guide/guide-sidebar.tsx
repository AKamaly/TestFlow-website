'use client'

import { cn } from '@/lib/utils'
import {
  Zap,
  Workflow,
  Bot,
  BarChart3,
  Plug,
  Settings,
  HelpCircle,
  Star,
  Wrench,
  Play,
  GitBranch,
  Database,
  Key,
  Users,
  ChevronRight,
  LayoutDashboard,
  BookOpen,
  FlaskConical,
  Server,
} from 'lucide-react'

export interface NavItem {
  id: string
  label: string
  icon?: React.ElementType
  badge?: string
  hasArrow?: boolean
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

export const navGroups: NavGroup[] = [
  {
    title: 'Quick Start',
    items: [
      { id: 'quick-start',              label: 'Welcome to TestFlow',   icon: Star,          badge: 'New' },
      { id: 'quick-start-account',      label: 'Create your account',   icon: Zap },
      { id: 'quick-start-first-workflow', label: 'Your first workflow', icon: Play },
    ],
  },
  {
    title: 'Workflow Builder',
    items: [
      { id: 'workflow-builder',           label: 'Overview',               icon: Workflow },
      { id: 'workflow-builder-steps',     label: 'Adding steps',           icon: GitBranch, badge: 'Popular' },
      { id: 'workflow-builder-conditions',label: 'Conditions & branching', icon: ChevronRight },
      { id: 'workflow-builder-variables', label: 'Variables',              icon: BookOpen },
    ],
  },
  {
    title: 'AI Test Assistant',
    items: [
      { id: 'ai-assistant',            label: 'Overview',             icon: Bot },
      { id: 'ai-assistant-prompts',    label: 'Writing test prompts', icon: FlaskConical },
      { id: 'ai-assistant-generation', label: 'Auto test generation', icon: Zap },
    ],
  },
  {
    title: 'Analytics & Reports',
    items: [
      { id: 'analytics',         label: 'Overview',              icon: BarChart3 },
      { id: 'analytics-upload',  label: 'Uploading data',        icon: Database },
      { id: 'analytics-reports', label: 'Generating PDF reports', icon: BookOpen },
    ],
  },
  {
    title: 'Instrument Integrations',
    items: [
      { id: 'instruments',          label: 'Overview',             icon: Plug },
      { id: 'instruments-atoms',    label: 'ATOMS Language',       icon: Wrench },
      { id: 'instruments-supported',label: 'Supported instruments',icon: Server },
    ],
  },
  {
    title: 'Settings & Team',
    items: [
      { id: 'settings',      label: 'Profile & account',  icon: Settings,       hasArrow: true },
      { id: 'settings-team', label: 'Team management',    icon: Users,          hasArrow: true },
      { id: 'settings-api',  label: 'API keys',           icon: Key },
    ],
  },
  {
    title: 'Help & Support',
    items: [
      { id: 'faq', label: 'FAQ', icon: HelpCircle },
    ],
  },
]

interface GuideSidebarProps {
  currentSection: string
  onSectionChange: (id: string) => void
  searchQuery?: string
}

export function GuideSidebar({ currentSection, onSectionChange, searchQuery = '' }: GuideSidebarProps) {
  const q = searchQuery.toLowerCase()

  const filtered = navGroups
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.label.toLowerCase().includes(q) ||
          group.title.toLowerCase().includes(q),
      ),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <nav className="py-4 px-3 select-none">
      {filtered.map((group) => (
        <div key={group.title} className="mb-5">
          {/* Section title — bold, like Chatbase */}
          <p className="text-[13px] font-semibold text-gray-800 px-2 mb-1">
            {group.title}
          </p>

          <div className="space-y-px">
            {group.items.map((item) => {
              const isActive = currentSection === item.id
              const Icon = item.icon

              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={cn(
                    'flex items-center gap-2.5 w-full rounded-lg px-2 py-[7px] text-[13.5px] transition-colors text-left group',
                    isActive
                      ? 'bg-gray-100 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  )}
                >
                  {Icon && (
                    <Icon
                      className={cn(
                        'w-[15px] h-[15px] shrink-0',
                        isActive ? 'text-gray-700' : 'text-gray-400 group-hover:text-gray-600',
                      )}
                      strokeWidth={1.75}
                    />
                  )}

                  <span className="flex-1 truncate leading-snug">{item.label}</span>

                  {item.badge && (
                    <span
                      className={cn(
                        'text-[10px] font-semibold px-1.5 py-0.5 rounded-full leading-none',
                        item.badge === 'New'     && 'bg-green-100 text-green-700',
                        item.badge === 'Popular' && 'bg-orange-100 text-orange-700',
                      )}
                    >
                      {item.badge}
                    </span>
                  )}

                  {item.hasArrow && !item.badge && (
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-gray-300 group-hover:text-gray-400 transition-colors" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="mt-2 pt-4 border-t border-gray-100 px-2">
        <p className="text-[12px] text-gray-400">
          Need help?{' '}
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact us
          </a>
        </p>
        <p className="text-[11px] text-gray-300 mt-1">TestFlow v2.0</p>
      </div>
    </nav>
  )
}
