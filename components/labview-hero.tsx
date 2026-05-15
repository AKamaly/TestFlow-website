'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { RainbowButton } from '@/components/ui/rainbow-button'

export function LabViewHero() {
    return (
        <div className="relative">
            {/* Background Gradients */}
            <div
                aria-hidden
                className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>

            <section className="overflow-hidden bg-white dark:bg-transparent relative z-10">
                <div className="relative mx-auto max-w-5xl px-6 pt-40 pb-40 lg:pt-48 lg:pb-24">
                    <div className="relative z-10 max-w-4xl text-center md:text-left mx-auto md:mx-0">
                        <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl text-foreground">
                            A modern alternative to LabVIEW<br /> for hardware validation
                        </h1>
                        <p className="mt-4 mb-8 max-w-2xl text-xl text-muted-foreground mx-auto md:mx-0">
                            AI-driven workflows, reusable automation, collaborative validation
                        </p>

                        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6">
                            <Link href="/contact">
                                <RainbowButton className="h-12 px-8 rounded-full">
                                    Book demo
                                </RainbowButton>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto -mt-40 max-w-[1400px] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                    <div className="[perspective:1200px] -mr-16 pl-16 lg:-mr-56 lg:pl-48">
                        <div className="[transform:rotateX(20deg)_rotateZ(-9deg)]">
                            <div className="lg:h-[55rem] relative skew-x-[.36rad]">
                                <motion.div
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.21, 0.47, 0.32, 0.98], // Custom spring/ease curve for a natural "fall"
                                        delay: 0.2
                                    }}
                                >
                                    <img
                                        className="rounded-[--radius] z-[2] relative border dark:hidden w-full h-auto"
                                        src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Workflow%20builder%20AI%20powred.png"
                                        alt="Tailark hero section"
                                        width={2880}
                                        height={2074}
                                    />
                                    <img
                                        className="rounded-[--radius] z-[2] relative hidden border dark:block w-full h-auto"
                                        src="https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Workflow%20builder%20AI%20powred.png"
                                        alt="Tailark hero section"
                                        width={2880}
                                        height={2074}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {/* Right side fade-to-black gradient */}
                    <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />
                </div>
            </section>

            <section className="hidden md:block bg-background relative z-10 pt-20 md:pt-0 pb-16">
                <div className="m-auto max-w-5xl px-6">
                    <h2 className="text-center text-lg font-medium text-muted-foreground">Trusted by engineers from</h2>
                    <div className="flex flex-col gap-6 md:gap-8 mt-6 bg-white/50 dark:bg-transparent/50 rounded-3xl p-8 backdrop-blur-sm overflow-hidden">
                        {/* Desktop Grid View */}
                        <div className="hidden md:flex flex-col gap-6 md:gap-8">
                            {/* First Row - 5 Logos */}
                            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-16">
                                <img
                                    className="h-8 md:h-10 w-fit dark:invert opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                                    src="/images/logos/intel-new.png"
                                    alt="Intel Logo"
                                    height="40"
                                    width="auto"
                                />
                                <img
                                    className="h-8 md:h-10 w-fit dark:invert opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                                    src="/images/logos/amd.png"
                                    alt="AMD Logo"
                                    height="40"
                                    width="auto"
                                />
                                <img
                                    className="h-8 md:h-10 w-fit dark:invert opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                                    src="/images/logos/microchip.png"
                                    alt="Microchip Logo"
                                    height="40"
                                    width="auto"
                                />
                                <img
                                    className="h-8 md:h-10 w-fit dark:invert opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                                    src="/images/logos/keysight.png"
                                    alt="Keysight Technologies Logo"
                                    height="40"
                                    width="auto"
                                />
                                <img
                                    className="h-8 md:h-10 w-fit dark:invert opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                                    src="/images/logos/tektronix.jpg"
                                    alt="Tektronix Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>

                            {/* Second Row - 4 Logos */}
                            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-16">
                                <img
                                    className="h-8 md:h-10 w-fit dark:invert opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                                    src="/images/logos/keithley.png"
                                    alt="Keithley Logo"
                                    height="40"
                                    width="auto"
                                />
                                <img
                                    className="h-8 md:h-10 w-fit dark:invert opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                                    src="/images/logos/agilent.png"
                                    alt="Agilent Logo"
                                    height="40"
                                    width="auto"
                                />
                                <img
                                    className="h-8 md:h-10 w-fit dark:invert opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                                    src="/images/logos/lotus-microsystems.png"
                                    alt="Lotus Microsystems Logo"
                                    height="40"
                                    width="auto"
                                />
                                <img
                                    className="h-8 md:h-10 w-fit dark:invert opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                                    src="/images/logos/tessolve.png"
                                    alt="Tessolve Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>
                        </div>

                        {/* Mobile Marquee View */}
                        <div className="md:hidden flex gap-8 [--duration:30s] [--gap:2rem] w-max animate-marquee hover:[animation-play-state:paused]">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex shrink-0 justify-around gap-8">
                                    <img className="h-8 w-fit dark:invert opacity-70 grayscale" src="/images/logos/intel-new.png" alt="Intel" />
                                    <img className="h-8 w-fit dark:invert opacity-70 grayscale" src="/images/logos/amd.png" alt="AMD" />
                                    <img className="h-8 w-fit dark:invert opacity-70 grayscale" src="/images/logos/microchip.png" alt="Microchip" />
                                    <img className="h-10 w-fit dark:invert opacity-70 grayscale" src="/images/logos/keysight.png" alt="Keysight" />
                                    <img className="h-8 w-fit dark:invert opacity-70 grayscale" src="/images/logos/tektronix.jpg" alt="Tektronix" />
                                    <img className="h-7 w-fit dark:invert opacity-70 grayscale" src="/images/logos/keithley.png" alt="Keithley" />
                                    <img className="h-7 w-fit dark:invert opacity-70 grayscale" src="/images/logos/agilent.png" alt="Agilent" />
                                    <img className="h-8 w-fit dark:invert opacity-70 grayscale" src="/images/logos/lotus-microsystems.png" alt="Lotus" />
                                    <img className="h-5 w-fit dark:invert opacity-70 grayscale" src="/images/logos/tessolve.png" alt="Tessolve" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
