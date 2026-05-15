"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Server, Shield, Zap, Search, MessageSquare, BarChart3, Users, Globe, Lock, CheckCircle, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Homepage2() {
    const navItems = [
        { name: "Features", link: "#features" },
        { name: "Why Us", link: "#why-us" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "Pricing", link: "#pricing" },
        { name: "Blog", link: "#blog" },
    ];

    const solutionItems = [
        { label: "Automation", href: "#", description: "Save time manually.", icon: Zap },
        { label: "Security", href: "#", description: "Enterprise grade protection.", icon: Shield },
        { label: "Analytics", href: "#", description: "Real-time insights.", icon: BarChart3 },
    ];
    const resourceItems = {
        company: [{ label: "About", href: "#", description: "Our story", icon: Users }],
        learn: [{ label: "Docs", href: "#", description: "API reference", icon: Server }],
        discover: [{ label: "Blog", href: "#", description: "Latest news", icon: Globe }],
    };


    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans">
            <FloatingNav
                navItems={navItems}
                solutionItems={solutionItems}
                resourceItems={resourceItems}
                className="top-6"
            />

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden text-center">
                {/* Background Radial Gradient */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(92,53,171,0.15)_0%,transparent_70%)] pointer-events-none" />

                {/* Floating "Version 2" Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer"
                >
                    <span className="flex h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                    <span className="text-sm font-medium text-purple-200">Version 2 release, check it out!</span>
                    <ArrowRight className="w-4 h-4 text-purple-200" />
                </motion.div>

                <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05]"
                    >
                        Revolutionize <span className="text-white">Search</span> <br />
                        with <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400">Cerebral AI.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Expertly crafted brand experiences that captivate, connect with discerning audiences, and leave a lasting impression.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 text-lg font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            <Play className="w-5 h-5 mr-2 fill-black" />
                            Try it out
                        </Button>
                        <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-white text-lg font-medium transition-all hover:scale-105">
                            Learn More
                        </Button>
                    </motion.div>
                </div>

                {/* Hero Visual/Orb (Centered and Subtle) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-50">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">The clients we serve</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Replaced text with SVG-like placeholders for more realism */}
                        <div className="h-8 w-32 bg-white/20 rounded-md mask-logo" />
                        <div className="h-8 w-32 bg-white/20 rounded-md" />
                        <div className="h-8 w-32 bg-white/20 rounded-md" />
                        <div className="h-8 w-32 bg-white/20 rounded-md" />
                        <div className="h-8 w-32 bg-white/20 rounded-md" />
                    </div>
                </div>
            </section>

            {/* Features Grid (Bento) */}
            <section id="features" className="py-32 relative">
                <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                            Features
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            AI-Powered Tools for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Effortless Productivity</span>
                        </h2>
                        <p className="text-xl text-gray-400">
                            Discover how our cutting-edge AI tools can transform your workflow, streamline your tasks, and maximize efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                        {/* Card 1: Intelligent Workflow Automation */}
                        <div className="lg:col-span-2 row-span-2 bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col">
                            {/* Radial gradient background on hover */}
                            <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_center,rgba(59,130,246,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 mb-8">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">Intelligent Workflow Automation</h3>
                                <p className="text-gray-400 text-lg">Set up automated tasks with AI-powered triggers to save time and reduce manual efforts.</p>

                                <div className="flex gap-3 mt-6">
                                    <div className="px-3 py-1.5 bg-red-500/10 text-red-400 text-sm rounded-lg border border-red-500/20 flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                        </span>
                                        SEV1
                                    </div>
                                    <div className="px-3 py-1.5 bg-green-500/10 text-green-400 text-sm rounded-lg border border-green-500/20 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        Active
                                    </div>
                                    <div className="flex items-center -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-700 border border-black flex items-center justify-center text-xs">A</div>
                                        <div className="w-8 h-8 rounded-full bg-gray-600 border border-black flex items-center justify-center text-xs">B</div>
                                        <div className="w-8 h-8 rounded-full bg-gray-500 border border-black flex items-center justify-center text-xs">+3</div>
                                    </div>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="flex-1 w-full bg-black/40 rounded-2xl border border-white/5 p-6 flex items-center justify-around relative overflow-hidden backdrop-blur-sm">
                                {[
                                    { icon: Zap, label: "Webhook\nTriggered", color: "blue" },
                                    { isLine: true },
                                    { icon: Server, label: "Attach Project\nBrief Document", color: "gray" },
                                    { isLine: true },
                                    { icon: CheckCircle, label: "Approval\nNeeded", color: "orange" },
                                    { isLine: true },
                                    { icon: BarChart3, label: "Mark Task\nas Complete", color: "green" }
                                ].map((step: any, i) => (
                                    step.isLine ? (
                                        <div key={i} className="h-[2px] w-12 bg-white/10" />
                                    ) : (
                                        <div key={i} className="flex flex-col items-center gap-3 text-center">
                                            <div className={`w-14 h-14 rounded-2xl bg-${step.color}-500/10 border border-${step.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                <step.icon className={`w-6 h-6 text-${step.color}-400`} />
                                            </div>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500">{step.label}</span>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Card 2: Conversational AI Support */}
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 group relative flex flex-col min-h-[400px]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-xl font-bold mb-2 relative z-10 group-hover:text-purple-300 transition-colors">Conversational AI Support</h3>
                            <p className="text-gray-400 text-sm mb-6 relative z-10">Get real-time assistance, schedule tasks, or fetch information through a conversational AI teammate.</p>

                            <div className="flex-1 flex flex-col gap-4 mt-auto relative z-10">
                                <div className="p-4 bg-white/5 rounded-2xl rounded-tl-none border border-white/10 text-sm text-gray-300">
                                    How can I help you?
                                </div>
                                <div className="p-4 bg-purple-500/20 rounded-2xl rounded-tr-none border border-purple-500/30 text-sm ml-auto text-purple-100">
                                    Give me a list of gadgets under $100
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl rounded-tl-none border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></span>
                                    <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-75"></span>
                                    <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-150"></span>
                                </div>
                                <div className="mt-2 relative">
                                    <input disabled placeholder="Gadgets under $100" className="w-full bg-black border border-white/10 rounded-xl py-3 px-10 text-sm" />
                                    <div className="px-2 py-1 absolute top-2 right-2 rounded bg-white/10 text-[10px] text-gray-400 border border-white/5">Enter</div>
                                    <Search className="w-4 h-4 text-gray-500 absolute top-3.5 left-3.5" />
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Predictive Insights */}
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 group relative">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">Predictive Insights</h3>
                            <p className="text-gray-400 text-sm mb-6">Use AI to predict deadlines, resource needs, and potential project bottlenecks.</p>

                            <div className="mt-8 relative h-48 bg-black/40 rounded-xl border border-white/5 p-4 overflow-hidden">
                                <div className="flex items-end justify-between h-full gap-2">
                                    {[20, 40, 30, 70, 50, 80, 45, 60].map((h, i) => (
                                        <div key={i} className="w-full bg-purple-500/20 hover:bg-purple-500/40 transition-colors duration-300 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                                {/* Smooth line overlay */}
                                <svg className="absolute inset-0 w-full h-full p-4 pointer-events-none overflow-visible">
                                    <path d="M0 150 C 50 120, 100 80, 150 100 S 250 40, 320 60" fill="none" stroke="#a855f7" strokeWidth="3" className="drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                </svg>
                            </div>
                        </div>

                        {/* Card 4: Smart Communication */}
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 group relative">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">Smart Communication</h3>
                            <p className="text-gray-400 text-sm mb-6">Integrated chat and voice tools to bring your team together in one place.</p>

                            <div className="flex justify-center items-center py-8">
                                <div className="relative">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.5)] z-20 relative">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    {/* Orbiting avatars */}
                                    {[0, 120, 240].map((deg, i) => (
                                        <div key={i} className="absolute inset-0 animate-[spin_10s_linear_infinite]" style={{ animationDelay: `-${i * 3}s` }}>
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-10 h-10 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center text-xs shadow-lg">
                                                {String.fromCharCode(88 + i)}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="absolute inset-0 rounded-full border border-white/10 scale-[2.5]" />
                                    <div className="absolute inset-0 rounded-full border border-white/5 scale-[3.5]" />
                                </div>
                            </div>
                        </div>

                        {/* Card 5: Task Prioritization */}
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 group relative">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">Task Prioritization</h3>
                            <p className="text-gray-400 text-sm mb-6">Let AI prioritize tasks based on deadlines and importance.</p>

                            <div className="space-y-4">
                                <div className="p-4 bg-neutral-900/50 border border-white/5 rounded-xl hover:bg-neutral-800/50 transition-colors cursor-pointer">
                                    <div className="text-xs text-gray-500 mb-1">Backlog</div>
                                    <div className="font-semibold text-sm mb-2">Finalize Project Brief</div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-600" />
                                        </div>
                                        <span className="text-[10px] text-gray-400">Asaad Mahmood</span>
                                        <span className="ml-auto px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-500 text-[10px] border border-yellow-500/20">SEV2</span>
                                        <span className="px-2 py-0.5 rounded bg-white/5 text-gray-400 text-[10px] border border-white/10">+3</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-purple-900/10 border border-purple-500/20 rounded-xl hover:bg-purple-900/20 transition-colors cursor-pointer">
                                    <div className="text-xs text-purple-400 mb-1">In Progress</div>
                                    <div className="font-semibold text-sm mb-2 text-white">Prepare Marketing Strategy Deck</div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-600" />
                                        </div>
                                        <span className="text-[10px] text-gray-400">Jerry McGuire</span>
                                        <span className="ml-auto flex h-2 w-2 rounded-full bg-purple-500"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section id="why-us" className="py-24 relative overflow-hidden bg-black">
                <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                            Why Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Why Choose Us</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Unlock the full potential of your business with exceptional features and unmatched performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: BarChart3, title: "Automated Reports", desc: "Effortlessly generate insightful reports and stay ahead with real-time data." },
                            { icon: MessageSquare, title: "24/7 AI Support", desc: "Get instant assistance anytime with our intelligent, always-available AI assistant." },
                            { icon: Zap, title: "Seamless Integration", desc: "Easily connect with your existing tools and workflows for a unified experience." },
                            { icon: Shield, title: "Data Security & Compliance", desc: "Safeguard your operations with industry-leading standards." },
                            { icon: Zap, title: "Boost Productivity", desc: "Automate repetitive tasks to focus on what matters, saving time and resources." },
                            { icon: MousePointer2, title: "Intuitive User Experience", desc: "Start quickly with a user-friendly interface designed for maximum ease and efficiency." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.03] transition-all group">
                                <div className="w-12 h-12 mb-6 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="relative rounded-[3rem] overflow-hidden bg-black border border-white/10 p-12 md:p-32 text-center group">
                        {/* Swirl BG */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(92,53,171,0.3),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to Take Your Business to the Next Level?</h2>
                            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                                "Join thousands of businesses transforming their workflows with our AI. Experience unmatched efficiency and simplicity today."
                            </p>
                            <Button className="h-16 px-10 rounded-full bg-white text-black hover:bg-gray-200 text-lg font-bold transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                <Play className="w-5 h-5 mr-3 fill-current" />
                                Try it out
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-24 border-t border-white/5 bg-black">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                        <div className="col-span-2 md:col-span-1">
                            <div className="text-2xl font-black mb-6 tracking-tighter flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500" />
                                TestFlow
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-white">Pages</h4>
                            <ul className="space-y-4 text-gray-500 text-sm">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">404</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-white">Other Pages</h4>
                            <ul className="space-y-4 text-gray-500 text-sm">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Login</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Forgot Password</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Terms & Service</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-white">My Work</h4>
                            <ul className="space-y-4 text-gray-500 text-sm">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Youtube</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Upwork</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Behance</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">X</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
                        <span>© 2026 TestFlow. All rights reserved.</span>
                        <span>Designed & Coded by @Asaad Mahmood</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
