'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code2, BarChart3, Sparkles, Brain } from 'lucide-react'
import AgenticTestVisual from '@/components/agentic-test-visual'
import AITestPlannerVisual from '@/components/ai-test-planner-visual'
import TeamCollaborationVisual from '@/components/team-collaboration-visual'
import ValidationReportingVisual from '@/components/validation-reporting-visual'

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

export function BenefitsSection() {
  return (
    <section className="relative pt-12 pb-12 md:pt-16 md:pb-16 bg-black">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-left md:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full px-5 py-2 text-xs font-medium tracking-[0.2em] uppercase border border-white/10 backdrop-blur-sm mb-6"
          >
            <span className="text-muted-foreground">
              Benefits
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] lg:text-[3.2rem] font-medium tracking-tight text-foreground text-left md:text-center leading-[2.4rem] lg:leading-[3.8rem] max-w-6xl mx-0 md:mx-auto"
          >
            Why Choose TestFlow?
          </motion.h2>
        </div>

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
  )
}
