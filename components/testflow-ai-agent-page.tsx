'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, Plus, Sparkles, ChevronDown, Mic, Cpu, Zap, Code2, BarChart3, Shield, Workflow, Brain, TestTube, Check } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { TestFlowFooter } from '@/components/test-flow-footer'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { CTASection } from '@/components/cta-section'
import AgenticTestVisual from '@/components/agentic-test-visual'
import AITestPlannerVisual from '@/components/ai-test-planner-visual'
import TeamCollaborationVisual from '@/components/team-collaboration-visual'
import ValidationReportingVisual from '@/components/validation-reporting-visual'
import Clients from '@/components/clients'
import Spline from '@splinetool/react-spline'
import { BGPattern } from '@/components/ui/bg-pattern'
import { SectionTracker, trackButtonClick, trackEvent, trackExternalLink } from '@/components/analytics-tracker'
import LiquidGlassInput from '@/components/liquid-glass-input'

/* ───────────────────────────────────────────
   Dot Grid Canvas – animated gradient wash
   ─────────────────────────────────────────── */
function DotGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const gap = 24
      const cols = Math.ceil(w / gap) + 1
      const rows = Math.ceil(h / gap) + 1

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * gap
          const y = r * gap

          // Two animated gradient centres
          const cx1 = w * 0.3 + Math.sin(time * 0.4) * w * 0.25
          const cy1 = h * 0.4 + Math.cos(time * 0.3) * h * 0.2
          const cx2 = w * 0.7 + Math.cos(time * 0.35) * w * 0.25
          const cy2 = h * 0.6 + Math.sin(time * 0.45) * h * 0.2

          const d1 = Math.hypot(x - cx1, y - cy1)
          const d2 = Math.hypot(x - cx2, y - cy2)
          const maxDist = Math.hypot(w, h) * 0.45

          const intensity1 = Math.max(0, 1 - d1 / maxDist)
          const intensity2 = Math.max(0, 1 - d2 / maxDist)
          const combined = Math.min(1, intensity1 + intensity2)

          // Blend between purple and teal
          const red = Math.round(100 * intensity1 + 40 * intensity2)
          const green = Math.round(60 * intensity1 + 200 * intensity2)
          const blue = Math.round(220 * intensity1 + 180 * intensity2)
          const alpha = 0.12 + combined * 0.55

          ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`
          ctx.beginPath()
          ctx.arc(x, y, 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      time += 0.006
      animationId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  )
}

/* ───────────────────────────────────────────
   Aurora Glow – prismatic light effect
   ─────────────────────────────────────────── */
function AuroraGlow({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
    </div>
  )
}


/* ───────────────────────────────────────────
   Feature Card
   ─────────────────────────────────────────── */
function FeatureCard({
  icon: Icon,
  title,
  description,
  visual,
  className = '',
}: {
  icon: React.ElementType
  title: string
  description: string
  visual?: React.ReactNode
  className?: string
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`group relative rounded-3xl border border-white/10 bg-[#1c1c1e] overflow-hidden flex flex-col min-h-[300px] ${className}`}
    >
      {/* Dot pattern inside card */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(150,150,150,0.9) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Visual area */}
      {visual && (
        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
          {visual}
        </div>
      )}

      {/* Content */}
      <div className="relative p-6 pt-5 bg-gradient-to-t from-[#1c1c1e] via-[#1c1c1e] to-transparent mt-auto z-10">
        <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
        <p className="text-[15px] leading-relaxed text-white/60">{description}</p>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-white/[0.04] to-transparent z-0" />
    </motion.article>
  )
}

/* ───────────────────────────────────────────
   FAQ Accordion
   ─────────────────────────────────────────── */
const faqs = [
  { q: 'What is TestFlow AI Agent?', a: 'TestFlow AI Agent is our autonomous validation engine that converts test specifications into executable lab workflows. It understands your instruments, generates SCPI commands, and orchestrates multi-step validation sequences automatically.' },
  { q: 'How does it differ from TestFlow 1.0?', a: 'TestFlow 2.0 introduces a fully agentic architecture. Instead of semi-manual workflow building, the AI agent reasons about your specs end-to-end — from parsing datasheets to generating instrument scripts — without manual intervention.' },
  { q: 'What instruments are supported?', a: 'We support any SCPI-compatible instrument including oscilloscopes, power supplies, source meters, DMMs, function generators, and electronic loads from Keysight, Tektronix, Rohde & Schwarz, and more.' },
  { q: 'Can I export generated workflows?', a: 'Yes. Workflows can be exported as Python scripts, shared across your team, or integrated into CI/CD pipelines for regression testing. Full Figma-like collaboration is built in.' },
  { q: 'Does it generate production-ready code?', a: 'Absolutely. The agent generates fully executable Python scripts with proper error handling, instrument initialization, measurement sequences, and data logging — ready to run in your lab.' },
  { q: 'Is my data secure?', a: 'TestFlow is SOC 2 Type II compliant with end-to-end encryption. Your test specs, results, and IP never leave your controlled environment. On-premise deployment is available for enterprise customers.' },
]

