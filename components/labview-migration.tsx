"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, FileCode, Play } from "lucide-react";

export function LabViewMigration() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        How migration works
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We map your existing test intent directly to TestFlow workflows, bypassing the complexity of legacy code.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-20 right-20 h-0.5 bg-gradient-to-r from-gray-800 via-purple-500/50 to-gray-800 -translate-y-1/2 z-0" />

                    <Step
                        title="Test Intent"
                        description="Define what you need to measure (Voltage, Current, Frequency)."
                        icon={Brain}
                        step={1}
                    />

                    <Step
                        title="Workflow"
                        description="Drag & drop standard blocks or use AI to generate the sequence."
                        icon={FileCode}
                        step={2}
                    />

                    <Step
                        title="Execution"
                        description="Run on hardware immediately with built-in instrument drivers."
                        icon={Play}
                        step={3}
                    />
                </div>
            </div>
        </section>
    );
}

function Step({ title, description, icon: Icon, step }: { title: string, description: string, icon: any, step: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: step * 0.2 }}
            className="relative z-10 flex flex-col items-center text-center max-w-xs p-6 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl md:min-h-[220px]"
        >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-white/10 flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg shadow-purple-500/5">
                <Icon className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
