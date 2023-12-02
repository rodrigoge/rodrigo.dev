import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({
  weight: ['300', '400', '500', '600', '800'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Rodrigo Gouveia - Dev',
  description: 'An open-source dedicated by my portfolio web, describing some informations about me and my experiences in my career.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
