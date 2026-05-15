'use client'

import { motion } from 'framer-motion'
import Image from "next/image"

export function ComparisonSection() {
  return (
    <section className="relative pt-4 pb-12 lg:pt-8 lg:pb-20 overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left md:text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block rounded-full px-5 py-2 text-xs font-medium tracking-[0.2em] uppercase border border-white/10 backdrop-blur-sm mb-6"
            >
              <span className="text-muted-foreground">
                Comparison
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[32px] lg:text-[3.2rem] font-medium tracking-tight text-foreground text-left md:text-center leading-[2.4rem] lg:leading-[3.8rem] max-w-6xl mx-0 md:mx-auto"
            >
              Stop Juggling Tools. <br className="hidden md:block" />
              <span className="text-muted-foreground">
                Start Running Reusable Test Flows.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground mx-0 md:mx-auto text-left md:text-center leading-relaxed"
            >
              Drop the tools you don't need anymore. TestFlow has instrument control, test sequences, data capture, and reporting built in.
            </motion.p>
          </motion.div>

          {/* Before and After Comparison */}
          <div className="grid lg:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {/* Before Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-black p-8 md:p-10"
            >
              <div className="mb-6">
                <span className="text-[11px] font-mono tracking-widest text-gray-500 uppercase">Before</span>
                <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">
                  Without TestFlow
                </h3>
              </div>

              <div className="relative aspect-[4/3] bg-zinc-950 rounded-xl overflow-hidden border border-white/[0.06]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[95%] h-[95%]">
                    <Image
                      src="/images/before-scattered-tools.webp"
                      alt="Before TestFlow - Scattered validation tools and complex workflows"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* After Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-black p-8 md:p-10"
            >
              <div className="mb-6">
                <span className="text-[11px] font-mono tracking-widest text-gray-500 uppercase">After</span>
                <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">
                  With TestFlow
                </h3>
              </div>

              <div className="relative aspect-[4/3] bg-zinc-950 rounded-xl overflow-hidden border border-white/[0.06]">
                {/* Feature Showcase */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">

                    {/* Central TestFlow Logo */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                      className="absolute z-20"
                    >
                      <div className="w-24 h-24">
                        <Image
                          src="/images/testflow-logo-new.webp"
                          alt="TestFlow Logo"
                          width={96}
                          height={96}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </motion.div>

                    {/* Orbital Rings */}
                    {[
                      { radius: 120, opacity: 0.1 },
                      { radius: 180, opacity: 0.08 },
                      { radius: 240, opacity: 0.06 }
                    ].map((ring, index) => (
                      <div
                        key={`ring-${index}`}
                        className="absolute rounded-full"
                        style={{
                          width: `${ring.radius * 2}px`,
                          height: `${ring.radius * 2}px`,
                          border: `1px solid rgba(255, 255, 255, ${ring.opacity})`,
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    ))}

                    {/* Features - All on Middle Orbit */}
                    {[
                      { name: "AI Script Generation", startAngle: 0 },
                      { name: "Data Analytics", startAngle: 40 },
                      { name: "Universal Instruments", startAngle: 80 },
                      { name: "Workflow Builder", startAngle: 120 },
                      { name: "Pre-Built Templates", startAngle: 160 },
                      { name: "Automate Testing", startAngle: 200 },
                      { name: "Team Collaboration", startAngle: 240 },
                      { name: "Datasheet Creator", startAngle: 280 },
                      { name: "Real-time Monitoring", startAngle: 320 }
                    ].map((feature, index) => (
                      <motion.div
                        key={`middle-${feature.name}`}
                        initial={{ opacity: 1 }}
                        animate={{
                          transform: [
                            `translate(-50%, -50%) rotate(${feature.startAngle}deg) translateX(180px) rotate(-${feature.startAngle}deg)`,
                            `translate(-50%, -50%) rotate(${feature.startAngle + 360}deg) translateX(180px) rotate(-${feature.startAngle + 360}deg)`
                          ]
                        }}
                        transition={{
                          duration: 25,
                          repeat: Infinity,
                          ease: 'linear'
                        }}
                        whileHover={{
                          transition: { duration: 0 }
                        }}
                        className="absolute z-30"
                        style={{
                          left: '50%',
                          top: '50%',
                          transformOrigin: 'center center',
                          willChange: 'transform',
                          opacity: 1
                        }}
                      >
                        <div className="bg-zinc-900/95 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-xs font-medium text-white whitespace-nowrap shadow-[0_2px_10px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-200 cursor-pointer">
                          {feature.name}
                        </div>
                      </motion.div>
                    ))}

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
