'use client'

import { ArrowRight, CheckCircle2, Zap, Workflow, Bot, BarChart3, Plug, Settings, HelpCircle, Terminal, Upload, FileText, Users, Key, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

// ─── Shared primitives ────────────────────────────────────────────────────────

function PageHeader({ category, title, description }: { category: string; title: string; description: string }) {
  return (
    <div className="mb-10 pb-8 border-b border-gray-200">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <span>Quick Start</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-gray-900 font-medium">{category}</span>
      </div>
      {/* Copy page button row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">{title}</h1>
        <button className="shrink-0 mt-1 flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
          <FileText className="w-3.5 h-3.5" />
          Copy page
        </button>
      </div>
      <p className="text-base text-gray-600 leading-relaxed max-w-2xl">{description}</p>
    </div>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">{children}</h2>
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-gray-900 mt-6 mb-2">{children}</h3>
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-600 leading-relaxed mb-4">{children}</p>
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-5 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all bg-white">
      <div className="shrink-0 w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center">
        <span className="text-xs font-bold text-white">{number}</span>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all bg-white">
      <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
        <Icon className="w-4 h-4 text-gray-700" />
      </div>
      <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}

function CodeBlock({ code, lang = 'python' }: { code: string; lang?: string }) {
  return (
    <div className="my-6 rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-200">
        <span className="text-xs text-gray-500 font-mono">{lang}</span>
        <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors">Copy</button>
      </div>
      <pre className="p-5 text-sm text-gray-800 overflow-x-auto leading-relaxed font-mono bg-white">{code}</pre>
    </div>
  )
}

function Callout({ type = 'info', children }: { type?: 'info' | 'tip' | 'warning'; children: React.ReactNode }) {
  const styles = {
    info: 'border-blue-200 bg-blue-50 text-blue-800',
    tip: 'border-green-200 bg-green-50 text-green-800',
    warning: 'border-yellow-200 bg-yellow-50 text-yellow-800',
  }
  const labels = { info: 'Note', tip: 'Tip', warning: 'Warning' }
  return (
    <div className={`my-6 rounded-xl border px-5 py-4 ${styles[type]}`}>
      <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-60">{labels[type]}</p>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}

// "On this page" right rail
function OnThisPage({ items }: { items: string[] }) {
  return (
    <aside className="hidden xl:block w-52 shrink-0 pl-8 pt-2">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
        <span className="w-3.5 h-3.5">≡</span> On this page
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors leading-snug block">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

// ─── Section content ──────────────────────────────────────────────────────────

function QuickStart() {
  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <PageHeader
          category="Welcome to TestFlow"
          title="Welcome to TestFlow"
          description="Get started with TestFlow and learn how to automate your hardware validation workflows — from connecting instruments to generating reports."
        />

        <H2>Why Choose TestFlow?</H2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Zap, title: 'Fast Setup', description: 'Connect your lab instruments and run your first automated test in under 10 minutes.' },
            { icon: Bot, title: 'AI-Native', description: 'Describe what to test in plain language. TestFlow generates the full sequence automatically.' },
            { icon: BarChart3, title: 'Instant Reports', description: 'Upload raw data and get clean, branded PDF reports with one click.' },
          ].map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <H2>Get started in 4 steps</H2>
        <div className="grid gap-3 mb-8">
          {[
            { number: 1, title: 'Create your account', description: 'Sign up at testflow.io. Enterprise accounts can request SSO provisioning from our team.' },
            { number: 2, title: 'Connect your instruments', description: 'Use the Instrument Hub to detect lab equipment on your network, USB, or GPIB.' },
            { number: 3, title: 'Build your first workflow', description: 'Open the Workflow Builder, drag in test steps, and set pass/fail thresholds.' },
            { number: 4, title: 'Run and review', description: 'Execute the workflow. Results stream in real time and are exportable as PDF.' },
          ].map((s) => (
            <StepCard key={s.number} {...s} />
          ))}
        </div>

        <Callout type="tip">
          Migrating from Excel? Import your existing parameter sheets directly under Analytics &gt; Upload Data. The AI column mapper handles the rest.
        </Callout>

        <div className="flex gap-3 mt-8">
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition-colors">
            Book a demo <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors">
            Watch walkthrough
          </a>
        </div>
      </div>
      <OnThisPage items={['Why Choose TestFlow?', 'Get started in 4 steps', 'Next steps']} />
    </div>
  )
}

function WorkflowBuilder() {
  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <PageHeader
          category="Workflow Builder"
          title="Workflow Builder"
          description="The Workflow Builder is TestFlow's visual editor for creating repeatable, structured test sequences. No code required."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: Workflow, title: 'Drag-and-drop steps', description: 'Build sequences from pre-built blocks: measurements, delays, assertions, loops, and custom scripts.' },
            { icon: Zap, title: 'Real-time execution', description: 'Run workflows live against connected instruments and watch pass/fail status update step by step.' },
            { icon: Terminal, title: 'Conditions & branching', description: 'Add if/else logic based on measurement results to handle edge cases automatically.' },
            { icon: FileText, title: 'Templates', description: 'Save and reuse workflow templates across projects and team members.' },
          ].map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
        <H2>Example: voltage sweep</H2>
        <CodeBlock code={`# ATOMS workflow definition
workflow "voltage_sweep":
  set_voltage(channel=1, value=1.0V)
  delay(ms=500)
  measure_current(channel=1) -> assert(max=0.1A)

  for v in range(1.0, 5.0, 0.5):
    set_voltage(channel=1, value=v)
    delay(ms=200)
    measure_voltage(channel=1) -> log`} />
        <Callout type="info">
          Variables defined at the top of a workflow are editable at runtime, so engineers can sweep parameters without modifying the definition.
        </Callout>
      </div>
      <OnThisPage items={['Features', 'Example: voltage sweep', 'Variables']} />
    </div>
  )
}

function AIAssistant() {
  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <PageHeader
          category="AI Test Assistant"
          title="AI Test Assistant"
          description="Describe what you want to test in plain language. The AI Assistant generates structured test sequences, suggests edge cases, and catches gaps in your coverage."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: Bot, title: 'Natural language input', description: 'Type "Test power rail within ±5% across -40 to 125°C" and get a full workflow back.' },
            { icon: Zap, title: 'Auto step generation', description: 'The AI maps your requirements to ATOMS steps, including commands and assertion logic.' },
            { icon: CheckCircle2, title: 'Coverage suggestions', description: 'The assistant flags missing cases, e.g. "You have not tested behavior at VCC_min."' },
            { icon: FileText, title: 'Export to workflow', description: 'One click pushes the generated plan into the Workflow Builder for review and execution.' },
          ].map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
        <H2>Sample prompt</H2>
        <CodeBlock lang="prompt" code={`Prompt:
"Generate a parametric test for GPIO output voltage.
 Test all 8 pins at 3.3V logic, measure VOH and VOL,
 flag anything outside datasheet spec (VOH > 2.4V, VOL < 0.4V)."

Generated:
- 8 steps (one per GPIO pin)
- set_gpio_output + measure_voltage per step
- assert(VOH > 2.4) and assert(VOL < 0.4) injected automatically
- Suggested edge case: "Test with 50% bus contention load"`} />
      </div>
      <OnThisPage items={['Features', 'Sample prompt', 'Edge case detection']} />
    </div>
  )
}

function Analytics() {
  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <PageHeader
          category="Analytics & Reports"
          title="Analytics & Reports"
          description="Upload raw test data from any source. TestFlow's AI engine maps columns, detects anomalies, and generates clean PDF reports automatically."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: Upload, title: 'Universal data upload', description: 'Drag in CSV or Excel files from any instrument. AI auto-maps columns to measurement types.' },
            { icon: BarChart3, title: 'Automated analysis', description: 'Outlier detection, pass/fail classification, and trend analysis run instantly on upload.' },
            { icon: FileText, title: 'PDF report generation', description: 'One-click branded PDF reports with charts, summary tables, and failure breakdowns.' },
            { icon: Bot, title: 'AI commentary', description: 'The AI writes a plain-language summary of what the data shows and what to investigate.' },
          ].map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
        <Callout type="tip">
          The column mapper learns your naming conventions after 2-3 uploads. Future uploads from the same instrument auto-map without manual review.
        </Callout>
      </div>
      <OnThisPage items={['Features', 'Column mapping', 'PDF reports']} />
    </div>
  )
}

function Instruments() {
  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <PageHeader
          category="Instrument Integrations"
          title="Instrument Integrations"
          description="TestFlow connects directly to your lab hardware through ATOMS, our universal instrument abstraction layer. Write once, run on any supported instrument."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: Plug, title: 'Plug-and-play detection', description: 'Connect via USB, GPIB, LAN, or RS-232. TestFlow auto-detects and identifies instruments.' },
            { icon: Terminal, title: 'ATOMS Language', description: 'Vendor-agnostic scripting. The same command works on Keysight, Tektronix, or R&S.' },
            { icon: Zap, title: 'Real-time control', description: 'Send commands, read measurements, and capture waveforms during workflow execution.' },
            { icon: Settings, title: 'Custom drivers', description: 'Write ATOMS driver extensions for proprietary or legacy instruments using our SDK.' },
          ].map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
        <H2>Supported instrument families</H2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {['Oscilloscopes', 'Power Supplies', 'DMMs', 'Signal Generators', 'Spectrum Analyzers', 'Source Measure Units'].map((name) => (
            <div key={name} className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 bg-white">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
              {name}
            </div>
          ))}
        </div>
        <CodeBlock code={`from atoms import scope, psu

# Works on Keysight, Tek, R&S without changes
psu.set_voltage(ch=1, v=3.3)
waveform = scope.capture(ch=1, duration_ms=100)
print(waveform.freq_hz, waveform.amplitude_v)`} />
      </div>
      <OnThisPage items={['Features', 'Supported instruments', 'ATOMS example']} />
    </div>
  )
}

function SettingsSection() {
  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <PageHeader
          category="Settings & Team"
          title="Settings & Team"
          description="Manage your account, invite teammates, and configure API access for CI/CD integrations."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: Users, title: 'Team management', description: 'Invite engineers, set roles (Admin, Engineer, Viewer), and control project access.' },
            { icon: Key, title: 'API keys', description: 'Generate API keys to trigger workflows from CI pipelines, scripts, or external systems.' },
            { icon: Settings, title: 'Profile & notifications', description: 'Set your timezone and notification preferences for test completion alerts.' },
            { icon: FileText, title: 'Audit logs', description: 'Full history of workflow runs, user actions, and configuration changes. Exportable as CSV.' },
          ].map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
        <Callout type="info">
          Enterprise plans support SAML 2.0 SSO, custom data retention policies, and dedicated deployments. Contact us to configure.
        </Callout>
      </div>
      <OnThisPage items={['Team management', 'API keys', 'Audit logs']} />
    </div>
  )
}

function FAQ() {
  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <PageHeader
          category="FAQ"
          title="Frequently Asked Questions"
          description="Common questions from TestFlow users and teams."
        />
        <div className="space-y-4">
          {[
            { q: 'What instruments does TestFlow support?', a: 'All major bench instrument families via ATOMS: oscilloscopes, DMMs, power supplies, signal generators, spectrum analyzers, and SMUs. We support Keysight, Tektronix, Rohde & Schwarz, NI, and others. Custom driver extensions cover proprietary hardware.' },
            { q: 'Do I need to know Python or scripting?', a: 'No. The Workflow Builder is fully visual. ATOMS scripting is available for power users and is designed to be readable without a programming background.' },
            { q: 'Can I export results to our existing tools?', a: 'Yes. Results export as CSV, Excel, and PDF. API webhooks push run results to Jira, Confluence, Notion, or any custom endpoint.' },
            { q: 'How does pricing work?', a: 'TestFlow is priced per seat on annual ARR. We offer startup, growth, and enterprise tiers. Contact us at ali@testflow.io for a quote.' },
            { q: 'Is there an on-premise deployment option?', a: 'Enterprise customers can request on-premise or air-gapped deployment. All data stays within your infrastructure.' },
            { q: 'What is ATOMS?', a: "ATOMS (Abstracted Test Operations and Measurement Scripting) is TestFlow's vendor-agnostic instrument language. One script works across instrument brands without SCPI-level translation." },
          ].map((item) => (
            <div key={item.q} className="p-5 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all bg-white">
              <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                {item.q}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed pl-6">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 p-6 rounded-xl border border-gray-200 bg-gray-50 text-center">
          <p className="text-sm text-gray-600 mb-4">Still have questions? We respond within 1 business day.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition-colors">
            Contact support <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <OnThisPage items={['Questions']} />
    </div>
  )
}

// ─── Section map ──────────────────────────────────────────────────────────────

const parentMap: Record<string, string> = {
  'quick-start-overview': 'quick-start',
  'quick-start-account': 'quick-start',
  'quick-start-first-workflow': 'quick-start',
  'workflow-builder-overview': 'workflow-builder',
  'workflow-builder-steps': 'workflow-builder',
  'workflow-builder-conditions': 'workflow-builder',
  'workflow-builder-variables': 'workflow-builder',
  'ai-assistant-overview': 'ai-assistant',
  'ai-assistant-prompts': 'ai-assistant',
  'ai-assistant-generation': 'ai-assistant',
  'analytics-overview': 'analytics',
  'analytics-upload': 'analytics',
  'analytics-reports': 'analytics',
  'instruments-overview': 'instruments',
  'instruments-atoms': 'instruments',
  'instruments-supported': 'instruments',
  'settings-profile': 'settings',
  'settings-team': 'settings',
  'settings-api': 'settings',
}

const sectionComponents: Record<string, React.ReactNode> = {
  'quick-start': <QuickStart />,
  'workflow-builder': <WorkflowBuilder />,
  'ai-assistant': <AIAssistant />,
  'analytics': <Analytics />,
  'instruments': <Instruments />,
  'settings': <SettingsSection />,
  'faq': <FAQ />,
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function GuideContent({ currentSection }: { currentSection: string }) {
  const resolved = parentMap[currentSection] ?? currentSection
  const content = sectionComponents[resolved] ?? sectionComponents['quick-start']

  return (
    <motion.div
      key={resolved}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="px-8 md:px-12 py-10 max-w-5xl"
    >
      {content}
    </motion.div>
  )
}
