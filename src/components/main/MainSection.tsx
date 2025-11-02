'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import Link from 'next/link'

export default function MainSection() {
  return (
    <HeroWrapper>
      <HeroContainer>
        <ContentSection>
          <MainTitle>
            한 걸음의 차이가,<br />
            안전을 만든다.
          </MainTitle>
          <SubTitle>
            모든 발걸음에 안정을, 모든 공간에 믿음을 더하는 서경산업
          </SubTitle>

          <StatsGrid>
            <StatItem>
              <StatNumber>10,000+</StatNumber>
              <StatLabel>시공 사례 수</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>29+</StatNumber>
              <StatLabel>제품 라인업</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>18+</StatNumber>
              <StatLabel>연혁</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>97.3%</StatNumber>
              <StatLabel>고객만족도</StatLabel>
            </StatItem>
          </StatsGrid>
        </ContentSection>

        <ImageSection>
          <ProductImage src="/images/test/main_bg.png" alt="서경산업 제품" />
        </ImageSection>
      </HeroContainer>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 80px 0 100px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, rgba(61, 111, 172, 0.03) 100%);
  }
`

const HeroContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const MainTitle = styled.h1`
  font-size: 56px;
  font-weight: 800;
  color: ${theme.colors.text.primary};
  line-height: 1.3;
  margin: 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

const SubTitle = styled.p`
  font-size: 18px;
  color: ${theme.colors.text.secondary};
  line-height: 1.7;
  margin: 0;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 20px;
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const StatNumber = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: ${theme.colors.primary};
  line-height: 1;
`

const StatLabel = styled.div`
  font-size: 14px;
  color: ${theme.colors.text.secondary};
  font-weight: 500;
`

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

  @media (max-width: 1024px) {
    height: 400px;
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
`