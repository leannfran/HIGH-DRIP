import './globals.css'
import localFont from 'next/font/local'

const myFont = localFont({
  src: './NetworkFreeVersion.ttf',
  display: 'swap',
  variable: '--font-network',

})
export const metadata = {
  title: 'HIGH DRIP',
  description: 'En HighDrip 🖖🏽 , buscamos combinar el clásico estilo noventero, con los nuevos 2000s. Nuestra idea es respetar la esencia de cada prenda y que cada diseño tenga una historia para contar .',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${myFont.variable}`}>{children}</body>
    </html>
  )
}
