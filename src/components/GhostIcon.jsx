import React from 'react'

// Inline SVG ghost icon so we can control color/contrast via CSS/currentColor
export default function GhostIcon({ filled = false, className = '' }) {
  const color = filled ? 'var(--accent)' : 'rgba(255,255,255,0.85)'
  const style = {
    color,
    filter: filled ? 'drop-shadow(0 0 6px var(--accent))' : 'none'
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      className={className}
      style={style}
      aria-hidden
    >
      <g fill="currentColor">
        {/* main body (simplified) */}
        <path d="M13.99 51.38c-.96-2.07 3.4-6.22 6.02-12.08 1.13-2.53 1.23-4.71.74-6.38-1.28-2.57-2.36-3.62-3.42-6.12-.84-1.99 8.17-.29 8.39-.38.89-.79 3.26-9.55 5.43-12.24.99-1.23 3.4-2.64 5.78-2.5 2.02.12 4.1 1.3 4.96 2.37 2.17 2.71 4.71 12.21 5.43 12.36 1.93.4 7.97-1.9 8.32.41.08.51-1.92 5.77-2.24 6.11-.57 1.35-1.16 3.37-.32 5.48 1.21 3.01 6.06 8.59 6.05 14.02 0 .19-.93 5.52-7.69 3.65-.15-.04-.18-.14-.27-.2-1.54-1.17-4.71-1.77-7.61-.92-3.42 1.01-2.81 2.98-6.95 4.72-1.08.46-3.11 1.28-5.77 1.05-.72-.06-2.78-.27-4.81-1.61-2.92-1.92-2.36-3.93-4.79-5.7-3.22-2.35-6.55-.55-7.25-2.05z" />
        {/* eyes - keep dark for contrast */}
        <ellipse cx="33.1" cy="23.21" rx="1.71" ry="3.19" fill="#0f172a" />
        <ellipse cx="39.9" cy="23.21" rx="1.71" ry="3.19" fill="#0f172a" />
      </g>
    </svg>
  )
}
