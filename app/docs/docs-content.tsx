"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { trackButtonClick } from "@/components/analytics-tracker"
import {
  Check,
  Copy,
  Bot,
  Cpu,
  Workflow,
  Code2,
  MessageSquare,
  LineChart,
  Database,
  Cloud,
  GitPullRequest,
  Clock,
  AlertCircle,
  Settings,
  Users,
  Shield,
  Play,
  ArrowRight,
  Zap,
  Target,
  Monitor,
  Wrench,
  Terminal,
  BookOpen,
  Lightbulb,
  Globe,
  Layers,
  HelpCircle,
  FileText,
  GitBranch,
  Puzzle,
  Webhook,
  ChevronRight,
  ExternalLink,
  Download,
  Upload,
  BarChart3,
  Activity,
  Gauge,
  Sparkles,
  Rocket,
  Eye,
  Lock,
  Key,
  Server,
  Smartphone,
  Tablet,
  Laptop
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface DocsContentProps {
  currentSection: string
}

interface CodeBlockProps {
  code: string
  language: string
  onCopy: (text: string) => void
  copied: boolean
}

interface ImagePlaceholderProps {
  title: string
  description: string
  aspectRatio?: string
  icon?: React.ReactNode
}

const ImagePlaceholder = ({ title, description, aspectRatio = "16/9", icon }: ImagePlaceholderProps) => (
  <div 
    className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-dashed border-gray-600/50 rounded-xl flex flex-col items-center justify-center p-8 text-center hover:border-blue-500/50 transition-colors group`}
    style={{ aspectRatio }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    {icon || <Eye className="w-12 h-12 text-gray-400 mb-4 group-hover:text-blue-400 transition-colors" />}
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-400 max-w-md">{description}</p>
    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-2">
      <Upload className="w-4 h-4 text-gray-400" />
    </div>
  </div>
)

const CodeBlock = ({ code, language, onCopy, copied }: CodeBlockProps) => (
  <div className="relative group">
    <pre className="rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 p-6 overflow-x-auto">
      <code className={`language-${language} text-sm text-gray-300`}>{code}</code>
    </pre>
    <Button
      size="icon"
      variant="ghost"
      className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 text-gray-400 hover:text-white hover:bg-white/10"
      onClick={() => onCopy(code)}
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </Button>
  </div>
)

const FeatureCard = ({ icon, title, description, badge }: {
  icon: React.ReactNode
  title: string
  description: string
  badge?: string
}) => (
  <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-6 hover:bg-black/60 transition-all duration-300 group hover:border-blue-500/30">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          {badge && (
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
              {badge}
            </Badge>
          )}
        </div>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  </Card>
)

const StepCard = ({ number, title, description, children }: {
  number: number
  title: string
  description: string
  children?: React.ReactNode
}) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
        {number}
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
      {children}
    </div>
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
    // Getting Started Section
    "getting-started": (
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <Badge variant="outline" className="text-green-400 border-green-400/30">
            Quick Start
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TestFlow
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get started with TestFlow in minutes. Our AI-powered validation platform makes hardware testing intuitive, fast, and reliable.
          </p>
        </motion.div>

        {/* Hero Image with Video */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-500/20 backdrop-blur-sm group hover:border-blue-400/40 transition-all duration-300">
          {/* Glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Main Image Container */}
          <div className="relative aspect-[16/9] w-full">
            <img
              src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/TestFlow%20quick%20Demo%20thumbnail.png"
              alt="TestFlow Platform Overview - Complete view of the TestFlow interface showing workflow builder, AI assistant, and test execution dashboard"
              className="w-full h-full object-cover rounded-2xl"
            />
            
            {/* Dark overlay for better button visibility */}
            <div className="absolute inset-0 bg-black/30 rounded-2xl" />
            
            {/* Play Button */}
            <motion.a
              href="https://vimeo.com/1100424804?share=copy"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center group/play cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl scale-150 group-hover/play:scale-175 transition-transform duration-300" />
                
                {/* Main play button */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl group-hover/play:shadow-[0_0_40px_rgba(79,70,229,0.6)] transition-all duration-300 border-2 border-white/20">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
        </div>

                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-20" />
            </div>
            </motion.a>
              </div>

          {/* Floating UI Elements */}
          <motion.div
            className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-white/80">Quick Demo</span>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-xs text-white/80">Watch Overview</span>
              </div>
          </motion.div>
              </div>

        {/* Tutorial Video */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 border border-purple-500/20 backdrop-blur-sm group hover:border-purple-400/40 transition-all duration-300">
          {/* Glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Main Image Container */}
          <div className="relative aspect-[16/9] w-full">
            <img
              src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/How%20to%20create%20a%20TestFlow%20Tuturial%20.png"
              alt="How to Create a TestFlow Tutorial - Step-by-step guide to building your first validation workflow"
              className="w-full h-full object-cover rounded-2xl"
            />
            
            {/* Dark overlay for better button visibility */}
            <div className="absolute inset-0 bg-black/30 rounded-2xl" />
            
            {/* Play Button */}
            <motion.a
              href="https://youtu.be/pUrUVCDAThY?si=nx88zy-jrIT047VW"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center group/play cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-2xl scale-150 group-hover/play:scale-175 transition-transform duration-300" />
                
                {/* Main play button */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover/play:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all duration-300 border-2 border-white/20">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                </div>

                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-20" />
              </div>
            </motion.a>
          </div>

          {/* Floating UI Elements */}
          <motion.div
            className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-xs text-white/80">Tutorial</span>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-xs text-white/80">Learn TestFlow</span>
            </div>
          </motion.div>
        </div>

        {/* What You'll Learn */}
        <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-green-400" />
              </div>
              <div>
                  <h4 className="font-medium text-white">Setup & Installation</h4>
                  <p className="text-sm text-gray-400">Get TestFlow running in your environment</p>
              </div>
            </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-green-400" />
              </div>
              <div>
                  <h4 className="font-medium text-white">Create Your First Workflow</h4>
                  <p className="text-sm text-gray-400">Build and execute a complete test workflow</p>
              </div>
            </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-green-400" />
              </div>
              <div>
                  <h4 className="font-medium text-white">Connect Instruments</h4>
                  <p className="text-sm text-gray-400">Integrate your lab equipment seamlessly</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-green-400" />
              </div>
              <div>
                  <h4 className="font-medium text-white">AI Assistant Usage</h4>
                  <p className="text-sm text-gray-400">Leverage AI for automated test generation</p>
              </div>
            </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-green-400" />
              </div>
              <div>
                  <h4 className="font-medium text-white">Data Analysis</h4>
                  <p className="text-sm text-gray-400">Interpret results and generate reports</p>
              </div>
            </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-green-400" />
              </div>
              <div>
                  <h4 className="font-medium text-white">Best Practices</h4>
                  <p className="text-sm text-gray-400">Optimize workflows for your specific needs</p>
              </div>
            </div>
              </div>
            </div>
          </Card>

        {/* Next Steps */}
        <Card className="border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Play className="w-5 h-5 mr-2" />
              Start Tutorial
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
              <BookOpen className="w-5 h-5 mr-2" />
              View Examples
            </Button>
            </div>
          </Card>
      </div>
    ),

    // Installation Section
    "installation": (
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="text-blue-400 border-blue-400/30">
            Installation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Installation & Setup
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get TestFlow up and running in your environment with our step-by-step installation guide.
          </p>
        </div>

        {/* System Requirements */}
        <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-blue-400" />
                  Hardware Requirements
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    8GB RAM minimum (16GB recommended)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    4-core CPU (Intel i5 or AMD Ryzen 5+)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    5GB free disk space
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    1920x1080 display resolution
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  Network Requirements
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Stable internet connection
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Port 443 (HTTPS) access
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Firewall configured for instrument communication
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-400" />
                  Software Requirements
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Windows 10/11 or macOS 10.15+
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Chrome, Edge, or Firefox (latest version)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    NI-VISA Runtime Engine
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    USB drivers for your instruments
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-400" />
                  Instrument Support
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    SCPI-compatible instruments
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    USB, Ethernet, or RS-232 connectivity
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    VISA-compatible drivers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Installation Steps */}
        <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-semibold text-white mb-8">Installation Steps</h2>
          <div className="space-y-8">
            <StepCard
              number={1}
              title="Download TestFlow"
              description="Get the latest version of TestFlow from our official website or your organization's software portal."
            >
              <div className="flex gap-4">
                <Link 
                  href="/contact"
                  onClick={() => trackButtonClick('Download Windows', 'Installation Steps', { page: 'docs' })}
                >
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    <Download className="w-4 h-4 mr-2" />
                    Download for Windows
                  </Button>
                </Link>
                <Link 
                  href="/contact"
                  onClick={() => trackButtonClick('Download macOS', 'Installation Steps', { page: 'docs' })}
                >
                  <Button variant="outline" className="border-white/20 hover:bg-white/5">
                    <Download className="w-4 h-4 mr-2" />
                    Download for macOS
                  </Button>
                </Link>
            </div>
            </StepCard>

            <StepCard
              number={2}
              title="Install Prerequisites"
              description="Install the required software components before setting up TestFlow."
            >
              <CodeBlock
                language="bash"
                code={`# Install NI-VISA Runtime Engine
# Download from ni.com/visa and run the installer

# Verify installation
visa-config-info

# Install instrument drivers
# Download specific drivers for your instruments`}
                onCopy={copyToClipboard}
                copied={copied}
              />
            </StepCard>

            <StepCard
              number={3}
              title="Run TestFlow Installer"
              description="Execute the TestFlow installer and follow the setup wizard."
            >
              <div className="space-y-4 text-gray-300">
                <p>Follow these steps in the installation wizard:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Choose your installation directory</li>
                  <li>Select additional components (recommended: all)</li>
                  <li>Configure environment variables</li>
                  <li>Set up default instrument connections</li>
                </ul>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-400">Pro Tip</span>
              </div>
                  <p className="text-sm text-gray-300">
                    Use the default settings for optimal performance. Advanced users can customize the configuration later through the settings panel.
                  </p>
              </div>
            </div>
            </StepCard>

            <StepCard
              number={4}
              title="Initial Configuration"
              description="Configure TestFlow settings and connect your first instruments."
            >
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Pro Tip</span>
              </div>
                <p className="text-sm text-gray-300">
                  Use the built-in instrument discovery tool to automatically detect and configure connected devices.
                </p>
              </div>
            </StepCard>

            <StepCard
              number={5}
              title="Verify Installation"
              description="Test your installation by creating a simple workflow and running a basic test."
            >
              <Link 
                href="https://testflow.atomsai.net/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackButtonClick('Run Installation Test', 'Installation Steps', { page: 'docs' })}
              >
                <Button className="bg-green-500 hover:bg-green-600">
                  <Play className="w-4 h-4 mr-2" />
                  Run Installation Test
                </Button>
              </Link>
            </StepCard>
          </div>
        </Card>

        {/* Troubleshooting */}
        <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Common Issues</h2>
          <div className="space-y-4">
            <div className="border border-orange-500/20 bg-orange-500/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                  <h4 className="font-medium text-orange-400 mb-1">Instruments Not Detected</h4>
                  <p className="text-sm text-gray-300">
                    Ensure VISA drivers are installed and instruments are properly connected. Check Windows Device Manager for any driver issues.
                </p>
              </div>
            </div>
              </div>
            <div className="border border-red-500/20 bg-red-500/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
              <div>
                  <h4 className="font-medium text-red-400 mb-1">Connection Timeout</h4>
                  <p className="text-sm text-gray-300">
                    Check network connectivity and firewall settings. Ensure TestFlow can access the internet for license validation.
                </p>
              </div>
            </div>
            </div>
          </div>
        </Card>
      </div>
    ),

    // AI Assistant Section
    "ai-assistant": (
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="text-purple-400 border-purple-400/30">
            AI Assistant
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            AI-Powered{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Test Generation
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let our AI assistant understand your testing requirements and automatically generate optimized workflows, saving you hours of manual configuration.
          </p>
        </div>

        {/* AI Features */}
          <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<MessageSquare className="w-6 h-6 text-purple-400" />}
            title="Natural Language"
            description="Describe your test requirements in plain English and watch as AI translates them into executable workflows."
            badge="New"
          />
          <FeatureCard
            icon={<Sparkles className="w-6 h-6 text-purple-400" />}
            title="Smart Optimization"
            description="AI automatically optimizes test sequences for efficiency, accuracy, and resource utilization."
          />
          <FeatureCard
            icon={<Target className="w-6 h-6 text-purple-400" />}
            title="Intelligent Suggestions"
            description="Get contextual recommendations for test parameters, measurement ranges, and validation criteria."
          />
              </div>

                {/* AI Video Demonstration */}
        <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">AI-Powered Validation in Action</h2>
          
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm bg-black/20 group hover:border-purple-500/30 transition-all duration-500 mb-6">
            {/* Multiple Glow Layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl blur-xl" />
            
            {/* Main Container */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-blue-500/5 rounded-2xl" />
              
              {/* Video Container */}
              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full relative z-10"
                >
                  <source src="/Video/AI powred validation Vertical.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />
              </div>
              
              {/* Floating UI Elements */}
              <motion.div
                className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-xs text-white/80">AI Active</span>
            </div>
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2"
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-xs text-white/80">Generating...</span>
              </div>
              </motion.div>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/50 rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-blue-400/50 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/50 rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-blue-400/50 rounded-br-lg" />
            </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Validate Chips Using Human Language</h3>
            <p className="text-gray-400 leading-relaxed">
              Watch how TestFlow's AI assistant transforms natural language descriptions into comprehensive validation workflows. 
              Simply describe your testing requirements in plain English, and our AI generates optimized test sequences with proper instrumentation and safety measures.
            </p>
            
              <div className="space-y-3">
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <p className="text-sm text-purple-300 mb-1">User:</p>
                <p className="text-white">"I need to test the power consumption of my IoT device at different operating modes"</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">AI Assistant:</p>
                <p className="text-gray-300">
                  "I'll create a power measurement workflow that tests your device across different operating modes. 
                  I'll set up a power supply, current measurement, and automated mode switching. 
                  Would you like me to include sleep mode testing as well?"
                </p>
            </div>
          </div>
        </div>
        </Card>

        {/* How to Use AI */}
        <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-semibold text-white mb-8">How to Use the AI Assistant</h2>
          <div className="space-y-8">
            <StepCard
              number={1}
              title="Open AI Assistant"
              description="Click the AI button in the workflow builder or use the keyboard shortcut Ctrl+Shift+A to open the assistant."
            >
              <CodeBlock
                language="text"
                code="Keyboard Shortcut: Ctrl+Shift+A (Windows) or Cmd+Shift+A (Mac)"
                onCopy={copyToClipboard}
                copied={copied}
              />
            </StepCard>

            <StepCard
              number={2}
              title="Describe Your Test"
              description="Be specific about what you want to test, including device type, parameters, and expected outcomes."
            >
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="font-medium text-blue-400 mb-2">Good Examples:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• "Test LED brightness vs current from 1mA to 20mA"</li>
                  <li>• "Measure temperature sensor accuracy from -40°C to +85°C"</li>
                  <li>• "Validate USB power delivery compliance for 5V/3A output"</li>
                </ul>
                </div>
            </StepCard>

            <StepCard
              number={3}
              title="Review Generated Workflow"
              description="The AI will create a complete workflow with instruments, measurements, and analysis. Review and modify as needed."
            >
              {/* Workflow Review Interface */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-500/20 backdrop-blur-sm group hover:border-blue-400/40 transition-all duration-300">
                {/* Glow effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Main Image Container */}
                <div className="relative aspect-[16/9] w-full">
                  <img
                    src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Screenshot%202025-07-10%20at%2011.26.39%E2%80%AFPM.png"
                    alt="TestFlow Workflow Builder - Review Generated Workflow Interface"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Overlay gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
            </div>

                {/* Floating UI Elements */}
                <motion.div
                  className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white/80">Workflow Ready</span>
                </div>
                </motion.div>
                
                <motion.div
                  className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2"
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white/80">Validating...</span>
                </div>
                </motion.div>
                </div>
            </StepCard>

            <StepCard
              number={4}
              title="Refine with Follow-up"
              description="Ask the AI to modify the workflow, add specific features, or optimize for your particular requirements."
            >
            <div className="space-y-3">
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                  <p className="text-sm text-purple-300">"Can you add automatic pass/fail criteria based on the datasheet specs?"</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3">
                  <p className="text-sm text-gray-300">"I've added pass/fail logic with configurable thresholds. You can adjust the limits in the validation node."</p>
                </div>
                </div>
            </StepCard>
          </div>
        </Card>

        {/* AI Capabilities */}
        <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">AI Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Test Generation</h3>
              <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                  Automatic instrument selection
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                  Parameter optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                  Test sequence planning
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Safety checks integration
                  </li>
                </ul>
              </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Analysis & Reporting</h3>
              <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                  Automated data analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                  Statistical calculations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                  Report generation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Trend identification
                  </li>
                </ul>
            </div>
          </div>
        </Card>
      </div>
    ),

    // Data Analysis Section
    "data-analysis": (
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="text-green-400 border-green-400/30">
            Data Analysis
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Analyze Results and Generate Reports in{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Minutes
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your validation data into actionable insights with our powerful analytics engine and AI-assisted reporting.
          </p>
        </div>

        {/* Step 1: Upload CSV */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-green-500/10 rounded-3xl blur-3xl opacity-30" />
          <Card className="relative border-white/10 bg-black/40 backdrop-blur-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20">
                <Upload className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Step 1: Upload Your Data</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Start by uploading your validation data. Our platform supports various formats including CSV, Excel, and direct instrument exports.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Drag & drop file upload
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Automatic format detection
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Data validation & cleaning
                  </li>
                </ul>
              </div>
              
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Screenshot%202025-07-11%20at%206.32.03%E2%80%AFAM.png"
                  alt="Upload CSV interface showing drag and drop area"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </Card>
        </div>

        {/* Step 2: Configure Report */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl opacity-30" />
          <Card className="relative border-white/10 bg-black/40 backdrop-blur-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <Bot className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Step 2: AI-Assisted Configuration</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Screenshot%202025-07-11%20at%206.32.51%E2%80%AFAM.png"
                  alt="AI configuration interface showing data mapping and report settings"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Let our AI help you configure your report settings and map your data fields. The system automatically suggests optimal visualizations and analysis methods.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Smart data mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Automated field recognition
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Custom template selection
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Step 3: Review Report */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl blur-3xl opacity-30" />
          <Card className="relative border-white/10 bg-black/40 backdrop-blur-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <FileText className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Step 3: Review Generated Report</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Review your automatically generated report with comprehensive analysis, visualizations, and insights. Make adjustments and customize as needed.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Interactive previews
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Real-time editing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Collaborative review
                  </li>
                </ul>
              </div>
              
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Screenshot%202025-07-11%20at%206.35.29%E2%80%AFAM.png"
                  alt="Report review interface showing analysis and visualizations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </Card>
        </div>

        {/* Step 4: Analyze & Download */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl opacity-30" />
          <Card className="relative border-white/10 bg-black/40 backdrop-blur-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Step 4: Analyze & Export</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Screenshot%202025-07-11%20at%206.36.04%E2%80%AFAM.png"
                  alt="Analysis dashboard showing interactive graphs and export options"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Dive deep into your data with interactive graphs and download your complete report in multiple formats. Share insights with your team instantly.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    Interactive visualizations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    Multiple export formats
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    One-click sharing
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="border-white/10 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Ready to Transform Your Data?</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
              <Link href="/contact">
                <Upload className="w-5 h-5 mr-2" />
                Upload Your Data
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
              <Link href="/docs?section=ai-assistant">
                <Bot className="w-5 h-5 mr-2" />
                Try AI Assistant
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    ),

    // Add more sections here...
    "workflow-builder": (
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="text-blue-400 border-blue-400/30">
            Workflow Builder
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Visual Workflow{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Builder
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Create sophisticated test workflows visually by dragging and connecting instruments, logic blocks, and measurement nodes.
          </p>
        </div>

        {/* Workflow Builder Interface */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-500/20 backdrop-blur-sm group hover:border-blue-400/40 transition-all duration-300">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Video Container */}
          <div className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full relative z-10"
            >
              <source src="/Video/cursorful-video-1741889347046.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          </div>
          
          {/* Floating UI Elements */}
          <motion.div
            className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-xs text-white/80">Visual Builder</span>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-xs text-white/80">Drag & Drop</span>
            </div>
          </motion.div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            icon={<Layers className="w-6 h-6 text-blue-400" />}
            title="Drag & Drop Interface"
            description="Intuitive visual editor with drag-and-drop functionality for creating complex test workflows."
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6 text-blue-400" />}
            title="Real-time Validation"
            description="Instant feedback on workflow validity with automatic error detection and suggestions."
          />
          <FeatureCard
            icon={<GitBranch className="w-6 h-6 text-blue-400" />}
            title="Conditional Logic"
            description="Add decision points, loops, and conditional branches to create intelligent test sequences."
          />
          <FeatureCard
            icon={<Activity className="w-6 h-6 text-blue-400" />}
            title="Live Monitoring"
            description="Watch your workflow execute in real-time with live data visualization and progress tracking."
          />
        </div>

        {/* Node Types */}
        <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Node Types</h2>
          <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-400" />
                Instrument Nodes
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Power Supplies</li>
                <li>• Oscilloscopes</li>
                <li>• Multimeters</li>
                <li>• Function Generators</li>
                <li>• Spectrum Analyzers</li>
                <li>• Temperature Controllers</li>
              </ul>
              </div>
              <div className="space-y-4">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                Logic Nodes
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Conditional Branches</li>
                <li>• For/While Loops</li>
                <li>• Wait/Delay</li>
                <li>• Mathematical Operations</li>
                <li>• Variable Assignment</li>
                <li>• Data Validation</li>
              </ul>
                  </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-400" />
                Data Nodes
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Data Logging</li>
                <li>• File Export</li>
                <li>• Database Storage</li>
                <li>• Report Generation</li>
                <li>• Chart Creation</li>
                <li>• Statistical Analysis</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    ),

    // Core Concepts Section
    "core-concepts": (
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="text-blue-400 border-blue-400/30">
            Core Concepts
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Understanding{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TestFlow
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Master the fundamental concepts and components that make TestFlow a powerful validation platform.
          </p>
        </div>

        {/* Linked Nodes */}
        <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <GitBranch className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Linked Nodes System</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              TestFlow's linked nodes system is the foundation of our visual workflow builder. Nodes represent discrete operations, instruments, or logic blocks that can be connected to create sophisticated test sequences.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="font-medium text-white">Node Types</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <Wrench className="w-3 h-3 text-blue-400" />
                    </div>
                    <span>Instrument Nodes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center mt-0.5">
                      <Code2 className="w-3 h-3 text-purple-400" />
                    </div>
                    <span>Logic Nodes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center mt-0.5">
                      <Database className="w-3 h-3 text-green-400" />
                    </div>
                    <span>Data Nodes</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-white">Connection Types</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <ArrowRight className="w-3 h-3 text-blue-400" />
                    </div>
                    <span>Data Flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center mt-0.5">
                      <GitBranch className="w-3 h-3 text-purple-400" />
                    </div>
                    <span>Control Flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center mt-0.5">
                      <Activity className="w-3 h-3 text-green-400" />
                    </div>
                    <span>Event Triggers</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-white">Properties</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <Settings className="w-3 h-3 text-blue-400" />
                    </div>
                    <span>Configurable Parameters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center mt-0.5">
                      <Eye className="w-3 h-3 text-purple-400" />
                    </div>
                    <span>Visual States</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center mt-0.5">
                      <Lock className="w-3 h-3 text-green-400" />
                    </div>
                    <span>Access Controls</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Instrument Actions */}
        <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20">
              <Wrench className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Instrument Actions</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Instrument actions are pre-configured operations that can be performed on connected test equipment. These actions abstract away the complexity of instrument communication while providing full control over measurement parameters.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-medium text-white">Common Actions</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Configure measurement settings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Trigger measurements
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Read measurement data
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Set output values
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Reset instrument state
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-white">Advanced Features</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Automated calibration
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Error handling & recovery
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Parallel execution
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Custom SCPI commands
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Instrument synchronization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* AI Integration */}
        <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <Bot className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-semibold text-white">AI Integration</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              TestFlow's AI system enhances every aspect of the validation process, from test generation to result analysis. The AI understands testing requirements in natural language and automates complex validation tasks.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium text-white">Test Generation</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Natural language processing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Automated workflow creation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Parameter optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Test coverage analysis
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-white">Runtime Assistance</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Real-time optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Anomaly detection
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Adaptive testing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Error prediction
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-white">Analysis & Insights</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Pattern recognition
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Automated reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Trend analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Analytics */}
        <Card className="border-white/10 bg-black/40 backdrop-blur-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
              <LineChart className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Analytics & Reporting</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              TestFlow's analytics engine processes validation data in real-time, providing instant insights and comprehensive reporting capabilities. From basic statistics to advanced trend analysis, our platform helps you understand your test results deeply.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-medium text-white">Data Processing</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Real-time data processing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Statistical analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Data visualization
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Custom calculations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Data export & sharing
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-white">Reporting Features</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Automated report generation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Custom report templates
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Interactive dashboards
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Compliance documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400" />
                    Historical trending
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <Card className="border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Ready to Start Building?</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Link href="/docs?section=workflow-builder">
                <Workflow className="w-5 h-5 mr-2" />
                Open Workflow Builder
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
              <Link href="/docs?section=ai-assistant">
                <Bot className="w-5 h-5 mr-2" />
                Try AI Assistant
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    ),

    // Lab Instruments Section
    "lab-instruments": (
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="text-blue-400 border-blue-400/30">
            Lab Instruments
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Supported{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Test Equipment
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            TestFlow supports a wide range of industry-standard test and measurement equipment from leading manufacturers.
          </p>
        </div>

        {/* Brand Logos */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl opacity-30" />
          <Card className="relative border-white/10 bg-black/40 backdrop-blur-sm p-8">
            <h2 className="text-2xl font-semibold text-white mb-8">Supported Test Equipment</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                <Image
                  src="/logos/Instruments Logos/keysight-logo.svg"
                  alt="Keysight Technologies"
                  width={150}
                  height={40}
                  className="h-8 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                <Image
                  src="/logos/Instruments Logos/tektronix-logo.svg"
                  alt="Tektronix"
                  width={150}
                  height={40}
                  className="h-8 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                <Image
                  src="/logos/Instruments Logos/Rohde_&_Schwarz_Logo.svg.png"
                  alt="Rohde & Schwarz"
                  width={150}
                  height={40}
                  className="h-8 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                <Image
                  src="/logos/Instruments Logos/agilent-technologies-1.svg"
                  alt="Agilent Technologies"
                  width={150}
                  height={40}
                  className="h-8 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                <Image
                  src="/logos/Instruments Logos/Chroma.png"
                  alt="Chroma"
                  width={150}
                  height={40}
                  className="h-12 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                <Image
                  src="/logos/Instruments Logos/Keithley_Instruments_Logo.svg"
                  alt="Keithley Instruments"
                  width={150}
                  height={40}
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Equipment Categories */}
        <div className="grid gap-6">
          {/* Signal Analysis */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl opacity-30" />
            <Card className="relative border-white/10 bg-black/40 backdrop-blur-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <Activity className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Signal Analysis</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Oscilloscopes</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Digital Storage Oscilloscopes
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Mixed Signal Oscilloscopes
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Real-time Oscilloscopes
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Spectrum Analyzers</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      RF Spectrum Analyzers
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Signal Analyzers
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Vector Network Analyzers
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Power & Source */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-green-500/10 rounded-3xl blur-3xl opacity-30" />
            <Card className="relative border-white/10 bg-black/40 backdrop-blur-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Power & Source</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Power Supplies</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      DC Power Supplies
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Source Measure Units (SMU)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Electronic Loads
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Signal Generators</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Function Generators
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Arbitrary Waveform Generators
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      RF Signal Generators
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Digital & Mixed Signal */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl blur-3xl opacity-30" />
            <Card className="relative border-white/10 bg-black/40 backdrop-blur-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Cpu className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Digital & Mixed Signal</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Digital Analysis</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" />
                      Logic Analyzers
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" />
                      Protocol Analyzers
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" />
                      Pattern Generators
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Mixed Signal Testing</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" />
                      Digital Multimeters
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" />
                      Data Acquisition Units
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" />
                      Switching Systems
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Environmental Testing */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl opacity-30" />
            <Card className="relative border-white/10 bg-black/40 backdrop-blur-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Gauge className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Environmental Testing</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Temperature Control</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" />
                      Temperature Chambers
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" />
                      Thermal Platforms
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" />
                      Temperature Controllers
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Environmental Sensors</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" />
                      Humidity Sensors
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" />
                      Pressure Sensors
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" />
                      Environmental Monitors
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Integration Features */}
        <Card className="border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Integration Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <Settings className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-medium text-white">Auto Configuration</h3>
              <p className="text-sm text-gray-400">Automatic instrument detection and configuration for quick setup</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-medium text-white">Multi-Instrument Control</h3>
              <p className="text-sm text-gray-400">Coordinate multiple instruments in complex test sequences</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-medium text-white">AI-Assisted Setup</h3>
              <p className="text-sm text-gray-400">Smart configuration suggestions based on your test requirements</p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <Card className="border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Ready to Connect Your Lab?</h2>
              <p className="text-gray-400">Get started with TestFlow's universal instrument compatibility</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Link href="/contact">
                  <Settings className="w-5 h-5 mr-2" />
                  Setup Your Lab
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
                <Link href="/docs?section=installation">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Setup Guide
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    ),
  }

  const currentContent = content[currentSection] || (
    <div className="max-w-4xl mx-auto text-center py-20">
      <div className="text-6xl mb-6">🚧</div>
      <h1 className="text-3xl font-bold text-white mb-4">Coming Soon</h1>
      <p className="text-xl text-gray-400">
        This section is currently under development. Check back soon for comprehensive documentation.
          </p>
      </div>
    )

  return (
    <div className="flex-1 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        key={currentSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
      >
        {currentContent}
      </motion.div>
      </div>
    </div>
  )
}

