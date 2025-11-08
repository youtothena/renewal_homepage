'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
import { theme } from '@/styles/theme'

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <BrandSection>
          <Logo>
            <img src="/images/test/logo.jpg" alt="서경산업" />
          </Logo>
          <CompanyDescription>
            서경산업은 논슬립, 굽도리, 마감재 전문 제조 및 시공 회사로서
            고품질의 맞춤형 건축 자재 솔루션을 제공합니다.
          </CompanyDescription>
        </BrandSection>

        <LinksSection>
          <LinkColumn>
            <ColumnTitle>Pages</ColumnTitle>
            <LinkList>
              <LinkItem>
                <Link href="/">Home</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/about">About Us</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/products">제품소개</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/gallery">시공갤러리</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/inquiry">Contact</Link>
              </LinkItem>
            </LinkList>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>Legally</ColumnTitle>
            <LinkList>
              <LinkItem>
                <Link href="/legal/imprint">Imprint</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/legal/privacy">Privacy Policy</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/legal/cookies">Cookies Settings</Link>
              </LinkItem>
            </LinkList>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>Address</ColumnTitle>
            <AddressInfo>
              <InfoItem>info@seogyeong.com</InfoItem>
              <InfoItem>+82 31 123 4567</InfoItem>
              <InfoItem>
                경기도 남양주시 오남읍 <br />
                양지리 549번지
              </InfoItem>
            </AddressInfo>
          </LinkColumn>
        </LinksSection>
      </FooterContent>

      <Copyright>
        <p>© {new Date().getFullYear()} 서경산업. All rights reserved.</p>
      </Copyright>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background: #f8f8f8;
  border-top: 1px solid #e5e5e5;
  padding-top: 100px;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 40px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const BrandSection = styled.div``

const Logo = styled.div`
  margin-bottom: 20px;
  
  img {
    height: 50px;
  }
`

const CompanyDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin: 0;
`

const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

const LinkColumn = styled.div``

const ColumnTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const LinkItem = styled.li`
  margin-bottom: 12px;

  a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`

const AddressInfo = styled.div``

const InfoItem = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 12px 0;
  line-height: 1.6;
`

const Copyright = styled.div`
  text-align: center;
  padding: 20px;
  border-top: 1px solid #e5e5e5;
  
  p {
    margin: 0;
    font-size: 12px;
    color: #999;
  }
`