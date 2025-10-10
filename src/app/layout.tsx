import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: '서경산업 - 논슬립, 굽도리, 마감재 전문',
  description: '세라믹논슬립, 알루미늄논슬립, PVC논슬립, 걸레받이, 타일, 카페트마감재 생산및시공',
  keywords: ['논슬립', '굽도리', '마감재', '서경산업', '알루미늄논슬립', '세라믹논슬립'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}