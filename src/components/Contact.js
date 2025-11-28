'use client'

export default function Contact() {
  return (
    <section className="bg-gradient-to-br from-[#facb33] via-[#f8d966] to-[#f5e699] px-5 py-24 md:py-32" id="contact">
      <div className="text-center md:w-[70%] mx-auto text-dark">
        <h2 className="text-4xl font-bold mb-5 border-b-4 w-[200px] mx-auto border-[#ab0020] pb-2">
          Let's Work Together
        </h2>
        <p className="text-xl mb-6 font-semibold">
          I am currently open for a <span className="text-[#ab0020]">Full-time Backend Engineer</span> role
        </p>
        <p className="text-lg mb-8">
          Looking for a backend engineer who can build scalable APIs, optimize database performance, and deliver clean, maintainable code? Let's discuss how I can contribute to your team's success.
        </p>
        
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-6 h-6 text-[#ab0020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <a href="mailto:awosolat@gmail.com" className="text-[#ab0020] hover:underline">
                  awosolat@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-6 h-6 text-[#ab0020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-700">Phone</p>
                <a href="tel:+2348032289461" className="text-[#ab0020] hover:underline">
                  +234-8032289461
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/olatocode"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#0F172A] text-white rounded-lg hover:bg-[#ab0020] transition font-semibold"
            >
              View GitHub
            </a>
            <a
              href="https://twitter.com/olatocode"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#0F172A] text-white rounded-lg hover:bg-[#ab0020] transition font-semibold"
            >
              Connect on X
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
