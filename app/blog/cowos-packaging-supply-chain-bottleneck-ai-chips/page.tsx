'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, ArrowRight, Layers, Box, AlertTriangle, Factory, Globe, Database, CheckCircle2 } from 'lucide-react'
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
                            <span>11 min read</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                        The Hidden AI Bottleneck: Why CoWoS Packaging Supply Chain is the Real Constraint
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed">
                        Everyone looks at silicon yield, but the real bottleneck for AI chips is hidden in the packaging layer. Discover why CoWoS materials—sourced 90% from Japan—are becoming the industry's critical choke point, and why packaging verification is now a strategic battleground.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden bg-white">
                    <Image
                        src="/blog/cowos-packaging-supply-chain-materials.jpg"
                        alt="Chip-on-Wafer-on-Substrate (CoWoS) Materials Overview showing key suppliers including Dow, Dupont, Resonac, and others"
                        fill
                        className="object-contain p-4"
                    />
                </div>

                {/* Article Content */}
                <div className="prose prose-invert max-w-none">

                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Everyone is obsessed with AI chips—NVIDIA H100s, Blackwells, customs silicon from hyperscalers. But the real constraint holding back the AI revolution isn't the silicon die itself. It's the packaging.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            <strong>Chip-on-Wafer-on-Substrate (CoWoS)</strong> has quietly become one of the most critical choke points in the entire semiconductor stack. It's not just about stacking dies; it's about securing a complex, fragile ecosystem of advanced materials that makes that stacking possible. For teams in <strong>hardware validation</strong> and <strong>packaging verification</strong>, this supply chain fragility introduces massive new risks.
                        </p>
                    </div>

                    {/* The Hidden Material Stack */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Layers className="w-8 h-8 text-blue-400" />
                            Anatomy of a Bottlebeck
                        </h2>

                        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 mb-8">
                            <p className="text-lg text-gray-300 mb-6">
                                A CoWoS package isn't just "glued" together. It relies on a precise symphony of advanced materials, each with its own supply chain constraints:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-purple-500/20 p-2 rounded-lg">
                                        <Database className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Redistribution Layers (RDL)</h4>
                                        <p className="text-sm text-gray-400">Critical for signal routing; relies on high-purity photosensitive polyimides (PSPI).</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-red-500/20 p-2 rounded-lg">
                                        <AlertTriangle className="w-5 h-5 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Underfill & TIMs</h4>
                                        <p className="text-sm text-gray-400">Thermal Interface Materials and underfills prevent the chip from cooking itself or cracking under stress.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-green-500/20 p-2 rounded-lg">
                                        <Box className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Advanced Substrates</h4>
                                        <p className="text-sm text-gray-400">The ABF (Ajinomoto Build-up Film) substrate shortage of 2021 is a warning of what can happen here.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-orange-500/20 p-2 rounded-lg">
                                        <Factory className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Solder Balls & Bumps</h4>
                                        <p className="text-sm text-gray-400">Microbumps connecting dies are shrinking to microns, demanding atomic-level purity.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* The Geopolitical & Scale Risk */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Globe className="w-8 h-8 text-green-400" />
                            The 90% Factor: Japanese Dominance
                        </h2>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
                            <p className="text-lg text-gray-300 mb-4">
                                Here’s the part most people underestimate: <strong>More than 90% of backend materials used in CoWoS come from Japanese suppliers.</strong>
                            </p>
                            <p className="text-sm text-gray-400 mb-4">
                                Companies like Resonac, Ajinomoto, Shin-Etsu, and JSR hold near-monopolies on key chemical formulations. This dominance worked when volumes were steady. But with AI driving aggressive CoWoS ramps, these specialized suppliers are struggling to scale production fast enough.
                            </p>
                            <div className="flex items-center gap-2 text-yellow-500 font-semibold text-sm">
                                <AlertTriangle className="w-4 h-4" />
                                <span>Result: Early material shortages are already hitting the OSAT ecosystem.</span>
                            </div>
                        </div>
                    </section>

                    {/* Impact on Validation */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-purple-400" />
                            The Validation Scramble: Qualifying Second Sources
                        </h2>

                        <p className="text-gray-300 mb-6">
                            When a primary material runs short, OSATs (Outsourced Semiconductor Assembly and Test) providers race to qualify second sources. This is a nightmare for <strong>packaging validation</strong>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-blue-400 mb-3">Re-Qualification Hell</h3>
                                <p className="text-sm text-gray-300">
                                    Changing a single underfill material requires months of <strong>reliability testing</strong>—thermal cycling, stress testing, and electromigration validation to ensure the new material doesn't cause field failures.
                                </p>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-green-400 mb-3">Material Interactions</h3>
                                <p className="text-sm text-gray-300">
                                    A new TIM might react differently with the heat spreader or the silicon die. <strong>Hardware validation</strong> teams must verify that chemical interactions won't lead to delamination over time.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Strategic Shift */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8">Advanced Packaging is the New Battleground</h2>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                The shift is subtle, but unmistakable: Advanced packaging is no longer just a supporting function of the semiconductor industry. It is becoming the competitive battleground. CoWoS isn't just about stacking dies; it's about securing the entire materials ecosystem behind them.
                            </p>
                            <p>
                                We still talk about nodes and silicon, but leverage is quietly moving downstream. The companies that can secure their supply of ABF substrates, specialized underfills, and high-purity solder are the ones who will actually ship chips in 2026.
                            </p>
                        </div>
                    </section>

                    {/* CTA Section */}
                </div>
            </div>
        </BlogPostLayout>
    )
}
