import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-white/70">
        <div>© {new Date().getFullYear()} Medrosos — Projeto Acadêmico</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Termos</a>
          <a href="#" className="hover:underline">Privacidade</a>
        </div>
      </div>
    </footer>
  )
}
