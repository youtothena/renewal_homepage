'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { useScrollAnimation } from '@/lib/useScrollAnimation'
import { keyframes } from '@emotion/react'
import { useState } from 'react'

interface ProcessStep {
  number: string
  title: string
  description: string
  icon: string
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: '상담',
    description: '현장 상황과 요구사항을 정밀하게 분석하여 최적의 솔루션을 제안합니다.',
    icon: '💬',
  },
  {
    number: '02',
    title: '설계',
    description: '공간의 특성을 고려한 맞춤형 설계로 안전성과 미관을 동시에 충족합니다.',
    icon: '📐',
  },
  {
    number: '03',
    title: '시공',
    description: '숙련된 전문가의 정밀한 시공으로 완벽한 품질을 보장합니다.',
    icon: '🔧',
  },
]

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <ProcessWrapper ref={ref}>
      <ProcessContainer $isVisible={isVisible}>
        <SectionLabel $isVisible={isVisible}>PROCESS</SectionLabel>
        <SectionHeader>
          <SectionTitle>안전을 완성하는 3단계</SectionTitle>
          <SectionSubtitle>
            상담부터 시공까지, 체계적인 프로세스로 완벽한 결과를 만들어냅니다
          </SectionSubtitle>
        </SectionHeader>

        <ProcessGrid>
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              $delay={index * 0.15}
              $isVisible={isVisible}
              $isActive={activeStep === index}
              onMouseEnter={() => setActiveStep(index)}
            >
              <ProcessNumber $isActive={activeStep === index}>{step.number}</ProcessNumber>
              <ProcessIcon>{step.icon}</ProcessIcon>
              <ProcessTitle>{step.title}</ProcessTitle>
              <ProcessDescription>{step.description}</ProcessDescription>
              
              {/* 스텝 간 연결선 (마지막 카드 제외) */}
              {index < processSteps.length - 1 && (
                <ConnectorArrow $isVisible={isVisible} $delay={index * 0.15 + 0.5}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={theme.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </ConnectorArrow>
              )}
            </ProcessCard>
          ))}
        </ProcessGrid>

        {/* 프로그레스 바 */}
        <ProgressBarWrapper $isVisible={isVisible}>
          <ProgressTrack>
            <ProgressFill $step={activeStep} />
          </ProgressTrack>
          <ProgressDots>
            {processSteps.map((_, index) => (
              <ProgressDot
                key={index}
                $isActive={activeStep >= index}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </ProgressDots>
        </ProgressBarWrapper>
      </ProcessContainer>
    </ProcessWrapper>
  )
}

// 애니메이션
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(61, 111, 172, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(61, 111, 172, 0);
  }
`

const ProcessWrapper = styled.section`
  width: 100%;
  padding: 120px 0;
  background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`

const ProcessContainer = styled.div<{ $isVisible: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '40px'});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`

const SectionLabel = styled.div<{ $isVisible: boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.primary};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: center;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.6s ease 0.2s;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 72px;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  color: ${theme.colors.text.primary};
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: ${theme.colors.text.secondary};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    word-break: keep-all;
    padding: 0 10px;
  }
`

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

const ProcessCard = styled.div<{ $delay: number; $isVisible: boolean; $isActive: boolean }>`
  background: white;
  padding: 48px 32px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  border: 2px solid ${props => props.$isActive ? theme.colors.primary : 'rgba(0, 0, 0, 0.04)'};
  box-shadow: ${props => props.$isActive
    ? '0 12px 32px rgba(61, 111, 172, 0.12)'
    : '0 4px 12px rgba(0, 0, 0, 0.04)'};
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '30px'})
             scale(${props => props.$isActive ? 1.02 : 1});
  transition: opacity 0.6s ease ${props => props.$delay + 0.3}s,
              transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.3s ease,
              box-shadow 0.3s ease;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 36px 24px;
  }
`

const ProcessNumber = styled.div<{ $isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.$isActive ? theme.colors.primary : theme.colors.background.gray};
  color: ${props => props.$isActive ? 'white' : theme.colors.text.secondary};
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 24px;
  transition: all 0.3s ease;
`

const ProcessIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  line-height: 1;
`

const ProcessTitle = styled.h3`
  font-size: 24px;
  font-weight: 800;
  color: ${theme.colors.text.primary};
  margin: 0 0 12px 0;
`

const ProcessDescription = styled.p`
  font-size: 14px;
  color: ${theme.colors.text.secondary};
  margin: 0;
  line-height: 1.8;
  word-break: keep-all;
`

const ConnectorArrow = styled.div<{ $isVisible: boolean; $delay: number }>`
  position: absolute;
  right: -24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  opacity: ${props => props.$isVisible ? 0.5 : 0};
  transition: opacity 0.6s ease ${props => props.$delay}s;

  @media (max-width: 768px) {
    display: none;
  }
`

const ProgressBarWrapper = styled.div<{ $isVisible: boolean }>`
  margin-top: 60px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.8s ease 0.8s;

  @media (max-width: 768px) {
    margin-top: 40px;
    max-width: 300px;
  }
`

const ProgressTrack = styled.div`
  width: 100%;
  height: 3px;
  background: ${theme.colors.background.gray};
  border-radius: 2px;
  position: relative;
  margin-bottom: 16px;
`

const ProgressFill = styled.div<{ $step: number }>`
  height: 100%;
  background: ${theme.colors.primary};
  border-radius: 2px;
  width: ${props => ((props.$step) / 2) * 100}%;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`

const ProgressDots = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProgressDot = styled.div<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$isActive ? theme.colors.primary : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${props => props.$isActive ? pulse : 'none'} 2s ease-in-out infinite;

  &:hover {
    background: ${theme.colors.primary};
    transform: scale(1.2);
  }
`

