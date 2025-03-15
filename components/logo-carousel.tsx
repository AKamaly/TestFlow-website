'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = {
  row1: [
    { src: '/logos/NVDA_BIG.png', alt: 'NVIDIA' },
    { src: '/logos/AMD_BIG.png', alt: 'AMD' },
    { src: '/logos/INTC.png', alt: 'Intel' },
    { src: '/logos/ADI_BIG.png', alt: 'Analog Devices' },
    { src: '/logos/IFX.DE.png', alt: 'Infineon' },
    { src: '/logos/ON_BIG.png', alt: 'ON Semiconductor' },
  ],
  row2: [
    { src: '/logos/6723.T_BIG.png', alt: 'Renesas' },
    { src: '/logos/LSCC_BIG.png', alt: 'Lattice Semiconductor' },
    { src: '/logos/TXN_BIG.png', alt: 'Texas Instruments' },
    { src: '/logos/ALGM_BIG.png', alt: 'Allegro MicroSystems' },
    { src: '/logos/SITM_BIG.png', alt: 'SiTime' },
  ],
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
        {/* Row 1 */}
        <div className="overflow-hidden">
          <LogoRow logos={logos.row1} direction="normal" speed={40} />
        </div>
        
        {/* Row 2 */}
        <div className="overflow-hidden">
          <LogoRow logos={logos.row2} direction="reverse" speed={30} />
        </div>
        
        {/* Row 3 */}
        <div className="overflow-hidden">
          <LogoRow logos={logos.row3} direction="normal" speed={35} />
        </div>
      </div>
    </div>
  )
} 