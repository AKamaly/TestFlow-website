'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = {
  row3: [
    { src: '/logos/keysight-logo.svg', alt: 'Keysight' },
    { src: '/logos/tektronix-logo.svg', alt: 'Tektronix' },
    { src: '/logos/agilent-technologies-1.svg', alt: 'Agilent Technologies' },
    { src: '/logos/Chroma.png', alt: 'Chroma' },
    { src: '/logos/Lotus microsystems.png', alt: 'Lotus Microsystems' },
  ],
}

interface LogoRowProps {
  logos: { src: string; alt: string }[]
  direction: 'normal' | 'reverse'
  speed: number
}

function LogoRow({ logos, direction, speed }: LogoRowProps) {
  return (
    <div className="flex gap-16 items-center [--duration:60s] animate-scroll-infinite"
         style={{ 
           animationDirection: direction,
           animationDuration: `${speed}s`
         }}>
      {/* Double the logos for seamless infinite scroll */}
      {[...logos, ...logos].map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center min-w-[140px] w-[140px] h-[60px] brightness-0 invert opacity-80 px-4"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-auto h-auto object-contain"
            style={{ maxWidth: '100%', maxHeight: '60px' }}
          />
        </div>
      ))}
    </div>
  )
}

export function LogoCarousel() {
  return (
    <div className="w-full overflow-hidden">
      <div className="space-y-8">
        {/* Only Row 3 */}
        <div className="overflow-hidden">
          <LogoRow logos={logos.row3} direction="normal" speed={35} />
        </div>
      </div>
    </div>
  )
} 