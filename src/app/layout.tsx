import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Dhiraj | Premium Choreographer',
  description: 'Choreographing Excellence. Premium choreography for film, television, luxury weddings, and live entertainment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  )
}
