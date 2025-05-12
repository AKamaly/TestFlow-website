'use client'

import { useCallback, useEffect, useState } from 'react'

interface ParticleEdge {
  id: string
  path: string
}

interface ParticleProps {
  edge: ParticleEdge
  animated: boolean
  progress: number
}

export function Particle({ edge, animated, progress }: ParticleProps) {
  const [pathElement, setPathElement] = useState<SVGPathElement | null>(null)

  useEffect(() => {
    if (pathElement) {
      pathElement.getTotalLength()
    }
  }, [pathElement])

  const getPathRef = useCallback((path: SVGPathElement | null) => {
    setPathElement(path)
  }, [])

  if (!animated) return null

  return (
    <>
      <circle
        r={3}
        fill="#60A5FA"
        filter="url(#glow)"
        style={{
          offsetPath: `path("${edge.path}")`,
          offsetDistance: `${progress}%`,
        }}
        className="animate-pulse"
      />
      <path
        ref={getPathRef}
        d={edge.path}
        fill="none"
        className="react-flow__edge-path"
        style={{
          stroke: `url(#${edge.id}-gradient)`,
          strokeWidth: 3,
        }}
      />
      <defs>
        <linearGradient id={`${edge.id}-gradient`} gradientUnits="userSpaceOnUse">
          <stop offset={`${progress}%`} stopColor="#60A5FA" />
          <stop offset={`${progress + 1}%`} stopColor="rgba(255, 255, 255, 0.7)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </>
  )
}

