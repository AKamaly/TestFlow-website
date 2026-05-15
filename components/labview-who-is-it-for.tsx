'use client'

import React from 'react'
import { FeatureCard } from '@/components/ui/feature-card'
import { Microscope, Users, CircuitBoard } from 'lucide-react'
import { motion } from 'framer-motion'

export function LabViewWhoIsItFor() {
    const features = [
        {
            title: "Validation Engineers",
            icon: Microscope,
            description: "Automate complex measurements, control instruments remotely, and generate compliance reports in seconds."
        },
        {
            title: "Lab Teams",
            icon: Users, // Using Users as a proxy for teams
            description: "Collaborate on test flows, share instrument access, and standardize validation procedures across the lab."
        },
        {
            title: "Post-Silicon / System Validation",
            icon: CircuitBoard,
            description: "Accelerate bring-up and characterization with reusable automation that scales from one board to mass production."
        }
    ]

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Who TestFlow is for
                    </h2>
                    <p className="text-xl text-gray-400">
                        Built for the teams driving hardware innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <FeatureCard
                                feature={feature}
                                className="h-full bg-white/5 border-white/10 hover:border-purple-500/50 transition-colors duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
