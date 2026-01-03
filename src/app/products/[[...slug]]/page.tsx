'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { PRODUCT_DATA, Category, SubCategory, Product } from '@/data/productData'

interface PageProps {
  params: {
    slug?: string[]
  }
}

export default function ProductPage({ params }: PageProps) {
  const router = useRouter()
  const slug = params.slug || []
  
  // URL 파싱 및 기본값 설정 로직
  const categoryId = slug[0] || 'nonslip'
  const currentCategory = PRODUCT_DATA[categoryId]
  
  // 유효하지 않은 카테고리인 경우 처리 (옵션)
  if (!currentCategory) {
    // 404 처리 혹은 리다이렉트
    return null
  }

  const hasSubCategories = !!currentCategory.subCategories
  const subCategoryId = slug[1]
  
  // 서브카테고리가 있는데 선택되지 않았거나 잘못된 경우 첫 번째 서브카테고리로 리다이렉트
  // 단, 렌더링 중에 리다이렉트하면 에러가 날 수 있으므로 useEffect 사용
  useEffect(() => {
    if (!slug[0]) {
        router.replace('/products/nonslip/ceramic')
    } else if (hasSubCategories && !subCategoryId && currentCategory.subCategories) {
        router.replace(`/products/${categoryId}/${currentCategory.subCategories[0].id}`)
    }
  }, [slug, hasSubCategories, subCategoryId, categoryId, currentCategory, router])

  // 현재 보여줄 제품 리스트 결정
  let currentProducts: Product[] = []
  let activeSubCategory: SubCategory | undefined

  if (hasSubCategories && currentCategory.subCategories) {
    activeSubCategory = currentCategory.subCategories.find(sub => sub.id === subCategoryId) || currentCategory.subCategories[0]
    currentProducts = activeSubCategory.products
  } else {
    currentProducts = currentCategory.products || []
  }

  return (
    <Container>
      <HeaderSection>
        <PageTitle>제품소개</PageTitle>
        
        {/* 상단 카테고리 탭 (논슬립, 마감재, 굽도리) */}
        <CategoryTabs>
            {Object.values(PRODUCT_DATA).map((cat) => (
                <CategoryTab 
                    key={cat.id} 
                    href={cat.subCategories ? `/products/${cat.id}/${cat.subCategories[0].id}` : `/products/${cat.id}`}
                    $isActive={categoryId === cat.id}
                >
                    <TabIcon src={cat.image} alt={cat.name} />
                    <TabName>{cat.name}</TabName>
                    <TabDesc>{cat.description}</TabDesc>
                </CategoryTab>
            ))}
        </CategoryTabs>

        {/* 하단 서브카테고리 탭 (세라믹, 알루미늄 등 - 논슬립인 경우에만 노출) */}
        {hasSubCategories && currentCategory.subCategories && (
          <SubCategoryTabs>
            {currentCategory.subCategories.map((sub) => (
              <SubTab 
                key={sub.id}
                href={`/products/${categoryId}/${sub.id}`}
                $isActive={subCategoryId === sub.id}
              >
                {sub.name}
              </SubTab>
            ))}
          </SubCategoryTabs>
        )}
      </HeaderSection>

      <ContentSection>
        <SectionTitle>
            {hasSubCategories ? activeSubCategory?.name : currentCategory.name}
            {/* 세부 모델명 등이 있다면 여기에 추가 */}
        </SectionTitle>

        {currentProducts.length > 0 ? (
            <ProductList>
                {currentProducts.map((product) => (
                    <ProductItem key={product.id}>
                        {/* 왼쪽 이미지 영역 (세로 중앙 정렬) */}
                        <ImageArea>
                            <ProductImg src={product.image} alt={product.name} />
                        </ImageArea>

                        {/* 오른쪽 정보 영역 (높이 유동적) */}
                        <InfoArea>
                            <InfoTitle>{product.name}</InfoTitle>

                            {/* 규격 정보 박스 */}
                            <SpecGrid>
                              {product.specs.size && <SpecBox>
                                    <SpecLabel>규격 (Size)</SpecLabel>
                                    <SpecValue>{product.specs.size}</SpecValue>
                                </SpecBox>}
                                
                                {product.specs.thickness && (
                                    <SpecBox>
                                        <SpecLabel>두께 (Thickness)</SpecLabel>
                                        <SpecValue>{product.specs.thickness}</SpecValue>
                                    </SpecBox>
                                )}

                                {!product.specs.thickness && product.specs.length && (
                                    <SpecBox>
                                        <SpecLabel>길이 (Length)</SpecLabel>
                                        <SpecValue>{(product.specs as any).length}</SpecValue>
                                    </SpecBox>
                                )}
                            </SpecGrid>

                            {/* 제품 특징 */}
                            {product.features.length > 0 && (
                                <DetailSection>
                                    <DetailLabel>제품특징</DetailLabel>
                                    <DetailList>
                                        {product.features.map((item, idx) => (
                                            <DetailItem key={idx}> {item}</DetailItem>
                                        ))}
                                    </DetailList>
                                </DetailSection>
                            )}

                            {/* 적용처 */}
                            {product.applications.length > 0 && (
                                <DetailSection>
                                    <DetailLabel>적용처</DetailLabel>
                                    <DetailList>
                                        {product.applications.map((item, idx) => (
                                            <DetailItem key={idx}> {item}</DetailItem>
                                        ))}
                                    </DetailList>
                                </DetailSection>
                            )}

                            {/* 시공법 */}
                            {product.construction.length > 0 && (
                                <DetailSection>
                                    <DetailLabel>시공법</DetailLabel>
                                    <DetailList>
                                        {product.construction.map((item, idx) => (
                                            <DetailItem key={idx}>{item}</DetailItem>
                                        ))}
                                    </DetailList>
                                </DetailSection>
                            )}
                        </InfoArea>
                    </ProductItem>
                ))}
            </ProductList>
        ) : (
            <EmptyState>등록된 제품이 없습니다.</EmptyState>
        )}
      </ContentSection>
    </Container>
  )
}

