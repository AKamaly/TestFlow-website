'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, Factory, Zap, Microscope, Layout, Cpu, Box, TestTube, Lightbulb, ArrowRight, Settings, Workflow } from 'lucide-react'
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
                    <div className="text-purple-500 text-sm font-medium mb-4">
                        Manufacturing & Technology
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        How Chips are Made: The Most Complex Process on Earth
                    </h1>

                    {/* Article Meta */}
                    <div className="flex items-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                            </div>
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
                </div>

                {/* Featured Image */}
                <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <Image
                        src="/images/how-chips-are-made-development-cycle.jpg"
                        alt="The complete development cycle and manufacturing process of a semiconductor chip"
                        fill
                        className="object-contain p-4"
                    />
                </div>

                {/* Article Content */}
                <article className="prose prose-invert max-w-none">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                        <p className="text-xl text-gray-300 mb-6 font-light leading-relaxed">
                            Most people think chips are designed. They’re not just designed—they’re manufactured through one of the most complex and unforgiving processes ever built. Turning standard sand into a trillion-transistor processor requires hundreds of precise steps at the atomic level.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                <span>Starts with pure silicon from sand</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                <span>Nanometer-scale precision printing</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                <span>Hundreds of chemical & physical steps</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                                <span>Testing is the final, most critical gate</span>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4">The Journey from Sand to Silicon</h2>
                    <p>
                        The semiconductor industry doesn't move fast; it moves precisely. Every chip starts with silicon extracted from sand. This raw material undergoes a transformation through a series of stages that challenge the very laws of physics.
                    </p>

                    <div className="my-12 space-y-12">
                        {/* Step 1: Preparation */}
                        <div className="relative pl-8 md:pl-12 border-l-2 border-blue-500/30">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-black" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <Layout className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-0">1. Wafer Preparation (Oxidation)</h3>
                            </div>
                            <p className="text-gray-300">
                                The process begins with a pure silicon wafer. A thin oxide layer is grown on the surface to serve as an insulator. This layer is critical for defining the different regions of the chip where electricity will and will not flow.
                            </p>
                        </div>

                        {/* Step 2: Lithography */}
                        <div className="relative pl-8 md:pl-12 border-l-2 border-purple-500/30">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-purple-500 border-4 border-black" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                                    <Zap className="w-5 h-5 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-0">2. Photolithography</h3>
                            </div>
                            <p className="text-gray-300">
                                This is where the design comes to life. Using ultra-violet light, engineers "print" extremely small patterns onto the wafer. These patterns define the intricate pathways where billions of transistors will eventually sit. At advanced nodes, this requires EUV (Extreme Ultraviolet) lithography machines that are the most complex machines on earth.
                            </p>
                        </div>

                        {/* Step 3: Etching */}
                        <div className="relative pl-8 md:pl-12 border-l-2 border-green-500/30">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-green-500 border-4 border-black" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
                                    <Microscope className="w-5 h-5 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-0">3. Etching & Implantation</h3>
                            </div>
                            <p className="text-gray-300">
                                After the pattern is printed, unwanted material is etched away with chemical precision. Following this, ions are implanted into the silicon—a process that changes its electrical properties to create the switches we know as transistors. Small variations in this step can destroy the entire wafer's yield.
                            </p>
                        </div>

                        {/* Step 4: Metallization */}
                        <div className="relative pl-8 md:pl-12 border-l-2 border-orange-500/30">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-orange-500 border-4 border-black" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                                    <Cpu className="w-5 h-5 text-orange-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-0">4. Metallization & Polishing</h3>
                            </div>
                            <p className="text-gray-300">
                                Transistors are useless unless they are connected. Dozens of metal layers are added, creating a 3D highway of connections for electrons. Between each layer, the wafer is polished perfectly flat so the next layer can be built on top without distortion.
                            </p>
                        </div>

                        {/* Step 5: Packaging */}
                        <div className="relative pl-8 md:pl-12 border-l-2 border-cyan-500/30">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-cyan-500 border-4 border-black" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                                    <Box className="w-5 h-5 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-0">5. Dicing & Packaging</h3>
                            </div>
                            <p className="text-gray-300">
                                Once the wafer is complete, it is cut (diced) into individual dies. Each functional die is then attached to a substrate, wire-bonded, and encapsulated in a protective package to survive real-world conditions like heat, pressure, and electrical interference.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-1 rounded-2xl border border-white/10 my-16 shadow-2xl">
                        <div className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/40">
                                    <TestTube className="w-6 h-6 text-purple-400" />
                                </div>
                                <h2 className="text-2xl font-bold m-0 border-none">The Underrated Gate: Testing</h2>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                And then comes the step many people underestimate: <strong className="text-white">Testing</strong>. Every single chip is tested for defects, performance limits, and logical accuracy. At advanced nodes, testing isn't just a final check—it's a massive data-driven operation.
                            </p>
                            <p className="text-gray-300 mb-8">
                                Testing often determines whether a product ships on time or slips by months. It is the bridge between a manufactured hunk of silicon and a functioning product.
                            </p>
                            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Why it causes "Trouble"</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• High-NA EUV complexity requires deeper validation</li>
                                    <li>• 3D Packaging makes internal nodes harder to reach</li>
                                    <li>• Yield analysis requires real-time feedback to the fab</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4">The Future of Precision</h2>
                    <p>
                        Semiconductors don't move fast at any one stage—they move precisely through all stages. The complexity of this cycle is why the industry is so capital-intensive. As we move towards sub-2nm nodes, the manufacturing process becomes even more unforgiving, making the role of hardware validation and chip testing exponentially more important.
                    </p>

                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-8">
                        "Which step in this process do you think causes the most trouble in practice? For most, the answer lies where design meets physical reality—in the validation lab."
                    </blockquote>

                </article>
            </div>
        </BlogPostLayout>
    )
}
