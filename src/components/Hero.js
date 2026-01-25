'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlineGithub } from 'react-icons/ai'
import { SiX } from 'react-icons/si'
import LinkedInImg from '@/assets/profile.jpg'

export default function Hero() {
  const fullText = 'I am Tobi Awosola'
  const prefix = 'I am '
  const namePart = 'Tobi Awosola'

  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(fullText.slice(0, i))
      if (i >= fullText.length) {
        clearInterval(interval)
      }
    }, 200)

    return () => clearInterval(interval)
  }, [])

  const typedPrefix = typed.slice(0, prefix.length)
  const typedName = typed.slice(prefix.length)

  return (
    <section className="bg-gradient-to-br from-[#facb33] via-[#f8d966] to-[#f5e699] px-5 py-24 md:py-32 text-gray-900">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between gap-10">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Hi,
            <br />
            <span className="inline-block">
              <span>{typedPrefix}</span>
              <span className="text-[#ab0020]">
                {typedName}
                {typed.length < fullText.length && <span className="animate-pulse">|</span>}
              </span>
            </span>
          </h1>

          <p className="py-5 text-lg text-gray-700">
            Backend Engineer with 4+ years of experience building scalable E-commerce and FinTech applications
            using Node.js, TypeScript, and Express.js.
          </p>
          
          <p className="py-5 text-lg text-gray-700">
            Proficient in designing RESTful APIs, working with both monolithic and microservices architectures,
            and managing databases like MongoDB and PostgreSQL.
            I focus on writing clean, secure and efficient backend code that drives performance and supports business growth.
          </p>

          <div className="flex py-5 space-x-4">
            <a
              href="https://twitter.com/olatocode"
              className="inline-block text-[#ab0020] hover:text-[#ab0020]"
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiX size={36} />
            </a>
            <a
              href="https://github.com/olatocode"
              className="inline-block text-gray-800 hover:text-black"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub size={36} />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="#projects"
              className="group relative bg-[#ab0020] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#8b0018] hover:shadow-lg hover:shadow-[#ab0020]/50 hover:-translate-y-1 active:translate-y-0"
            >
              <span className="relative z-10">See Projects</span>
            </a>
            <a
              href="/Tobi_Awosola_CV.pdf"
              download
              className="group relative bg-white text-[#ab0020] px-8 py-3 rounded-lg font-semibold border-2 border-[#ab0020] transition-all duration-300 hover:bg-[#ab0020] hover:text-white hover:shadow-lg hover:shadow-[#ab0020]/30 hover:-translate-y-1 active:translate-y-0"
            >
              <span className="relative z-10">Download Resume</span>
            </a>
          </div>
        </div>

        <div className="hero-img flex justify-center md:justify-end">
          <Image
            src={LinkedInImg}
            alt="Tobi Awosola LinkedIn profile"
            width={240}
            height={240}
            className="rounded-full w-60 h-60 object-cover object-center border-4 border-white shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
