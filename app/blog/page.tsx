'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, User, Tag, ArrowUpRight, Clock, Calendar, Filter, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { SectionTracker, trackButtonClick, trackFormSubmission, trackPageSpecificEvent } from '@/components/analytics-tracker'
import { HomeCTA } from '@/components/home-cta'
import { TestFlowFooter } from "@/components/test-flow-footer"

// Helper function to create slug from title
const createSlug = (title: string) => {
  return title
    .split(' ')
    .slice(0, 3)
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '');
};

// Sample blog post data
const blogPosts = [
  {
    id: 70,
    title: "The Best LabVIEW Alternative for Test Automation in 2026",
    slug: "best-labview-alternative-test-automation-2026",
    excerpt: "Comparing TestFlow, LabVIEW, Python scripting, and manual testing — features, use cases, pricing, and tradeoffs. Pick the right validation stack for 2026 instead of inheriting one.",
    coverImage: "/blog/testflow-vs-labview.svg",
    category: "Hardware Validation",
    author: "Ali Kamaly",
    date: "May 11, 2026",
    readTime: "14 min read",
    featured: true
  },
  {
    id: 69,
    title: "How to Automate a Tektronix Oscilloscope with Python (SCPI + PyVISA Guide for 2026)",
    slug: "automate-tektronix-oscilloscope-python-scpi-pyvisa-guide",
    excerpt: "Stop configuring your scope by hand. Here's exactly how to control any Tektronix oscilloscope remotely with Python, SCPI, and PyVISA, capture waveform data automatically, and plug it into a real validation workflow.",
    coverImage: "/blog/Automate-Tektronix .svg",
    category: "Instrument Automation",
    author: "Ali Kamaly",
    date: "May 11, 2026",
    readTime: "13 min read",
    featured: true
  },
  {
    id: 68,
    title: "We Used Claude Agent to Train an Open LLM!",
    slug: "testflow-ai-agents-everything-from-marketing-to-finetuning",
    excerpt: "At TestFlow, we're literally using AI agents for everything — marketing, product, sales, and even fine-tuning the models themselves. Here's how we gave Claude the ability to train open-source LLMs and why we believe agents are the future of every company.",
    coverImage: "/blog/testflow-ai-agents-training-metrics.png",
    category: "AI",
    author: "Ali Kamaly",
    date: "Feb 8, 2026",
    readTime: "14 min read",
    featured: true
  },
  {
    id: 67,
    title: "What Companies Are Really Behind the iPhone 17?",
    slug: "iphone-17-chip-suppliers-breakdown",
    excerpt: "Hint: It's way more than Apple. Discover the 10+ semiconductor giants—from Broadcom to Kioxia—that actually build the iPhone 17's logic, memory, and RF systems.",
    coverImage: "/iphone-17-chip-suppliers-breakdown.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "10 min read",
    featured: true
  },
  {
    id: 66,
    title: "The Hidden AI Bottleneck: Why CoWoS Packaging Supply Chain is the Real Constraint",
    slug: "cowos-packaging-supply-chain-bottleneck-ai-chips",
    excerpt: "The AI race isn't limited by silicon—it's limited by packaging. CoWoS capacity has become the industry's choke point, driven by a fragile supply chain 90% dependent on Japanese materials. Discover the hidden validation risks.",
    coverImage: "/blog/cowos-packaging-supply-chain-materials.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "11 min read",
    featured: true
  },
  {
    id: 65,
    title: "How Chips Are Made: A Visual Journey Through the Manufacturing Process",
    slug: "how-chips-are-made-manufacturing-process-explained",
    excerpt: "Most people think chips are designed. They’re not. They’re manufactured through one of the most complex processes ever built. Discover the journey from sand to silicon.",
    coverImage: "/images/how-chips-are-made-development-cycle.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "12 min read",
    featured: true
  },
  {
    id: 64,
    title: "The Semiconductor Ecosystem: A 7-Layer Stack Explained",
    slug: "semiconductor-ecosystem-7-layer-stack-explained",
    excerpt: "The semiconductor world isn’t just about manufacturing. It is a deep, 7-layer stack of dependency—from EDA software to foundries and IP cores. Discover who builds the global digital backbone.",
    coverImage: "/semiconductor-ecosystem-pyramid.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 63,
    title: "System-on-Wafer (SoW) vs. CoWoS: The Packaging Revolution Deciding the AI Race",
    slug: "tsmc-system-on-wafer-sow-vs-cowos-packaging-revolution",
    excerpt: "TSMC is pushing beyond CoWoS with System-on-Wafer (SoW)—claiming >40x compute power. But moving from 'chip + memory' to 'manufactured systems' creates a massive challenge for hardware validation and chip testing. Are wafer-scale systems the future?",
    coverImage: "/blog/tsmc-system-on-wafer-sow-vs-cowos.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "9 min read",
    featured: true
  },
  {
    id: 62,
    title: "Top 10 U.S. Semiconductor Giants — Ranked by Market Cap",
    slug: "top-10-us-semiconductor-giants-market-cap-2025",
    excerpt: "NVIDIA leads at $4.5T, but the list is full of surprises. Discover the top 10 American chip companies defining the AI era, from Broadcom's connectivity dominance to the critical role of equipment makers.",
    coverImage: "/images/us-semiconductor-giants-2025.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "10 min read",
    featured: true
  },
  {
    id: 61,
    title: "Top 10 Semiconductor Giants — Ranked by Market Cap",
    slug: "top-10-semiconductor-giants-ranked-market-cap-2026",
    excerpt: "If you think semiconductors are just 'tech', think again. From NVIDIA's $4.4T dominance to Broadcom's rise, explore the top 10 giants defining the global economy in 2026.",
    coverImage: "/top-10-semiconductor-giants-market-cap-2026.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "7 min read",
    featured: true
  },
  {
    id: 60,
    title: "Intel Installs ASML TWINSCAN EXE:5200B High-NA EUV Machine for 14A Node",
    slug: "intel-installs-high-na-euv-asml-14a-node",
    excerpt: "Intel Foundry has officially installed ASML’s TWINSCAN EXE:5200B High-NA EUV — the most advanced lithography system ever deployed. Discover how this impacts chip manufacturing workflow, yield validation, and the future of 14A node hardware testing.",
    coverImage: "/blog/intel-high-na-euv-machine.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "10 min read",
    featured: true
  },
  {
    id: 59,
    title: "If You Think AI = GPUs, You're Missing 80% of the Story",
    slug: "ai-infrastructure-stack-beyond-gpus",
    excerpt: "Everyone talks about GPUs, but AI data centers are massive, tightly engineered systems where infrastructure decides performance. Power, cooling, and security are the real silent partners in the AI revolution.",
    coverImage: "/images/ai-data-center-infrastructure.jpg",
    category: "Infrastructure",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "9 min read",
    featured: true
  },
  {
    id: 58,
    title: "NVIDIA's Real Strategy: Owning the Entire Semiconductor Stack",
    slug: "nvidia-semiconductor-investment-strategy-portfolio-analysis",
    excerpt: "NVIDIA just revealed its real strategy — and it's way bigger than AI chips. Most people think NVIDIA only wins by building GPUs. But the real story? They're quietly buying influence across the entire semiconductor stack.",
    coverImage: "/nvidia-portfolio-breakdown.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 57,
    title: "8 Layers of the Semiconductor $1 Trillion Industry — A Visual Breakdown",
    slug: "semiconductor-ecosystem-8-layers-visual-breakdown-2026",
    excerpt: "From raw materials to final systems, the semiconductor industry is a global relay race — each layer critical, each player irreplaceable. Discover the 8 essential layers including EDA, FAB, and Packaging that create the modern world.",
    coverImage: "/semiconductor-ecosystem-layers.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "10 min read",
    featured: true
  },
  {
    id: 56,
    title: "DHRUV64: India's First Indigenous 64-bit Microprocessor Marks Semiconductor Independence",
    slug: "dhruv64-india-first-indigenous-64bit-microprocessor",
    excerpt: "India achieves a major milestone in semiconductor sovereignty with DHRUV64 (VEGA AS2161)—a fully indigenous 64-bit RISC-V microprocessor designed for 5G, automotive, IoT, and defense applications. Discover how hardware validation and chip testing enabled this breakthrough.",
    coverImage: "/blog/dhruv64-india-microprocessor.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "12 min read",
    featured: true
  },
  {
    id: 55,
    title: "How Much Does a 2nm Chip Really Cost? $725M Development Breakdown",
    slug: "2nm-chip-development-cost-725-million-analysis",
    excerpt: "We often talk about Moore's Law, but rarely about its cost. Discover why developing a 2nm chip now costs $725 million—and why hardware validation, chip testing, and post-silicon verification have become the fastest-growing expenses in advanced semiconductor design.",
    coverImage: "/blog/2nm-chip-cost-breakdown.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "14 min read",
    featured: true
  },
  {
    id: 54,
    title: "Semiconductor Validation — TestFlow 2025 Wrapped 🚀",
    slug: "testflow-2025-wrapped-semiconductor-validation-milestone",
    excerpt: "2025 marked a turning point for semiconductor validation. As chips became more complex and AI workloads pushed hardware to its limits, TestFlow proved that AI-driven chip validation is the future. Here's our year in review.",
    coverImage: "/images/testflow-2025-wrapped.jpg",
    category: "News",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 53,
    title: "The Entire Semiconductor Industry — Explained in One Chart",
    slug: "semiconductor-value-chain-global-symphony-explained",
    excerpt: "Chips don't come from a single company—they come from a global symphony of players, each mastering a step in the semiconductor value chain. From design to testing, discover how hardware testing and chip validation fit into this complex ecosystem.",
    coverImage: "/images/semiconductor-value-chain.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jan 25, 2026",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 52,
    title: "Largest AI Conference in EMEA: Redefining Hardware Validation with TestFlow",
    slug: "ceo-ali-kamaly-international-ai-conference",
    excerpt: "At the largest AI and deep-tech gathering in the EMEA region, Ali Kamaly, Co-Founder and CEO of TestFlow, addressed the critical challenge facing every semiconductor company: How do we validate increasingly complex chips fast enough to keep innovation alive?",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Blog%20post%20cover%20image%20AI%20conf.jpeg",
    category: "News",
    author: "Ali Kamaly",
    date: "Jan 2025",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 51,
    title: "Most Important EDA Tools: From Design to Market Success",
    slug: "most-important-eda-tools-design-to-market",
    excerpt: "Every semiconductor device starts with EDA tools, but the journey doesn't end at tape-out. Discover the critical EDA tools powering chip design and why post-silicon validation is becoming the final frontier for market success.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Aug 25, 2025",
    readTime: "13 min read",
    featured: false
  },
  {
    id: 50,
    title: "Why Chip Manufacturing Is the Hardest Thing Humans Do: Precision Beyond Imagination",
    slug: "chip-manufacturing-hardest-thing-humans-do-complexity",
    excerpt: "Building a leading-edge semiconductor requires atomic-level precision across billions of components. From EUV lithography to 3nm manufacturing, discover why chip fabrication represents the pinnacle of human engineering achievement.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/ASML%27S%20EUV%20machine-gYxdnNDPwPRAWcZCeMajdA1ZX17SZn.jpeg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Aug 24, 2025",
    readTime: "14 min read",
    featured: false
  },
  {
    id: 49,
    title: "Major Players in Semiconductor Packaging Ecosystem: The Unsung Heroes of Chip Assembly",
    slug: "semiconductor-packaging-ecosystem-major-players-breakdown",
    excerpt: "Behind every finished chip lies a complex ecosystem of packaging specialists, material innovators, and precision equipment makers. Discover the major players shaping this critical supply chain that connects silicon to the real world.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 23, 2025",
    readTime: "11 min read",
    featured: false
  },
  {
    id: 48,
    title: "2.5D vs 3D ICs: The Difference Between Horizontal and Vertical Integration",
    slug: "2-5d-vs-3d-ics-difference-advanced-packaging",
    excerpt: "As Moore's Law slows, the industry is shifting to system-level innovation through advanced packaging. Discover the critical differences between 2.5D and 3D IC architectures and why they're revolutionizing semiconductor design.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/2.5%20vs%203D%20chips-c8gSuLDBbH9ClljIC489Br4Mho1NAA.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Aug 22, 2025",
    readTime: "12 min read",
    featured: false
  },
  {
    id: 47,
    title: "What is a System-on-Chip (SoC)? The Brain of Modern Electronics",
    slug: "system-on-chip-soc-brain-modern-electronics",
    excerpt: "From smartphones to autonomous vehicles, much of today's technology runs on System-on-Chip designs. Discover what makes SoCs the ultimate all-in-one solution and why they're the backbone of modern connected devices.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Aug 21, 2025",
    readTime: "13 min read",
    featured: false
  },
  {
    id: 46,
    title: "Top 5 Semiconductor Foundries by Market Share: The Manufacturing Powerhouses",
    slug: "top-5-semiconductor-foundries-market-share-analysis",
    excerpt: "It's not just about design—most chips are made by foundries. Discover the specialized factories that manufacture semiconductors for the world's biggest tech companies and how TSMC's 62% dominance shapes the entire industry.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 20, 2025",
    readTime: "12 min read",
    featured: false
  },
  {
    id: 45,
    title: "Top 8 Semiconductor Companies by Revenue: Who's Really Winning the Chip Race",
    slug: "top-8-semiconductor-companies-revenue-ranking-2025",
    excerpt: "Revenue tells the real story of semiconductor dominance. From Samsung's memory empire to NVIDIA's AI revolution, discover the 8 largest chip companies by revenue and the diverse strategies driving their success in 2025.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 19, 2025",
    readTime: "13 min read",
    featured: false
  },
  {
    id: 44,
    title: "What Chips Run Tesla Autopilot? The Semiconductor Breakdown of Self-Driving Cars",
    slug: "tesla-autopilot-chips-semiconductor-breakdown",
    excerpt: "Electric vehicles aren't just about batteries and motors—they're rolling data centers packed with silicon. Take Tesla's Full Self-Driving computer: a supercomputer on wheels powered by chips from the world's top semiconductor companies.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Aug 18, 2025",
    readTime: "12 min read",
    featured: false
  },
  {
    id: 43,
    title: "What's Wire Bonding: How Chips Actually Connect to the World",
    slug: "wire-bonding-semiconductor-chip-connections-explained",
    excerpt: "In advanced packaging conversations, we often hear about 2.5D and 3D ICs. But behind the scenes, the most widely used interconnect method in chip packaging is still wire bonding—the unsung hero connecting silicon to the outside world.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Aug 17, 2025",
    readTime: "11 min read",
    featured: false
  },
  {
    id: 42,
    title: "5 Reasons Why Silicon Wafers Are Round: The Physics Behind Semiconductor Manufacturing",
    slug: "why-silicon-wafers-round-semiconductor-manufacturing-physics",
    excerpt: "Ever wondered why every chip begins life on a perfectly round wafer? It's not tradition—it's precision engineering backed by physics, manufacturing efficiency, and decades of process optimization.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Aug 16, 2025",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 41,
    title: "7 Major Semiconductor Trends Shaping 2025: The Industry Evolution",
    slug: "7-major-semiconductor-trends-2025-industry-evolution",
    excerpt: "From sub-2nm technology to AI-driven solutions, discover the 7 transformative trends reshaping the semiconductor landscape. Explore how chiplets, advanced materials, and workforce challenges are defining the future of silicon.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Major%20milestone%20in%20semiconductors-g2cFK9KX4hiCS36jVdJsuRRRQLQPp9.jpeg",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 15, 2025",
    readTime: "13 min read",
    featured: false
  },
  {
    id: 40,
    title: "8 Layers of the Semiconductor Industry: Inside the $1 Trillion Chip Ecosystem",
    slug: "8-layers-semiconductor-industry-trillion-dollar-breakdown",
    excerpt: "From raw materials to final systems, the semiconductor industry is a global relay race where each layer is critical and each player irreplaceable. Discover the 8 essential layers that power our digital world.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 14, 2025",
    readTime: "12 min read",
    featured: false
  },
  {
    id: 38,
    title: "Top 8 TSMC Customers by Revenue Share: Who Powers the World's Leading Foundry",
    slug: "top-8-tsmc-customers-revenue-share-analysis",
    excerpt: "TSMC's customer portfolio reads like a who's who of the tech industry. From Apple's iPhone processors to NVIDIA's AI accelerators, discover which companies drive the world's most advanced semiconductor foundry and why their relationships matter.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 12, 2025",
    readTime: "11 min read",
    featured: false
  },
  {
    id: 37,
    title: "What's Inside an AI Chip? A Visual Breakdown of Modern AI Accelerators",
    slug: "whats-inside-ai-chip-visual-breakdown",
    excerpt: "AI isn't powered by just GPUs anymore. Modern AI chips are sophisticated systems-on-silicon, combining specialized processors, high-bandwidth memory, and custom interconnects. Discover the architectural innovations driving the AI revolution.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "AI",
    author: "Ali Kamaly",
    date: "Aug 11, 2025",
    readTime: "13 min read",
    featured: false
  },
  {
    id: 36,
    title: "TSMC's Semiconductor Manufacturing Dominance: How Taiwan Became the Silicon Kingmaker",
    slug: "tsmc-semiconductor-manufacturing-dominance-explained",
    excerpt: "With 54% of global foundry market share and exclusive production of the world's most advanced chips, TSMC has become the most critical company in the semiconductor supply chain. Discover how this Taiwanese giant achieved unprecedented dominance.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Steps%20to%20fabricate%20semiconductor%20chip-jl3xx5esZroYk21SB1P4USXrHj8iHx.jpeg",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 10, 2025",
    readTime: "15 min read",
    featured: false
  },
  {
    id: 35,
    title: "Memory Hierarchy in Semiconductors: From Cache to Storage Explained",
    slug: "memory-hierarchy-semiconductors-cache-ram-storage",
    excerpt: "Discover how modern processors balance speed, capacity, and cost through sophisticated memory hierarchies. From L1 cache running at CPU speeds to massive storage arrays, explore the engineering trade-offs that power computing performance.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Aug 9, 2025",
    readTime: "12 min read",
    featured: false
  },
  {
    id: 34,
    title: "Top 10 Semiconductor Design Tools: The EDA Software Powering Modern Chips",
    slug: "top-10-semiconductor-design-tools-eda-software",
    excerpt: "From Cadence to Synopsys, discover the essential EDA tools that enable engineers to design everything from smartphone processors to AI accelerators. Explore the $15 billion software ecosystem behind every modern chip.",
    coverImage: "/images/TestFlow slide 1 .webp",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Aug 8, 2025",
    readTime: "14 min read",
    featured: false
  },
  {
    id: 33,
    title: "How Big Tech Giants Are Designing Their Own Chips: The Silicon Revolution",
    slug: "big-tech-giants-designing-own-chips-silicon-strategy",
    excerpt: "From Apple's M-series to Google's TPUs, discover why tech giants are abandoning Intel and designing custom silicon. Explore the strategic shift that's reshaping the semiconductor industry and creating new competitive moats.",
    coverImage: "/images/features1.webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 7, 2025",
    readTime: "13 min read",
    featured: false
  },
  {
    id: 32,
    title: "7 Semiconductor Facts That'll Reshape How You See the Tech World",
    slug: "7-semiconductor-facts-reshape-tech-world-view",
    excerpt: "From cars containing 3,000+ chips to Taiwan's 63% global production dominance, discover the surprising facts that reveal semiconductors' true impact on our world. These insights will change how you view the tech industry forever.",
    coverImage: "/images/features2.webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 6, 2025",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 31,
    title: "Global Semiconductor Manufacturing by Country: The Geopolitical Chip Map 2025",
    slug: "global-semiconductor-manufacturing-by-country-2025",
    excerpt: "Explore how Taiwan, South Korea, China, and other nations dominate different aspects of chip production. Discover why semiconductors have become a matter of national strategy and how geopolitical tensions are reshaping the global supply chain.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 6, 2025",
    readTime: "15 min read",
    featured: false
  },
  {
    id: 30,
    title: "From Design to Deployment: Chiplet Semiconductor Value Chain Explained",
    slug: "chiplet-semiconductor-value-chain-design-to-deployment",
    excerpt: "Discover how chiplet architecture is revolutionizing semiconductor design by enabling modular, cost-effective chip development. Explore the complete value chain from design to deployment and why major companies are adopting this game-changing approach.",
    coverImage: "/images/features3.webp",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Aug 5, 2025",
    readTime: "13 min read",
    featured: false
  },
  {
    id: 29,
    title: "The Entire Semiconductor Industry Value Chain Explained in One Chart",
    slug: "entire-semiconductor-industry-value-chain-explained",
    excerpt: "From raw silicon to finished devices, understand the complete semiconductor ecosystem in one comprehensive breakdown. Explore how design, manufacturing, testing, and assembly create the $600 billion chip industry.",
    coverImage: "/images/features4.webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 4, 2025",
    readTime: "11 min read",
    featured: false
  },
  {
    id: 28,
    title: "60 Semiconductor Giants That Did the Impossible: Sustained 15% EPS Growth for 10 Years",
    slug: "60-semiconductor-giants-sustained-15-percent-eps-growth",
    excerpt: "Discover the elite group of semiconductor companies that achieved consistent 15%+ earnings growth for a decade. Analyze what separates these industry leaders from the rest and learn the strategies behind their remarkable performance.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 3, 2025",
    readTime: "14 min read",
    featured: false
  },
  {
    id: 27,
    title: "Time-to-Market in Semiconductors: Why Timing is Everything in the Chip Industry",
    slug: "semiconductor-time-to-market-critical-success-factor",
    excerpt: "A 6-month delay isn't just a schedule slip—it can be a $100M+ mistake. Discover why time-to-market pressure is more brutal in semiconductors than any other industry and how AI-powered validation is accelerating chip development cycles.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 4, 2025",
    readTime: "13 min read",
    featured: false
  },
  {
    id: 26,
    title: "iPhone 15 Pro Chip Suppliers: The Global Network Behind Apple's Flagship",
    slug: "iphone-15-pro-chip-suppliers-breakdown",
    excerpt: "It's not just Apple—discover the 10+ global semiconductor suppliers powering the iPhone 15 Pro. From Qualcomm's 5G modems to SK Hynix's memory and Broadcom's wireless chips, explore the complex supply chain behind modern smartphones.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 3, 2025",
    readTime: "11 min read",
    featured: false
  },
  {
    id: 25,
    title: "Top 10 Semiconductor Giants by Market Cap 2025: NVIDIA's $3.4T Dominance",
    slug: "top-10-semiconductor-giants-market-cap-2025",
    excerpt: "NVIDIA's $3.4 trillion valuation now exceeds most other chip companies combined. Explore how AI has reshaped semiconductor valuations and discover which companies dominate the trillion-dollar chip industry in 2025.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "News",
    author: "Ali Kamaly",
    date: "Aug 2, 2025",
    readTime: "12 min read",
    featured: true
  },
  {
    id: 26,
    title: "The Complete Guide to Lab Automation in 2025: Beyond Traditional Testing Methods",
    slug: "complete-guide-lab-automation-2025-modern-testing",
    excerpt: "Discover how modern lab automation is revolutionizing semiconductor testing, chip validation, and hardware verification. Learn why traditional tools are being replaced by AI-powered platforms that deliver 10x faster results.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "Test Flow",
    author: "Ali Kamaly",
    date: "Jul 25, 2025",
    readTime: "12 min read",
    featured: false
  },
  {
    id: 25,
    title: "Hardware Testing Best Practices: Modern Approaches Beyond Legacy Tools",
    slug: "hardware-testing-best-practices-modern-approaches",
    excerpt: "Explore cutting-edge hardware testing methodologies that are replacing traditional approaches. From automated test generation to AI-powered analysis, discover how leading companies are accelerating their validation cycles.",
    coverImage: "/images/AI-powerd Validation.webp",
    category: "Test Flow",
    author: "Ali Kamaly",
    date: "Jul 23, 2025",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 24,
    title: "LabVIEW vs TestFlow: Why AI-Powered Validation Beats Traditional Lab Automation",
    slug: "labview-vs-testflow-ai-powered-validation-comparison",
    excerpt: "Compare LabVIEW and TestFlow head-to-head for semiconductor testing and chip validation. Discover why engineers are switching to AI-powered platforms that offer 5x faster test execution, automated analysis, and seamless team collaboration.",
    coverImage: "/images/TestFlow slide 1 .webp",
    category: "Test Flow",
    author: "Ali Kamaly",
    date: "Jul 22, 2025",
    readTime: "15 min read",
    featured: false
  },
  {
    id: 23,
    title: "Digital vs Analog vs Mixed Signal Design: Understanding the Three Chip Design Domains",
    slug: "digital-analog-mixed-signal-chip-design-domains",
    excerpt: "From binary logic to continuous signals, discover how digital, analog, and mixed-signal designs work together in modern chips. Learn why understanding these three domains is crucial for effective chip validation and testing.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Digital%20vs%20analog%20vs%20mixed%20signal-sSUeVmJS3uwxYMUQhdE0dFInriw1kV.jpeg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jul 20, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 22,
    title: "What's the Difference Between CPU and GPU? The Chef vs Sous Chef Analogy",
    slug: "cpu-vs-gpu-difference-chef-analogy",
    excerpt: "CPUs are like head chefs—skilled at complex decisions and timing. GPUs are like teams of sous chefs—excelling at simple, parallel tasks. Discover why modern computing needs both for optimal performance and validation.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Diffrance%20between%20CPU%20and%20GPU-BzSCqpcyybRnJyXZOfEqXSzpa2PQZB.jpeg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jul 18, 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 21,
    title: "The Semiconductor Ecosystem: 8 Key Player Types Powering the Chip Industry",
    slug: "semiconductor-ecosystem-eight-key-player-types",
    excerpt: "From IP cores to OSAT companies, discover the 8 essential types of companies that make up the complex semiconductor ecosystem. Understand how each player contributes to creating the chips powering our modern world.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Semiconductor%20Ecosystem-30OhRjUMDpIyfDGVQqAYQ3MmiXltQ5.jpg",
    category: "News",
    author: "Ali Kamaly",
    date: "Jul 15, 2025",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 20,
    title: "What is the Difference Between Wafer, Chip and Die? The Silicon Hierarchy Explained",
    slug: "difference-wafer-chip-die-silicon-hierarchy",
    excerpt: "Confused by wafer, chip, and die terminology? Think of it like pizza: the wafer is the whole pizza, each die is a slice, and the chip is that slice boxed and ready to deliver. Master semiconductor fundamentals with this clear breakdown.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Diffrence%20between%20wafer%2C%20chips%2C%20and%20die-qcB8np7oj7kbDFA1L23i62YiUr4sGD.png",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jul 12, 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 19,
    title: "4 Major Companies Monopolizing the AI Chip Supply Chain",
    slug: "ai-chip-supply-chain-monopoly-nvidia-asml-tsmc-aws",
    excerpt: "From NVIDIA's 95% AI chip dominance to ASML's 100% EUV monopoly, discover how just four companies control the entire AI hardware ecosystem. Explore the critical supply chain dependencies shaping the future of artificial intelligence.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/AI%20Semiconductor%20Ecosystem-Gnn4DGzJvLO1KROcSjaaxpdmzJl4rU.png",
    category: "AI",
    author: "Ali Kamaly",
    date: "Jul 10, 2025",
    readTime: "9 min read",
    featured: false
  },
  {
    id: 18,
    title: "What is Wafer Sort Testing? How Wafers Are Validated Before Packaging",
    slug: "wafer-sort-testing-semiconductor-validation-probe",
    excerpt: "Before any chip is packaged or shipped, it must pass through wafer-level testing—the first critical checkpoint of validation. Discover how probe stations test every die on a wafer and why this step is the gatekeeper of silicon quality.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Wafer%20testing%20in%20semiconductors-MJh36nf85dYrG2T9MekcgKH1BytuSv.jpeg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jul 8, 2025",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 17,
    title: "Why Silicon Wafers Are Round: 5 Engineering Reasons Behind Semiconductor Manufacturing's Most Important Design Choice",
    slug: "why-silicon-wafers-round-semiconductor-manufacturing-design",
    excerpt: "Ever wondered why every chip begins life on a perfectly round wafer? From Czochralski crystal growth to automated testing systems, discover the 5 critical engineering reasons why round wafers dominate semiconductor fabrication and chip validation processes.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Why%20silicon%20wafer%20is%20round-9zXnlHDG2VAhXcFvSS60GIea2DR6ma.jpeg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jul 5, 2025",
    readTime: "14 min read",
    featured: false
  },
  {
    id: 16,
    title: "What's Defect Rate in Semiconductors? Understanding the Bathtub Curve",
    slug: "semiconductor-defect-rate-bathtub-curve",
    excerpt: "Defect rate is the probability that a chip will fail at any point in its lifecycle—and it's one of the most critical factors in yield, reliability, and validation strategy. Explore the bathtub curve and why validation teams focus on early detection.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Defect%20rate%20in%20semiconductors-QOmXM2WbQ8u170KF3gt8EQlzZPOK4I.jpeg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jun 30, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 15,
    title: "Microprocessor vs Microcontroller: Understanding the Key Differences",
    slug: "microprocessor-vs-microcontroller-differences",
    excerpt: "They're both called the 'brain' of electronic systems, but they serve very different roles. Understand the key differences between microprocessors and microcontrollers and when to use each in your design.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Micro%20processor%20vs%20micro%20controller-wW3R4Tt3uKeXHzffd2i1nwz44laAUL.jpeg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jun 28, 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 14,
    title: "What's Driving the $25.1B Power Semiconductor Market? Complete Market Breakdown",
    slug: "power-semiconductor-market-breakdown-igbt-sic-gan",
    excerpt: "The global power semiconductor market reached $25.1B in 2022, with Power IGBT claiming $8.2B, SiC at $1.6B, and GaN growing 60% YoY. Discover which companies dominate each segment and why SiC and GaN are no longer emerging—they're strategic.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Power%20semiconductor%20market%20share-yBttEKtzyvzVqh55t2u4ySaaGVDwFF.jpeg",
    category: "News",
    author: "Ali Kamaly",
    date: "Jun 25, 2025",
    readTime: "11 min read",
    featured: false
  },
  {
    id: 13,
    title: "What's Wire Bonding: How Chips Actually Connect to the World",
    slug: "wire-bonding-semiconductor-packaging-interconnects",
    excerpt: "Behind advanced packaging conversations about 2.5D and 3D ICs, wire bonding remains the most widely used interconnect method. Discover how ultrathin wires create the electrical bridge between silicon dies and the external world.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Wire%20bonding%20in%20semiconductors-AZEM0GsOINMZ37XGpQYFSmJWnaIIsM.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jun 20, 2025",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 12,
    title: "2.5D vs 3D ICs: The Future of Advanced Packaging and Microprocessors vs Microcontrollers",
    slug: "advanced-packaging-2d-3d-ics-microprocessors-microcontrollers",
    excerpt: "As Moore's Law slows, advanced packaging becomes the new performance lever. Explore the differences between 2.5D and 3D ICs, plus understand when to choose microprocessors vs microcontrollers for your next design.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/2.5%20vs%203D%20chips-c8gSuLDBbH9ClljIC489Br4Mho1NAA.jpg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jun 15, 2025",
    readTime: "12 min read",
    featured: false
  },
  {
    id: 11,
    title: "How Chips Are Made: A Visual Journey Through Semiconductor Manufacturing",
    slug: "how-chips-are-made",
    excerpt: "From bare silicon wafer to powerful microchip—explore the step-by-step semiconductor manufacturing process that combines chemistry, physics, and nanotechnology with zero room for error.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/How%20chips%20are%20made%20-RJigbaZyxUTy8rnIdkPZmCdUwTNXJg.jpeg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jun 10, 2025",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 10,
    title: "What is Yield in Semiconductor Fabs? Understanding the Critical Manufacturing Metric",
    slug: "semiconductor-yield-explained",
    excerpt: "Discover how yield impacts semiconductor manufacturing costs and profitability. Learn why TSMC leads in yield optimization and how companies like Samsung are catching up in advanced nodes.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Whats%20yeild%20in%20semiconductors-D9Wia6RH2NAmMDP0fikJIgccjVDPFl.jpeg",
    category: "Semiconductors",
    author: "Ali Kamaly",
    date: "Jun 5, 2025",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 9,
    title: "Ripples and Tsunamis in the Semiconductor Supply Chain",
    slug: "semiconductor-supply-chain-ripples",
    excerpt: "Data center demand now drives 38% of the global semiconductor market, reshaping every layer of the industry. Explore how pressure points are shifting across the entire value chain.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/semiconductor%20value%20chain-VlFADb0mZLm7bb5VXeSRMG7jA7QE6H.jpeg",
    category: "News",
    author: "Ali Kamaly",
    date: "Jun 1, 2025",
    readTime: "9 min read",
    featured: false
  },
  {
    id: 7,
    title: "The Journey of a Chip: Understanding the Semiconductor Manufacturing Cycle",
    slug: "semiconductor-manufacturing-cycle",
    excerpt: "Dive deep into the fascinating journey of how semiconductors are designed, manufactured, tested, and brought to market - from initial circuit design to final validation.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Semiconductor%20Cycle%20From%20Design%20to%20Market-TOtU5YHS8FdCl0vrO4wrHIDFxGpaXt.jpg",
    category: "News",
    author: "Ali Kamaly",
    date: "Apr 15, 2025",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 8,
    title: "NVIDIA's AI Revolution: Breaking Down Their $29.8B Profit Engine",
    slug: "nvidia-profit-breakdown",
    excerpt: "A deep dive into how NVIDIA transformed $60.9B in revenue into nearly $30B in net profit, marking their evolution from a gaming company to an AI infrastructure powerhouse.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/NVIDIA%20Revenue%20by%20segment-1A8LeHhFO9NHtnpRtMO0aTFNhMF8pG.png",
    category: "News",
    author: "Ali Kamaly",
    date: "Apr 10, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 1,
    title: "Revolutionizing Semiconductor Validation with AI",
    slug: "revolutionizing-semiconductor-validation",
    excerpt: "How artificial intelligence is transforming the validation process for semiconductor manufacturers.",
    coverImage: "/images/AI-powerd Validation.webp",
    category: "AI",
    author: "Ali Kamaly",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    featured: false
  },
  {
    id: 3,
    title: "The Future of Hardware Validation: Trends to Watch",
    slug: "the-future-of",
    excerpt: "Exploring upcoming technologies and methodologies that will shape validation processes in the next decade.",
    coverImage: "https://images.unsplash.com/photo-1520869562399-e772f042f422?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnV0dXJlfGVufDB8fDB8fHww",
    category: "News",
    author: "Ahmed Hassan",
    date: "Feb 12, 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 4,
    title: "Compliance Made Easy: JEDEC Standards and Automated Testing",
    slug: "compliance-made-easy",
    excerpt: "How automation is helping manufacturers meet industry standards with less effort and greater accuracy.",
    coverImage: "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGxpYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Test Flow",
    author: "Ali Kamaly",
    date: "Mar 8, 2025",
    readTime: "4 min read",
    featured: false
  },
  {
    id: 5,
    title: "Optimizing Test Coverage with Machine Learning",
    slug: "optimizing-test-coverage",
    excerpt: "How ML algorithms can identify testing gaps and prioritize test cases for maximum efficiency.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
    category: "AI",
    author: "Ahmed Hassan",
    date: "Mar 25, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 6,
    title: "Reducing Time-to-Market: A Competitive Advantage",
    slug: "reducing-time-to-market",
    excerpt: "Why faster validation processes are becoming the key differentiator in today's competitive hardware market.",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzJTIwdGltZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "News",
    author: "Ali Kamaly",
    date: "Apr 5, 2025",
    readTime: "5 min read",
    featured: false
  }
];

