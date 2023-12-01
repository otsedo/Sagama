import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'


export const metadata: Metadata = {
  title: 'Sagama Administración y Mantenimiento | Santiago de los Caballeros',
  description: 'Somos una empresa especializada en la administración y mantenimiento de condominios residenciales, comprometida en garantizar el correcto funcionamiento y la seguridad de las instalaciones para que los propietarios disfruten de un hogar tranquilo y sin preocupaciones.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  )
}
