'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/2348032289461?text=Hi%20Tobi%2C%20I%27d%20like%20to%20chat%20about%20a%20backend%20role."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Tobi on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#22c55e] text-white shadow-xl hover:bg-[#16a34a] transition-transform duration-300 hover:-translate-y-1"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}


