'use client'

import { useState, useEffect } from 'react'
import CaseSection from '@/components/main/CaseSection'
import MainSection from '@/components/main/MainSection'
import ProductSection from '@/components/main/ProductSection'

export default function HomePage() {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // 세션 스토리지 체크 (이미 애니메이션을 봤다면 바로 완료 상태로)
    const hasShownIntro = sessionStorage.getItem('intro_shown')
    if (hasShownIntro) {
      setAnimationComplete(true)
    }
  }, [])

  return (
    <>
      <MainSection onAnimationComplete={() => setAnimationComplete(true)} />
      <ProductSection />
      {/*From the news 제거*/}
      {/* <CaseSection /> */}
    </>
  )
}
