'use client'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CaseSection from '@/components/main/CaseSection'
import MainSection from '@/components/main/MainSection'
import ProductSection from '@/components/main/ProductSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <MainSection />
      <ProductSection />
      <CaseSection />
      <Footer />
    </>
  )
}