'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
import { theme } from '@/styles/theme'

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <BrandSection>
          <LogoSection>
            <Logo href="/">
              <LogoImage src="/images/test/logo_test.png" alt="서경산업" />
              <LogoText>서경산업</LogoText>
            </Logo>
          </LogoSection>
          <CompanyDescription>
            서경산업은 논슬립, 굽도리, 마감재 전문 제조 및 <br/> 시공 회사로서
            고품질의 맞춤형 건축 자재 솔루션을 제공합니다.
          </CompanyDescription>
        </BrandSection>

        <LinksSection>
          <LinkColumn>
            <ColumnTitle>주요 페이지</ColumnTitle>
            <LinkList>
              <LinkItem>
                <Link href="/">회사소개</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/about">제품소개</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/products">시공갤러리</Link>
              </LinkItem>
            </LinkList>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>회사 정보</ColumnTitle>
            <LinkList>
              <LinkItem>
                <Link href="/legal/imprint">상호: 서경산업</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/legal/privacy">대표: 이남영</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/legal/cookies">사업자번호: 132-21-24492</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/legal/cookies">주소: 경기도 남양주시 오남읍 양지로 81번길</Link>
              </LinkItem>
            </LinkList>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>연락처</ColumnTitle>
            <AddressInfo>
              <InfoItem>대표번호: 031-571-6890 / 02-426-7890</InfoItem>
              <InfoItem>팩스: 031-574-6890</InfoItem>
              <InfoItem>H.P: 010-2019-0409</InfoItem>
              <InfoItem>이메일: skkr6890@naver.com</InfoItem>
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

const LogoSection = styled.div`
  flex-shrink: 0;
  z-index: 1001;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;

  @media (max-width: 768px) {
    gap: 8px;
  }
`

const LogoImage = styled.img`
  height: 40px;
  width: auto;

  @media (max-width: 768px) {
    height: 32px;
  }
`

const LogoText = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const CompanyDescription = styled.p`
  font-size: 14px;
  padding-top: 20px;
  line-height: 1.6;
  color: #666;
  margin: 0;
`

const LinksSection = styled.div`
  display: flex;
  justify-content: space-between;

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
  margin-bottom: 8px;

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