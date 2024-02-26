import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gabriel Accetta',
  description:
    'Portifolio website of Gabriel Accetta, Software Developer in Brazil',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} h-svh bg-night-black text-white transition-all`}
      >
        {children}
      </body>
    </html>
  )
}
