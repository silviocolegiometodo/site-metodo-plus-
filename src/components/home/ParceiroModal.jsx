import { useEffect, useState } from 'react'
import { parceiroData } from '../../data/parceiros.js'

export default function ParceiroModal({ activeKey, onClose }) {
  const [mounted, setMounted] = useState(false)
  const [animateIn, setAnimateIn] = useState(false)
  const [lastData, setLastData] = useState(null)
  const [closeHover, setCloseHover] = useState(false)

  useEffect(() => {
    if (activeKey) setLastData(parceiroData[activeKey])
  }, [activeKey])

  useEffect(() => {
    if (activeKey) {
      setMounted(true)
      document.body.style.overflow = 'hidden'
      const raf = requestAnimationFrame(() => setAnimateIn(true))
      return () => cancelAnimationFrame(raf)
    }
    if (mounted) {
      setAnimateIn(false)
      const t = setTimeout(() => {
        setMounted(false)
        document.body.style.overflow = ''
      }, 280)
      return () => clearTimeout(t)
    }
  }, [activeKey])

  useEffect(() => {
    if (!mounted) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mounted, onClose])

  if (!mounted || !lastData) return null

  return (
    <div id="parceiroModal" style={{ display: 'flex', position: 'fixed', inset: 0, zIndex: 9000, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div
        id="parceiroModalOverlay"
        style={{ position: 'absolute', inset: 0, background: 'rgba(8,45,107,0.55)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      ></div>
      <div
        id="parceiroModalBox"
        style={{
          position: 'relative',
          background: 'var(--white)',
          borderRadius: 20,
          maxWidth: 680,
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          boxShadow: '0 24px 64px rgba(8,45,107,0.25)',
          transform: animateIn ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
          opacity: animateIn ? 1 : 0,
          transition: 'transform .32s cubic-bezier(.22,.68,0,1.2), opacity .25s ease',
        }}
      >
        <div
          id="parceiroModalHeader"
          style={{
            padding: '28px 32px 20px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 16,
            borderBottom: '1px solid #eef1f7',
            position: 'sticky',
            top: 0,
            background: 'var(--white)',
            borderRadius: '20px 20px 0 0',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              id="parceiroModalIcon"
              style={{
                width: 52, height: 52,
                background: lastData.gradient,
                boxShadow: `0 6px 16px ${lastData.shadow}`,
                borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}
            >
              <i id="parceiroModalIconEl" className={`fas ${lastData.icon}`} style={{ fontSize: '1.4rem', color: '#fff' }}></i>
            </div>
            <h3 id="parceiroModalTitle" style={{ fontSize: '1.2rem', color: 'var(--blue-dark)', margin: 0, fontFamily: "'Poppins',sans-serif", lineHeight: 1.3 }}>
              {lastData.title}
            </h3>
          </div>
          <button
            id="parceiroModalClose"
            aria-label="Fechar"
            onClick={onClose}
            onMouseEnter={() => setCloseHover(true)}
            onMouseLeave={() => setCloseHover(false)}
            style={{
              background: closeHover ? '#f0f4ff' : 'none',
              border: 'none', cursor: 'pointer', width: 36, height: 36, borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-muted)', transition: 'background .2s', flexShrink: 0, fontSize: '1.1rem',
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div id="parceiroModalBody" style={{ padding: '28px 32px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {lastData.paragraphs.map((p, i) => (
            <p key={i} style={{ color: 'var(--text-muted)', fontSize: '0.97rem', lineHeight: 1.85, margin: 0 }}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
