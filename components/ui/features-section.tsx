
import { Cpu, Lock, Sparkles, Zap, Workflow, Database, Target, Users } from 'lucide-react'

export function FeaturesSection() {
    return (
        <section className="py-16 md:py-32 bg-black text-white">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">TestFlow unifies lab automation into one system.</h2>
                    <p className="max-w-sm sm:ml-auto text-gray-400">
                        TestFlow connects to lab instruments and turns test knowledge into structured, reusable test flows.
                    </p>
                </div>
                <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
                    <div className="aspect-[88/36] relative bg-neutral-900 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        {/* Abstract Representation of Platform since we don't have a screenshot */}
                        <div className="text-center z-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
                                <Workflow className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-medium text-gray-200">Workflow Engine</span>
                            </div>
                            <p className="text-gray-500 text-sm">Visual automation builder spanning instruments</p>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4 text-purple-400" />
                            <h3 className="text-sm font-medium">Instrument Control</h3>
                        </div>
                        <p className="text-gray-400 text-sm">Automate instrument control with AI-generated drivers.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Workflow className="size-4 text-purple-400" />
                            <h3 className="text-sm font-medium">Repeatable</h3>
                        </div>
                        <p className="text-gray-400 text-sm">Run repeatable workflows across revisions.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Database className="size-4 text-purple-400" />
                            <h3 className="text-sm font-medium">Traceability</h3>
                        </div>
                        <p className="text-gray-400 text-sm">Auto-log data with full traceability and integrity.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Target className="size-4 text-purple-400" />
                            <h3 className="text-sm font-medium">Reporting</h3>
                        </div>
                        <p className="text-gray-400 text-sm">Generate review-ready reports instantly.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
