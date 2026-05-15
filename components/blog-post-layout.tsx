'use client'

import { HomeCTA } from '@/components/home-cta'
import { TestFlowFooter } from "@/components/test-flow-footer"

export function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-x-clip">
            {/* Background Gradients from Home Page */}
            <div
                aria-hidden
                className="z-[0] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* CTA Section */}
            <div className="relative z-10 mt-20 mb-20 px-4">
                <div className="container mx-auto max-w-[1200px]">
                    <HomeCTA />
                </div>
            </div>

            {/* Footer */}
            <TestFlowFooter />
        </div>
    )
}
