'use client'

import { useState, useEffect } from 'react'

const MOBILE_BREAKPOINT = 1024 // 64rem (lg in Tailwind config)

export function useDevice() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  useEffect(() => {
    // Media query to match desktop/laptop screens (min-width: 1024px)
    const mediaQuery = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`)

    // Set initial value
    setIsDesktop(mediaQuery.matches)

    // Handler for changes
    const handler = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches)
    }

    // Add listener
    mediaQuery.addEventListener('change', handler)

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return isDesktop
}
