'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { useEffect } from 'react'
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

interface GalleryDetailModalProps {
  gallery: GalleryItem
  onClose: () => void
}

export default function GalleryDetailModal({ gallery, onClose }: GalleryDetailModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseButton onClick={onClose}>✕</CloseButton>
        
        <ModalHeader>
          <ModalTitle>{gallery.title}</ModalTitle>
          <TagRow>
            {gallery.location && <Tag>{gallery.location}</Tag>}
            {gallery.category && <Tag>{gallery.category}</Tag>}
          </TagRow>
        </ModalHeader>

        <ImageSection>
          {gallery.images.length > 0 ? (
            <MainImage 
              src={getImageUrl(gallery.images[0])} 
              alt={gallery.title}
              onError={(e) => {
                e.currentTarget.src = '/images/placeholder.jpg'
              }}
            />
          ) : (
            <Placeholder>이미지 없음</Placeholder>
          )}
        </ImageSection>

        <InfoSection>
          <InfoItem>
            <InfoLabel>상태</InfoLabel>
            <InfoValue>{gallery.status || '미끄럼방지 시공 완료'}</InfoValue>
          </InfoItem>
        </InfoSection>
      </ModalContainer>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
`

const ModalContainer = styled.div`
  background: white;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 24px;
    max-height: 95vh;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  color: #999;
  cursor: pointer;
  padding: 8px;
  line-height: 1;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`

const ModalHeader = styled.div`
  margin-bottom: 24px;
`

const ModalTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`

const TagRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

const Tag = styled.span`
  display: inline-block;
  padding: 6px 14px;
  background: #f0f0f0;
  border-radius: 12px;
  font-size: 13px;
  color: #666;
`

const ImageSection = styled.div`
  margin-bottom: 24px;
`

const MainImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 8px;
`

const Placeholder = styled.div`
  width: 100%;
  height: 300px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  border-radius: 8px;
`

const InfoSection = styled.div`
  border-top: 1px solid #eee;
  padding-top: 24px;
`

const InfoItem = styled.div`
  display: flex;
  gap: 16px;
`

const InfoLabel = styled.span`
  font-weight: 600;
  color: #666;
  min-width: 80px;
`

const InfoValue = styled.span`
  color: ${theme.colors.text.primary};
`