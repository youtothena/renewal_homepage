'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
import { useUIStore } from '@/store/uiStore'
import { usePathname } from 'next/navigation' 
import { useEffect, useState } from 'react'
import { theme } from '@/styles/theme'
import { useModalStore } from '@/store/modalStore'

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const pathname = usePathname()
  const isIntroDone = useUIStore(state => state.isIntroDone)
  const isMainPage = pathname === '/'
  const isVisible = !isMainPage || isIntroDone

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModalStore();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setActiveMenu(null)
  }

  return (
    <HeaderWrapper $isVisible={isVisible}>
      <HeaderContainer>
        {/* 왼쪽 로고 */}
        <LogoSection>
          <Logo href="/" onClick={closeMobileMenu}>
            <LogoImage src="/images/test/logo_test.png" alt="서경산업" />
            <LogoText>서경산업</LogoText>
          </Logo>
        </LogoSection>

        {/* 중앙 메뉴 (데스크톱) */}
        <NavSection $isOpen={isMobileMenuOpen}>
          <NavList>
            <NavItem
              onMouseEnter={() => setActiveMenu('company')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <NavLink href="#" onClick={closeMobileMenu}>
                회사소개
              </NavLink>
              {activeMenu === 'company' && (
                <SubMenu>
                  <SubMenuItem>
                    <NavLink  href="/company/intro" onClick={closeMobileMenu}>
                      인사말
                    </NavLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <NavLink href="/company/location" onClick={closeMobileMenu}>
                      찾아오시는길
                    </NavLink>
                  </SubMenuItem>
                </SubMenu>
              )}
            </NavItem>

            <NavItem
              onMouseEnter={() => setActiveMenu('products')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <NavLink href="#" onClick={closeMobileMenu}>
                제품소개
              </NavLink>
              {activeMenu === 'products' && (
                <SubMenu>
                  <SubMenuItem>
                    <NavLink href="#" onClick={closeMobileMenu}>
                      논슬립
                    </NavLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <NavLink href="#" onClick={closeMobileMenu}>
                      마감재
                    </NavLink>
                  </SubMenuItem>
                </SubMenu>
              )}
            </NavItem>

            <NavItem>
              <NavLink href="#" onClick={closeMobileMenu}>
                시공갤러리
              </NavLink>
            </NavItem>
          </NavList>
        </NavSection>

        {/* 오른쪽 문의하기 버튼 + 햄버거 메뉴 */}
        <RightSection>
          <ContactButton onClick={() => openModal('contact')}>문의하기</ContactButton>
          <HamburgerButton
            onClick={toggleMobileMenu}
            $isOpen={isMobileMenuOpen}
            aria-label="메뉴 열기/닫기"
          >
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
          </HamburgerButton>
        </RightSection>
      </HeaderContainer>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && <Overlay onClick={closeMobileMenu} />}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header<{ $isVisible: boolean | undefined }>`
  width: 100%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '-100%'});
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
`

const HeaderContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 70px;
  }
`

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

const NavSection = styled.nav<{ $isOpen: boolean }>`
  flex: 1;
  display: flex;
  justify-content: end;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    right: 0;
    width: 280px;
    height: calc(100vh - 70px);
    background: white;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
    transform: translateX(${props => props.$isOpen ? '0' : '100%'});
    transition: transform 0.3s ease-in-out;
    justify-content: flex-start;
    padding: 20px 0;
    overflow-y: auto;
    z-index: 999;
  }
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 0;
  }
`

const NavItem = styled.li`
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const NavLink = styled(Link)`
  display: block;
  padding: 12px 24px;
  color: ${theme.colors.text.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  transition: all 0.2s;
  border-radius: 4px;

  &:hover {
    background: ${theme.colors.background.gray};
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 16px 24px;
    border-radius: 0;
    border-bottom: 1px solid ${theme.colors.border.light};

    &:hover {
      background: ${theme.colors.background.gray};
    }
  }
`

const SubMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 8px 0;
  min-width: 180px;
  border-radius: 8px;
  z-index: 100;
  margin-top: 4px;

  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    margin-top: 0;
    background: ${theme.colors.background.gray};
  }
`

const SubMenuItem = styled.li`
  a {
    display: block;
    padding: 12px 20px;
    color: ${theme.colors.text.primary};
    text-decoration: none;
    font-size: 14px;
    transition: all 0.2s;

    &:hover {
      background: ${theme.colors.background.gray};
      color: ${theme.colors.primary};
      padding-left: 24px;
    }

    @media (max-width: 768px) {
      padding: 12px 24px 12px 40px;
      font-size: 13px;

      &:hover {
        background: white;
        padding-left: 44px;
      }
    }
  }
`

const RightSection = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 1001;
`

const ContactButton = styled.button`
  display: inline-block;
  padding: 12px 28px;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s;
  font-family: inherit;
  
  &:hover {
    background: #2d5a8f;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(61, 111, 172, 0.3);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`

// ⭐ HamburgerLine을 먼저 선언 (중요!)
const HamburgerLine = styled.span`
  width: 100%;
  height: 3px;
  background: ${theme.colors.text.primary};
  border-radius: 2px;
  transition: all 0.3s ease;
`

// ⭐ HamburgerButton은 HamburgerLine 다음에 선언
const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }

  /* 햄버거 아이콘 애니메이션 */
  ${HamburgerLine}:nth-of-type(1) {
    transform: ${props => props.$isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
  }

  ${HamburgerLine}:nth-of-type(2) {
    opacity: ${props => props.$isOpen ? '0' : '1'};
  }

  ${HamburgerLine}:nth-of-type(3) {
    transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(9px, -9px)' : 'none'};
  }
`

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`