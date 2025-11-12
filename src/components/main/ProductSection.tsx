'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import Link from 'next/link'

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
    image: '/images/test/content_01.png',
    link: '#',
  },
  {
    id: '2',
    name: '마감재',
    description: '건축의 완성도를 높이는 디테일',
    image: '/images/test/content_02.png',
    link: '#',
  },
  {
    id: '3',
    name: '굽도리',
    description: '고급스러운 벽과 바닥의 경계',
    image: '/images/test/content_03.png',
    link: '#',
  },
]

export default function ProductSection() {
  return (
    <ProductWrapper>
      <ProductContainer>
        <SectionHeader>
          <SectionTitle>제품소개</SectionTitle>
          <SectionSubtitle>
            논슬립 · 마감재 · Wall Base — 안전을 디자인하는 서경산업
          </SectionSubtitle>
        </SectionHeader>

        <ViewAllButton href="/#">바로가기</ViewAllButton>

        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} href={product.link}>
              <ProductImageWrapper>
                <ProductImage src={product.image} alt={product.name} />
              </ProductImageWrapper>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductContainer>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background: white;
`

const ProductContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  color: ${theme.colors.text.primary};
  margin: 0 0 16px 0;
`

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: ${theme.colors.text.secondary};
  margin: 0;
`

const ViewAllButton = styled(Link)`
  position: absolute;
  top: 20px;
  right: 40px;
  padding: 10px 24px;
  background: ${theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s;

  &:hover {
    background: #2d5a8f;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    position: static;
    display: inline-block;
    margin: 0 auto 40px;
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled(Link)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s;
  border: 1px solid ${theme.colors.border.light};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
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
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.1);
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