import React, { useState } from 'react'
import GhostIcon from './GhostIcon'

function GhostRating({ value = 0 }) {
  const arr = Array.from({ length: 5 })
  return (
    <div className="flex items-center gap-2 mt-2">
      {arr.map((_, i) => (
        <GhostIcon key={i} filled={i < value} className={`w-6 h-6 ${i < value ? 'opacity-100' : 'opacity-40'}`} />
      ))}
    </div>
  )
}

export default function Card({ title, subtitle, image, rating = 3 }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <article className="card-hover bg-white/5 rounded-lg overflow-hidden shadow-sm relative">
      <div className="h-40 md:h-48 card-cover relative bg-slate-800">
        {/* skeleton / placeholder */}
        {!loaded && <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/3 to-white/5 animate-pulse" />}
        <img
          src={image}
          alt={title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="card-overlay">
          <div className="flex w-full items-end justify-between">
            <div>
              <div className="title text-sm md:text-base">{title}</div>
              <div className="text-xs text-white/70">{subtitle}</div>
            </div>
            <div>
              <button className="cta">Ver</button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70 mt-1">{subtitle}</p>
        <GhostRating value={rating} />
      </div>
    </article>
  )
}
