'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, Plus, Sparkles, ChevronDown, Mic, Cpu, Workflow, Check } from 'lucide-react'
import { trackEvent } from '@/components/analytics-tracker'

type Props = {
  initialValue?: string
  page?: string
  className?: string
}

export default function LiquidGlassInput({ initialValue = '', page = 'testflow-agent', className = '' }: Props) {
  const [inputValue, setInputValue] = useState(initialValue)
  const router = useRouter()
  const placeholders = [
    'Describe the test you want to automate…',
    'What validation workflow should we build?',
    'Tell me about your chip validation needs…',
  ]
  const [placeholderIdx, setPlaceholderIdx] = useState(0)

  const [model, setModel] = useState('TestFlow 2.0')
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isInstrumentsOpen, setIsInstrumentsOpen] = useState(false)
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false)

  const models = ['TestFlow 1.0', 'TestFlow 2.0', 'TestFlow 2.0 thinking']
  const instrumentsList = ['Keysight DMM', 'Tektronix Scope', 'Rohde & Schwarz PSU']
  const workflows = ['Validation', 'Calibration', 'Characterization']

  const modelRef = useRef<HTMLDivElement>(null)
  const instrumentsRef = useRef<HTMLDivElement>(null)
  const workflowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modelRef.current && !modelRef.current.contains(e.target as Node)) setIsModelOpen(false)
      if (instrumentsRef.current && !instrumentsRef.current.contains(e.target as Node)) setIsInstrumentsOpen(false)
      if (workflowRef.current && !workflowRef.current.contains(e.target as Node)) setIsWorkflowOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (inputValue) return
    const interval = setInterval(() => {
      setPlaceholderIdx(prev => (prev + 1) % placeholders.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [inputValue, placeholders.length])

  const handleSubmit = () => {
    trackEvent('ai_input_submit', {
      has_text: inputValue.trim().length > 0,
      input_text: inputValue.trim(),
      model,
      page,
    })
    router.push('/contact')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative w-full max-w-[680px] mx-auto z-50 ${className}`}
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/20 via-white/5 to-white/10 pointer-events-none" />

      <div className="relative rounded-2xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-2xl shadow-[0_8px_60px_-12px_rgba(120,100,200,0.25)]">
        <div className="px-5 pt-5 pb-3" data-clarity-unmask="true">
          <textarea
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholders[placeholderIdx]}
            rows={3}
            data-clarity-unmask="true"
            data-clarity-mask="false"
            className="clarity-unmask w-full bg-transparent text-white/90 text-[15px] placeholder:text-white/35 resize-none outline-none leading-relaxed"
          />
        </div>

        <div className="flex items-center justify-between px-2 md:px-4 pb-3 pt-1 gap-1 md:gap-2">
          <div className="flex items-center gap-1 md:gap-2 min-w-0">
            <button className="hidden md:inline-flex p-2 rounded-full hover:bg-white/10 transition-colors">
              <Plus className="w-4 h-4 text-white/50" />
            </button>

            <div className="relative" ref={instrumentsRef}>
              <button
                onClick={() => { setIsInstrumentsOpen(!isInstrumentsOpen); setIsWorkflowOpen(false); setIsModelOpen(false) }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs text-white/70 hover:bg-white/[0.12] transition-colors"
              >
                <Cpu className="w-3.5 h-3.5" />
                Instruments
              </button>
              <AnimatePresence>
                {isInstrumentsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full left-0 mb-2 w-48 rounded-xl border border-white/10 bg-[#1c1c1e] shadow-xl overflow-hidden py-1 z-[100]"
                  >
                    {instrumentsList.map(inst => (
                      <button key={inst} className="w-full text-left px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                        {inst}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" ref={workflowRef}>
              <button
                onClick={() => { setIsWorkflowOpen(!isWorkflowOpen); setIsInstrumentsOpen(false); setIsModelOpen(false) }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs text-white/70 hover:bg-white/[0.12] transition-colors"
              >
                <Workflow className="w-3.5 h-3.5" />
                Workflow
              </button>
              <AnimatePresence>
                {isWorkflowOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full left-0 mb-2 w-40 rounded-xl border border-white/10 bg-[#1c1c1e] shadow-xl overflow-hidden py-1 z-[100]"
                  >
                    {workflows.map(wf => (
                      <button key={wf} className="w-full text-left px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                        {wf}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-2 shrink-0">
            <div className="relative" ref={modelRef}>
              <button
                onClick={() => { setIsModelOpen(!isModelOpen); setIsInstrumentsOpen(false); setIsWorkflowOpen(false) }}
                className="flex items-center gap-1.5 px-2 md:px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs text-white/70 hover:bg-white/[0.12] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span className="hidden md:inline">{model}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {isModelOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full right-0 mb-2 w-52 rounded-xl border border-white/10 bg-[#1c1c1e] shadow-xl overflow-hidden py-1 z-[100]"
                  >
                    {models.map(m => (
                      <button
                        key={m}
                        onClick={() => {
                          setModel(m)
                          setIsModelOpen(false)
                          trackEvent('ai_model_selected', { model: m, page })
                        }}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {m}
                        {model === m && <Check className="w-4 h-4 text-purple-400" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button className="hidden md:inline-flex p-2 rounded-full hover:bg-white/10 transition-colors">
              <Mic className="w-4 h-4 text-white/50" />
            </button>
            <button onClick={handleSubmit} className="p-2 rounded-full bg-white/[0.1] hover:bg-white/[0.18] transition-colors shrink-0">
              <ArrowUp className="w-4 h-4 text-white/80" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
