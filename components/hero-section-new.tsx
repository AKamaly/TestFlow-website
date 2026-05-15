'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from 'framer-motion'
import { RainbowButton } from '@/components/ui/rainbow-button'
import Clients from '@/components/clients'
import UploadSources from '@/components/upload-sources'
import ConnectInstruments from '@/components/connect-instruments'
import WorkflowGeneration from '@/components/workflow-generation'
import ExecuteInLab from '@/components/execute-in-lab'
import ReviewAnalytics from '@/components/review-analytics'
import ValidationReportingVisual from '@/components/validation-reporting-visual'
import AITestPlannerVisual from '@/components/ai-test-planner-visual'
import AgenticTestVisual from '@/components/agentic-test-visual'
import TeamCollaborationVisual from '@/components/team-collaboration-visual'
import VisualWorkflowBuilderVisual from '@/components/visual-workflow-builder-visual'
import DesignedForSpeedVisual from '@/components/designed-for-speed-visual'

const StitchSandbox = dynamic(() => import('@/components/stitch-sandbox'), {
    ssr: false,
    loading: () => <div style={{ width: '100%', height: '100%' }} />,
})




export function HeroSectionNew({ onOpenVideo }: { onOpenVideo?: () => void }) {
    const howItWorksSteps = [
        {
            title: 'Upload your test specs',
            description:
                'Import your validation specs or device documentation. TestFlow parses and understands the requirements automatically.',
        },
        {
            title: 'Connect your instruments',
            description:
                'Connect your instruments and map them into TestFlow automatically. Build your bench setup in minutes.',
        },
        {
            title: 'AI generates your test workflows',
            description:
                'Describe what to validate and TestFlow generates structured, executable workflows automatically.',
        },
        {
            title: 'Execute in the lab',
            description:
                'Run the generated workflow directly on connected instruments and monitor execution in real time.',
        },
        {
            title: 'Review, analytics, and insights',
            description:
                'Review pass/fail trends, inspect metrics, and extract actionable insights from each run.',
        },
    ]

    const [activeHowItWorksStep, setActiveHowItWorksStep] = useState(0)
    const exploreTabs = ['Agent Playground', 'Validation Planner', 'Schematic', 'Dashboard', 'Executer']
    const [activeExploreTab, setActiveExploreTab] = useState(0)

    const exploreIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const restartExploreTimer = useCallback(() => {
        if (exploreIntervalRef.current) clearInterval(exploreIntervalRef.current)
        exploreIntervalRef.current = setInterval(() => {
            setActiveExploreTab((prev) => (prev + 1) % exploreTabs.length)
        }, 6000)
    }, [exploreTabs.length])

    useEffect(() => {
        restartExploreTimer()
        return () => {
            if (exploreIntervalRef.current) clearInterval(exploreIntervalRef.current)
        }
    }, [restartExploreTimer])

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
                <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-16 lg:pt-56 lg:pb-8">
                    <div className="relative z-10 w-full text-left md:text-center mx-auto flex flex-col items-start md:items-center">
                        <h1 className="text-[36px] lg:text-[3.8rem] font-medium tracking-tight text-foreground text-left md:text-center leading-[2.6rem] lg:leading-[4.3rem]">
                            <span className="block md:hidden">
                                From<br />specs to<br />automated tests,<br />in minutes.
                            </span>
                            <span className="hidden md:block">
                                From specs
                                <br />
                                to automated tests, in minutes.
                            </span>
                        </h1>
                        <p className="mt-6 mb-8 max-w-2xl text-lg md:text-xl text-muted-foreground text-left md:text-center mx-0 md:mx-auto leading-relaxed">
                            <span className="block md:hidden">
                                Upload your spec. TestFlow generates validation plans and automated instrument scripts.
                            </span>
                            <span className="hidden md:block">
                                Upload your spec. TestFlow generates a validation plan and<br />automated test scripts ready for your instruments.
                            </span>
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
                                Get Testflow 2.0 Early Access
                            </Link>
                        </div>

                    </div>
                </div>
                {/* Full-width glow background area */}
                <div className="relative mt-8 lg:mt-10 pb-12 lg:pb-20">
                    <div className="absolute -inset-x-20 top-4 md:top-12 -bottom-0 z-0 overflow-hidden">
                        <img
                            src="/hero-glow.webp"
                            alt=""
                            aria-hidden
                            className="w-full h-full object-cover pointer-events-none scale-125"
                        />
                    </div>

                    {/* Hero visual: interactive sandbox on desktop, screenshot on mobile */}
                    <div className="relative mx-auto max-w-6xl px-0 md:px-6 z-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="w-full"
                        >
                            {/* Mobile: keep static screenshot */}
                            <div className="md:hidden w-[140%] max-w-none relative left-[5%]">
                                <img
                                    className="z-[2] relative w-full h-auto mx-auto"
                                    src="/hero-screenshot.webp"
                                    alt="TestFlow workflow builder"
                                    width={2880}
                                    height={2074}
                                />
                            </div>

                            {/* Desktop: interactive Stitch sandbox, scaled to fit container */}
                            <div className="hidden md:block">
                                <ScaledSandbox />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-background relative z-10 pt-2 md:pt-20 pb-8">
                <Clients />
            </section>

            <section className="bg-background relative z-10 pb-16 md:pb-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                        Highlights
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
                        <h2 className="max-w-xl text-3xl md:text-4xl font-normal tracking-tight text-white leading-[1.1]">The complete platform for<br />lab validation automation</h2>
                        <p className="max-w-xl text-lg text-white/65 leading-relaxed md:justify-self-end">
                            TestFlow is built for Lab validation teams that need to move faster without sacrificing rigor. From test spec to executed lab workflow, in minutes.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 min-h-[32rem]">
                            <div className="mb-6 -mx-5 h-80 bg-transparent translate-y-2">
                                <img
                                    src="/images/Purpose-built-for.webp"
                                    alt="Validation instruments compatibility map"
                                    className="h-full w-full object-cover bg-transparent translate-y-2"
                                />
                            </div>
                            <h3 className="mt-5 text-xl font-medium text-white">Built for Validation Engineers</h3>
                            <p className="mt-3 text-base leading-relaxed text-white/65">
                                Understands your instruments, test specs, and validation flows out of the box. No scripting from scratch.
                            </p>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 min-h-[32rem]">
                            <div className="mb-6 -mx-5 h-80 bg-transparent translate-y-2">
                                <DesignedForSpeedVisual />
                            </div>
                            <h3 className="mt-5 text-xl font-medium text-white">Designed for Speed</h3>
                            <p className="mt-3 text-base leading-relaxed text-white/65">
                                Generate structured, executable test workflows automatically. Cut validation cycles from months to days.
                            </p>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 min-h-[32rem]">
                            <div className="mb-6 -mx-5 h-80 bg-transparent translate-y-2">
                                <img
                                    src="/images/Engineerd-for-labs.webp"
                                    alt="Engineered for lab execution"
                                    className="h-full w-full object-cover bg-transparent"
                                />
                            </div>
                            <h3 className="mt-5 text-xl font-medium text-white">Engineered for the Lab</h3>
                            <p className="mt-3 text-base leading-relaxed text-white/65">
                                Team workflows, structured execution, and audit-ready reporting. Scales with your validation org.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="bg-background relative z-10 pb-0 md:pb-0">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                        How it works
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
                        <h2 className="max-w-xl text-3xl md:text-4xl font-normal tracking-tight text-white leading-[1.1]">
                            AI-powered automation for
                            <br />
                            post silicon validation
                        </h2>
                        <p className="max-w-xl text-lg text-white/65 leading-relaxed md:justify-self-end">
                            With TestFlow, your validation engineers can automatically generate structured test workflows from specs, execute them in the lab, and get results faster than any manual process.
                        </p>
                    </div>

                    <div className="mt-10">
                        {/* Desktop View */}
                        <div className="hidden lg:grid gap-6 lg:grid-cols-[1fr_1.1fr]">
                            <div className="space-y-3">
                                {howItWorksSteps.map((step, index) => {
                                    const stepNumber = `${String(index + 1).padStart(2, '0')}.`
                                    const isActive = activeHowItWorksStep === index
                                    return (
                                        <button
                                            key={step.title}
                                            type="button"
                                            onClick={() => setActiveHowItWorksStep(index)}
                                            className={`w-full rounded-2xl border px-5 py-4 text-left transition-colors ${isActive
                                                ? 'border-white/15 bg-white/[0.06]'
                                                : 'border-transparent bg-transparent hover:bg-white/[0.03]'
                                                }`}
                                        >
                                            <div className="flex items-start gap-4">
                                                <span className={`text-sm font-medium ${isActive ? 'text-orange-300' : 'text-white/40'}`}>
                                                    {stepNumber}
                                                </span>
                                                <div>
                                                    <h3 className={`text-xl font-medium ${isActive ? 'text-white' : 'text-white/55'}`}>
                                                        {step.title}
                                                    </h3>
                                                    {isActive && (
                                                        <p className="mt-2 text-base leading-relaxed text-white/65">
                                                            {step.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>

                            <div className="p-0">
                                <div className="h-[40rem] p-0 flex items-start justify-center overflow-visible pt-2">
                                    {activeHowItWorksStep === 0 ? (
                                        <div className="w-full max-w-lg rounded-3xl bg-[#f0f0f0] p-6 md:p-8 flex justify-center">
                                            <div className="w-full max-w-[24rem] scale-110 origin-center translate-y-1">
                                                <UploadSources />
                                            </div>
                                        </div>
                                    ) : activeHowItWorksStep === 1 ? (
                                        <div className="w-full max-w-lg rounded-3xl bg-[#f0f0f0] p-6 md:p-8 flex justify-center">
                                            <div className="w-full max-w-[24rem] scale-110 origin-center translate-y-1">
                                                <ConnectInstruments />
                                            </div>
                                        </div>
                                    ) : activeHowItWorksStep === 2 ? (
                                        <div className="w-full max-w-lg rounded-3xl bg-[#f0f0f0] p-6 md:p-8 flex justify-center">
                                            <div className="w-full max-w-[24rem] scale-110 origin-center translate-y-1">
                                                <WorkflowGeneration />
                                            </div>
                                        </div>
                                    ) : activeHowItWorksStep === 3 ? (
                                        <div className="w-full max-w-lg rounded-3xl bg-[#f0f0f0] p-6 md:p-8 flex justify-center">
                                            <div className="w-full max-w-[28rem] origin-center translate-y-1">
                                                <ExecuteInLab />
                                            </div>
                                        </div>
                                    ) : activeHowItWorksStep === 4 ? (
                                        <div className="w-full max-w-lg rounded-3xl bg-[#f0f0f0] p-6 md:p-8 flex justify-center">
                                            <div className="w-full max-w-[28rem] origin-center translate-y-1">
                                                <ReviewAnalytics />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center px-6">
                                            <p className="text-sm uppercase tracking-[0.2em] text-white/40">Media Placeholder</p>
                                            <p className="mt-3 text-lg text-white/80">{howItWorksSteps[activeHowItWorksStep].title}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Mobile View */}
                        <div className="grid lg:hidden gap-6 pb-24">
                            {howItWorksSteps.map((step, index) => (
                                <div key={step.title} className="flex flex-col border border-white/10 rounded-[2rem] bg-white/[0.02] overflow-hidden">
                                    <div className="w-full bg-[#f0f0f0] pt-12 pb-8 px-4 flex justify-center items-start overflow-hidden min-h-[320px]">
                                        {index === 0 ? (
                                            <div className="w-full max-w-[22rem] origin-top">
                                                <UploadSources />
                                            </div>
                                        ) : index === 1 ? (
                                            <div className="w-full max-w-[22rem] origin-top">
                                                <ConnectInstruments />
                                            </div>
                                        ) : index === 2 ? (
                                            <div className="w-full max-w-[22rem] origin-top">
                                                <WorkflowGeneration />
                                            </div>
                                        ) : index === 3 ? (
                                            <div className="w-full max-w-[22rem] origin-top">
                                                <ExecuteInLab />
                                            </div>
                                        ) : index === 4 ? (
                                            <div className="w-full max-w-[22rem] origin-top">
                                                <ReviewAnalytics />
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="p-6 sm:p-8">
                                        <h3 className="text-xl font-medium text-white mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-base leading-relaxed text-white/65">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background relative z-10 -mt-20 md:-mt-24 pb-24 md:pb-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                        Features
                    </div>

                    <div className="mt-6">
                        <h2 className="max-w-3xl text-3xl md:text-4xl font-normal tracking-tight text-white leading-[1.1]">
                            Everything your validation team
                            <br className="hidden md:block" />
                            {' '}needs to move faster
                        </h2>
                        <p className="mt-4 max-w-4xl text-lg leading-relaxed text-white/65">
                            TestFlow gives your engineers a complete AI-native platform to plan, generate, execute, and report on chip validation. From first spec to final report, in days not months.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        <article className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
                            <div className="w-full">
                                <AgenticTestVisual />
                            </div>
                            <div className="px-5 pb-5">
                                <h3 className="text-xl font-medium text-white">Agentic Test Generation</h3>
                                <p className="mt-3 text-base leading-relaxed text-white/65">
                                    TestFlow&apos;s AI agent converts your validation plan into production-ready test scripts instantly. No scripting from scratch, no manual workflow coding. Executable and instrument-aware from the start.
                                </p>
                            </div>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
                            <div className="w-full">
                                <AITestPlannerVisual />
                            </div>
                            <div className="px-5 pb-5">
                                <h3 className="text-xl font-medium text-white">AI Test Planner</h3>
                                <p className="mt-3 text-base leading-relaxed text-white/65">
                                    Upload your datasheet and TestFlow maps your entire validation coverage automatically. No more cross-referencing specs manually. Plan in minutes, not weeks.
                                </p>
                            </div>
                        </article>
                    </div>

                    <div className="mt-5 grid gap-5 md:grid-cols-3">
                        <article className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
                            <div className="w-full">
                                <TeamCollaborationVisual />
                            </div>
                            <div className="px-5 py-5">
                                <h3 className="text-xl font-medium text-white">Team Collaboration</h3>
                                <p className="mt-3 text-base leading-relaxed text-white/65">
                                    Keep every engineer working from the same source of truth. Share workflows, track execution, and eliminate scattered Excel files and lab notebooks. One platform, full visibility.
                                </p>
                            </div>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
                            <div className="w-full">
                                <VisualWorkflowBuilderVisual />
                            </div>
                            <div className="px-5 py-5">
                                <h3 className="text-xl font-medium text-white">Visual Workflow Builder</h3>
                                <p className="mt-3 text-base leading-relaxed text-white/65">
                                    Build complex multi-instrument sequences with a drag-and-drop canvas. No scripting required to sequence power supplies, scopes, and loads. Days of setup reduced to an afternoon.
                                </p>
                            </div>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
                            <div className="w-full px-4 pt-4">
                                <ValidationReportingVisual />
                            </div>
                            <div className="px-5 py-5">
                                <h3 className="text-xl font-medium text-white">Advanced Reporting</h3>
                                <p className="mt-3 text-base leading-relaxed text-white/65">
                                    Every test run auto-generates a structured PDF with waveforms, measurements, and pass/fail analysis. No manual result compiling. Audit-ready documentation, instantly.
                                </p>
                            </div>
                        </article>

                        <article className="md:col-span-3 rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-6 md:py-4 min-h-[300px] md:min-h-[160px] relative overflow-hidden flex flex-col justify-end">
                            <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">
                                <div className="max-w-full md:max-w-[50%] mt-auto">
                                    <h3 className="text-lg md:text-xl font-medium text-white">Works with your lab stack</h3>
                                    <p className="mt-2 text-sm md:text-base leading-relaxed text-white/65">
                                        Connect instruments, test data, and engineering workflows in one place. Keep your current setup and scale validation faster.
                                    </p>
                                </div>
                            </div>

                            {/* Absolutely positioned image - Full opacity and scaled up for mobile */}
                            <div className="absolute -right-12 md:right-0 left-[10%] md:left-[50%] top-0 md:top-1/2 md:-translate-y-1/2 w-[450px] md:w-[700px] flex items-center pointer-events-none opacity-100">
                                <img
                                    src="/images/lab-stack.webp"
                                    alt="Lab Stack Integration"
                                    className="w-full h-auto object-contain transform scale-110 md:scale-100"
                                />
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="bg-background relative z-10 pb-24 md:pb-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                        Explore
                    </div>

                    <h2 className="mt-5 text-3xl md:text-5xl font-normal tracking-tight text-white leading-[1.08]">
                        Discover the TestFlow platform
                    </h2>

                    <div className="mt-10 flex flex-wrap items-center gap-8 border-b border-white/10 pb-4 text-sm text-white/55">
                        {exploreTabs.map((tab, index) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => { setActiveExploreTab(index); restartExploreTimer() }}
                                className={`relative transition-colors ${activeExploreTab === index ? 'text-white' : 'hover:text-white/80'}`}
                            >
                                {tab}
                                {activeExploreTab === index && (
                                    <motion.span
                                        layoutId="explore-active-tab"
                                        className="absolute -bottom-[18px] left-0 h-[2px] w-full rounded-full bg-white"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 rounded-2xl overflow-hidden relative w-full grid py-12 md:py-20" style={{ backgroundImage: 'url(/images/explore-background.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <AnimatePresence>
                            <motion.div
                                key={exploreTabs[activeExploreTab]}
                                initial={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', zIndex: 10 }}
                                exit={{ opacity: 0, scale: 1, filter: 'blur(0px)', zIndex: 0 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full flex items-center justify-center [grid-area:1/1]"
                                style={{ transformOrigin: 'center center', willChange: 'transform, filter, opacity' }}
                            >
                                {(() => {
                                    const tabImages: Record<number, { src: string; alt: string }> = {
                                        0: { src: '/images/playground-explore.webp', alt: 'Agent Playground' },
                                        1: { src: '/images/testplanner-explore.webp', alt: 'Validation Planner' },
                                        2: { src: '/images/schamatic-explore.webp', alt: 'Schematic' },
                                        3: { src: '/images/dashboard-explore.webp', alt: 'Dashboard' },
                                        4: { src: '/images/executer-explore.webp', alt: 'Executer' },
                                    }
                                    const tab = tabImages[activeExploreTab]
                                    return (
                                        <img
                                            src={tab.src}
                                            alt={tab.alt}
                                            className="w-[88%] lg:w-[84%] h-auto block rounded-lg md:rounded-xl mx-auto shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10"
                                        />
                                    )
                                })()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    )
}

/* ───────────────────────────────────────────
   Scaled Sandbox: renders the Stitch sandbox at a fixed
   1600×1000 size and CSS-scales it to fit the container width.
   ─────────────────────────────────────────── */
const SANDBOX_W = 1700
const SANDBOX_H = 950

function ScaledSandbox() {
    const wrapRef = useRef<HTMLDivElement>(null)
    const [scale, setScale] = useState(1)

    useEffect(() => {
        const el = wrapRef.current
        if (!el) return
        const ro = new ResizeObserver(entries => {
            for (const entry of entries) {
                const w = entry.contentRect.width
                setScale(w / SANDBOX_W)
            }
        })
        ro.observe(el)
        return () => ro.disconnect()
    }, [])

    return (
        <div
            ref={wrapRef}
            className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)]"
            style={{ height: SANDBOX_H * scale }}
        >
            <div
                className="absolute top-0 left-0 origin-top-left"
                style={{
                    width: SANDBOX_W,
                    height: SANDBOX_H,
                    transform: `scale(${scale})`,
                }}
            >
                <StitchSandbox />
            </div>
        </div>
    )
}
