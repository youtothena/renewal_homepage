'use client'

import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Link from 'next/link'
import { theme } from '@/styles/theme'
import Header from '@/components/layout/Header'

export default function HomePage() {
  return (
    <Container>
      <Header />
      {/* 메인 슬라이더 */}
      <MainSlider>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          loop
        >
          <SwiperSlide>
            <SlideImage src="/images/test/main_rolling.jpg" alt="슬라이드 1" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage src="/images/test/main_rolling01.jpg" alt="슬라이드 2" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage src="/images/test/main_rolling02.jpg" alt="슬라이드 3" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage src="/images/test/main_rolling03.jpg" alt="슬라이드 4" />
          </SwiperSlide>
        </Swiper>
      </MainSlider>

      {/* 제품 소개 */}
      <ProductSection>
        <SectionTitle>주요 제품</SectionTitle>
        <ProductGrid>
          <ProductCard>
            <ProductImage src="/images/test/p1.jpg" alt="AL 60-S" />
            <ProductName>AL 60-S 알루미늄 논슬립</ProductName>
          </ProductCard>
          <ProductCard>
            <ProductImage src="/images/test/p1.jpg" alt="AL 60" />
            <ProductName>AL 60 축광 논슬립</ProductName>
          </ProductCard>
          <ProductCard>
            <ProductImage src="/images/test/p1.jpg" alt="AL 601-1" />
            <ProductName>AL 601-1 논슬립</ProductName>
          </ProductCard>
          <ProductCard>
            <ProductImage src="/images/test/p1.jpg" alt="AL 50" />
            <ProductName>AL 50 알루미늄 논슬립</ProductName>
          </ProductCard>
        </ProductGrid>
      </ProductSection>

      {/* 퀵 메뉴 */}
      <QuickMenu>
        <QuickCard href="/gallery">
          <QuickImage src="/images/test/construction.jpg" alt="시공갤러리" />
          <QuickTitle>시공갤러리</QuickTitle>
        </QuickCard>
        <QuickCard href="/about/greeting">
          <QuickImage src="/images/test/construction.jpg" alt="회사소개" />
          <QuickTitle>회사소개</QuickTitle>
        </QuickCard>
      </QuickMenu>

      {/* 하단 메뉴 */}
      <BottomMenu>
        <BottomCard href="/inquiry">
          <BottomIcon src="/images/test/menu_01.jpg" alt="온라인문의" />
          <BottomTitle>온라인문의</BottomTitle>
          <BottomDesc>
            모든 이들에게 많은 도움을 드리기 위해<br />
            지속적인 관리와 함께 체계적인 관리를<br />
            접할 수 있게 하겠습니다.
          </BottomDesc>
        </BottomCard>
        <BottomCard href="/about/location">
          <BottomIcon src="/images/test/menu_01.jpg" alt="찾아오시는길" />
          <BottomTitle>찾아오시는길</BottomTitle>
          <BottomDesc>
            서경산업 오시는길을 알려드리겠습니다.<br />
            경기도 남양주시 오남읍 양지리 549번지<br />
            로 오시면 됩니다.
          </BottomDesc>
        </BottomCard>
        <BottomCard href="/about/greeting">
          <BottomIcon src="/images/test/menu_01.jpg" alt="회사소개" />
          <BottomTitle>회사소개</BottomTitle>
          <BottomDesc>
            회사 정보 및 현황 등을 소개하기 위해 작성하는<br />
            문서를 말하며 회사소개글은 정보를 이해할 수<br />
            있도록 도움을 주는 수단입니다.
          </BottomDesc>
        </BottomCard>
      </BottomMenu>
    </Container>
  )
}

const Container = styled.main`
  width: 100%;
`

const MainSlider = styled.section`
  width: 100%;
  height: 658px;
`

const SlideImage = styled.img`
  width: 100%;
  height: 658px;
  object-fit: cover;
`

const ProductSection = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
`

const SectionTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 50px;
  color: ${theme.colors.primary};
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`

const ProductCard = styled.div`
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
`

const ProductName = styled.p`
  margin-top: 15px;
  font-size: 16px;
  color: ${theme.colors.text.primary};
`

const QuickMenu = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
  padding: 0 20px;
`

const QuickCard = styled(Link)`
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-decoration: none;

  &:hover img {
    transform: scale(1.1);
  }
`

const QuickImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s;
`

const QuickTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const BottomMenu = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
`

const BottomCard = styled(Link)`
  background: white;
  border: 1px solid ${theme.colors.border.light};
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

const BottomIcon = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
`

const BottomTitle = styled.h3`
  font-size: 24px;
  color: ${theme.colors.primary};
  margin-bottom: 15px;
`

const BottomDesc = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${theme.colors.text.secondary};
`