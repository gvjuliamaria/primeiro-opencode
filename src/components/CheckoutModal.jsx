import React, { useState, useEffect, useRef } from 'react'

export default function CheckoutModal({ open, plan, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [card, setCard] = useState('')
  const [cvv, setCvv] = useState('')
  const [expiry, setExpiry] = useState('')
  const [method, setMethod] = useState('credit')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const formRef = useRef(null)

  useEffect(() => {
    if (open) {
      setSuccess(false)
      setLoading(false)
    setName('')
    setEmail('')
    setPhone('')
    setCard('')
    setCvv('')
    setExpiry('')
    setMethod('credit')
      setTimeout(() => formRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  function submit(e) {
    e.preventDefault()
    // basic validation
    if (!name || !email || !phone || !card || !cvv || !expiry) {
      alert('Preencha todos os campos obrigatórios')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1200)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md bg-gradient-to-br from-black/85 to-black/90 text-white rounded-2xl p-6 shadow-2xl">
        {!success ? (
          <form onSubmit={submit} className="space-y-4">
            <h3 className="text-xl font-semibold">Assinar {plan?.name}</h3>
            <div className="text-sm text-white/70">{plan?.price}</div>
            <input ref={formRef} className="w-full bg-white/5 rounded px-3 py-2 text-white" placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className="w-full bg-white/5 rounded px-3 py-2 text-white" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className="w-full bg-white/5 rounded px-3 py-2 text-white" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input className="w-full bg-white/5 rounded px-3 py-2 text-white" placeholder="Número do cartão" value={card} onChange={(e) => setCard(e.target.value)} required />
              <input className="w-full bg-white/5 rounded px-3 py-2 text-white" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input className="w-full bg-white/5 rounded px-3 py-2 text-white" placeholder="Validade (MM/AA)" value={expiry} onChange={(e) => setExpiry(e.target.value)} required />
              <select className="w-full bg-white/5 rounded px-3 py-2 text-white" value={method} onChange={(e) => setMethod(e.target.value)}>
                <option value="credit">Crédito</option>
                <option value="debit">Débito</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded border border-white/10">Cancelar</button>
              <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-[var(--accent)] text-slate-900 font-semibold">{loading ? 'Processando...' : 'Confirmar assinatura'}</button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold">Assinatura concluída</h3>
            <p className="text-white/70 mt-3">Obrigado! Um e-mail de confirmação (fictício) foi enviado para {email || 'seu e-mail'}.</p>
            <div className="mt-4">
              <button onClick={onClose} className="px-4 py-2 rounded bg-[var(--accent)] text-slate-900 font-semibold">Fechar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