function FAQSection() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className="relative pt-12 pb-24 md:pt-16 md:pb-32 bg-black">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[2.8rem] font-medium tracking-tight text-white mb-12 leading-tight"
        >
          Questions?
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = activeIdx === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => {
                    const opening = isOpen ? -1 : i
                    if (opening !== -1) {
                      trackEvent('faq_opened', { question: faq.q, index: i, page: 'testflow-agent' })
                    }
                    setActiveIdx(opening)
                  }}
                  className="w-full flex items-center justify-between px-6 py-5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.06] transition-colors text-left"
                >
                  <span className="text-[15px] md:text-base font-medium text-white/90">{faq.q}</span>
                  <span className="text-white/40 text-lg ml-4 flex-shrink-0">
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 py-4 text-sm leading-relaxed text-white/50">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────
   Main Page
   ─────────────────────────────────────────── */
export function TestFlowAIAgentPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* ─── SECTION TRACKERS ─── */}
      <SectionTracker sectionId="agent-hero" sectionName="TestFlow Agent Hero" />
      <SectionTracker sectionId="agent-features" sectionName="TestFlow Agent Features" />
      <SectionTracker sectionId="agent-cta" sectionName="TestFlow Agent CTA" />
      <SectionTracker sectionId="agent-faq" sectionName="TestFlow Agent FAQ" />

      {/* ─── HERO ─── */}
      <section id="agent-hero" className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Dot grid with animated gradient */}
        <DotGridBackground />

        {/* Aurora blobs */}
        <AuroraGlow className="inset-0 z-[1]" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center pt-32 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-[clamp(1.75rem,6vw,4.5rem)] font-medium tracking-[-0.02em] leading-[1.08] text-white whitespace-nowrap md:whitespace-normal"
          >
            Validate at the{' '}
            <br className="hidden md:block" />
            speed of AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-base md:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed"
          >
            Transform specs into automated lab validation workflow
          </motion.p>

          <div className="mt-0 md:mt-20 md:scale-110 md:origin-top">
            <LiquidGlassInput />
          </div>
        </div>

        {/* Spline 3D Element */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[55%] w-[120vw] h-[800px] max-w-none pointer-events-none z-[5]">
          <Spline scene="https://prod.spline.design/thFhTjESqUkFYvi0/scene.splinecode" />
        </div>
      </section>

      {/* ─── CLIENTS ─── */}
      <section className="relative pt-12 pb-6 bg-black border-t border-white/5">
        <Clients />
      </section>

      {/* ─── FEATURES GRID ─── */}
      <section id="agent-features" className="relative pt-12 pb-12 md:pt-16 md:pb-16 bg-black">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FeatureCard
              icon={Brain}
              title="Agentic test generation"
              description="Describe your validation goal. The AI agent autonomously generates structured, executable test workflows — no scripting from scratch."
              visual={<AgenticTestVisual />}
            />
            <FeatureCard
              icon={Code2}
              title="Team Collaboration"
              description="Export production-ready Python scripts or share workflows across your team seamlessly."
              visual={<TeamCollaborationVisual />}
            />
            <FeatureCard
              icon={Sparkles}
              title="AI Test Planner"
              description="Leverage the latest AI models purpose-built for hardware validation to plan your test sequences."
              visual={<AITestPlannerVisual />}
            />
            <FeatureCard
              icon={BarChart3}
              title="Validation Reporting"
              description="Monitor validation progress in real time. Auto-generated reports with pass/fail analysis and data."
              visual={<ValidationReportingVisual />}
            />
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section id="agent-cta" className="relative pt-8 md:pt-12 pb-12 md:pb-20 overflow-hidden bg-black">
        {/* Dotted background - same as help center */}
        <BGPattern variant="dots" mask="fade-bottom" className="z-0 opacity-40" fill="#ffffff" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[2.8rem] font-medium tracking-tight text-white leading-tight"
          >
            TestFlow 2.0 is here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-white/50 max-w-lg mx-auto leading-relaxed"
          >
            Now you can use TestFlow inside your own bench setup
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              onClick={() => trackButtonClick('Book a Demo', 'TestFlow Agent CTA', { page: 'testflow-agent' })}
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-[15px] font-medium text-black transition-all hover:bg-white/90"
            >
              Book a demo
            </Link>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center mt-8 md:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full relative"
          >
            <img
              src="/images/testflow-ai-withinstruments.webp"
              alt="TestFlow AI with Instruments"
              className="w-full h-auto object-contain select-none"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="agent-faq">
        <FAQSection />
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTASection />

      {/* ─── FOOTER ─── */}
      <TestFlowFooter />

      {/* ─── GLOBAL STYLES ─── */}
      <style jsx>{`
        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          mix-blend-mode: screen;
          animation: aurora-drift 12s ease-in-out infinite alternate;
        }
        .aurora-blob-1 {
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(120, 80, 220, 0.22), transparent 70%);
          top: 20%;
          left: -5%;
          animation-delay: 0s;
        }
        .aurora-blob-2 {
          width: 500px;
          height: 350px;
          background: radial-gradient(ellipse, rgba(60, 180, 220, 0.18), transparent 70%);
          top: 35%;
          right: -8%;
          animation-delay: -4s;
        }
        .aurora-blob-3 {
          width: 400px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(200, 80, 180, 0.14), transparent 70%);
          bottom: 15%;
          left: 30%;
          animation-delay: -8s;
        }
        @keyframes aurora-drift {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(40px, -30px) scale(1.15);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}
