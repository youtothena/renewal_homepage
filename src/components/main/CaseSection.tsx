'use client'

import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import Link from 'next/link'
import { theme } from '@/styles/theme'
import 'swiper/css'
import 'swiper/css/navigation'

interface CaseStudy {
  id: number
  date: string
  title: string
  subtitle: string
  category: string
  image: string
  link: string
}

export default function CaseSection() {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      date: '28\nAUG',
      title: '강남 오피스텔 논슬립 시공',
      subtitle: '고급 알루미늄 논슬립 적용',
      category: 'LED Fixtures, LED Lamp',
      image: '/images/test/construction.jpg',
      link: '/gallery/1',
    },
    {
      id: 2,
      date: '28\nAUG',
      title: '아파트 계단 논슬립 시공',
      subtitle: '미끄럼 방지 안전 시공',
      category: 'LED Fixtures, LED Lamp',
      image: '/images/test/construction.jpg',
      link: '/gallery/2',
    },
    {
      id: 3,
      date: '28\nAUG',
      title: '상가 건물 굽도리 시공',
      subtitle: '깔끔한 마감 처리',
      category: 'LED Fixtures, LED Lamp',
      image: '/images/test/construction.jpg',
      link: '/gallery/3',
    },
    {
      id: 4,
      date: '28\nAUG',
      title: '학교 시설 논슬립 시공',
      subtitle: '내구성 강화 제품 적용',
      category: 'LED Fixtures, LED Lamp',
      image: '/images/test/construction.jpg',
      link: '/gallery/4',
    },
  ]

  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionTitle>FROM THE NEWS</SectionTitle>
        <Underline />
      </SectionHeader>

      <SliderWrapper>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 5000 }}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {caseStudies.map((study) => (
            <SwiperSlide key={study.id}>
              <CaseCard>
                <CardImage>
                  <img src={study.image} alt={study.title} />
                  <DateBadge>{study.date}</DateBadge>
                  <Overlay>
                    <OverlayContent>
                      <OverlayTitle>{study.title}</OverlayTitle>
                      <OverlaySubtitle>{study.subtitle}</OverlaySubtitle>
                      <OverlayCategory>{study.category}</OverlayCategory>
                      <ReadMore href={study.link}>READ FULL NEWS</ReadMore>
                    </OverlayContent>
                  </Overlay>
                </CardImage>
              </CaseCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>

      <ViewAllButton href="/gallery">
        READ THE CASE STUDY
      </ViewAllButton>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  background: #f0f0f0;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
`

const SectionHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 60px;
`

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #202020;
  font-weight: 300;
  letter-spacing: 2px;
  margin: 0 0 15px 0;
`

const Underline = styled.div`
  width: 80px;
  height: 3px;
  background: #f39c12;
`

const SliderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  .swiper {
    padding: 20px 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: white;
    
    &::after {
      font-size: 30px;
    }
  }
`

const CaseCard = styled.div`
  background: #333;
  border-radius: 8px;
  overflow: hidden;
  height: 400px;
`

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    > div:last-of-type {
      opacity: 1;
    }
  }
`

const DateBadge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  white-space: pre-line;
  z-index: 2;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(139, 90, 43, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s;
  padding: 40px;
`

const OverlayContent = styled.div`
  text-align: center;
  color: white;
`

const OverlayTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 10px 0;
  line-height: 1.3;
`

const OverlaySubtitle = styled.p`
  font-size: 16px;
  margin: 0 0 15px 0;
  opacity: 0.9;
`

const OverlayCategory = styled.p`
  font-size: 14px;
  margin: 0 0 25px 0;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const ReadMore = styled(Link)`
  display: inline-block;
  color: white;
  text-decoration: none;
  border-bottom: 2px solid #f39c12;
  padding-bottom: 5px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  transition: border-color 0.3s;

  &:hover {
    border-color: white;
  }
`

const ViewAllButton = styled(Link)`
  display: block;
  max-width: 300px;
  margin: 60px auto 0;
  padding: 15px 40px;
  background: transparent;
  border: 2px solid #f39c12;
  color: #202020;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  transition: all 0.3s;

  &:hover {
    background: #f39c12;
    transform: translateY(-3px);
  }
`