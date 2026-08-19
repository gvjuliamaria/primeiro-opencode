import React, { useContext, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import LoginModal from './LoginModal'

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lastY = useRef(0)
  const firstMobileLinkRef = useRef(null)
  const asideRef = useRef(null)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || window.pageYOffset
      setCompact(y > 20)

      // only auto-hide on small screens
      if (window.innerWidth < 768) {
        if (y > lastY.current && y > 120) setHidden(true)
        else setHidden(false)
      }
      lastY.current = y
    }

    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
        setHidden(false)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      setTimeout(() => firstMobileLinkRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    // trap focus inside aside when open
    function onKeyDown(e) {
      if (!mobileMenuOpen) return
      if (e.key !== 'Tab') return
      const node = asideRef.current
      if (!node) return
      const focusable = node.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')
      const elements = Array.prototype.filter.call(focusable, (el) => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement)
      if (!elements.length) return
      const first = elements[0]
      const last = elements[elements.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileMenuOpen])

  return (
    <>
      <header className={`site-header ${compact ? 'header--compact' : ''} ${hidden ? 'header--hidden' : ''}`}>
        <div className="container">
          <Link to="/" className="flex items-center gap-3 brand">
            <img src="/src/assets/1F47B.svg" alt="Medrosos" className="w-10 h-10 animate-floatY transition-transform duration-200 hover:scale-105" />
            <span className="font-semibold text-lg text-white">Medrosos</span>
          </Link>

          <nav className="nav hidden md:flex items-center gap-6">
            <Link to="#" className="nav-link text-white/80 hover:text-white">Home</Link>
            <Link to="#" className="nav-link text-white/80 hover:text-white">Catálogo</Link>
            <Link to="#" className="nav-link text-white/80 hover:text-white">Como Funciona</Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* mobile menu button */}
            <button
              className="md:hidden p-2 rounded bg-white/5"
              aria-label="Abrir menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {!user ? (
              <>
                <button onClick={() => setOpen(true)} className="hidden md:inline px-4 py-2 rounded bg-transparent border border-white/20 text-white">Entrar</button>
                <button className="px-4 py-2 rounded bg-[var(--accent)] text-slate-900 font-semibold cta-breath">Assinar</button>
              </>
            ) : (
              <div className="flex items-center gap-3 text-white">
                <div className="text-sm">Olá, <strong>{user.name}</strong></div>
                <button onClick={logout} className="px-3 py-1 rounded border border-white/10">Sair</button>
              </div>
            )}
          </div>
        </div>
        <div className="header-accent" aria-hidden />
      </header>

      {/* Mobile off-canvas menu */}
      <div className={`fixed inset-0 z-50 ${mobileMenuOpen ? '' : 'pointer-events-none'}`} aria-hidden={!mobileMenuOpen}>
        <div className={`absolute inset-0 bg-black/60 transition-opacity ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileMenuOpen(false)} />
        <aside ref={asideRef} className={`fixed right-0 top-0 h-full w-72 bg-black/95 p-6 transform transition-transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Menu">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img src="/src/assets/1F47B.svg" alt="Medrosos" className="w-8 h-8" />
              <span className="font-semibold text-white">Medrosos</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Fechar menu" className="p-2 text-white">✕</button>
          </div>

          <nav className="flex flex-col gap-4">
            <Link ref={firstMobileLinkRef} to="#" className="text-white text-lg">Home</Link>
            <Link to="#" className="text-white text-lg">Catálogo</Link>
            <Link to="#" className="text-white text-lg">Como Funciona</Link>
          </nav>

          <div className="mt-6">
            <button onClick={() => { setOpen(true); setMobileMenuOpen(false) }} className="w-full px-4 py-2 rounded bg-[var(--accent)] text-slate-900 font-semibold">Entrar</button>
          </div>
        </aside>
      </div>

      <LoginModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
