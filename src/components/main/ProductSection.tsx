'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import Link from 'next/link'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

interface Product {
  id: string
  name: string
  description: string
  image: string
  link: string
}

const products: Product[] = [
  {
    id: '1',
    name: '논슬립',
    description: '안전을 위한 필수 설비',
    image: '/images/test/main_product_01.png',
    link: '/products/nonslip',
  },
  {
    id: '2',
    name: '마감재',
    description: '건축의 완성도를 높이는 디테일',
    image: '/images/test/main_product_02.png',
    link: '/products/baseboard',
  },
  {
    id: '3',
    name: '굽도리',
    description: '고급스러운 벽과 바닥의 경계',
    image: '/images/test/main_product_03.png',
    link: '/products/wallBase',
  },
]

export default function ProductSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  return (
    <ProductWrapper ref={ref}>
      <ProductContainer $isVisible={isVisible}>
        <SectionHeader>
          <SectionLabel $isVisible={isVisible}>PRODUCTS</SectionLabel>
          <SectionTitle>제품소개</SectionTitle>
          <SectionSubtitle>
            논슬립 · 마감재 · Wall Base — 안전을 디자인하는 서경산업
          </SectionSubtitle>
        </SectionHeader>

        <ProductGrid>
          {products.map((product, index) => (
            <ProductCard key={product.id} href={product.link} $delay={index * 0.15} $isVisible={isVisible}>
              <ProductImageWrapper>
                <ProductImage src={product.image} alt={product.name} />
                <ProductOverlay>
                  <OverlayText>자세히 보기 →</OverlayText>
                </ProductOverlay>
              </ProductImageWrapper>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>

        <ViewAllButton href="/products" $isVisible={isVisible}>
          전체 제품 보기
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </ViewAllButton>
      </ProductContainer>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background: ${theme.colors.background.gray};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`

const ProductContainer = styled.div<{ $isVisible: boolean }>`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '40px'});
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`

const SectionLabel = styled.div<{ $isVisible: boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.primary};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.6s ease 0.2s;
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
  }
`

const ViewAllButton = styled(Link)<{ $isVisible: boolean }>`
  padding: 14px 32px;
  background: transparent;
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 48px auto 0;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '20px'});
  transition: opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s, background 0.3s, color 0.3s, box-shadow 0.3s;

  &:hover {
    background: ${theme.colors.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(61, 111, 172, 0.3);
  }

  @media (max-width: 768px) {
    margin: 32px auto 0;
    padding: 12px 28px;
    font-size: 14px;
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

const ProductOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
`

const OverlayText = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
`

const ProductCard = styled(Link)<{ $delay: number; $isVisible: boolean }>`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '40px'});
  transition: opacity 0.6s ease ${props => props.$delay + 0.3}s,
              transform 0.6s ease ${props => props.$delay + 0.3}s,
              box-shadow 0.3s ease;

  /* isVisible 완료 후 hover 트랜지션은 딜레이 없이 동작하도록 */
  ${props => props.$isVisible && `
    transition: opacity 0.3s ease,
                transform 0.3s ease,
                box-shadow 0.3s ease;
  `}

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);

    ${ProductOverlay} {
      opacity: 1;
    }
  }
`

const ProductImageWrapper = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: ${theme.colors.background.gray};
  position: relative;
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${ProductCard}:hover & {
    transform: scale(1.08);
  }
`

const ProductInfo = styled.div`
  padding: 28px;
  background: white;
`

const ProductName = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin: 0 0 8px 0;
`

const ProductDescription = styled.p`
  font-size: 14px;
  color: ${theme.colors.text.secondary};
  margin: 0;
  line-height: 1.6;
`
