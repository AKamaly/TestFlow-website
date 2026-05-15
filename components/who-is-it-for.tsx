'use client'

import React from 'react'
import { FeatureCard } from '@/components/ui/feature-card'
import { Activity, Users, Rocket, BarChart3, ShieldCheck, Microscope } from 'lucide-react'
import { motion } from 'framer-motion'

export function WhoIsItFor() {
    const features = [
        {
            title: "Validation Engineers",
            icon: Microscope,
            description: "Automate complex measurements, control instruments remotely, and generate compliance reports in seconds. Focus on testing, not setup."
        },
        {
            title: "QA Managers",
            icon: Activity,
            description: "Gain real-time visibility into lab performance. Track test coverage, identify bottlenecks, and ensure standard procedures across all product lines."
        },
        {
            title: "Hardware Startups",
            icon: Rocket,
            description: "Launch faster with a scalable testing platform. Validate prototypes quickly without investing in expensive, custom-built test infrastructure."
        },
        {
            title: "Enterprise Teams",
            icon: Users,
            description: "Standardize validation workflows across global engineering teams. Share test data securely and collaborate on result analysis in real-time."
        },
        {
            title: "Compliance Officers",
            icon: ShieldCheck,
            description: "Ensure complete traceability of all test results. Maintains detailed audit logs and automatically verifies testing against regulatory standards."
        },
        {
            title: "Data Analysts",
            icon: BarChart3,
            description: "Transform raw test data into actionable insights. visualize trends, detect anomalies, and predict failures before they happen."
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
                        Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hardware Modern Stack</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Whether you're debugging prototypes or managing mass production, TestFlow accelerates your entire validation lifecycle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
