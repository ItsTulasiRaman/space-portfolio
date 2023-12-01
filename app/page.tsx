import Encryption from '@/components/main/Encrption'
import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'
import Image from 'next/image'

// Installation files:
// npm install --save-dev framer-motion three react-intersection-observer @react-three/drei @react-three/fiber @heroicons/react


export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
        <Encryption />
      </div>
    </main>
  )
}
