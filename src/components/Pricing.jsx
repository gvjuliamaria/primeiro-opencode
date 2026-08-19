import React, { useState } from 'react'

export default function Pricing({ onChoose }) {
  const plans = [
    {
      id: 'standard-ads',
      title: 'Padrão (com anúncios)',
      price: 'R$ 20,90',
      subtitle: '1080p',
      quality: 'Boa',
      resolution: '1080p (Full HD)',
      devices: 'TV, computador, celular, tablet',
      streams: 2,
      downloads: 2,
      ads: 'Menos do que você pensa'
    },
    {
      id: 'standard',
      title: 'Padrão',
      price: 'R$ 44,90',
      subtitle: '1080p',
      quality: 'Boa',
      resolution: '1080p (Full HD)',
      devices: 'TV, computador, celular, tablet',
      streams: 2,
      downloads: 2,
      ads: 'Sem anúncios'
    },
    {
      id: 'premium',
      title: 'Premium',
      price: 'R$ 59,90',
      subtitle: '4K + HDR',
      quality: 'Superior',
      resolution: '4K (Ultra HD) + HDR',
      audio: 'Áudio espacial (som imersivo) Incluso',
      devices: 'TV, computador, celular, tablet',
      streams: 4,
      downloads: 6,
      ads: 'Sem anúncios'
    }
  ]

  return (
    <section id="pricing" className="section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="kicker">Oferta</div>
        <h2 className="section-title">Escolha o melhor plano para você</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.id} className="bg-white/5 p-6 rounded-lg flex flex-col justify-between">
              <div>
                <div className="text-white font-semibold text-lg">{p.title}</div>
                <div className="text-white/90 text-2xl font-bold mt-2">{p.price}</div>

                <div className="mt-4 text-white/70 space-y-1 text-sm">
                  <div><strong>Qualidade de vídeo e áudio:</strong> {p.quality}</div>
                  <div><strong>Resolução:</strong> {p.resolution}</div>
                  {p.audio && <div><strong>Áudio:</strong> {p.audio}</div>}
                  <div><strong>Aparelhos compatíveis:</strong> {p.devices}</div>
                  <div><strong>Aparelhos simultâneos:</strong> {p.streams}</div>
                  <div><strong>Aparelhos de download:</strong> {p.downloads}</div>
                  <div><strong>Anúncios:</strong> {p.ads}</div>
                </div>
              </div>
              <div className="mt-6">
                <button onClick={() => onChoose(p)} className="w-full px-4 py-2 bg-[var(--accent)] rounded-md font-semibold text-slate-900">Assinar {p.title}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
