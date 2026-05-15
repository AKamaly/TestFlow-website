'use client'

import Link from "next/link"
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { trackButtonClick } from '@/components/analytics-tracker'
import { motion } from 'framer-motion'

const Globe = dynamic(() => import('@/components/ui/globe').then(mod => mod.Globe), {
  ssr: false,
  loading: () => null,
})

export function CTASection() {
  return (
    <section className="relative w-full mx-auto my-16 md:my-24 max-w-6xl px-4 md:px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 border border-white/10 px-4 md:px-6 py-16 md:py-32 text-center shadow-2xl">
        
        {/* Background Gradients & Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-[80px] rounded-full pointer-events-none" />
        
        {/* Faint Globe Background */}
        <div 
          className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none"
          style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }}
        >
          <div className="w-full max-w-[800px] aspect-square">
            <Globe />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[36px] lg:text-[3.8rem] font-medium tracking-tight text-foreground text-center leading-[1.2] lg:leading-[4.3rem] w-full"
          >
            <span className="block">TestFlow 2.0 is live now.</span>
            <span className="block mt-1 md:mt-0">Request your access.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-6 mb-8 w-full max-w-[22rem] sm:max-w-xl px-2 text-[14px] sm:text-base md:text-xl text-muted-foreground text-center mx-auto leading-snug md:leading-relaxed"
          >
            Experience the next generation of hardware validation. Run automated test sequences, capture clean data, and accelerate your time-to-market.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <RainbowButton asChild className="w-full sm:w-auto h-12 px-8 rounded-xl text-base font-medium">
              <Link 
                href="/contact" 
                onClick={() => trackButtonClick('Book a Demo', 'Final CTA', { page: 'home' })}
              >
                Book a Demo
              </Link>
            </RainbowButton>

            <Link
              href="/testflow-agent"
              onClick={() => trackButtonClick('Early Access', 'Final CTA', { page: 'home' })}
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 px-8 text-base font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_32px_-8px_rgba(0,0,0,0.3)]"
            >
              Get TestFlow 2.0 Early Access <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
