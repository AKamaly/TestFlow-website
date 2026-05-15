"use client";

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

export function PricingCards() {
    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto px-4">
                <div className="flex text-center justify-center items-center gap-4 flex-col">
                    <div className="inline-block rounded-full px-5 py-2 text-xs font-medium tracking-[0.2em] uppercase border border-white/10 backdrop-blur-sm mb-6 text-muted-foreground">Pricing</div>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-5xl tracking-tighter text-center font-regular text-white whitespace-normal md:whitespace-nowrap">
                            Flexible Plans for Hardware Validation
                        </h2>
                        <p className="text-lg leading-relaxed tracking-tight text-gray-400 max-w-xl text-center mx-auto">
                            Scale your chip verification from benchtop debugging to high-volume production testing.
                        </p>
                    </div>
                    <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">

                        {/* STARTUP */}
                        <Card className="w-full rounded-xl bg-black/40 backdrop-blur-xl border-white/10 text-white hover:border-white/20 transition-all duration-300">
                            <CardHeader>
                                <CardTitle>
                                    <span className="flex flex-row gap-4 items-center font-normal">
                                        Startup
                                    </span>
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    Essential tools for early-stage hardware teams to automate bench testing.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-8 justify-start">
                                    <p className="flex flex-row items-center gap-2 text-xl font-bold">
                                        Custom Quote
                                    </p>
                                    <div className="flex flex-col gap-4 justify-start text-gray-300">
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>AI-Powered Test Generation</p>
                                                <p className="text-gray-500 text-sm">Automatic test creation from specs</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Visual Workflow Builder</p>
                                                <p className="text-gray-500 text-sm">No-code test sequencing</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Basic Instrument Control</p>
                                                <p className="text-gray-500 text-sm">Connect scopes, supplies & meters</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Local Data Logging</p>
                                                <p className="text-gray-500 text-sm">Save CSV/HDF5 locally</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Standard Templates</p>
                                                <p className="text-gray-500 text-sm">Pre-built validation workflows</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Email Support</p>
                                                <p className="text-gray-500 text-sm">Response within 48 hours</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/contact" className="w-full">
                                        <RainbowButton className="h-12 px-8 rounded-full w-full">
                                            Request a Quote
                                        </RainbowButton>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        {/* GROWTH */}
                        <Card className="w-full rounded-xl bg-black/40 backdrop-blur-xl border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] text-white hover:border-white/40 transition-all duration-300">
                            <CardHeader>
                                <CardTitle>
                                    <span className="flex flex-row gap-4 items-center font-normal text-white">
                                        Growth
                                    </span>
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    Advanced features for scaling teams requiring cloud sync and analytics.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-8 justify-start">
                                    <p className="flex flex-row items-center gap-2 text-xl font-bold">
                                        Custom Quote
                                    </p>
                                    <div className="flex flex-col gap-4 justify-start text-gray-300">
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>AI-Powered Test Generation</p>
                                                <p className="text-gray-500 text-sm">Automatic test creation from specs</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Schematic Redesigning</p>
                                                <p className="text-gray-500 text-sm">AI-assisted schematic analysis</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Unlimited Instruments</p>
                                                <p className="text-gray-500 text-sm">Support for PXI/LXI racks</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Cloud Analytics Dashboard</p>
                                                <p className="text-gray-500 text-sm">Centralized results & insights</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Remote Instrument Control</p>
                                                <p className="text-gray-500 text-sm">Run tests from anywhere</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Team Collaboration</p>
                                                <p className="text-gray-500 text-sm">Shared libraries & versioning</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Priority Support</p>
                                                <p className="text-gray-500 text-sm">Response within 24 hours</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/contact" className="w-full">
                                        <RainbowButton className="h-12 px-8 rounded-full w-full">
                                            Request a Quote
                                        </RainbowButton>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        {/* ENTERPRISE */}
                        <Card className="w-full rounded-xl bg-black/40 backdrop-blur-xl border-white/10 text-white hover:border-white/20 transition-all duration-300">
                            <CardHeader>
                                <CardTitle>
                                    <span className="flex flex-row gap-4 items-center font-normal">
                                        Enterprise
                                    </span>
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    Custom solutions for large organizations with unmatched security needs.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-8 justify-start">
                                    <p className="flex flex-row items-center gap-2 text-xl font-bold">
                                        Custom Quote
                                    </p>
                                    <div className="flex flex-col gap-4 justify-start text-gray-300">
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Everything in Growth</p>
                                                <p className="text-gray-500 text-sm">All features included</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>On-Premise Deployment</p>
                                                <p className="text-gray-500 text-sm">Full data sovereignty</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Custom Integrations</p>
                                                <p className="text-gray-500 text-sm">ERP/MES/PLM connectivity</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Advanced Analytics & Reporting</p>
                                                <p className="text-gray-500 text-sm">Custom dashboards & exports</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>SSO & Role-Based Access</p>
                                                <p className="text-gray-500 text-sm">Enterprise security controls</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                                            <div className="flex flex-col">
                                                <p>Dedicated Support & Training</p>
                                                <p className="text-gray-500 text-sm">24/7 SLA & onboarding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/contact" className="w-full">
                                        <RainbowButton className="h-12 px-8 rounded-full w-full">
                                            Request a Quote
                                        </RainbowButton>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    );
}
