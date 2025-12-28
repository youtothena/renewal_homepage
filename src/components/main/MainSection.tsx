'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { useState, useEffect, useRef } from 'react'
import { keyframes } from '@emotion/react'
import { useUIStore } from '@/store/uiStore'

interface MainSectionProps {
  onAnimationComplete?: () => void
}

// 숫자 카운트 훅
const useCountUp = (end: number, duration = 2000, shouldStart: boolean) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // easeOutExpo
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [end, duration, shouldStart])

  return count
}

const AnimatedCounter = ({ end, suffix = '', shouldStart }: { end: number, suffix?: string, shouldStart: boolean }) => {
  const count = useCountUp(end, 2000, shouldStart)
  return <>{count.toLocaleString()}{suffix}</>
}

export default function MainSection({ onAnimationComplete }: MainSectionProps) {
  const [showLines, setShowLines] = useState<boolean[][]>([[], []])
  const [animationPhase, setAnimationPhase] = useState<'center' | 'moveLeft' | 'complete'>('center')
  const [shouldAnimateCount, setShouldAnimateCount] = useState(false)
  const setIntroDone = useUIStore(state => state.setIntroDone)

  const textLines = ['한 걸음의 차이가', '안전을 만든다.']
  
  useEffect(() => {
    // 세션 스토리지 확인 (애니메이션 한 번만 실행)
    // const hasShownIntro = sessionStorage.getItem('intro_shown')
    
    // if (hasShownIntro) {
    //   setAnimationPhase('complete')
    //   setShowLines(textLines.map(line => new Array(line.length).fill(true)))
    //   setShouldAnimateCount(true)
    //   onAnimationComplete?.()
    //   return
    // }

    // 애니메이션 시작
    let totalDelay = 0
    const charDelay = 50 // 글자당 딜레이 (ms)

    textLines.forEach((line, lineIndex) => {
      line.split('').forEach((_, charIndex) => {
        setTimeout(() => {
          setShowLines(prev => {
            const newLines = [...prev]
            if (!newLines[lineIndex]) newLines[lineIndex] = []
            newLines[lineIndex][charIndex] = true
            return newLines
          })
        }, totalDelay)
        totalDelay += charDelay
      })
      totalDelay += 300 
    })

    const moveTimer = setTimeout(() => {
      setAnimationPhase('moveLeft')
    }, totalDelay + 800)

    // 이동 완료 후 최종 상태 및 카운트 시작
    const completeTimer = setTimeout(() => {
      setAnimationPhase('complete')
      setShouldAnimateCount(true)
      onAnimationComplete?.()
      setIntroDone(true)
      sessionStorage.setItem('intro_shown', 'true')
    }, totalDelay + 800 + 1200)

    return () => {
      clearTimeout(moveTimer)
      clearTimeout(completeTimer)
    }
  }, [setIntroDone, onAnimationComplete])

  return (
    <HeroWrapper $phase={animationPhase}>
      <HeroContainer $phase={animationPhase}>
        <ContentSection $phase={animationPhase}>
          <MainTitle $phase={animationPhase}>
            {textLines.map((line, lineIndex) => (
              <TitleLine key={lineIndex}>
                {line.split('').map((char, charIndex) => (
                  <CharSpan
                    key={charIndex}
                    $show={showLines[lineIndex]?.[charIndex] || false}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </CharSpan>
                ))}
              </TitleLine>
            ))}
          </MainTitle>

          <SubTitleWrapper $phase={animationPhase}>
            <SubTitle>
              모든 발걸음에 안정을, 모든 공간에 믿음을 더하는 서경산업
            </SubTitle>
          </SubTitleWrapper>

          <StatsGrid $phase={animationPhase}>
            <StatItem>
              <StatNumber>
                <AnimatedCounter end={10000} suffix="+" shouldStart={shouldAnimateCount} />
              </StatNumber>
              <StatLabel>시공 사례 수</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>
                <AnimatedCounter end={29} suffix="+" shouldStart={shouldAnimateCount} />
              </StatNumber>
              <StatLabel>제품 라인업</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>
                <AnimatedCounter end={18} suffix="+" shouldStart={shouldAnimateCount} />
              </StatNumber>
              <StatLabel>연혁</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>
                <AnimatedCounter end={98} suffix="%" shouldStart={shouldAnimateCount} />
              </StatNumber>
              <StatLabel>고객만족도</StatLabel>
            </StatItem>
          </StatsGrid>
        </ContentSection>
      </HeroContainer>
    </HeroWrapper>
  )
}

