import { Noto_Serif_KR, Noto_Sans_KR, Space_Mono } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif_KR({
  weight: ['500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif'
})

const notoSans = Noto_Sans_KR({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-sans'
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata = {
  title: 'PAIAX — 실용인공지능협회',
  description: 'PAIAX는 알고 있는 것을 실제 결과물로 만드는 협회입니다. 실제 수상 실적, 실제 결과물, 실제 수익창출까지도 가능합니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${notoSerif.variable} ${notoSans.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
