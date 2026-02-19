import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
} 

export const metadata: Metadata = {
  title: 'ChronosTek',
  description: 'Proteja sua empresa com soluções avançadas de cibersegurança. Monitoramento 24/7, proteção contra ameaças e compliance.',
  keywords: 'cibersegurança, segurança digital, proteção de dados, monitoramento, ChronosTech',
  authors: [{ name: 'ChronosTech' }],
  openGraph: {
    title: 'ChronosTech - Soluções de Cibersegurança',
    description: 'Proteja sua empresa com soluções avançadas de cibersegurança.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-pattern">
        {children}
      </body>
    </html>
  )
}