// Categories for filter
const categories = [
  "All",
  "Semiconductors",
  "AI",
  "Test Flow",
  "Hardware Validation",
  "Instrument Automation",
  "News",
  "Infrastructure"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    trackPageSpecificEvent('blog_search', { query, results_count: filteredPosts.length })
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    trackPageSpecificEvent('blog_filter', { category, results_count: filteredPosts.length })
  }

  const handleBlogPostClick = (post: any) => {
    trackPageSpecificEvent('blog_post_click', {
      post_title: post.title,
      post_category: post.category,
      post_id: post.id
    })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackFormSubmission('newsletter', true, { page: 'blog' })
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Section Trackers */}
      <SectionTracker sectionId="featured" sectionName="Featured Blog Posts" />
      <SectionTracker sectionId="search-filter" sectionName="Blog Search and Filter" />
      <SectionTracker sectionId="articles" sectionName="Blog Articles Grid" />
      <SectionTracker sectionId="cta" sectionName="Blog CTA" />

      {/* Blog Content Container */}
      <div className="container mx-auto px-4 relative max-w-[1200px] w-full pb-20 pt-32 md:pt-40">
        {/* Featured Post like in the image */}
        {featuredPosts.length > 0 && (
          <div id="featured" className="mb-16">
            <div className="flex flex-col space-y-8">
              {featuredPosts.slice(0, 1).map((post) => (
                <div key={post.id} className="relative group overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-100" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
                  <div className="grid md:grid-cols-2 gap-0 relative z-10">
                    {/* Left side - Image */}
                    <div className="relative h-[300px] md:h-auto">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Right side - Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-between relative z-20">
                      <div>
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white backdrop-blur-md mb-4">
                          {post.category}
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                          {post.title}
                        </h2>
                        <p className="text-gray-400 mb-6">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-8">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mr-3 backdrop-blur-md">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-white">{post.author}</div>
                            <div className="text-xs text-gray-400 flex items-center gap-2">
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          onClick={() => handleBlogPostClick(post)}
                          className="group/btn inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-md"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter Bar */}
        <div id="search-filter" className="mb-10 py-5 border-y border-white/10 sticky top-16 z-10 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 pl-10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all font-light"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            </div>

            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${selectedCategory === category
                    ? "bg-blue-500/20 text-white border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="md:hidden flex w-full">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 w-full justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 text-white"
              >
                <span>{selectedCategory} Posts</span>
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile filters */}
          {showFilters && (
            <div className="md:hidden mt-4 grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    handleCategoryFilter(category);
                    setShowFilters(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all ${selectedCategory === category
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                    : "bg-white/5 text-gray-400 border border-transparent"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Articles Grid - Clean Artisan Style */}
        <div id="articles" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="group flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10">
              <Link
                href={`/blog/${post.slug}`}
                onClick={() => handleBlogPostClick(post)}
                className="block flex-grow"
              >
                <div className="relative aspect-[16/9] mb-5 overflow-hidden rounded-xl border border-white/5">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mb-3">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 backdrop-blur-sm group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors leading-tight">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">{post.excerpt}</p>
              </Link>
              <div className="flex justify-between items-center text-xs text-gray-500 mt-auto pt-4 border-t border-white/10">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-400">No articles found</h3>
            <p className="text-gray-500 mt-2">Try changing your search or filter criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 mb-20">
          <HomeCTA />
        </div>
      </div>

      {/* Footer */}
      <TestFlowFooter />
    </div>
  )
}