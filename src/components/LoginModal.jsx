import React, { useState, useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../AuthContext'

export default function LoginModal({ open, onClose }) {
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const overlayRef = useRef(null)
  const firstInputRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    if (open) {
      // focus first input
      setTimeout(() => firstInputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  // focus trap inside modal
  useEffect(() => {
    if (!open) return
    function onKeyDown(e) {
      if (e.key !== 'Tab') return
      const node = formRef.current
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
  }, [open])

  if (!open) return null

  async function submit(e) {
    e.preventDefault()
    setError('')
    const ok = await login({ email, password, name })
    if (!ok) {
      setError('Por favor preencha email e senha')
      return
    }
    setPassword('')
    onClose()
  }

  function onOverlayClick(e) {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div ref={overlayRef} onClick={onOverlayClick} className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm animate-overlayShow" />

      <form ref={formRef} onSubmit={submit} className="relative w-full max-w-md bg-gradient-to-br from-black/85 to-black/90 text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/5 transform transition-all duration-300 motion-reduce:transition-none animate-modalShow" aria-labelledby="login-heading">
        <h3 id="login-heading" className="text-2xl font-bold mb-4">Entrar</h3>

        <label className="block text-sm text-white/80 mb-1">Email</label>
        <input ref={firstInputRef} type="email" required className="w-full bg-white/5 border border-transparent focus:border-transparent focus:ring-2 focus:ring-[var(--accent)] rounded-md px-3 py-2 text-white placeholder-white/60 transition" placeholder="seu@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className="block text-sm text-white/80 mt-4 mb-1">Senha</label>
        <div className="relative">
          <input type={showPassword ? 'text' : 'password'} required className="w-full bg-white/5 border border-transparent focus:border-transparent focus:ring-2 focus:ring-[var(--accent)] rounded-md px-3 py-2 text-white placeholder-white/60 transition" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 text-sm">{showPassword ? 'Ocultar' : 'Mostrar'}</button>
        </div>

        <label className="block text-sm text-white/80 mt-4 mb-1">Nome (opcional)</label>
        <input className="w-full bg-white/5 border border-transparent focus:border-transparent focus:ring-2 focus:ring-[var(--accent)] rounded-md px-3 py-2 text-white placeholder-white/60 transition" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />

        {error && <div className="text-sm text-red-400 mt-3">{error}</div>}

        <div className="mt-6 flex items-center justify-between gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition">Cancelar</button>
          <button type="submit" className="px-4 py-2 rounded-md bg-[var(--accent)] text-slate-900 font-semibold shadow hover:scale-[1.02] transform transition">Entrar</button>
        </div>

        <div className="mt-4 text-xs text-white/60">Ao entrar você aceita os termos fictícios deste protótipo.</div>
      </form>
    </div>
  )
}
