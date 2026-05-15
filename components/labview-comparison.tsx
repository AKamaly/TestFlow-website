"use client";

import React from "react";
import { Check, X, Minus } from "lucide-react";

export function LabViewComparison() {
    return (
        <section className="py-24 bg-black border-t border-white/10">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        TestFlow vs LabVIEW
                    </h2>
                    <p className="text-xl text-gray-400">
                        See how TestFlow redesigns the validation experience for modern hardware teams.
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-sm">
                    <div className="grid grid-cols-3 p-6 border-b border-white/10 bg-white/5">
                        <div className="col-span-1 text-lg font-semibold text-gray-400">Feature</div>
                        <div className="col-span-1 text-xl font-bold text-center text-gray-400">LabVIEW</div>
                        <div className="col-span-1 text-xl font-bold text-center text-white">TestFlow</div>
                    </div>

                    <div className="divide-y divide-white/5">
                        <Row
                            feature="Learning Curve"
                            labview="Steep (Graphical Programming)"
                            testflow="Intuitive (No-Code + Python)"
                            testflowHighlight
                        />
                        <Row
                            feature="Automation Reuse"
                            labview="Difficult to share binaries/VIs"
                            testflow="Native cloud sharing & versioning"
                            testflowHighlight
                        />
                        <Row
                            feature="Collaboration"
                            labview="Single-user, local files"
                            testflow="Real-time multi-user"
                            testflowHighlight
                        />
                        <Row
                            feature="Reporting"
                            labview="Manual export to Excel"
                            testflow="Auto-generated, live dashboards"
                            testflowHighlight
                        />
                        <Row
                            feature="Deployment"
                            labview="Complex runtimes & drivers"
                            testflow="Instant web-based access"
                            testflowHighlight
                        />
                        <Row
                            feature="Maintenance"
                            labview="High overhead (broken links)"
                            testflow="Zero maintenance (SaaS)"
                            testflowHighlight
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Row({ feature, labview, testflow, testflowHighlight = false }: { feature: string, labview: string, testflow: string, testflowHighlight?: boolean }) {
    return (
        <div className="grid grid-cols-3 p-6 items-center hover:bg-white/5 transition-colors">
            <div className="col-span-1 font-medium text-gray-300">{feature}</div>
            <div className="col-span-1 text-center text-gray-400 text-sm md:text-base">{labview}</div>
            <div className={`col-span-1 text-center font-semibold text-sm md:text-base ${testflowHighlight ? "text-purple-400" : "text-white"}`}>
                {testflow}
            </div>
        </div>
    );
}
