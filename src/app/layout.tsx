import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Dhiraj Bhalerao | Premium Cinematic Choreographer',
  description: 'Award-winning choreography for film, television, luxury weddings, and live entertainment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <body className="antialiased text-[var(--color-pearl-text)] relative min-h-screen bg-[var(--color-midnight-navy)]">
        <div className="aurora-bg">
          <div className="particles-mesh"></div>
          <div className="aurora-blob blob-1"></div>
          <div className="aurora-blob blob-2"></div>
          <div className="aurora-blob blob-3"></div>
          <div className="aurora-blob blob-4"></div>
          <div className="light-beam"></div>
        </div>
        {children}
      </body>
    </html>
  )
}
