'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { useScrollAnimation } from '@/lib/useScrollAnimation'
import { keyframes } from '@emotion/react'
import { useModalStore } from '@/store/modalStore'

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  const { openModal } = useModalStore()

  return (
    <CTAWrapper ref={ref}>
      <CTABackground />
      <CTAContainer $isVisible={isVisible}>
        <CTALabel $isVisible={isVisible}>CONTACT US</CTALabel>
        <CTATitle>
          안전한 공간,<br />지금 시작하세요.
        </CTATitle>
        <CTADescription>
          논슬립 · 마감재 · 굽도리 전문 서경산업이<br />
          최적의 솔루션을 제안해 드립니다.
        </CTADescription>

        <CTAFeatures $isVisible={isVisible}>
          <FeatureItem $delay={0} $isVisible={isVisible}>
            <FeatureIcon>⚡</FeatureIcon>
            <FeatureText>빠른 견적</FeatureText>
          </FeatureItem>
          <FeatureDivider />
          <FeatureItem $delay={0.1} $isVisible={isVisible}>
            <FeatureIcon>📞</FeatureIcon>
            <FeatureText>무료 상담</FeatureText>
          </FeatureItem>
          <FeatureDivider />
          <FeatureItem $delay={0.2} $isVisible={isVisible}>
            <FeatureIcon>🏗️</FeatureIcon>
            <FeatureText>책임 시공</FeatureText>
          </FeatureItem>
        </CTAFeatures>

        <CTAButtonGroup $isVisible={isVisible}>
          <CTAPrimaryButton onClick={() => openModal('contact')}>
            무료 상담 신청하기
            <ButtonArrow>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </ButtonArrow>
          </CTAPrimaryButton>
          <CTAPhoneLink href="tel:031-571-6890">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            031-571-6890
          </CTAPhoneLink>
        </CTAButtonGroup>
      </CTAContainer>
    </CTAWrapper>
  )
}

// 애니메이션
const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`

const float = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
`

const CTAWrapper = styled.section`
  width: 100%;
  padding: 140px 0;
  background: ${theme.colors.text.primary};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`

const CTABackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 30%, rgba(61, 111, 172, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(61, 111, 172, 0.1) 0%, transparent 50%);
  pointer-events: none;
`

const CTAContainer = styled.div<{ $isVisible: boolean }>`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: center;
  position: relative;
  z-index: 1;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '40px'});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`

const CTALabel = styled.div<{ $isVisible: boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.primary};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 24px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.6s ease 0.2s;
`

const CTATitle = styled.h2`
  font-size: 52px;
  font-weight: 800;
  color: white;
  margin: 0 0 24px 0;
  line-height: 1.2;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`

const CTADescription = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 48px 0;
  line-height: 1.8;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 36px;
    br { display: none; }
  }
`

const CTAFeatures = styled.div<{ $isVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 48px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.6s ease 0.4s;

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 36px;
  }
`

const FeatureItem = styled.div<{ $delay: number; $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '20px'});
  transition: opacity 0.5s ease ${props => props.$delay + 0.5}s,
              transform 0.5s ease ${props => props.$delay + 0.5}s;
`

const FeatureIcon = styled.div`
  font-size: 28px;
  line-height: 1;
`

const FeatureText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
`

const FeatureDivider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.15);
`

const CTAButtonGroup = styled.div<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '20px'});
  transition: opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s;
`

const ButtonArrow = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  animation: ${float} 1.5s ease-in-out infinite;
`

const CTAPrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 48px;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 3s ease-in-out infinite;
  }

  &:hover {
    background: #2d5a8f;
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(61, 111, 172, 0.4);
  }

  @media (max-width: 768px) {
    padding: 16px 40px;
    font-size: 16px;
    width: 100%;
  }
`

const CTAPhoneLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`

