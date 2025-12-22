'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Highlights from '@/components/Highlights'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import WhatsAppFloating from '@/components/WhatsAppFloating'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Highlights />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppFloating />
    </>
  )
}

