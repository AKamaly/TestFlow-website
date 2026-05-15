'use client'

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { Cable, Zap, Settings, Globe } from "lucide-react";

const instruments = [
  {
    name: "Keysight Technologies",
    logo: "/logos/Instruments Logos/keysight-logo.svg",
    category: "Test & Measurement"
  },
  {
    name: "Rohde & Schwarz", 
    logo: "/logos/Instruments Logos/Rohde_&_Schwarz_Logo.svg.png",
    category: "RF & Microwave"
  },
  {
    name: "Tektronix",
    logo: "/logos/Instruments Logos/tektronix-logo.svg",
    category: "Oscilloscopes"
  },
  {
    name: "Keithley",
    logo: "/logos/Instruments Logos/Keithley_Instruments_Logo.svg",
    category: "Electrical Testing"
  },
  {
    name: "Agilent Technologies",
    logo: "/logos/Instruments Logos/agilent-technologies-1.svg",
    category: "Temperature Chambers"
  },
  {
    name: "Chroma",
    logo: "/logos/Instruments Logos/Chroma.png",
    category: "Power Testing"
  }
];

// Skeleton components defined first
export const SkeletonInstruments = () => {
  return (
    <div className="relative flex py-12 px-6 h-full">
      {/* Enhanced Container with Modern Design */}
      <div className="w-full mx-auto group h-full relative">
        {/* Subtle Background Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 via-violet-500/5 to-purple-500/5 rounded-3xl blur-2xl opacity-60" />
        
        {/* Main Container */}
        <div className="relative bg-gradient-to-br from-black/40 via-neutral-900/60 to-black/40 backdrop-blur-xl border border-purple-500/20 shadow-2xl rounded-2xl p-8 lg:p-12 overflow-hidden">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 rounded-2xl" />
          
          <div className="relative z-10 flex flex-1 w-full h-full flex-col">
            {/* Enhanced Instruments Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
              {instruments.map((instrument, index) => (
                <motion.div
                  key={instrument.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="group flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-black/30 to-neutral-900/50 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center w-36 h-20 relative">
                    {/* Logo Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <img
                      src={instrument.logo}
                      alt={instrument.name}
                      className={`relative z-10 w-auto h-auto object-contain opacity-85 group-hover:opacity-100 transition-all duration-300 ${instrument.name !== "Keithley" ? "filter brightness-0 invert" : "filter brightness-100"}`}
                      style={{ maxWidth: '100%', maxHeight: '72px' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Enhanced Bottom Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mt-12 pt-8 border-t border-gradient-to-r from-transparent via-purple-500/20 to-transparent relative"
            >
              {/* Gradient Border Effect */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
              
              <p className="text-neutral-300 text-lg mb-2">
                <span className="font-bold text-white text-xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">200+</span> instruments supported and counting
              </p>
              <p className="text-neutral-400 text-sm">
                Don't see your equipment? We're constantly expanding compatibility.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute bottom-0 z-40 inset-x-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-32 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonAutoDetect = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 h-full">
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full flex items-center justify-center">
        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 flex items-center justify-center"
          >
            <Zap className="w-8 h-8 text-purple-400" />
          </motion.div>
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 blur-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonMonitoring = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 h-full">
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-col space-y-4 items-center justify-center h-full">
          {/* Status indicators */}
          {[
            { name: "Power Supply", status: "Connected", color: "green" },
            { name: "Oscilloscope", status: "Active", color: "purple" },
            { name: "Source Meter", status: "Ready", color: "blue" },
          ].map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-3 w-full max-w-xs"
            >
              <div className={`w-3 h-3 rounded-full ${
                device.color === 'green' ? 'bg-green-400' :
                device.color === 'purple' ? 'bg-purple-400' : 'bg-blue-400'
              } animate-pulse`} />
              <span className="text-sm text-neutral-600 dark:text-neutral-300 flex-1">
                {device.name}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {device.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkeletonGlobal = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 h-full">
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full flex items-center justify-center">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative w-32 h-32"
        >
          <Globe className="w-8 h-8 text-purple-400 absolute top-4 left-4" />
          <Settings className="w-6 h-6 text-violet-400 absolute top-8 right-6" />
          <Cable className="w-6 h-6 text-pink-400 absolute bottom-6 left-8" />
          <Zap className="w-5 h-5 text-purple-300 absolute bottom-4 right-4" />
          
          {/* Center circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
            </div>
          </div>
          
          {/* Orbital rings */}
          <div className="absolute inset-0 border border-purple-400/20 rounded-full" />
          <div className="absolute inset-4 border border-violet-400/15 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

// Features array defined after skeleton components
const compatibilityFeatures = [
  {
    title: "Universal Instrument Support",
    description: "Connect any test equipment with plug-and-play compatibility across 200+ instruments.",
    skeleton: <SkeletonInstruments />,
    className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
  },
  {
    title: "Auto-Detection",
    description: "Automatic device recognition and configuration for seamless integration.",
    skeleton: <SkeletonAutoDetect />,
    className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
  },
  {
    title: "Real-Time Monitoring",
    description: "Monitor all connected instruments with live status updates and health checks.",
    skeleton: <SkeletonMonitoring />,
    className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
  },
  {
    title: "Global Compatibility",
    description: "Works with equipment from leading manufacturers worldwide, ensuring universal validation workflows.",
    skeleton: <SkeletonGlobal />,
    className: "col-span-1 lg:col-span-3 border-b lg:border-none",
  },
];

export function MinimalistCompatibilitySection() {
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto text-center tracking-tight text-black dark:text-white">
          Works with{' '}
          <span className="bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
            Leading
          </span>{' '}
          <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            Test Equipment
          </span>
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Connect any test equipment with plug-and-play compatibility across 200+ instruments.
        </p>
      </div>

      <div className="relative">
        <div className="mt-16 max-w-6xl mx-auto">
          <CompatibilityCard className="relative overflow-hidden">
            <div className="h-full w-full"><SkeletonInstruments /></div>
          </CompatibilityCard>
        </div>
      </div>
    </div>
  );
}

const CompatibilityCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const CompatibilityTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const CompatibilityDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};