'use client'

import { useCallback, useRef, useState } from 'react'

export const useReveal = <T extends HTMLElement = HTMLDivElement>() => {
  const [revealed, setRevealed] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Callback ref instead of useRef+useEffect: fires exactly when the DOM
  // node attaches, even if earlier renders returned null (e.g. a page that
  // renders nothing until async data loads) — a plain useEffect with `[]`
  // deps would miss that node entirely since it only runs once, against
  // whatever ref.current was on the very first render.
  const ref = useCallback((el: T | null) => {
    observerRef.current?.disconnect()
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    observerRef.current = observer
  }, [])

  return { ref, revealed }
}
