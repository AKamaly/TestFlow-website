'use client'

import { useEffect, useRef } from 'react'

export function useIntersectionObserver(callback: IntersectionObserverCallback) {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    })

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((element) => observer.current?.observe(element))

    return () => observer.current?.disconnect()
  }, [callback])
}

