'use client';

import { cn } from "@/lib/utils";
import React from "react";

interface InfiniteSliderProps {
    children: React.ReactNode;
    className?: string;
    gap?: number;
    reverse?: boolean;
    speed?: number;
    speedOnHover?: number;
}

export function InfiniteSlider({
    children,
    className,
    gap = 16,
    reverse = false,
    speed = 40,
    speedOnHover,
}: InfiniteSliderProps) {
    return (
        <div 
            className={cn("flex w-full overflow-hidden shrink-0", className)}
            style={{
                gap: `${gap}px`,
                "--gap": `${gap}px`,
                "--duration": `${10000 / speed}s`,
                "--hover-duration": speedOnHover ? `${10000 / speedOnHover}s` : undefined
            } as React.CSSProperties}
        >
            <div 
                className={cn(
                    "flex flex-nowrap shrink-0 animate-marquee min-w-full",
                    reverse ? "[animation-direction:reverse]" : ""
                )}
                style={{ gap: `${gap}px` }}
            >
                {children}
                {children}
                {children}
                {children}
            </div>
            <div 
                className={cn(
                    "flex flex-nowrap shrink-0 animate-marquee min-w-full",
                    reverse ? "[animation-direction:reverse]" : ""
                )}
                style={{ gap: `${gap}px` }}
                aria-hidden="true"
            >
                {children}
                {children}
                {children}
                {children}
            </div>
        </div>
    );
}
