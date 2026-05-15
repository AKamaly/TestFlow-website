'use client'

import { SiteHeader } from "@/components/site-header"
import { TestFlowFooter } from "@/components/test-flow-footer"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Globe } from "@/components/ui/globe"
import Link from "next/link"
import { ArrowRight, Beaker, Bot, Cpu, Database, Layout, Repeat, Shield, Users, Workflow, Zap, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { WorldMap } from "@/components/ui/world-map"
import { BGPattern } from "@/components/ui/bg-pattern"
import Image from "next/image"
import { CTASection } from "@/components/cta-section"
import { AsSeenInSection } from "@/components/as-seen-in"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <SiteHeader />

            {/* 1) Hero Section */}
            <section className="relative pt-36 pb-6 lg:pt-48 lg:pb-12 overflow-hidden bg-black z-10">
                <div className="absolute inset-0 z-0">
                    <BGPattern variant="dots" mask="fade-bottom" className="z-0 opacity-40" fill="#ffffff" />
                </div>
                
                <div className="relative z-10 mx-auto max-w-6xl px-6">
                    <div className="w-full text-left md:text-center mx-auto flex flex-col items-start md:items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-start md:items-center w-full"
                        >
                            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 mb-6">
                                About TestFlow
                            </div>
                            
                            <h1 className="text-[36px] lg:text-[3.8rem] font-medium tracking-tight text-foreground text-left md:text-center leading-[2.6rem] lg:leading-[4.3rem] max-w-4xl">
                                We’re building the OS for
                                <br className="hidden md:block" />
                                {' '}modern hardware validation.
                            </h1>
                            
                            <p className="mt-6 mb-8 max-w-2xl text-lg md:text-xl text-muted-foreground text-left md:text-center mx-0 md:mx-auto leading-relaxed">
                                TestFlow is a deep-tech company creating an AI-native platform that automates hardware testing inside labs, so teams can validate chips and electronic systems faster, with reusable workflows and clean, trusted data.
                            </p>
                            
                            <div className="mt-2 md:mt-3 flex flex-row justify-start md:justify-center items-start md:items-center gap-3">
                                <RainbowButton asChild className="h-9 px-5 md:h-11 md:px-7 text-sm md:text-sm rounded-xl">
                                    <Link href="/contact">
                                        Book a demo
                                    </Link>
                                </RainbowButton>
                                <Link
                                    href="/testflow-agent"
                                    className="inline-flex h-9 md:h-11 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 px-5 md:px-7 text-sm md:text-sm font-medium text-foreground transition-all hover:bg-black/10 dark:hover:bg-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_32px_-8px_rgba(0,0,0,0.2)]"
                                >
                                    Get early access -&gt;
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2) Featured In */}
            <AsSeenInSection />

            {/* 3) The Mission */}
            <section className="py-10 lg:py-16 bg-background relative z-10">
                <div className="mx-auto max-w-6xl px-6 text-left md:text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start md:items-center w-full"
                    >
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 mb-6">
                            Our Mission
                        </div>
                        <h2 className="max-w-4xl text-3xl md:text-4xl font-normal tracking-tight text-white leading-[1.1]">
                            Accelerating how the world
                            <br />
                            validates hardware
                        </h2>

                        {/* World Map Visualization */}
                        <div className="w-full max-w-3xl mx-auto my-12">
                            <WorldMap
                                dots={[
                                    {
                                        start: { lat: 64.2008, lng: -149.4937 },
                                        end: { lat: 34.0522, lng: -118.2437 },
                                    },
                                    {
                                        start: { lat: 64.2008, lng: -149.4937 },
                                        end: { lat: -15.7975, lng: -47.8919 },
                                    },
                                    {
                                        start: { lat: -15.7975, lng: -47.8919 },
                                        end: { lat: 38.7223, lng: -9.1393 },
                                    },
                                    {
                                        start: { lat: 51.5074, lng: -0.1278 },
                                        end: { lat: 28.6139, lng: 77.209 },
                                    },
                                    {
                                        start: { lat: 28.6139, lng: 77.209 },
                                        end: { lat: 43.1332, lng: 131.9113 },
                                    },
                                    {
                                        start: { lat: 28.6139, lng: 77.209 },
                                        end: { lat: -1.2921, lng: 36.8219 },
                                    },
                                ]}
                                lineColor="#a855f7"
                            />
                        </div>

                        <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-white/65 leading-relaxed">
                            <p>
                                Every breakthrough in chips, energy, automotive, robotics, and medical devices depends on one thing: testing that is accurate, repeatable, and fast.
                            </p>
                            <p>
                                But hardware validation is still slowed down by manual bench work, brittle scripts, scattered tools, and tribal knowledge.
                            </p>
                            <p className="text-white font-medium">
                                We exist to change that by making lab testing automated, reusable, and team-owned.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3) The Problem We’re Solving */}
            <section className="py-10 lg:py-16 bg-background relative z-10 border-t border-white/5">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-left md:text-center mb-16 flex flex-col items-start md:items-center">
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 mb-6">
                            The Problem
                        </div>
                        <h2 className="max-w-3xl text-3xl md:text-4xl font-normal tracking-tight text-white leading-[1.1]">
                            The bottleneck isn’t design.
                            <br className="hidden md:block" />
                            It’s validation velocity.
                        </h2>
                        <p className="mt-6 max-w-2xl text-lg text-white/65 leading-relaxed mx-0 md:mx-auto">
                            As chips become more complex, validation cycles become longer, and small inefficiencies multiply across your entire team:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            { title: "Instrument setups repeated hundreds of times", icon: Repeat },
                            { title: "Tests rewritten for every revision", icon: Layout },
                            { title: "Results spread across scripts, spreadsheets, and screenshots", icon: Database },
                            { title: "Knowledge locked in one engineer’s codebase", icon: Users },
                        ].map((item, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex items-center gap-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-white/80" />
                                </div>
                                <h3 className="text-xl font-medium text-white/90">{item.title}</h3>
                            </motion.article>
                        ))}
                    </div>

                    <p className="text-left md:text-center text-xl font-medium text-white mt-12 mx-auto">
                        This slows iteration, delays launches, and increases risk.
                    </p>
                </div>
            </section>

            {/* 4) Comparison Section (from Home) updated for About page */}
            <section className="relative py-10 lg:py-16 overflow-hidden bg-background border-t border-white/5">
                <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-left md:text-center mb-16 flex flex-col items-start md:items-center"
                        >
                            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 mb-6">
                                The TestFlow Advantage
                            </div>

                            <h2 className="text-[32px] lg:text-[3.2rem] font-medium tracking-tight text-white leading-[2.4rem] lg:leading-[3.8rem]">
                                Stop Juggling Tools. <br className="hidden md:block" />
                                <span className="text-white/60">
                                    Start Running Reusable Test Flows.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/65 leading-relaxed">
                                Drop the manual scripts and disconnected utilities. We've built an OS for your lab that unifies instrument control, sequence execution, and data reporting.
                            </p>
                        </motion.div>

                        {/* Before and After Comparison */}
                        <div className="grid lg:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-3xl overflow-hidden">
                            {/* Before Box */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-black p-8 md:p-10"
                            >
                                <div className="mb-6">
                                    <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase">Before</span>
                                    <h3 className="text-xl md:text-2xl font-medium text-white mt-2">
                                        Without TestFlow
                                    </h3>
                                </div>

                                <div className="relative aspect-[4/3] bg-zinc-950 rounded-2xl overflow-hidden border border-white/[0.06]">
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
                                    <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase">After</span>
                                    <h3 className="text-xl md:text-2xl font-medium text-white mt-2">
                                        With TestFlow
                                    </h3>
                                </div>

                                <div className="relative aspect-[4/3] bg-zinc-950 rounded-2xl overflow-hidden border border-white/[0.06]">
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
                                                    }}
                                                >
                                                    <div className="bg-zinc-900/95 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-xs font-medium text-white whitespace-nowrap shadow-[0_2px_10px_rgba(0,0,0,0.3)] cursor-pointer">
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


            {/* 6) Principles & Who We Serve */}
            <section className="py-10 lg:py-16 bg-background border-t border-white/5">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 mb-6">
                                Principles
                            </div>
                            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-[1.1] mb-10">Our guiding principles</h2>
                            <div className="flex flex-col gap-8">
                                {[
                                    { title: "Repeatability wins", desc: "If you can’t repeat it, you can’t scale it." },
                                    { title: "Automation should be reusable", desc: "A test shouldn’t be rebuilt for every revision." },
                                    { title: "Engineers deserve leverage", desc: "Time should go into measurement and insight, not tool babysitting." },
                                    { title: "Labs need systems, not stacks", desc: "Fewer disconnected tools, more shared workflow." },
                                    { title: "Speed with trust", desc: "Faster cycles only matter if data stays reliable." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-2 h-2 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                                            <p className="text-white/65 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 mb-6">
                                Audience
                            </div>
                            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-[1.1] mb-10">Who we build for</h2>
                            <div className="flex flex-col gap-6">
                                {[
                                    { title: "Validation / post-silicon teams", desc: "Bring-up, characterization, regression testing, revision cycles." },
                                    { title: "Embedded hardware teams", desc: "Device testing, system verification, reliability workflows." },
                                    { title: "Research labs", desc: "Repeatable experiments, consistent logging, shareable results." }
                                ].map((item, i) => (
                                    <article key={i} className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
                                        <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                                        <p className="text-white/65 leading-relaxed">{item.desc}</p>
                                    </article>
                                ))}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center mt-4">
                                    <p className="text-white font-medium">Not for simulation-only workflows. Built for bench + instruments + real measurements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision */}
            <section className="py-10 lg:py-16 bg-black relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
                <div className="container mx-auto px-4 max-w-4xl text-left md:text-center relative z-10 flex flex-col items-start md:items-center">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 mb-6">
                        Our Vision
                    </div>
                    <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white leading-tight mb-8">
                        A world where hardware innovation <br className="hidden md:block" />
                        isn’t slowed by testing overhead.
                    </h2>
                    <div className="space-y-6 text-lg md:text-xl text-white/65 leading-relaxed">
                        <p>
                            The next decade will be defined by hardware: AI compute, electrification, autonomous systems, industrial robotics, and next-generation connectivity.
                        </p>
                        <p>
                            To build those systems faster and more reliably, validation needs to evolve from “manual experiments” into repeatable engineering infrastructure.
                        </p>
                        <p className="text-white font-medium text-xl md:text-2xl pt-4">
                            Our vision is to make TestFlow the standard platform powering validation teams globally, from startups to national labs to leading semiconductor companies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-10 lg:py-16 bg-background border-t border-white/5">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-left md:text-center mb-16 flex flex-col items-start md:items-center">
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 mb-6">
                            Careers
                        </div>
                        <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-6">Open Positions</h2>
                        <p className="text-xl text-white/65 leading-relaxed">Join us in building the future of hardware validation</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Senior AI Engineer",
                                dept: "Engineering",
                                location: "San Francisco, CA",
                                type: "Full-time",
                                desc: "Join our core team to develop cutting-edge AI solutions for hardware validation automation."
                            },
                            {
                                title: "Hardware Validation Engineer",
                                dept: "Engineering",
                                location: "San Francisco, CA",
                                type: "Full-time",
                                desc: "Work on implementing and optimizing automated validation processes for semiconductor and electronics clients."
                            },
                            {
                                title: "Product Manager",
                                dept: "Product",
                                location: "San Francisco, CA",
                                type: "Full-time",
                                desc: "Drive the product vision and roadmap for our AI-powered validation platform."
                            },
                            {
                                title: "Technical Sales Engineer",
                                dept: "Sales",
                                location: "San Francisco, CA",
                                type: "Full-time",
                                desc: "Help semiconductor and electronics companies understand and implement our validation solutions."
                            }
                        ].map((job, i) => (
                            <div
                                key={i}
                                className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-medium text-white group-hover:text-purple-400 transition-colors">{job.title}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2 text-sm text-white/50 mb-6 font-medium">
                                        <span>{job.dept}</span>
                                        <span>•</span>
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.type}</span>
                                    </div>
                                    <p className="text-white/65 text-lg mb-8 leading-relaxed">
                                        {job.desc}
                                    </p>
                                </div>
                                <div>
                                    <button
                                        disabled
                                        className="bg-white text-black font-medium rounded-xl px-6 py-2.5 text-sm transition-all hover:scale-105 disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7) Call to Action */}
            <CTASection />

            <TestFlowFooter />
        </div>
    )
}
