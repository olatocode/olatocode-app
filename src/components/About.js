'use client'

import Image from 'next/image'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import AboutImg from '@/assets/laptop.webp'

export default function About() {
  return (
    <section className="bg-white text-gray-900 px-5 py-24 md:py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between gap-10">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-4 w-[180px] border-[#ab0020] pb-2">
            About Me
          </h2>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-[#ab0020] mb-3">What I Can Do For You</h3>
            <p className="text-lg mb-4">
              I'm <span className="font-semibold text-[#ab0020]">Tobi Awosola</span>, a Backend Engineer with 3+ years of experience building scalable APIs and backend systems for E‑commerce, FinTech, and healthcare products. I help teams turn business requirements into reliable backend services that are easy to maintain and extend.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#ab0020] mb-2">My Expertise</h3>
            <div className="space-y-3 text-lg">
              <div className="flex items-start gap-2">
                <AiOutlineCheckCircle className="mt-1 text-[#ab0020]" />
                <p>Design and build RESTful APIs and backend services (Node.js, Express.js, TypeScript)</p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheckCircle className="mt-1 text-[#ab0020]" />
                <p>Architect scalable systems for E‑commerce and FinTech products</p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheckCircle className="mt-1 text-[#ab0020]" />
                <p>Model and optimize databases with MongoDB, PostgreSQL, and MySQL</p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheckCircle className="mt-1 text-[#ab0020]" />
                <p>Implement secure authentication, authorization, and input validation</p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheckCircle className="mt-1 text-[#ab0020]" />
                <p>Collaborate with frontend teams to ship features end‑to‑end</p>
              </div>
            </div>
          </div>

          <p className="pb-3 text-lg">
            I thrive in collaborative environments, value clean, well‑tested code, and enjoy solving real‑world problems with technology. I'm always eager to learn, share knowledge, and contribute to impactful projects that move key business metrics.
          </p>
          <p className="text-lg">
            Outside of coding, I enjoy reading tech articles, contributing to open‑source, and mentoring aspiring developers.
          </p>
        </div>

        <div className="about-img flex justify-center md:justify-end">
          <Image
            src={AboutImg}
            alt="coding illustration"
            width={320}
            height={256}
            className="rounded-lg shadow-xl w-80 h-64 object-cover border-4 border-white"
          />
        </div>
      </div>
    </section>
  )
}
