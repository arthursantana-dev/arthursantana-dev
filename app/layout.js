import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({weight: [
	'400', '500', '600', '800'
], subsets: ['latin'] })

export const metadata = {
  title: 'Arthur Santana',
  description: 'Sou designer gráfico e desenvolvedor de software',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
		{children}</body>
    </html>
  )
}
