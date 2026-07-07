import { useEffect, useRef, useState } from 'react'

export default function useLightbox() {
  const [isOpen, setIsOpen] = useState(false)
  const [group, setGroup] = useState([])
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)

  const open = (photos, startIndex) => {
    setGroup(photos)
    setIndex(startIndex)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const close = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  const go = (delta) => {
    setIndex((i) => (i + delta + group.length) % group.length)
  }

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, group.length])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(deltaX) > 40) go(deltaX < 0 ? 1 : -1)
    touchStartX.current = null
  }

  return {
    isOpen,
    group,
    index,
    open,
    close,
    go,
    onTouchStart,
    onTouchEnd,
  }
}
