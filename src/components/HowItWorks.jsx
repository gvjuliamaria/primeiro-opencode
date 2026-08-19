import React from 'react'

export default function HowItWorks() {
  const steps = [
    { title: 'Escolha seu nível', desc: 'Defina quantos fantasminhas você tolera — 1 (leve) a 5 (intenso).' },
    { title: 'Explore com segurança', desc: 'Veja recomendações e modos para diminuir sustos.' },
    { title: 'Assista no seu ritmo', desc: 'Controles fáceis, pausa recomendada e pistas de intensidade.' },
  ]

  return (
    <section id="how" className="section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="kicker">Como funciona</div>
        <h2 className="section-title">Três passos simples</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-white/5 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-slate-900 font-bold mb-3">{i+1}</div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="text-white/70 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
