'use client';

import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { Globe } from "@/components/ui/globe"
import { trackButtonClick } from '@/components/analytics-tracker'

export function HomeCTA() {
    return (
        <section className="relative w-full mx-auto overflow-hidden rounded-3xl bg-muted border border-gray-200 dark:border-gray-800 shadow-md px-6 py-16 md:px-16 md:py-24 my-16 max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                <div className="z-10 max-w-xl text-left">
                    <h2 className="text-3xl font-normal text-gray-900 dark:text-white">
                        Ready to transform your{" "}
                        <span className="text-primary">validation process?</span>{" "}
                        <span className="text-gray-500 dark:text-gray-400">
                            Join leading companies who trust TestFlow to validate their products faster and more efficiently.
                        </span>
                    </h2>
                    <Link
                        href="/contact"
                        onClick={() => trackButtonClick('Get Started', 'Final CTA', { page: 'home' })}
                    >
                        <RainbowButton className="mt-6 h-12 px-8 rounded-full">
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </RainbowButton>
                    </Link>
                </div>
                <div className="relative h-[180px] w-full max-w-xl">
                    <Globe className="absolute -bottom-20 -right-10 md:-right-40 scale-100 md:scale-150" />
                </div>
            </div>
        </section>
    )
}
