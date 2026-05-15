'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, ArrowRight, Cpu, Zap, Shield, Globe, Rocket, Target, TrendingUp, Factory, Server, Smartphone, Car, Building2, Lock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogPostLayout } from "@/components/blog-post-layout"

export default function BlogPost() {
    return (
        <BlogPostLayout>
            <SiteHeader />

            <div className="container mx-auto px-4 relative max-w-[900px] w-full pb-20 pt-20 md:pt-24">
                {/* Back to blog */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to blog
                </Link>

                {/* Article Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Ali Kamaly</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Jan 25, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>12 min read</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                        DHRUV64: India's First Indigenous 64-bit Microprocessor Marks Semiconductor Independence
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed">
                        India achieves a major milestone in semiconductor sovereignty with DHRUV64 (VEGA AS2161)—a fully indigenous 64-bit RISC-V microprocessor designed for 5G, automotive, IoT, and defense applications. Discover how hardware validation and chip testing enabled this breakthrough in Aatmanirbhar Bharat.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden bg-gray-900">
                    <Image
                        src="/blog/dhruv64-india-microprocessor.jpg"
                        alt="DHRUV64 - India's first indigenous 64-bit microprocessor by C-DAC with Indian flag, representing semiconductor independence and hardware testing milestone"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Article Content */}
                <div className="prose prose-invert max-w-none">

                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            In a landmark achievement for India's semiconductor industry, C-DAC (Centre for Development of Advanced Computing) has officially launched <strong>DHRUV64 (VEGA AS2161)</strong>—India's first fully indigenous 64-bit microprocessor. This isn't just another research chip; it's a production-ready processor that represents a quantum leap toward semiconductor sovereignty, built on open-source RISC-V architecture with zero licensing fees and complete design freedom.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            Developed under the Microprocessor Development Programme and the Digital India RISC-V (DIR-V) initiative, DHRUV64 underwent rigorous hardware validation, comprehensive chip testing, and extensive hardware job validation to ensure it meets real-world deployment standards. With India consuming approximately 20% of global microprocessors, this achievement marks a pivotal moment in the nation's journey toward Aatmanirbhar Bharat (self-reliant India).
                        </p>
                    </div>

                    {/* Technical Specifications */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Cpu className="w-8 h-8 text-blue-400" />
                            DHRUV64 Technical Specifications
                        </h2>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
                            <h3 className="text-xl font-semibold mb-6">Core Architecture & Performance</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                                        <Cpu className="w-6 h-6 text-blue-400 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-blue-400 mb-1">Architecture</h4>
                                            <p className="text-sm text-gray-300">64-bit dual-core with out-of-order execution</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-green-900/20 border border-green-800/30 rounded-lg">
                                        <Zap className="w-6 h-6 text-green-400 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-green-400 mb-1">Clock Speed</h4>
                                            <p className="text-sm text-gray-300">1.0 GHz operating frequency</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-purple-900/20 border border-purple-800/30 rounded-lg">
                                        <Factory className="w-6 h-6 text-purple-400 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-purple-400 mb-1">Process Node</h4>
                                            <p className="text-sm text-gray-300">28nm fabrication technology</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3 p-4 bg-orange-900/20 border border-orange-800/30 rounded-lg">
                                        <Globe className="w-6 h-6 text-orange-400 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-orange-400 mb-1">ISA Foundation</h4>
                                            <p className="text-sm text-gray-300">Open-source RISC-V (no royalties, no vendor lock-in)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-teal-900/20 border border-teal-800/30 rounded-lg">
                                        <Server className="w-6 h-6 text-teal-400 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-teal-400 mb-1">Execution Model</h4>
                                            <p className="text-sm text-gray-300">Superscalar with Linux boot support</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-pink-900/20 border border-pink-800/30 rounded-lg">
                                        <CheckCircle2 className="w-6 h-6 text-pink-400 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-pink-400 mb-1">Integration</h4>
                                            <p className="text-sm text-gray-300">External hardware integration ready</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4">Why RISC-V Matters for India</h3>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-blue-400 mb-2">$0</div>
                                    <p className="text-sm text-gray-300">Licensing fees (vs. ARM's per-chip royalties)</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                                    <p className="text-sm text-gray-300">Design freedom and customization</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-purple-400 mb-2">Open</div>
                                    <p className="text-sm text-gray-300">Source architecture with global community</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Hardware Validation & Testing */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Shield className="w-8 h-8 text-green-400" />
                            Hardware Validation & Chip Testing Journey
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Rigorous Hardware Job Validation Process</h3>
                                <p className="text-gray-300 mb-6">
                                    Developing an indigenous microprocessor required extensive hardware testing and chip validation to ensure production readiness. C-DAC's team conducted comprehensive hardware job validation across multiple stages:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-blue-400 mb-3">Pre-Silicon Validation</h4>
                                        <ul className="text-sm text-gray-300 space-y-2">
                                            <li>• RTL verification and functional testing</li>
                                            <li>• Formal verification of critical paths</li>
                                            <li>• Performance simulation and modeling</li>
                                            <li>• Power analysis and optimization</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-400 mb-3">Post-Silicon Testing</h4>
                                        <ul className="text-sm text-gray-300 space-y-2">
                                            <li>• Silicon bring-up and hardware validation</li>
                                            <li>• Chip testing across temperature ranges</li>
                                            <li>• Linux boot verification and OS compatibility</li>
                                            <li>• Real-world application benchmarking</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-800/30 rounded-xl p-6">
                                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Hardware Testing Milestones Achieved
                                </h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center p-4 bg-green-900/20 border border-green-800/30 rounded-lg">
                                        <div className="text-2xl font-bold text-green-400">✓</div>
                                        <div className="text-sm text-gray-300 mt-2">Successful Linux boot</div>
                                    </div>
                                    <div className="text-center p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                                        <div className="text-2xl font-bold text-blue-400">✓</div>
                                        <div className="text-sm text-gray-300 mt-2">Chip validation complete</div>
                                    </div>
                                    <div className="text-center p-4 bg-purple-900/20 border border-purple-800/30 rounded-lg">
                                        <div className="text-2xl font-bold text-purple-400">✓</div>
                                        <div className="text-sm text-gray-300 mt-2">Production-ready status</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Real-World Applications */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Rocket className="w-8 h-8 text-orange-400" />
                            Real-World Deployment Applications
                        </h2>

                        <p className="text-gray-300 mb-6">
                            DHRUV64 is designed for production deployment across critical infrastructure and emerging technology sectors:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <Server className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">5G Infrastructure</h3>
                                </div>
                                <p className="text-sm text-gray-300">
                                    Powering next-generation telecom networks with indigenous processors, reducing dependency on foreign chips in critical communication infrastructure.
                                </p>
                            </div>

                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                                        <Car className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Automotive Electronics</h3>
                                </div>
                                <p className="text-sm text-gray-300">
                                    Enabling smart vehicles and autonomous systems with reliable, tested microprocessors designed for automotive-grade requirements.
                                </p>
                            </div>

                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                                        <Factory className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Industrial Automation</h3>
                                </div>
                                <p className="text-sm text-gray-300">
                                    Supporting Industry 4.0 initiatives with processors optimized for industrial control systems and manufacturing automation.
                                </p>
                            </div>

                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">IoT & Consumer Devices</h3>
                                </div>
                                <p className="text-sm text-gray-300">
                                    Powering smart home devices, wearables, and IoT sensors with energy-efficient, cost-effective indigenous chips.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-800/30 rounded-xl p-6 md:col-span-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                                        <Lock className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Strategic & Defense Systems</h3>
                                </div>
                                <p className="text-sm text-gray-300">
                                    Ensuring national security with indigenous processors free from foreign backdoors, supply chain vulnerabilities, and geopolitical dependencies.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* India's Processor Roadmap */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <TrendingUp className="w-8 h-8 text-purple-400" />
                            India's Indigenous Processor Roadmap
                        </h2>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
                            <h3 className="text-xl font-semibold mb-6">Evolution of Indian Microprocessors</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                                        1
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-blue-400">SHAKTI</h4>
                                        <p className="text-sm text-gray-300">IIT Madras's RISC-V based processor family</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-green-900/20 border border-green-800/30 rounded-lg">
                                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center font-bold text-lg">
                                        2
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-green-400">AJIT</h4>
                                        <p className="text-sm text-gray-300">IIT Bombay's SPARC-based microprocessor</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-purple-900/20 border border-purple-800/30 rounded-lg">
                                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                                        3
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-purple-400">VIKRAM</h4>
                                        <p className="text-sm text-gray-300">C-DAC's earlier generation processor</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-orange-900/20 border border-orange-800/30 rounded-lg">
                                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
                                        4
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-orange-400">THEJAS</h4>
                                        <p className="text-sm text-gray-300">C-DAC's secure processor for defense applications</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-900/30 to-pink-900/30 border border-red-700/40 rounded-lg">
                                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-lg">
                                        5
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-red-300">DHRUV64 (VEGA AS2161)</h4>
                                        <p className="text-sm text-gray-300">India's first fully indigenous 64-bit microprocessor ⭐</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-yellow-800/30 rounded-lg">
                                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full flex items-center justify-center font-bold text-lg">
                                        →
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-yellow-400">Dhanush & Dhanush+</h4>
                                        <p className="text-sm text-gray-300">Next-generation processors in development</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4">The Path Forward</h3>
                            <p className="text-gray-300 text-sm">
                                DHRUV64 represents a critical stepping stone in India's semiconductor journey. With Dhanush and Dhanush+ processors in the pipeline, India is building a comprehensive ecosystem of indigenous chips that will power everything from consumer electronics to national defense systems.
                            </p>
                        </div>
                    </section>

                    {/* Strategic Importance */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Target className="w-8 h-8 text-red-400" />
                            Strategic Importance: Aatmanirbhar Bharat
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Why Semiconductor Sovereignty Matters</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-red-400 mb-3">Current Challenges</h4>
                                        <ul className="text-sm text-gray-300 space-y-2">
                                            <li>• India consumes ~20% of global microprocessors</li>
                                            <li>• 100% import dependency for advanced chips</li>
                                            <li>• Vulnerable to supply chain disruptions</li>
                                            <li>• Geopolitical risks and technology embargoes</li>
                                            <li>• Security concerns with foreign chips</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-400 mb-3">DHRUV64 Solutions</h4>
                                        <ul className="text-sm text-gray-300 space-y-2">
                                            <li>• Indigenous design and development</li>
                                            <li>• Zero licensing fees with RISC-V</li>
                                            <li>• Complete supply chain control</li>
                                            <li>• Enhanced national security</li>
                                            <li>• Technology transfer and skill development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-800/30 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Economic Impact</h3>
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-3xl font-bold text-orange-400 mb-2">$63B</div>
                                        <p className="text-sm text-gray-300">India's semiconductor market by 2026</p>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-red-400 mb-2">20%</div>
                                        <p className="text-sm text-gray-300">Global microprocessor consumption</p>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-yellow-400 mb-2">100K+</div>
                                        <p className="text-sm text-gray-300">Jobs in semiconductor ecosystem</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Hardware Testing & Validation Role */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Shield className="w-8 h-8 text-blue-400" />
                            The Critical Role of Hardware Testing in Semiconductor Independence
                        </h2>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
                            <h3 className="text-xl font-semibold mb-4">Why Hardware Job Validation is Essential</h3>
                            <p className="text-gray-300 mb-6">
                                Developing an indigenous microprocessor isn't just about chip design—it requires world-class hardware validation capabilities, comprehensive chip testing infrastructure, and rigorous hardware job validation processes. India's success with DHRUV64 demonstrates the maturity of its hardware testing ecosystem.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                                    <h4 className="font-semibold text-blue-400 mb-3">Testing Infrastructure Built</h4>
                                    <ul className="text-sm text-gray-300 space-y-2">
                                        <li>• Advanced hardware validation labs</li>
                                        <li>• Automated chip testing platforms</li>
                                        <li>• Real-time debugging capabilities</li>
                                        <li>• Performance benchmarking suites</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-green-900/20 border border-green-800/30 rounded-lg">
                                    <h4 className="font-semibold text-green-400 mb-3">Validation Expertise Developed</h4>
                                    <ul className="text-sm text-gray-300 space-y-2">
                                        <li>• Skilled hardware testing engineers</li>
                                        <li>• Indigenous validation methodologies</li>
                                        <li>• Chip testing best practices</li>
                                        <li>• Quality assurance frameworks</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-900/20 to-green-900/20 border border-blue-800/30 rounded-xl p-6">
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                Future of Hardware Testing in India
                            </h3>
                            <p className="text-gray-300 text-sm mb-4">
                                As India scales its semiconductor ambitions with Dhanush and future processors, advanced hardware testing platforms and AI-powered chip validation tools will become critical. The hardware job validation expertise developed through DHRUV64 will accelerate future chip development cycles and reduce time-to-market for indigenous processors.
                            </p>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Semiconductor Sovereignty: From Vision to Reality</h2>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                DHRUV64 represents more than just a technological achievement—it's a statement of intent. India is no longer content to be merely a consumer of semiconductors; it's becoming a designer and manufacturer of cutting-edge chips that power critical infrastructure.
                            </p>
                            <p>
                                The success of DHRUV64 validates India's investment in indigenous chip design, hardware validation infrastructure, and chip testing capabilities. From rigorous hardware job validation to comprehensive post-silicon testing, every stage of development showcased India's growing semiconductor expertise.
                            </p>
                            <p>
                                With RISC-V as the foundation, India has chosen an architecture that offers complete freedom, zero licensing costs, and global collaboration opportunities. As the nation moves forward with Dhanush, Dhanush+, and future processor generations, the hardware testing and chip validation ecosystem built around DHRUV64 will serve as the backbone of India's semiconductor independence.
                            </p>
                            <p className="font-semibold text-white">
                                Semiconductor sovereignty is no longer a vision—it's becoming reality, one chip at a time.
                            </p>
                        </div>
                    </section>

                    {/* CTA Section */}
                </div>
            </div>
        </BlogPostLayout>
    )
}