// 애니메이션 정의
const charAppear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const HeroWrapper = styled.section<{ $phase: string }>`
  width: 100%;
  min-height: 90vh;
  // 배경 이미지는 가상 요소로 처리하여 opacity 조절
  position: relative;
  background-color: ${theme.colors.background.white}; // 초기 배경색 (흰색)
  padding: 0;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  // 배경 이미지 레이어
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/test/main_bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${props => props.$phase === 'complete' ? 1 : 0}; // complete일 때만 보임
    transition: opacity 1.5s ease;
    z-index: 0;
  }

  // 그라데이션 레이어 (배경 이미지 위에 얹어짐)
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 65%;
    background: linear-gradient(90deg, transparent 0%, rgba(61, 111, 172, 0.05) 100%);
    opacity: ${props => props.$phase === 'complete' ? 1 : 0};
    transition: opacity 1s ease;
    z-index: 1;

    @media (max-width: 768px) {
        width: 100%; /* 모바일에서는 전체 그라데이션 적용 */
        background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%);
    }
  }
`

const HeroContainer = styled.div<{ $phase: string }>`
  width: 100%;
  padding: 0 60px;
  position: relative;
  z-index: 2;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 


  @media (max-width: 768px) {
    padding: 0 24px; /* 패딩 축소 */
    /* 모바일 중앙 정렬 애니메이션 로직 */
    align-items: ${props => props.$phase === 'center' ? 'center' : 'flex-start'};
    text-align: ${props => props.$phase === 'center' ? 'center' : 'left'};
  }
`

const ContentSection = styled.div<{ $phase: string }>`
  display: flex;
  flex-direction: column;
  gap: 48px;
  text-align: left;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    gap: 32px; /* 간격 축소 */
    /* 모바일에서는 페이즈에 따라 정렬 변경 */
    align-items: ${props => props.$phase === 'center' ? 'center' : 'flex-start'};
    text-align: ${props => props.$phase === 'center' ? 'center' : 'left'};
  }
`

const MainTitle = styled.h1<{ $phase: string }>`
  font-size: ${props => props.$phase === 'center' ? '80px' : '64px'};
  font-weight: 800;
  color: ${theme.colors.text.primary};
  line-height: 1.2;
  margin: 0;
  letter-spacing: 0.15rem;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

  @media (max-width: 1200px) {
    font-size: ${props => props.$phase === 'center' ? '64px' : '52px'};
  }

  @media (max-width: 768px) {
    /* 모바일 폰트 사이즈 대폭 축소 및 white-space normal */
    font-size: ${props => props.$phase === 'center' ? '36px' : '32px'};
    white-space: normal;
    word-break: keep-all;
    width: 100%;
    line-height: 1.4;
  }
`

const SubTitleWrapper = styled.div<{ $phase: string }>`
  opacity: ${props => props.$phase === 'complete' ? 1 : 0};
  transform: translateY(${props => props.$phase === 'complete' ? '0' : '30px'});
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
  display: flex;
  align-items: center;
`

const TitleLine = styled.div`
  display: block;
`

const CharSpan = styled.span<{ $show: boolean }>`
  display: inline-block;
  opacity: ${props => props.$show ? 1 : 0};
  // 깜빡임 없이 부드럽게 나타나기 (타이핑 효과)
  animation: ${props => props.$show ? charAppear : 'none'} 0.1s linear forwards;
`

// const SubTitle = styled.p<{ $phase: string }>`
//   font-size: 20px;
//   color: ${theme.colors.text.secondary};
//   line-height: 1.7;
//   margin: 0;
//   opacity: ${props => props.$phase === 'complete' ? 1 : 0};
//   transform: translateY(${props => props.$phase === 'complete' ? '0' : '20px'});
//   transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
//   font-weight: 500;
//   max-width: 600px;
// `

const SubTitle = styled.p`
  font-size: 18px;
  color: #888;
  font-weight: 600;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 15px; /* 폰트 축소 */
    line-height: 1.5;
    word-break: keep-all;
  }
`

const StatsGrid = styled.div<{ $phase: string }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2열로 변경
  gap: 40px 100px;
  opacity: ${props => props.$phase === 'complete' ? 1 : 0};
  transform: translateY(${props => props.$phase === 'complete' ? '0' : '20px'});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  
  & > div:nth-of-type(odd) {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      right: -45px;
      top: 10%;
      height: 80%;
      width: 1px;
      background-color: rgba(0,0,0,0.1);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr); /* 모바일에서도 2열 유지하되 */
    gap: 20px; /* 간격 대폭 축소 */
    
    & > div:nth-of-type(odd)::after {
      display: none; /* 구분선 제거 */
    }
  }
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`

const StatNumber = styled.div`
  font-size: 38px;
  font-weight: 800;
  color: ${theme.colors.text.primary};
  line-height: 1.2;
  font-feature-settings: "tnum"; // 숫자 너비 고정
  font-variant-numeric: tabular-nums;
`

const StatLabel = styled.div`
  font-size: 14px;
  color: ${theme.colors.text.primary};
  letter-spacing: -0.01em;
  margin-left: 5px;
`

const ImageSection = styled.div<{ $phase: string }>`
  position: relative;
  width: 100%;
  height: 600px;
  opacity: ${props => props.$phase === 'complete' ? 1 : 0};
  transform: translateX(${props => props.$phase === 'complete' ? '0' : '50px'});
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;

  @media (max-width: 1024px) {
    height: 400px;
    margin-top: 40px;
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.12));
`
