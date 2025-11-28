'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import logo from '@/assets/logo.png'

export default function Header() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => setToggle(!toggle)

  return (
    <header className="flex justify-between items-center px-8 pt-8 pb-8 bg-primary text-[#facb33] fixed w-full z-10 shadow">
      <Link href="/" className="logo flex items-center">
        <Image src={logo} alt="Olatocode Logo" width={64} height={64} className="h-16 w-auto" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav Overlay */}
      {toggle && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={handleToggle}
        ></div>
      )}
      {/* Mobile Nav */}
      <nav
        className={`mobile-nav fixed top-0 left-0 h-full w-3/4 max-w-xs bg-primary text-[#facb33] z-50 transform transition-transform duration-300 md:hidden ${toggle ? 'translate-x-0' : '-translate-x-full'} rounded-r-2xl shadow-lg`}
        style={{ minHeight: '100vh' }}
      >
        {toggle && (
          <button onClick={handleToggle} className="absolute top-4 right-4 p-2 bg-[#facb33] rounded-full text-primary shadow-lg">
            <AiOutlineClose size={32} />
          </button>
        )}
        <ul className="flex flex-col mt-20 space-y-0 px-8 text-lg font-semibold divide-y divide-[#facb33] divide-opacity-60">
          <li className="py-4"><Link href="/" onClick={handleToggle}>Home</Link></li>
          <li className="py-4"><a href="#projects" onClick={handleToggle}>Projects</a></li>
          <li className="py-4"><a href="#blog" onClick={handleToggle}>Blog</a></li>
          <li className="py-4"><a href="#about" onClick={handleToggle}>About</a></li>
          <li className="py-4"><a href="#skills" onClick={handleToggle}>Skills</a></li>
          <li className="py-4"><a href="#contact" onClick={handleToggle}>Contact</a></li>
        </ul>
      </nav>

      {/* Toggle button */}
      {!toggle && (
        <button onClick={handleToggle} className="block md:hidden z-50">
          <AiOutlineMenu size={30} />
        </button>
      )}
    </header>
  )
}
