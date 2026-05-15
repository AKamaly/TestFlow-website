"use client";

import {
    Clock,
    Repeat,
    Scaling,
    FileText,
} from "lucide-react";
import { FeatureCard } from "@/components/ui/grid-feature-card";

export function LabViewPainPoints() {
    const features = [
        {
            title: "Setup Time",
            description: "Spending weeks setting up environments, drivers, and dependencies instead of testing.",
            icon: Clock,
        },
        {
            title: "Code Reuse",
            description: "Difficult to share or reuse code across different test benches or teams.",
            icon: Repeat,
        },
        {
            title: "Scaling",
            description: "Performance bottlenecks when tests become complex or data volume grows.",
            icon: Scaling,
        },
        {
            title: "Reporting",
            description: "Manual data extraction and report generation slows down decision making.",
            icon: FileText,
        },
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                        Why teams move away from LabVIEW
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto gap-4">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            feature={feature}
                            className="bg-zinc-900/20 border-white/10 rounded-2xl"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
