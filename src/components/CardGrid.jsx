import React from 'react'
import Card from './Card'

// Sample list of horror covers using Unsplash query for variety. These are public
// images and will serve as placeholders for the catalog covers.
const items = [
  {
    id: 1,
    title: 'Nosferatu (1922)',
    subtitle: 'F. W. Murnau • 1922',
    rating: 1,
    image: 'https://upload.wikimedia.org/wikipedia/en/9/90/Nosferatu_poster_%28Albin_Grau%2C_1922%29_1.jpg'
  },
  {
    id: 2,
    title: 'Night of the Living Dead (1968)',
    subtitle: 'George A. Romero • 1968',
    rating: 2,
    image: 'https://upload.wikimedia.org/wikipedia/en/9/91/Night_of_the_Living_Dead_%281968%29_poster.jpg'
  },
  {
    id: 3,
    title: 'The Cabinet of Dr. Caligari (1920)',
    subtitle: 'Robert Wiene • 1920',
    rating: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Das_Cabinet_des_Dr._Caligari.JPG'
  },
  {
    id: 4,
    title: 'White Zombie (1932)',
    subtitle: 'Victor Halperin • 1932',
    rating: 4,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Poster_-_White_Zombie_01_Crisco_restoration.jpg'
  },
  {
    id: 5,
    title: 'The Phantom of the Opera (1925)',
    subtitle: 'Rupert Julian • 1925',
    rating: 5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Phantom_of_the_opera_1925_poster.jpg'
  },
  {
    id: 6,
    title: 'The Last Man on Earth (1964)',
    subtitle: 'Ubaldo Ragona • 1964',
    rating: 3,
    image: 'https://upload.wikimedia.org/wikipedia/en/7/73/Lastmanonearth1960s.jpg'
  }
]

export default function CardGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((it, idx) => (
        <div key={it.id} className="animate-fadeUp" style={{ animationDelay: `${idx * 80}ms` }}>
          <Card title={it.title} subtitle={it.subtitle} image={it.image} rating={it.rating} />
        </div>
      ))}
    </div>
  )
}
