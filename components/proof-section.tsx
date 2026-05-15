import Link from "next/link"
import { ArrowRight, Check, X, Quote } from "lucide-react"

export function ProofSection() {
    return (
        <section className="py-24 bg-zinc-900/50 text-white relative border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        See What ‘Reusable Testing’ Looks Like
                    </h2>
                </div>

                {/* Comparison Block */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                    {/* Before Column */}
                    <div className="p-8 rounded-2xl bg-black/50 border border-white/5 text-gray-400">
                        <h3 className="font-semibold text-lg text-gray-500 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500/50" />
                            Before TestFlow
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Manual setup every run",
                                "Scripts scattered across folders",
                                "Inconsistent logs and outputs",
                                "Last-minute reporting before reviews"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm">
                                    <X className="w-4 h-4 text-red-500/50 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* After Column */}
                    <div className="p-8 rounded-2xl bg-black border border-purple-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
                        <h3 className="font-semibold text-lg text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            With TestFlow
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Reusable flow runs reliably",
                                "Instrument automation inside the workflow",
                                "Structured logs every run",
                                "Shareable, review-ready outputs"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-200">
                                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Screenshots */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Screenshot A */}
                    <div className="group">
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black/80 shadow-2xl transition-transform hover:scale-[1.02]">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-xs">
                                {/* Placeholder for "Workflow Builder" screenshot */}
                                [Screenshot: Workflow Builder]
                            </div>
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                            Workflow Builder — reusable test flow
                        </p>
                    </div>

                    {/* Screenshot B */}
                    <div className="group">
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black/80 shadow-2xl transition-transform hover:scale-[1.02]">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-xs">
                                {/* Placeholder for "Report Output" screenshot */}
                                [Screenshot: Report Output]
                            </div>
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                            Report Output — clean, consistent results
                        </p>
                    </div>
                </div>

                {/* Small Note */}
                <p className="text-center text-xs text-gray-600 mb-16">
                    Screens shown are examples; demo confirms your instrument models and workflow.
                </p>

                {/* Testimonial Quote */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <Quote className="w-8 h-8 text-purple-500/30 mx-auto mb-6" />
                    <blockquote className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed mb-6">
                        “We standardized our most common test sequence and cut setup time dramatically.”
                    </blockquote>
                    <cite className="text-sm text-gray-500 not-italic block">
                        — Validation Engineer (anonymous)
                    </cite>
                </div>

                <div className="text-center">
                    <Link
                        href="/request-demo"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                        Want to see this on your setup? Book a 15-minute demo
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    )
}
