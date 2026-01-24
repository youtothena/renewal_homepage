'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { useState, useEffect } from 'react'
import axiosInstance from '@/lib/axios'
import GalleryDetailModal from '@/components/modal/GalleryDetailModal'
import { getImageUrl } from '@/lib/imageUtils'

interface GalleryItem {
  id: string
  title: string
  images: string[]
  location: string | null
  category: string | null
  status: string | null
  createdAt: string
}

interface GalleryResponse {
  galleries: GalleryItem[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

export default function GalleryPage() {
  const [galleries, setGalleries] = useState<GalleryItem[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null)

  const fetchGalleries = async (pageNum: number, append: boolean = false) => {
    setLoading(true)
    try {
      const response = await axiosInstance.get<GalleryResponse>(
        `/gallery?page=${pageNum}&limit=8`
      )
      if (append) {
        setGalleries(prev => [...prev, ...response.data.galleries])
      } else {
        setGalleries(response.data.galleries)
      }
      setTotal(response.data.total)
      setHasMore(response.data.hasMore)
      setPage(pageNum)
    } catch (error) {
      console.error('갤러리 로드 실패:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGalleries(1, false)
  }, [])

  console.log(galleries);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      fetchGalleries(page + 1, true)
    }
  }

  return (
    <Container>
      <HeaderSection>
        <PageTitle>시공 갤러리</PageTitle>
        <Subtitle>서경산업의 기술력이 담긴 다양한 시공 사례를 확인해보세요.</Subtitle>
      </HeaderSection>

      <ContentSection>
        <SectionHeader>
          <SectionTitle>전체 시공 사례</SectionTitle>
          <TotalCount>총 {total}건</TotalCount>
        </SectionHeader>

        <GalleryGrid>
          {galleries.map((gallery) => (
            <GalleryCard
              key={gallery.id}
              onClick={() => setSelectedGallery(gallery)}
            >
              <ImageWrapper>
              <GalleryImage
                src={getImageUrl(gallery.images[0])}
                alt={gallery.title}
                onError={(e) => {
                  e.currentTarget.src = ''
                }}
              />
            </ImageWrapper>
              <CardContent>
                <TagRow>
                  {gallery.location && (
                    <Tag>{gallery.location}</Tag>
                  )}
                  {gallery.category && (
                    <Tag>{gallery.category}</Tag>
                  )}
                </TagRow>
                <CardTitle>{gallery.title}</CardTitle>
                <CardStatus>{gallery.status || '미끄럼방지 시공 완료'}</CardStatus>
              </CardContent>
            </GalleryCard>
          ))}
        </GalleryGrid>

        {hasMore && (
          <LoadMoreButton onClick={handleLoadMore} disabled={loading}>
            {loading ? '로딩 중...' : '+ 더보기'}
          </LoadMoreButton>
        )}
      </ContentSection>

      {selectedGallery && (
        <GalleryDetailModal
          gallery={selectedGallery}
          onClose={() => setSelectedGallery(null)}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  padding-bottom: 80px;
`

const HeaderSection = styled.div`
  padding: 80px 20px 60px;
  text-align: center;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 60px 20px 40px;
  }
`

const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: ${theme.colors.text.primary};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 30px;
  }
`

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin: 0;
`

const TotalCount = styled.span`
  font-size: 16px;
  color: #666;
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const GalleryCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #f5f5f5;
  overflow: hidden;
`

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CardContent = styled.div`
  padding: 16px;
`

const TagRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`

const Tag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: #f0f0f0;
  border-radius: 12px;
  font-size: 12px;
  color: #666;
`

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin: 0 0 8px 0;
  line-height: 1.4;
`

const CardStatus = styled.p`
  font-size: 13px;
  color: #999;
  margin: 0;
`

const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 14px 40px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  cursor: pointer;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background: ${theme.colors.primary};
    color: white;
    border-color: ${theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`