'use client'

import { motion } from 'framer-motion'

const securityFeatures = [
  {
    title: 'Your data stays yours',
    description: 'Your data and your measurements are only saved locally to your machine and only accessible to your team. They are never used to train our models or shared with third parties.',
    imageSrc: '/images/database.webp',
  },
  {
    title: 'Data encryption',
    description: 'All data is encrypted. We use industry standards like the AES encryption algorithm with on-premise deployment on your machine.',
    imageSrc: '/images/lock.webp',
  },
  {
    title: 'Secure integrations',
    description: 'We use verified credentials to ensure users can access only their own instruments and test data.',
    imageSrc: '/images/cube.webp',
  },
]

export function SecuritySection() {
  return (
    <section className="relative pt-8 pb-6 lg:pt-24 lg:pb-12 overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">

            {/* Left Side — Header & Badges */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs lg:text-sm text-white/80 mb-4 lg:mb-8"
              >
                Security
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[28px] lg:text-[2.8rem] font-medium tracking-tight text-foreground text-left leading-[2rem] lg:leading-[3.2rem]"
              >
                Enterprise-grade{' '}
                <span className="text-muted-foreground">
                  security & privacy.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-3 lg:mt-6 max-w-md text-sm lg:text-base text-muted-foreground text-left leading-relaxed"
              >
                We take security and compliance seriously. Your data stays yours. Data encryption. Secure integrations. TestFlow is built for enterprise-grade validation workflows. We are in the process of obtaining SOC 2 and GDPR compliance.
              </motion.p>

              {/* Compliance Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-5 lg:mt-10 flex items-center gap-4 lg:gap-6"
              >
                <img src="/images/soc-2.webp" alt="SOC 2 Type II" className="h-12 lg:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/images/gdpr.webp" alt="GDPR Compliant" className="h-12 lg:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>

            {/* Right Side — Feature Cards */}
            <div className="flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] lg:border-none lg:bg-transparent lg:gap-4 overflow-hidden">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * (index + 1) }}
                  className={`group relative flex items-center gap-4 lg:gap-5 p-4 lg:p-6 transition-all duration-300 lg:rounded-2xl lg:border lg:border-white/[0.06] lg:bg-white/[0.02] hover:bg-white/[0.04] lg:hover:border-white/[0.12] ${
                    index !== securityFeatures.length - 1 ? 'border-b border-white/[0.06]' : ''
                  }`}
                >
                  <div className="flex flex-col flex-1 z-10">
                    <h3 className="text-base lg:text-lg font-semibold text-foreground mb-1 lg:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] lg:text-sm text-muted-foreground leading-snug lg:leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Feature Image */}
                  <div className="relative flex-shrink-0 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center translate-x-2 lg:translate-x-0">
                    <img src={feature.imageSrc} alt={feature.title} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
