'use client'

import { useState } from 'react'
import Image from 'next/image'
import Squirrel from '@/public/squirrel-lol.png'

const initialJokes = [
  {
    id: 1,
    content:
      'An electron walks into a bar and asks, how much for a beer. The bartender says, for you, free of charge.',
    highlight: 'free of charge.',
  },
  {
    id: 2,
    content:
      'Wie viele Programmierer sind nötig, um eine kaputte Glühbirne auszuwechseln? - Keine. Das ist ein Hardwareproblem.',
    highlight: 'Hardwareproblem.',
  },
  {
    id: 3,
    content: '— Ты кто по профессии? — Блогер. — Я тоже ничего не умею ...',
    highlight: 'ничего не умею ...',
  },
]

export default function Home() {
  const [jokes, setJokes] = useState(initialJokes)

  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 bg-gray-900 p-24">
      <h1 className="relative mb-10 text-3xl font-bold">
        The Notebook for{' '}
        <span className="inline-block -rotate-2 bg-gray-100 p-2 text-black">
          a chuckle
        </span>
        <span className="absolute -right-5 -top-5 rotate-12">🤣</span>
      </h1>

      <Image
        src={Squirrel}
        alt="squirrel laughing in front of laptop"
        className="rounded-md"
        width="400"
      />

      {jokes.map((individualJoke) => (
        <div key={individualJoke.id}>{individualJoke.content}</div>
      ))}

      {/* Form */}
      {/* Preview */}
    </main>
  )
}
