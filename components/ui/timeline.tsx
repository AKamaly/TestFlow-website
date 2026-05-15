"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image?: string;
}

export const Timeline = ({ data, showHeader = true, headerTitle, headerDescription }: { data: TimelineEntry[], showHeader?: boolean, headerTitle?: string, headerDescription?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      {showHeader && (
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            {headerTitle || "Changelog from my journey"}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            {headerDescription || "I've been working on Aceternity for the past 2 years. Here's a timeline of my journey."}
          </p>
        </div>
      )}

      <div ref={ref} className="relative max-w-7xl mx-auto pb-40">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-12 md:gap-20"
          >
            {/* Left Side - Number and Text */}
            <div className="sticky flex flex-col z-40 top-40 self-start w-full md:w-auto md:max-w-sm">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="relative flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-transparent flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 mb-4 md:mb-6">
                    {item.title}
                  </h3>
                  <div className="md:hidden">
                    {item.content}
                  </div>
                </div>
              </div>
              {/* Text Content Below Number - Desktop Only */}
              <div className="hidden md:block pl-14 mt-2">
                {item.content}
              </div>
            </div>

            {/* Right Side - Image (Wider) */}
            <div className="relative flex-1 pl-4 md:pl-0">
              {item.image && (
                <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Step ${item.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
