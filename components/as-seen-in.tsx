'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: "Electronica", src: "/images/electronica.svg" },
  { name: "Gitex", src: "/images/gitex.svg" },
  { name: "LinkedIn News", src: "/images/linkedin-news.svg" },
  { name: "Semicon", src: "/images/semicon.svg" },
  { name: "Futurelist", src: "/images/futurelist.svg" }
]

export function AsSeenInSection() {
  return (
    <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-medium tracking-tight text-white/30 mb-12"
          >
            Featured in
          </motion.h2>

          <div className="flex flex-row justify-center items-center w-full gap-2 sm:gap-4 md:gap-6">
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-center flex-1 h-16 sm:h-20 md:h-32 rounded-lg md:rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-colors hover:bg-white/[0.04] overflow-hidden"
              >
                <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-3 md:p-4">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity scale-[1.7] sm:scale-150 md:scale-125" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
