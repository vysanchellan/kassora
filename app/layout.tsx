import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kassora — Next-Gen SaaS Marketing',
  description: 'Kassora empowers brands with AI-driven marketing intelligence. Launch faster, grow smarter.',
  openGraph: {
    title: 'Kassora',
    description: 'Next-generation SaaS marketing platform.',
    siteName: 'Kassora',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="noise antialiased">{children}</body>
    </html>
  )
}