// Styles
const Container = styled.div`
  width: 100%;
  padding-bottom: 120px;
  background-color: white;
`

const HeaderSection = styled.div`
  padding: 80px 0 0;
  text-align: center;
  border-bottom: 1px solid #eee;
`

const PageTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: ${theme.colors.text.primary};
  margin-bottom: 60px;
`

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  max-width: 900px;
  margin: 0 auto 40px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`

const CategoryTab = styled(Link)<{ $isActive: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
  padding: 30px;
  background: ${props => props.$isActive ? theme.colors.primary : '#f8f9fa'};
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s;
  color: ${props => props.$isActive ? 'white' : theme.colors.text.primary};
  box-shadow: ${props => props.$isActive ? '0 10px 20px rgba(61, 111, 172, 0.2)' : 'none'};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }
`

const TabIcon = styled.img`
  width: 80%;
  height: 100%;
  object-fit: contain;
  margin: 0 aut;
  display: block;
`

const TabName = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`

const TabDesc = styled.span`
  font-size: 14px;
  opacity: 0.7;
`

const SubCategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-bottom: 1px; // border-bottom 겹침 방지

  @media (max-width: 768px) {
    gap: 20px;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0 20px;
    -webkit-overflow-scrolling: touch;
  }
`

const SubTab = styled(Link)<{ $isActive: boolean }>`
  padding: 16px 4px;
  text-decoration: none;
  color: ${props => props.$isActive ? theme.colors.primary : theme.colors.text.secondary};
  font-weight: ${props => props.$isActive ? '700' : '500'};
  border-bottom: 2px solid ${props => props.$isActive ? theme.colors.primary : 'transparent'};
  transition: all 0.2s;

  &:hover {
    color: ${theme.colors.primary};
  }
`

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`

const SectionTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  border-left: 4px solid ${theme.colors.primary};
  padding-left: 16px;
  margin-bottom: 40px;
`

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`

const ProductItem = styled.div`
  display: flex;
  gap: 40px;
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const ImageArea = styled.div`
  flex: 1;
  background: white;
  border: 1px solid ${theme.colors.border.light};
  border-radius: 12px;
  display: flex;
  align-items: center; // 세로 중앙 정렬
  justify-content: center; // 가로 중앙 정렬
  min-height: 400px;
  padding: 40px;

  @media (max-width: 768px) {
    min-height: 300px;
  }
`

const ProductImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`
const InfoArea = styled.div`
  flex: 1;
  background: white;
  border-radius: 12px;
  /* 왼쪽 파란색 바를 위한 설정 */
  border-left: 6px solid ${theme.colors.primary}; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); /* 부드러운 그림자 추가 */
  padding: 50px; /* 내부 여백 넉넉하게 */
  height: fit-content;
  position: relative;
`

const InfoTitle = styled.h4`
  font-size: 24px; /* 폰트 크기 키움 */
  font-weight: 800; /* 더 굵게 */
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee; /* 하단 구분선 추가 */
  letter-spacing: -0.02em;
  color: #111;
`

const SpecGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 36px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const SpecBox = styled.div`
  background: #f0f7fd; /* 연한 파란색 배경 */
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #e1eef8; /* 미세한 테두리 */
`

const SpecLabel = styled.div`
  font-size: 14px;
  color: #666; /* 회색 텍스트 */
  margin-bottom: 5px;
  font-weight: 400;
`

const SpecValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.primary}; /* 파란색 강조 텍스트 */
  letter-spacing: -0.01em;
`

const DetailSection = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`

const DetailLabel = styled.h5`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #333;
`

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const DetailItem = styled.li`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.6;
  padding-left: 24px; /* 체크 아이콘 공간 확보 */
  position: relative;

  /* 체크 아이콘 (가상 요소로 구현) */
  &::before {
    content: '✓'; /* 또는 이미지 url 사용 가능 */
    position: absolute;
    left: 0;
    top: 0;
    font-weight: 700;
    color: #333; /* 체크 아이콘 색상 (검정색에 가까움) */
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 100px 0;
  color: ${theme.colors.text.secondary};
  background: #f8f9fa;
  border-radius: 12px;
`