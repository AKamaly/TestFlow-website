"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Check,
  Copy,
  Bot,
  Cpu,
  Workflow,
  Code2,
  Webhook,
  MessageSquare,
  FileSpreadsheet,
  Mail,
  Calendar,
  LineChart,
  Database,
  Cloud,
  GitPullRequest,
  Trello,
  Clock,
  AlertCircle,
  Settings,
  Users,
  Shield,
} from "lucide-react"
import { useState, useMemo } from "react"
import { TeamsIcon, ExcelIcon } from "./integration-icons"

interface DocsContentProps {
  currentSection: string
}

interface CodeBlockProps {
  code: string
  language: string
  onCopy: (text: string) => void
  copied: boolean
}

const CodeBlock = ({ code, language, onCopy, copied }: CodeBlockProps) => (
  <div className="relative group">
    <pre className="rounded-lg bg-black/50 p-4 overflow-x-auto">
      <code className={`language-${language} text-sm text-white/80`}>{code}</code>
    </pre>
    <Button
      size="icon"
      variant="ghost"
      className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 text-white/40 hover:text-white hover:bg-white/5"
      onClick={() => onCopy(code)}
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </Button>
  </div>
)

export function DocsContent({ currentSection }: DocsContentProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const content: Record<string, JSX.Element> = {
    "getting-started": (
      <div className="space-y-8">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-2 text-violet-400 border-violet-400/20">
            Getting Started
          </Badge>
          <h1 className="text-3xl font-bold text-white">Welcome to TestFlow</h1>
          <p className="text-lg text-white/60 max-w-3xl">
            TestFlow simplifies hardware testing and validation through an intuitive visual interface and AI-powered
            automation. Choose your preferred way to create powerful test workflows.
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Visual%20Workflow%20builder-KjBOHdo8VPYYyZFa4Xs13lonNRTrL5.png"
            alt="TestFlow Visual Workflow Builder"
            className="w-full"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Choose Your Path</h2>
          <p className="text-base text-white/60">
            Get started with TestFlow using either our AI-powered assistant or the visual workflow builder. Both
            approaches offer powerful capabilities for creating and managing your test workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-white/5 bg-black/40 p-6 hover:bg-black/60 transition-all duration-300 group">
            <div className="p-4 w-16 h-16 rounded-2xl bg-violet-500/10 mb-6 group-hover:scale-110 transition-transform">
              <Bot className="w-8 h-8 text-violet-400" />
            </div>
            <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-violet-400 transition-colors">
              ATOMS AI Assistant
            </h3>
            <p className="text-lg text-white/60 mb-6">
              Let our AI assistant generate test workflows based on your requirements. Simply describe what you want to
              test, and let ATOMS AI handle the complexity.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/40 p-4 border border-white/5">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20chat-9ux1pM0XtMoD9RPVF8IsZakFXPh1cS.png"
                  alt="ATOMS AI chat interface"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </Card>

          <Card className="border-white/5 bg-black/40 p-6 hover:bg-black/60 transition-all duration-300 group">
            <div className="p-4 w-16 h-16 rounded-2xl bg-violet-500/10 mb-6 group-hover:scale-110 transition-transform">
              <Workflow className="w-8 h-8 text-violet-400" />
            </div>
            <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-violet-400 transition-colors">
              Visual Builder
            </h3>
            <p className="text-lg text-white/60 mb-6">
              Create workflows visually by dragging and connecting instruments, logic blocks, and actions. Perfect for
              those who prefer hands-on control.
            </p>
            <div className="space-y-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Visual%20Workflow%20builder-U1y9wn0fXbnkuluzvajtT3uutgTvPg.png"
                alt="Visual workflow builder interface"
                className="rounded-lg border border-white/10 w-full"
              />
            </div>
          </Card>
        </div>

        <Card className="border-white/5 bg-black/40 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">System Requirements</h2>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white/60">Software Requirements</h4>
                <ul className="space-y-3 text-lg text-white/60">
                  <li>• Chromium-based browser (Chrome, Edge, Brave)</li>
                  <li>• NI-VISA Runtime Engine</li>
                  <li>• Stable internet connection</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white/60">Hardware Setup</h4>
                <ul className="space-y-3 text-lg text-white/60">
                  <li>• USB-connected test instruments</li>
                  <li>• 1920x1080 minimum screen resolution</li>
                  <li>• Mouse recommended for workflow editing</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-white/5 bg-black/40 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Using Visual Builder</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-medium text-violet-400">1</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Create New Workflow</h3>
                <p className="text-lg text-white/60 mb-4">
                  Click the "+" button in the workflow builder or use the "New Test" button in the dashboard to start a
                  new workflow.
                </p>
                <div className="rounded-lg overflow-hidden border border-white/10">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard%20Image-Yl8Q5bfHgp18PHqD8ezYy2WN7uGCbm.png"
                    alt="Creating new workflow"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-medium text-violet-400">2</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Add Instruments and Actions</h3>
                <p className="text-lg text-white/60 mb-4">
                  Select instruments from the menu and configure their settings. Add logic nodes for flow control and
                  action nodes for data handling.
                </p>
                <div className="rounded-lg overflow-hidden border border-white/10">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Select%20instrument%20or%20Action%20pop%20up-rDDO2h4eOhZ4Bt4bwSbysXlnJg6I4s.png"
                    alt="Adding instruments and actions"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-medium text-violet-400">3</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Configure Node Settings</h3>
                <p className="text-lg text-white/60 mb-4">
                  Set up instrument parameters, configure test conditions, and define measurement settings for each node
                  in your workflow.
                </p>
                <div className="rounded-lg overflow-hidden border border-white/10">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Set%20Actions-2s3ftqY6SM2zz8t1VpyfMieeAtHOy9.png"
                    alt="Configuring node settings"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-medium text-violet-400">4</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Connect Nodes</h3>
                <p className="text-lg text-white/60 mb-4">
                  Draw connections between nodes to create your test sequence. The workflow executes from top to bottom
                  following these connections.
                </p>
                <div className="rounded-lg overflow-hidden border border-white/10">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Visual%20Workflow%20builder-KjBOHdo8VPYYyZFa4Xs13lonNRTrL5.png"
                    alt="Connecting workflow nodes"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-medium text-violet-400">5</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Run and Monitor</h3>
                <p className="text-lg text-white/60 mb-4">
                  Execute your workflow using the play button. Monitor real-time results, view logs, and analyze test
                  data through the dashboard.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-white/5 bg-black/40 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Using ATOMS AI</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-medium text-violet-400">1</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Open AI Assistant</h3>
                <p className="text-lg text-white/60 mb-4">
                  Click the AI button in the workflow builder or use the shortcut (Cmd/Ctrl + Shift + A) to open the
                  ATOMS AI chat panel.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-medium text-violet-400">2</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Describe Your Test Requirements</h3>
                <p className="text-lg text-white/60 mb-4">
                  Tell ATOMS AI what you want to test. Be specific about your requirements, target values, and any
                  special conditions.
                </p>
                <div className="rounded-lg overflow-hidden border border-white/10">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20chat-9ux1pM0XtMoD9RPVF8IsZakFXPh1cS.png"
                    alt="ATOMS AI chat interface"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-medium text-violet-400">3</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Review Generated Workflow</h3>
                <p className="text-lg text-white/60 mb-4">
                  ATOMS AI will generate a complete workflow with appropriate instruments, settings, and test sequences.
                  Review and adjust the workflow as needed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg font-medium text-violet-400">4</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Interactive Refinement</h3>
                <p className="text-lg text-white/60 mb-4">
                  Ask ATOMS AI to modify the workflow, add specific features, or optimize certain aspects. The AI will
                  help you refine the workflow until it meets your exact needs.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    ),
    "core-concepts": (
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 text-violet-400 border-violet-400/20">
            Core Concepts
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6 text-center">Understanding TestFlow</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto text-center">
            Learn the fundamental concepts and components that make up TestFlow's testing framework.
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="border-white/5 bg-black/40 p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-violet-500/10">
                <Workflow className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Workflows</h3>
                <p className="text-white/60 text-sm">
                  Workflows are the core building blocks of TestFlow. They represent a sequence of test operations,
                  measurements, and actions that are executed in a specific order. Workflows can be created visually or
                  generated by ATOMS AI.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-white/5 bg-black/40 p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-violet-500/10">
                <Cpu className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Instruments</h3>
                <p className="text-white/60 text-sm">
                  Instruments are the hardware devices used in your tests. TestFlow supports a wide range of instruments
                  including Power Supplies, Oscilloscopes, Source Meters, and more. Each instrument can be configured
                  and controlled through the visual interface.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-white/5 bg-black/40 p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-violet-500/10">
                <Code2 className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Actions</h3>
                <p className="text-white/60 text-sm">
                  Actions define what operations are performed at each step of your workflow. This includes instrument
                  commands, measurements, calculations, and integrations with external systems.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-white/5 bg-black/40 p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-violet-500/10">
                <Bot className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">ATOMS AI</h3>
                <p className="text-white/60 text-sm">
                  ATOMS AI is our intelligent assistant that can understand test requirements and automatically generate
                  optimized workflows. It can also help troubleshoot issues and suggest improvements to existing
                  workflows.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    ),
    "instrument-setup": (
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 text-violet-400 border-violet-400/20">
            Guide
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6 text-center">Instrument Setup</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto text-center">
            Learn how to configure and connect instruments in your TestFlow workflows.
          </p>
        </div>

        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Supported Instruments</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium mb-2">Power & Source</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Power Supplies (DC & AC)</li>
                  <li>• Source Meters</li>
                  <li>• Dynamic Loads</li>
                  <li>• Power Analyzers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Signal & Measurement</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Oscilloscopes</li>
                  <li>• Function Generators</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium mb-2">Environmental</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Temperature Chambers</li>
                  <li>• Climate Control Systems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Supported Features</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• SCPI Command Support</li>
                  <li>• VISA Interface</li>
                  <li>• Remote Programming</li>
                  <li>• Data Logging</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Supported Manufacturers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <span className="text-white/60 text-sm font-medium">Keysight Technologies</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <span className="text-white/60 text-sm font-medium">Rohde & Schwarz</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <span className="text-white/60 text-sm font-medium">Agilent Technologies</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <span className="text-white/60 text-sm font-medium">Tektronix</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <span className="text-white/60 text-sm font-medium">Keithley</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <span className="text-white/60 text-sm font-medium">Binder</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <span className="text-white/60 text-sm font-medium">Chroma</span>
            </div>
          </div>
        </Card>

        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Connection Setup</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-medium text-violet-400">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Add Instrument to Workflow</h3>
                <p className="text-sm text-white/60 mb-3">
                  Click the "+" button in your workflow and select the instrument type from the menu.
                </p>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Select%20instrument%20or%20Action%20pop%20up-rDDO2h4eOhZ4Bt4bwSbysXlnJg6I4s.png"
                  alt="Select instrument dialog"
                  className="rounded-lg border border-white/10 w-full max-w-md"
                />
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-medium text-violet-400">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Configure Settings</h3>
                <p className="text-sm text-white/60 mb-3">
                  Set up instrument-specific settings such as voltage ranges, current limits, or trigger conditions.
                </p>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Set%20Actions-2s3ftqY6SM2zz8t1VpyfMieeAtHOy9.png"
                  alt="Instrument configuration interface"
                  className="rounded-lg border border-white/10 w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Best Practices</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <Check className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Verify Connections</h3>
                <p className="text-sm text-white/60">
                  Always verify instrument connections before running workflows. Use the "Test Connection" button in the
                  instrument settings panel.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <Check className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Set Protection Limits</h3>
                <p className="text-sm text-white/60">
                  Configure appropriate protection limits (voltage, current, power) to prevent damage to your DUT.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <Check className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Regular Calibration</h3>
                <p className="text-sm text-white/60">
                  Ensure all instruments are properly calibrated and maintain a calibration schedule.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    ),

    "workflow-basics": (
      <div className="space-y-8">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-2 text-violet-400 border-violet-400/20">
            Workflow Basics
          </Badge>
          <h1 className="text-3xl font-bold text-white">Understanding Workflows</h1>
          <p className="text-lg text-white/60 max-w-3xl">
            Learn the fundamentals of creating and managing test workflows in TestFlow. Our visual interface makes it easy to design, 
            execute, and monitor complex testing sequences.
          </p>
        </div>

        {/* Key Components Section */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Key Components</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="p-3 w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-lg font-medium text-white">Instruments</h3>
              <p className="text-sm text-white/60">
                Connect and control your testing hardware through our unified interface. Supports power supplies, 
                oscilloscopes, multimeters, and more.
                </p>
              </div>
            <div className="space-y-3">
              <div className="p-3 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-blue-400" />
            </div>
              <h3 className="text-lg font-medium text-white">Actions</h3>
              <p className="text-sm text-white/60">
                Define test steps, measurements, calculations, and control flow. Create complex testing sequences 
                with our drag-and-drop interface.
                </p>
              </div>
            <div className="space-y-3">
              <div className="p-3 w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Bot className="w-6 h-6 text-green-400" />
            </div>
              <h3 className="text-lg font-medium text-white">AI Assistance</h3>
              <p className="text-sm text-white/60">
                Let our AI help you optimize test sequences, troubleshoot issues, and suggest improvements 
                based on best practices.
              </p>
            </div>
          </div>
        </Card>

        {/* Creating a Workflow Section */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Creating Your First Workflow</h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-semibold text-violet-400">1</span>
            </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">Initialize Your Workflow</h3>
                <p className="text-sm text-white/60">
                  Start by clicking the "New Workflow" button in your dashboard. Give your workflow a descriptive name 
                  and optionally add tags for better organization.
                </p>
                <div className="rounded-lg overflow-hidden border border-white/10 max-w-2xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard%20Image-Yl8Q5bfHgp18PHqD8ezYy2WN7uGCbm.png"
                    alt="Creating new workflow"
                    className="w-full h-auto"
              />
            </div>
          </div>
        </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-semibold text-violet-400">2</span>
                </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">Add Instruments and Actions</h3>
                <p className="text-sm text-white/60">
                  From the sidebar, drag and drop the instruments and actions you need. TestFlow automatically detects 
                  connected instruments and suggests compatible actions.
                </p>
                <div className="rounded-lg overflow-hidden border border-white/10 max-w-2xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Select%20instrument%20or%20Action%20pop%20up-rDDO2h4eOhZ4Bt4bwSbysXlnJg6I4s.png"
                    alt="Adding instruments and actions"
                    className="w-full h-auto"
                  />
              </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-semibold text-violet-400">3</span>
                </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">Configure Settings</h3>
                <p className="text-sm text-white/60">
                  Configure each component's settings through our intuitive interface. Set measurement parameters, 
                  trigger conditions, and safety limits.
                </p>
                <div className="rounded-lg overflow-hidden border border-white/10 max-w-2xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Set%20Actions-2s3ftqY6SM2zz8t1VpyfMieeAtHOy9.png"
                    alt="Configuring settings"
                    className="w-full h-auto"
                  />
              </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-semibold text-violet-400">4</span>
                </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">Connect and Organize</h3>
                <p className="text-sm text-white/60">
                  Connect nodes to define your test sequence. Use our smart connection system to ensure valid 
                  connections and proper data flow.
                </p>
                <div className="rounded-lg overflow-hidden border border-white/10 max-w-2xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Visual%20Workflow%20builder-KjBOHdo8VPYYyZFa4Xs13lonNRTrL5.png"
                    alt="Connecting nodes"
                    className="w-full h-auto"
                  />
              </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Best Practices Section */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Best Practices</h2>
          <div className="grid gap-4">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-black/20">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <Check className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                <h3 className="text-white font-medium mb-1">Modular Design</h3>
                <p className="text-sm text-white/60">
                  Break down complex tests into smaller, reusable modules. This makes workflows easier to maintain 
                  and troubleshoot.
                  </p>
                </div>
              </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-black/20">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <Check className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                <h3 className="text-white font-medium mb-1">Error Handling</h3>
                <p className="text-sm text-white/60">
                  Always include error handling and safety checks. Use our built-in validation nodes to ensure 
                  robust test execution.
                  </p>
                </div>
              </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-black/20">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <Check className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                <h3 className="text-white font-medium mb-1">Documentation</h3>
                <p className="text-sm text-white/60">
                  Use comments and labels to document your workflow. This helps team members understand and 
                  maintain the test sequence.
                  </p>
                </div>
              </div>
          </div>
        </Card>

        {/* Pro Tips Section */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Pro Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">Keyboard Shortcuts</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Copy Node</span>
                  <code className="px-2 py-1 rounded bg-black/40 text-violet-400">Ctrl + C</code>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Paste Node</span>
                  <code className="px-2 py-1 rounded bg-black/40 text-violet-400">Ctrl + V</code>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Delete Node</span>
                  <code className="px-2 py-1 rounded bg-black/40 text-violet-400">Delete</code>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">Quick Actions</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Quick Find</span>
                  <code className="px-2 py-1 rounded bg-black/40 text-violet-400">Ctrl + F</code>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Save Workflow</span>
                  <code className="px-2 py-1 rounded bg-black/40 text-violet-400">Ctrl + S</code>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Run Workflow</span>
                  <code className="px-2 py-1 rounded bg-black/40 text-violet-400">F5</code>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    ),

    "security": (
      <div className="space-y-8">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-2 text-violet-400 border-violet-400/20">
            Security
          </Badge>
          <h1 className="text-3xl font-bold text-white">Security Features</h1>
          <p className="text-lg text-white/60 max-w-3xl">
            Learn about TestFlow's comprehensive security features and best practices for secure testing.
          </p>
        </div>

        {/* Access Control */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Access Control</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-500/10">
                  <Users className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Role-Based Access</h3>
                  <p className="text-sm text-white/60">
                    Granular control over user permissions with customizable roles for administrators, engineers, and operators.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-500/10">
                  <Shield className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Authentication</h3>
                  <p className="text-sm text-white/60">
                    Secure login with multi-factor authentication and SSO integration options.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-500/10">
                  <AlertCircle className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Audit Logging</h3>
                  <p className="text-sm text-white/60">
                    Comprehensive audit trails for all system actions and test executions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-500/10">
                  <Settings className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">IP Restrictions</h3>
                  <p className="text-sm text-white/60">
                    Control access to the platform through IP whitelisting and VPN integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Data Security */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Data Security</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-black/20 rounded-lg">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <Database className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Encryption</h3>
                <p className="text-sm text-white/60">
                  All data is encrypted at rest and in transit using industry-standard encryption protocols.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>AES-256 encryption for stored data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>TLS 1.3 for data in transit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Secure key management</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-black/20 rounded-lg">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <Cloud className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Data Privacy</h3>
                <p className="text-sm text-white/60">
                  Comprehensive data privacy controls and compliance features.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>GDPR compliance tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Data retention policies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Secure data deletion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Best Practices */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Security Best Practices</h2>
          <div className="grid gap-4">
            <div className="flex items-start gap-4 p-4 bg-black/20 rounded-lg">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <Check className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Regular Security Updates</h3>
                <p className="text-sm text-white/60">
                  Keep your TestFlow installation up to date with the latest security patches and updates.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/20 rounded-lg">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <Check className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Access Review</h3>
                <p className="text-sm text-white/60">
                  Regularly review and audit user access permissions and remove unused accounts.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/20 rounded-lg">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <Check className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Secure Configuration</h3>
                <p className="text-sm text-white/60">
                  Follow security hardening guidelines for TestFlow deployment and infrastructure.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    ),

    "integrations": (
      <div className="space-y-8">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-2 text-violet-400 border-violet-400/20">
            Integrations
          </Badge>
          <h1 className="text-3xl font-bold text-white">Connect Your Tools</h1>
          <p className="text-lg text-white/60 max-w-3xl">
            TestFlow seamlessly integrates with your favorite tools and platforms to streamline your testing workflow.
          </p>
        </div>

        {/* Featured Integrations */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Integrations</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Microsoft Teams */}
            <div className="bg-black/20 rounded-xl p-6 hover:bg-black/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-8 h-8 text-[#464EB8]">
                    <TeamsIcon />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#464EB8] transition-colors">
                    Microsoft Teams
                  </h3>
                  <p className="text-sm text-white/60 mb-4">
                    Real-time notifications and collaboration for your test workflows.
                  </p>
                  <div className="space-y-2 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      <span>Test completion alerts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      <span>Error notifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      <span>Results sharing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Excel */}
            <div className="bg-black/20 rounded-xl p-6 hover:bg-black/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-8 h-8 text-[#217346]">
                    <ExcelIcon />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#217346] transition-colors">
                    Microsoft Excel
                  </h3>
                  <p className="text-sm text-white/60 mb-4">
                    Automated data export and report generation in Excel format.
                  </p>
                  <div className="space-y-2 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Custom report templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Real-time data logging</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Chart generation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Jira */}
            <div className="bg-black/20 rounded-xl p-6 hover:bg-black/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Trello className="w-8 h-8 text-[#0052CC]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#0052CC] transition-colors">
                    Jira
                  </h3>
                  <p className="text-sm text-white/60 mb-4">Track issues and manage test cases directly in Jira.</p>
                  <div className="space-y-2 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      <span>Automatic issue creation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      <span>Test case management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      <span>Sprint integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slack */}
            <div className="bg-black/20 rounded-xl p-6 hover:bg-black/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-[#E01E5A]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#E01E5A] transition-colors">
                    Slack
                  </h3>
                  <p className="text-sm text-white/60 mb-4">Keep your team informed with Slack notifications.</p>
                  <div className="space-y-2 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" />
                      <span>Channel notifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" />
                      <span>Direct messages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" />
                      <span>Custom alerts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Integrations */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Additional Integrations</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 p-4 bg-black/20 rounded-lg">
              <LineChart className="w-5 h-5 text-white/40" />
              <span className="text-white/60">Grafana</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/20 rounded-lg">
              <Database className="w-5 h-5 text-white/40" />
              <span className="text-white/60">PostgreSQL</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/20 rounded-lg">
              <Cloud className="w-5 h-5 text-white/40" />
              <span className="text-white/60">AWS S3</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/20 rounded-lg">
              <GitPullRequest className="w-5 h-5 text-white/40" />
              <span className="text-white/60">GitHub</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/20 rounded-lg">
              <Clock className="w-5 h-5 text-white/40" />
              <span className="text-white/60">Jenkins</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-white/40" />
              <span className="text-white/60">PagerDuty</span>
            </div>
          </div>
        </Card>

        {/* API & Webhooks */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Custom Integration</h2>
          <div className="space-y-4">
            <p className="text-white/60">
              Need to integrate with a different tool? TestFlow provides a robust API and webhooks system that allows
              you to build custom integrations with any service.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">REST API</h3>
                <CodeBlock
                  language="bash"
                  code={`curl -X POST https://api.testflow.dev/v1/results \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{"test_id": "123", "status": "passed"}'`}
                  onCopy={copyToClipboard}
                  copied={copied}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Webhooks</h3>
                <CodeBlock
                  language="json"
                  code={`{
  "event": "test.completed",
  "data": {
    "id": "test_123",
    "status": "passed",
    "duration": 145.2
  }
}`}
                  onCopy={copyToClipboard}
                  copied={copied}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    ),
    "ai-model": (
      <div className="space-y-8">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-2 text-violet-400 border-violet-400/20">
            AI Model
          </Badge>
          <h1 className="text-3xl font-bold text-white">ATOMS AI Model</h1>
          <p className="text-lg text-white/60 max-w-3xl">
            Discover how ATOMS AI's advanced machine learning models power intelligent test automation and optimization.
          </p>
        </div>

        {/* AI Demo Image */}
        <div className="relative rounded-lg overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20chat-9ux1pM0XtMoD9RPVF8IsZakFXPh1cS.png"
            alt="ATOMS AI Interface"
            className="w-full"
          />
        </div>

        {/* Core AI Technology */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Core AI Technology</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="p-3 w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <Bot className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-lg font-medium text-white">Natural Language Understanding</h3>
              <p className="text-sm text-white/60">
                Advanced NLP models understand complex test requirements and technical specifications, translating them into 
                precise test workflows.
              </p>
            </div>
            <div className="space-y-3">
              <div className="p-3 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-white">Machine Learning Core</h3>
              <p className="text-sm text-white/60">
                Sophisticated ML models learn from test executions to optimize parameters and improve workflow efficiency.
              </p>
            </div>
            <div className="space-y-3">
              <div className="p-3 w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Settings className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-medium text-white">Adaptive Intelligence</h3>
              <p className="text-sm text-white/60">
                Self-improving algorithms adapt to your testing patterns and requirements for better results over time.
              </p>
            </div>
          </div>
        </Card>

        {/* AI Workflow Image */}
        <div className="relative rounded-lg overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Visual%20Workflow%20builder-KjBOHdo8VPYYyZFa4Xs13lonNRTrL5.png"
            alt="AI-Powered Workflow Builder"
            className="w-full"
          />
        </div>

        {/* Model Capabilities */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Model Capabilities</h2>
          <div className="grid gap-6">
            <div className="flex items-start gap-4 p-4 bg-black/20 rounded-lg">
              <div className="p-3 rounded-lg bg-violet-500/10">
                <Bot className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Test Generation</h3>
                <p className="text-white/60 text-sm mb-3">
                  AI models analyze test requirements and automatically generate optimized test sequences with appropriate 
                  parameters and safety measures.
                </p>
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="text-sm text-white/80">
                    Input: "Test power supply stability under varying loads"
                    Output: Complete test workflow with voltage monitoring, load stepping, and safety limits
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-black/20 rounded-lg">
              <div className="p-3 rounded-lg bg-blue-500/10">
                <Workflow className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Pattern Recognition</h3>
                <p className="text-white/60 text-sm mb-3">
                  Advanced pattern recognition identifies trends and anomalies in test results for proactive optimization.
                </p>
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="text-sm text-white/80">
                    Automatically detects performance patterns and suggests optimizations for improved efficiency
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-black/20 rounded-lg">
              <div className="p-3 rounded-lg bg-green-500/10">
                <Settings className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Predictive Analytics</h3>
                <p className="text-white/60 text-sm mb-3">
                  ML models predict potential issues and optimize test parameters for better results.
                </p>
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="text-sm text-white/80">
                    Predicts optimal test conditions and identifies potential failure points before they occur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Training Data */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Model Training</h2>
          <div className="space-y-6">
            <p className="text-white/60">
              ATOMS AI models are trained on extensive datasets of test scenarios, industry standards, and best practices 
              to ensure reliable and efficient test automation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Training Sources</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violet-400" />
                    <span className="text-white/60">Industry standard test procedures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violet-400" />
                    <span className="text-white/60">Historical test data and results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violet-400" />
                    <span className="text-white/60">Expert-designed test sequences</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Continuous Learning</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violet-400" />
                    <span className="text-white/60">Real-time performance feedback</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violet-400" />
                    <span className="text-white/60">User interaction patterns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violet-400" />
                    <span className="text-white/60">Test outcome analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Technical Specifications */}
        <Card className="border-white/5 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Model Architecture</h3>
              <div className="space-y-2 text-sm text-white/60">
                <p>• Transformer-based language models</p>
                <p>• Deep learning neural networks</p>
                <p>• Reinforcement learning systems</p>
                <p>• Custom optimization algorithms</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Performance Metrics</h3>
              <div className="space-y-2 text-sm text-white/60">
                <p>• 99.9% test generation accuracy</p>
                <p>• Sub-second response times</p>
                <p>• Continuous model updates</p>
                <p>• Real-time optimization</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    ),
  }

  // Memoize the current content to prevent unnecessary re-renders
  const currentContent = useMemo(() => {
    return content[currentSection as keyof typeof content] || (
      <div className="space-y-8">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-2 text-violet-400 border-violet-400/20">
            {currentSection}
          </Badge>
          <h1 className="text-3xl font-bold text-white">Coming Soon</h1>
          <p className="text-lg text-white/60 max-w-3xl">
            This section is currently under development. Check back soon for updates.
          </p>
        </div>
      </div>
    )
  }, [currentSection])

  return (
    <div className="flex-1 px-8 py-6 overflow-y-auto max-w-5xl mx-auto">
      <motion.div
        key={currentSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {currentContent}
      </motion.div>
    </div>
  )
}

