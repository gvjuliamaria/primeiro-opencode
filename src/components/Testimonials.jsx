import React from 'react'
import GhostIcon from './GhostIcon'

export default function Testimonials() {
  const items = [
    { name: 'Ana P.', text: 'Eu consigo controlar a intensidade! Recomendo para quem tem medos leves.', score: 4 },
    { name: 'Lucas R.', text: 'Interface calma e bons conteúdos. O modo acompanhando é ótimo.', score: 5 },
    { name: 'Mariana S.', text: 'Finalmente uma plataforma que entende pessoas medrosas.', score: 4 },
  ]

  return (
    <section id="testimonials" className="section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="kicker">Depoimentos</div>
        <h2 className="section-title">O que nossos usuários fictícios dizem</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.name} className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="text-white font-semibold">{it.name}</div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <GhostIcon key={i} filled={i < it.score} className="w-4 h-4" />
                  ))}
                </div>
              </div>
              <p className="text-white/70 mt-3 text-sm">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
