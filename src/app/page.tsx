'use client'

import { useState, useEffect } from 'react'
import MainSection from '@/components/main/MainSection'
import ProductSection from '@/components/main/ProductSection'
import WhyUsSection from '@/components/main/WhyUsSection'
import ProcessSection from '@/components/main/ProcessSection'
import CTASection from '@/components/main/CTASection'

export default function HomePage() {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const hasShownIntro = sessionStorage.getItem('intro_shown')
    if (hasShownIntro) {
      setAnimationComplete(true)
    }
  }, [])

  return (
    <>
      {/* 섹션 1: 히어로 (인트로 애니메이션 + 통계) */}
      <MainSection onAnimationComplete={() => setAnimationComplete(true)} />
      {/* 섹션 2: 제품소개 */}
      <ProductSection />
      {/* 섹션 3: 왜 서경산업인가 */}
      <WhyUsSection />
      {/* 섹션 4: 프로세스 (상담 → 설계 → 시공) */}
      <ProcessSection />
      {/* 섹션 5: CTA (문의하기 유도) */}
      <CTASection />
    </>
  )
}
