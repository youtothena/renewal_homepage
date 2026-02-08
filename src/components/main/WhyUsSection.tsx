'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { useScrollAnimation } from '@/lib/useScrollAnimation'
import { keyframes } from '@emotion/react'

interface Strength {
  icon: string
  title: string
  description: string
  highlight: string
}

const strengths: Strength[] = [
  {
    icon: '🏭',
    title: '자체 생산 시스템',
    description: '자체 공장에서 직접 생산하여 품질을 관리하고 합리적인 가격을 실현합니다.',
    highlight: '직접 생산',
  },
  {
    icon: '🔬',
    title: '품질 인증 획득',
    description: 'KS 인증 및 각종 시험 성적서를 보유한 검증된 제품을 공급합니다.',
    highlight: 'KS 인증',
  },
  {
    icon: '🛠️',
    title: '시공까지 원스톱',
    description: '제품 생산부터 현장 시공까지 원스톱으로 진행하여 책임 시공을 보장합니다.',
    highlight: '원스톱 서비스',
  },
  {
    icon: '📋',
    title: '맞춤형 솔루션',
    description: '현장 환경에 맞는 최적의 제품과 시공 방법을 제안하여 만족도를 높입니다.',
    highlight: '맞춤 설계',
  },
]

export default function WhyUsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  return (
    <WhyUsWrapper ref={ref}>
      <WhyUsContainer $isVisible={isVisible}>
        <ContentLayout>
          <LeftContent>
            <SectionLabel $isVisible={isVisible}>WHY US</SectionLabel>
            <SectionTitle>
              왜 서경산업을<br />선택해야 할까요?
            </SectionTitle>
            <SectionDescription>
              18년간 축적된 노하우와 자체 생산 시스템으로<br />
              안전과 품질 모두를 충족하는 솔루션을 제공합니다.
            </SectionDescription>
            <HighlightBar $isVisible={isVisible} />
          </LeftContent>

          <RightContent>
            <StrengthGrid>
              {strengths.map((item, index) => (
                <StrengthCard
                  key={index}
                  $delay={index * 0.12}
                  $isVisible={isVisible}
                >
                  <CardIcon>{item.icon}</CardIcon>
                  <CardContent>
                    <CardHighlight>{item.highlight}</CardHighlight>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </StrengthCard>
              ))}
            </StrengthGrid>
          </RightContent>
        </ContentLayout>
      </WhyUsContainer>
    </WhyUsWrapper>
  )
}

// 애니메이션
const expandWidth = keyframes`
  from {
    width: 0;
  }
  to {
    width: 80px;
  }
`

const WhyUsWrapper = styled.section`
  width: 100%;
  padding: 120px 0;
  background: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`

const WhyUsContainer = styled.div<{ $isVisible: boolean }>`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '40px'});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`

const LeftContent = styled.div`
  position: sticky;
  top: 120px;

  @media (max-width: 1024px) {
    position: static;
    text-align: center;
  }
`

const SectionLabel = styled.div<{ $isVisible: boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.primary};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 20px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.6s ease 0.2s;
`

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  color: ${theme.colors.text.primary};
  margin: 0 0 24px 0;
  line-height: 1.3;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const SectionDescription = styled.p`
  font-size: 16px;
  color: ${theme.colors.text.secondary};
  margin: 0 0 32px 0;
  line-height: 1.8;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 14px;
    br { display: none; }
  }
`

const HighlightBar = styled.div<{ $isVisible: boolean }>`
  height: 4px;
  background: ${theme.colors.primary};
  border-radius: 2px;
  animation: ${props => props.$isVisible ? expandWidth : 'none'} 0.8s ease forwards;
  animation-delay: 0.4s;
  width: 0;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`

const RightContent = styled.div``

const StrengthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

const StrengthCard = styled.div<{ $delay: number; $isVisible: boolean }>`
  background: ${theme.colors.background.gray};
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '30px'});
  transition: opacity 0.6s ease ${props => props.$delay + 0.3}s,
              transform 0.6s ease ${props => props.$delay + 0.3}s,
              box-shadow 0.3s ease,
              border-color 0.3s ease;
  border: 1px solid transparent;
  cursor: default;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    border-color: ${theme.colors.primary};
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`

const CardIcon = styled.div`
  font-size: 36px;
  line-height: 1;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CardHighlight = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${theme.colors.primary};
  letter-spacing: 1px;
  text-transform: uppercase;
`

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin: 0;
`

const CardDescription = styled.p`
  font-size: 14px;
  color: ${theme.colors.text.secondary};
  margin: 0;
  line-height: 1.7;
  word-break: keep-all;
`

