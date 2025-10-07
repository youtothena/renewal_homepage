'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
import { useState } from 'react'
import { theme } from '@/styles/theme'

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <HeaderWrapper>
      <TopBar>
        <Logo href="/">
          <img src="/images/test/logo.jpg" alt="서경산업" />
        </Logo>
      </TopBar>
      
      <Nav>
        <NavList>
          <NavItem
            onMouseEnter={() => setActiveMenu('about')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <NavLink href="/about">회사소개</NavLink>
            {activeMenu === 'about' && (
              <SubMenu>
                <SubMenuItem>
                  <Link href="/about/greeting">인사말</Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link href="/about/location">찾아오시는길</Link>
                </SubMenuItem>
              </SubMenu>
            )}
          </NavItem>

          <NavItem
            onMouseEnter={() => setActiveMenu('products')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <NavLink href="/products">제품소개</NavLink>
            {activeMenu === 'products' && (
              <SubMenu>
                <SubMenuItem>
                  <Link href="/products/nonslip">논슬립</Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link href="/products/baseboard">굽도리</Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link href="/products/finishing">마감재</Link>
                </SubMenuItem>
              </SubMenu>
            )}
          </NavItem>

          <NavItem>
            <NavLink href="/gallery">시공갤러리</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/inquiry">온라인문의</NavLink>
          </NavItem>

          <NavItem
            onMouseEnter={() => setActiveMenu('support')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <NavLink href="/support">고객지원</NavLink>
            {activeMenu === 'support' && (
              <SubMenu>
                <SubMenuItem>
                  <Link href="/support/qna">질문과답변</Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link href="/support/notice">공지사항</Link>
                </SubMenuItem>
              </SubMenu>
            )}
          </NavItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const TopBar = styled.div`
  padding: 20px 0;
  text-align: center;
`

const Logo = styled(Link)`
  display: inline-block;
  
  img {
    height: 60px;
  }
`

const Nav = styled.nav`
  background: ${theme.colors.primary};
`

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
`

const NavItem = styled.li`
  position: relative;
`

const NavLink = styled(Link)`
  display: block;
  padding: 20px 40px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const SubMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 200px;
  z-index: 100;
`

const SubMenuItem = styled.li`
  a {
    display: block;
    padding: 15px 20px;
    color: ${theme.colors.text.primary};
    text-decoration: none;
    transition: background 0.3s;

    &:hover {
      background: ${theme.colors.background.gray};
    }
  }
`