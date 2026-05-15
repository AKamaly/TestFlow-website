"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [168 / 255, 85 / 255, 247 / 255], // Purple color
  glowColor: [1, 1, 1],
  markers: [
    { location: [37.7749, -122.4194], size: 0.1 }, // San Francisco
    { location: [51.5074, -0.1278], size: 0.1 }, // London
    { location: [35.6762, 139.6503], size: 0.1 }, // Tokyo
    { location: [52.5200, 13.4050], size: 0.1 }, // Berlin
    { location: [28.6139, 77.2090], size: 0.1 }, // New Delhi
    { location: [31.2304, 121.4737], size: 0.1 }, // Shanghai
    { location: [-33.8688, 151.2093], size: 0.1 }, // Sydney
    { location: [40.7128, -74.006], size: 0.1 }, // New York
    { location: [19.076, 72.8777], size: 0.08 }, // Mumbai
    { location: [-23.5505, -46.6333], size: 0.08 }, // São Paulo
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1"
      }
    })
    return () => globe.destroy()
  }, [config, onRender])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}

export function GlobeFeatureSection() {
  return (
    <section className="relative w-full mx-auto overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl px-6 py-16 md:px-16 md:py-24 mt-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/6 via-violet-500/6 to-purple-500/6" />
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-20" />
      
      <div className="relative flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div className="z-10 max-w-xl text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Ready to compete in the{' '}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Global Validation Challenge?
            </span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Do you have what it takes to automate the future of hardware testing? Join engineers from around the world and compete for global recognition.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(199,21,133,0.6)] inline-flex items-center gap-2"
          >
            <Link
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=lKls-VdCNkqUxwvRQtK8J3oie0RdtVVImx9U8GDGhrtUMVdPRksxTVhUSUtaVVI3SDNROTJPUjE0MS4u"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="relative h-[300px] w-full max-w-xl md:h-[400px]">
          <Globe className="absolute -bottom-20 -right-40 scale-150" />
        </div>
      </div>
    </section>
  );
}

