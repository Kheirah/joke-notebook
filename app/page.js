'use client'

import Image from 'next/image'
import Squirrel from '@/public/squirrel-lol.png'

export default function Home() {
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

      {/* Jokes */}
      {/* Form */}
      {/* Preview */}
    </main>
  )
}
