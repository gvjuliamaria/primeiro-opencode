import React from 'react'

export default function Hero() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white animate-fadeUp">Streaming para quem tem medo • conteúdo que te segura pela mão</h1>
        <p className="mt-4 text-white/80 max-w-xl animate-slideInLeft">Navegue por um catálogo selecionado, com recomendações calmantes, controle de intensidade e modos para assistir sem sustos.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="btn-primary cta-breath animate-fadeUp">Experimentar grátis</button>
          <button className="btn-secondary animate-fadeUp">Saiba mais</button>
        </div>

        <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
          <div><strong className="text-white">120+</strong> títulos</div>
          <div><strong className="text-white">4.8</strong> avaliação média</div>
          <div><strong className="text-white">Suporte 24/7</strong></div>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-video w-full rounded-2xl overflow-hidden flex items-center justify-center" style={{ background: 'var(--site-bg)', boxShadow: 'none' }}>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* TV - use the site background (purple/blue) instead of black so ghosts sit on the correct color */}
            <div className="absolute w-3/4 h-2/3 rounded-lg bg-[var(--site-bg)] flex items-center justify-center">
              <div className="w-11/12 h-4/5 rounded bg-[var(--site-bg)]" />
            </div>

            {/* ghosts around the TV using the OpenMoji SVG */}
            <div className="absolute left-10 top-8 w-36 p-2 rounded-lg bg-[var(--site-bg)]" style={{ boxShadow: 'none', border: 'none' }}>
              <img src="/src/assets/1F47B.svg" alt="ghost" className="w-full h-full object-contain" />
            </div>
            <div className="absolute right-12 top-16 w-28 p-2 rounded-lg bg-[var(--site-bg)]" style={{ boxShadow: 'none', border: 'none' }}>
              <img src="/src/assets/1F47B.svg" alt="ghost" className="w-full h-full object-contain" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-40 p-2 rounded-lg bg-[var(--site-bg)]" style={{ boxShadow: 'none', border: 'none' }}>
              <img src="/src/assets/1F47B.svg" alt="ghost" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 left-6 bg-white/10 text-white backdrop-blur rounded-lg p-4 border border-white/5 shadow">
          <div className="text-xs text-white/70">Próxima estreia</div>
          <div className="font-semibold">Noites Tranquilas</div>
        </div>
      </div>
    </section>
  )
}
