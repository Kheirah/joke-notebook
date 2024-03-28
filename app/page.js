'use client'

import { useState } from 'react'
import Image from 'next/image'
import Squirrel from '@/public/squirrel-lol.png'

const initialJokes = [
  {
    id: generateRandomString(),
    content:
      'An electron walks into a bar and asks, how much for a beer. The bartender says, for you, free of charge.',
    highlight: 'free of charge.',
  },
  {
    id: generateRandomString(),
    content:
      'Wie viele Programmierer sind nötig, um eine kaputte Glühbirne auszuwechseln? - Keine. Das ist ein Hardwareproblem.',
    highlight: 'Hardwareproblem.',
  },
  {
    id: generateRandomString(),
    content: '— Ты кто по профессии? — Блогер. — Я тоже ничего не умею ...',
    highlight: 'ничего не умею ...',
  },
]

function generateRandomString() {
  return Math.random().toString(36).substring(2)
}

export default function Home() {
  const [jokes, setJokes] = useState(initialJokes)
  const [joke, setJoke] = useState({
    id: generateRandomString(),
    content: '',
    highlight: '',
  })

  function handleAddJoke(event) {
    event.preventDefault()
    setJokes([...jokes, joke])
    setJoke({ id: generateRandomString(), content: '', highlight: '' })
  }

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

      <form className="space-y-3" onSubmit={handleAddJoke}>
        <label htmlFor="joke" className="block">
          Enter your joke
        </label>
        <input
          id="joke"
          type="text"
          value={joke.content}
          onChange={(event) =>
            setJoke({ ...joke, content: event.target.value, highlight: '' })
          }
          className="rounded-md px-2 py-1 leading-8 text-black"
        />
        <button
          type="submit"
          className="ml-2 rounded-md bg-gray-200 px-6 py-2 font-medium text-black"
        >
          Add
        </button>
      </form>

      {/* Preview */}
    </main>
  )
}
