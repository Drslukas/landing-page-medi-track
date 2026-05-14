import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'MediTrack - Transformando a Adesão Medicamentosa',
  description: 'Plataforma moderna de acompanhamento medicamentoso e telemedicina que conecta pacientes, médicos e cuidadores.',
  keywords: 'meditrack, saúde, medicamentos, telemedicina, adesão medicamentosa, saúde digital',
}

export const viewport = {
  themeColor: '#00897B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
