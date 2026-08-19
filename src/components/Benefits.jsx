import React from 'react'

export default function Benefits() {
  const items = [
    { title: 'Curadoria Calmante', text: 'Conteúdos selecionados por níveis de intensidade para você controlar o medo.' },
    { title: 'Modo Acompanhado', text: 'Ferramentas como luz suave, legendas e pausas automáticas.' },
    { title: 'Perfis Personalizados', text: 'Defina seu nível de conforto para receber recomendações seguras.' },
  ]

  return (
    <section id="benefits" className="section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="kicker">Diferenciais</div>
        <h2 className="section-title">O que torna o Medrosos especial</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {items.map((it) => (
            <div key={it.title} className="bg-white/5 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-white mb-2">{it.title}</h3>
              <p className="text-white/70 text-sm">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
