'use client'

import Image from 'next/image'
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
              I'm <span className="font-semibold text-[#ab0020]">Tobi Awosola</span>, a Backend Engineer with 3+ years of experience building scalable, high-performance web applications and APIs. I specialize in designing robust backend systems that power modern web and mobile applications.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#ab0020] mb-2">My Expertise</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Design and develop RESTful APIs and microservices architectures</li>
              <li>Build scalable E-commerce and FinTech backend systems</li>
              <li>Optimize database performance with MongoDB, PostgreSQL, and MySQL</li>
              <li>Implement secure authentication and authorization systems</li>
              <li>Write clean, maintainable, and well-documented code</li>
            </ul>
          </div>

          <p className="pb-5 text-lg">
            I thrive in collaborative environments, value clean code, and enjoy solving real-world problems with technology. I'm always eager to learn, share knowledge, and contribute to impactful projects that drive business growth.
          </p>
          <p className="text-lg">
            Outside of coding, I enjoy reading tech articles, contributing to open-source projects, and mentoring aspiring developers.
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
