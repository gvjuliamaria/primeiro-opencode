import React, { useState } from 'react'

export default function FAQ() {
  const faqs = [
    { q: 'O que é o Medrosos?', a: 'O Medrosos é uma plataforma de streaming fictícia criada para este protótipo, pensada especialmente para pessoas que preferem conteúdos menos intensos. Oferece um catálogo com curadoria por níveis de intensidade (fantasminhas), perfis e modos de reprodução adaptados.' },
    { q: 'Quanto custa o Medrosos?', a: 'Neste protótipo apresentamos planos fictícios: Básico R$9,90/mês e Premium R$19,90/mês. Esses valores são apenas exemplos para a atividade — não há cobrança real.' },
    { q: 'Onde posso assistir ao Medrosos?', a: 'O protótipo simula uma experiência web responsiva: você pode acessar no navegador do desktop, tablet ou smartphone. Em um produto real, também suportaríamos smart TVs e apps móveis.' },
    { q: 'Como faço para cancelar minha assinatura?', a: 'Em um serviço real você cancelaria sua assinatura na área da conta. Neste protótipo, o fluxo de assinatura é simulado via modal de checkout; se fosse real, o cancelamento seria feito na página de gerenciamento de assinaturas.' },
    { q: 'O que eu posso assistir no Medrosos?', a: 'No Medrosos oferecemos filmes, séries e conteúdos curtos organizados por intensidade (1 a 5 fantasminhas). Há programas classificados como leves para iniciantes e títulos mais intensos para quem busca emoção — sempre com opções de modos calmantes.' },
    { q: 'O Medrosos é adequado para crianças?', a: 'A plataforma foi pensada para incluir modos familiares e controles parentais na experiência completa. No protótipo mostramos a ideia de perfis e filtros; a implementação real exigiria configuração de controles parentais e classificação etária adequada.' },
  ]

  return (
    <section id="faq" className="section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="kicker">Perguntas</div>
        <h2 className="section-title">FAQ</h2>

        <div className="mt-6 space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white/5 p-4 rounded-lg">
              <summary className="cursor-pointer text-white font-medium">{f.q}</summary>
              <div className="mt-2 text-white/70">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
