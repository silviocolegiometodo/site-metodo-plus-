import { useEffect, useState } from 'react'

export default function useGaleriaCarousel(count) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (count < 2) return
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % count)
    }, 3500)
    return () => clearInterval(id)
  }, [count])

  return activeIndex
}
