import type { Metadata } from 'next'
import './globals.css'
import { lusitana } from './ui/fonts'
import Header from '../components/header'
import StarsCanvas from './ui/starbackground'

export const metadata: Metadata = {
  title: 'Gabriel Accetta',
  description:
    'Gabriel Accetta is a full-stack developer with a focus on React and Python.',
  keywords: [
    'Gabriel Accetta',
    'Gabriel',
    'Accetta',
    'gabrielaccetta',
    'gabriel accetta',
    'software developer',
    'gabriel software developer',
  ],
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} bg-background text-white`}>
        <div className="min-h-screen border border-primary w-11/12 max-w-7xl mx-auto">
          <StarsCanvas />
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
