'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, Globe, FileText, Box, ShieldCheck, Mail, Users, Building2, Rocket, Book, PlayCircle, ArrowRightLeft } from 'lucide-react';
import Link from 'next/link';
import { trackEvent } from '@/components/analytics-tracker';

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
    badge?: string;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: 'Company',
        links: [
            { title: 'About Us', href: '/about', icon: Users },
            { title: 'Newsroom', href: '/blog', icon: FileText },
            { title: 'TestFlow Labs', href: '#', icon: Rocket, badge: 'Soon' },
        ],
    },
    {
        label: 'Learn',
        links: [
            { title: 'Help Center', href: '/help-center', icon: Book },
            { title: 'Documentation', href: '#', icon: FileText, badge: 'Soon' },
            { title: 'Demos', href: '#', icon: PlayCircle, badge: 'Soon' },
        ],
    },
    {
        label: 'Discover',
        links: [
            { title: 'Blog', href: '/blog', icon: FileText },
            { title: 'Case Studies', href: '#', icon: Book, badge: 'Soon' },
            { title: 'Changelog', href: '#', icon: FileText, badge: 'Soon' },
        ],
    },
    {
        label: 'Connect',
        links: [
            { title: 'LinkedIn', href: 'https://linkedin.com/company/atomstestflow', icon: LinkedinIcon },
            { title: 'YouTube', href: 'https://www.youtube.com/@TestFlowAI', icon: YoutubeIcon },
        ],
    },
];

export function TestFlowFooter() {
    return (
        <footer className="md:rounded-t-3xl relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-2xl border-t border-white/10 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)] px-6 py-12 lg:py-16 text-white overflow-hidden">
            <div className="bg-white/10 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[2px]" />

            <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
                <AnimatedContainer className="space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tight">TestFlow</span>
                    </div>
                    <p className="text-gray-400 mt-4 text-sm max-w-xs">
                        AI-powered hardware testing platform that transforms lab validation workflows with intelligent automation.
                    </p>
                    <p className="text-gray-500 text-xs mt-8">
                        © 2026 Test Flow Technologies Inc. All rights reserved.
                    </p>
                </AnimatedContainer>

                <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
                    {footerLinks.map((section, index) => (
                        <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                            <div className="mb-10 md:mb-0">
                                <h3 className="text-sm font-semibold text-gray-200 mb-4">{section.label}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                onClick={(e) => {
                                                    if (link.badge === "Soon") {
                                                        e.preventDefault()
                                                    } else {
                                                        trackEvent('nav_click', { item: link.title, section: 'footer' })
                                                    }
                                                }}
                                                className={`text-gray-400 hover:text-white inline-flex items-center transition-colors duration-200 text-sm group ${link.badge === "Soon" ? "opacity-60 cursor-default hover:text-gray-400" : ""}`}
                                            >
                                                {link.icon && <link.icon className="me-2 size-4 text-gray-500 group-hover:text-white transition-colors" />}
                                                {link.title}
                                                {link.badge && (
                                                    <span className="ml-2 px-1.5 py-0.5 rounded-full bg-white/10 text-[10px] text-gray-400 border border-white/5">
                                                        {link.badge}
                                                    </span>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </footer>
    );
};

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
