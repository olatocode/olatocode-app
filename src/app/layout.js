import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Tobi Awosola - Backend Engineer Portfolio | Node.js & TypeScript Expert',
  description: 'Experienced Backend Engineer with 3+ years building scalable E-commerce and FinTech applications. Specialized in Node.js, Express.js, TypeScript, MongoDB, and PostgreSQL. Available for full-time backend engineering roles.',
  keywords: 'Backend Engineer, Node.js Developer, TypeScript, Express.js, MongoDB, PostgreSQL, REST APIs, FinTech, E-commerce, Software Engineer, Nigeria',
  authors: [{ name: 'Tobi Awosola' }],
  openGraph: {
    title: 'Tobi Awosola - Backend Engineer Portfolio',
    description: 'Backend Engineer with 3+ years of experience building scalable applications',
    type: 'website',
    url: 'https://olatocode-portfolio.vercel.app',
    images: [
      {
        url: '/logo192.png',
        width: 192,
        height: 192,
        alt: 'Tobi Awosola - Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tobi Awosola - Backend Engineer Portfolio',
    description: 'Backend Engineer specializing in Node.js, TypeScript, and scalable backend systems for FinTech and E-commerce.',
    images: ['/logo192.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}

