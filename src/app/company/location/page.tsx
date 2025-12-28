'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { Container as NaverMapDiv, NaverMap, Marker, useNavermaps, NavermapsProvider } from 'react-naver-maps'

function MyMap() {
    const navermaps = useNavermaps()
    
    // 서경산업 좌표
    const location = new navermaps.LatLng(37.68563342674427, 127.20433672155164)
  
    return (
      <NaverMap
        defaultCenter={location}
        defaultZoom={17}
        zoomControl={true}
        zoomControlOptions={{
          position: navermaps.Position.TOP_RIGHT,
        }}
      >
        <Marker position={location} />
      </NaverMap>
    )
  }

export default function LocationPage() {
  return (
    <Container>
      <HeaderSection>
        <PageTitle>찾아오시는 길</PageTitle>
        <PageSubtitle>고객님의 방문을 진심으로 환영합니다.</PageSubtitle>
      </HeaderSection>

      <ContentWrapper>
        {/* 지도 영역 */}
        <MapWrapper>
          <NavermapsProvider
            ncpKeyId={process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID!} // 발급받은 Client ID 입력
            // error, loading 컴포넌트 처리 가능
          >
            <StyledMapContainer>
            <div style={{ width: '100%', height: '100%' }}>
                <NaverMapDiv
                    style={{
                    width: '100%',
                    height: '500px',
                    }}
                >
                    <MyMap />
                </NaverMapDiv>
              </div>
            </StyledMapContainer>
          </NavermapsProvider>
        </MapWrapper>

        <InfoGrid>
          <InfoColumn>
            <InfoTitle>주소 및 연락처</InfoTitle>
            <Divider />
            
            <ContactList>
              <ContactItem>
                <IconWrapper>📍</IconWrapper>
                <ContactContent>
                  <Label>주소 (도로명)</Label>
                  <Text>경기도 남양주시 오남읍 양지로 81번길 42</Text>
                  <SubText>(지번: 경기도 남양주시 오남읍 오남리 591-10)</SubText>
                </ContactContent>
              </ContactItem>

              <ContactItem>
                <IconWrapper>📞</IconWrapper>
                <ContactContent>
                  <Label>대표전화</Label>
                  <Text>031-571-6890 / 02-426-7890</Text>
                </ContactContent>
              </ContactItem>

              <ContactItem>
                <IconWrapper>📠</IconWrapper>
                <ContactContent>
                  <Label>팩스</Label>
                  <Text>031-574-6890</Text>
                </ContactContent>
              </ContactItem>

              <ContactItem>
                <IconWrapper>✉️</IconWrapper>
                <ContactContent>
                  <Label>이메일</Label>
                  <Text>skkr6890@naver.com</Text>
                </ContactContent>
              </ContactItem>
            </ContactList>
          </InfoColumn>

          {/* 오른쪽: 교통편 안내 */}
          <InfoColumn>
            <InfoTitle>교통편 안내</InfoTitle>
            <Divider />

            <TransportBox>
              <TransportHeader>
                <TransportIcon>🚗</TransportIcon>
                <TransportTitle>자가용 이용 시</TransportTitle>
              </TransportHeader>
              <TransportDesc>
                아래 <strong>'찾기 버튼'</strong>을 클릭 후 오시는 길을 확인해주세요. (바로 경로 확인 가능)
              </TransportDesc>
              <SmallText>※ 방문객 무료 주차 가능합니다.</SmallText>
              
              <FindButton 
                href="https://map.naver.com/p/directions/-/14160319.7506183,4535095.7998733,%EC%84%9C%EA%B2%BD%EC%82%B0%EC%97%85,33254233,PLACE_POI/-/car?c=15.00,0,0,0,dh" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                자가용 경로 찾기 &gt;
              </FindButton>
            </TransportBox>

            <TransportBox>
              <TransportHeader>
                <TransportIcon>🚌</TransportIcon>
                <TransportTitle>대중교통 이용 시</TransportTitle>
              </TransportHeader>
              <TransportDesc>
                아래 <strong>'찾기 버튼'</strong>을 클릭 후 오시는 길을 확인해주세요. (바로 경로 확인 가능)
              </TransportDesc>
              <SubTextList>
                <li><strong>1. 4호선 오남역</strong> 3번 출구로 나오셔서 도보 약 2분 (약 151m) 직진하세요.</li>
                <li><strong>2. '오남역.서일대사회교육원.양지리마을회관 정류장'</strong>에서 땡큐 70번, 98번 탑승하세요.</li>
                <li><strong>3. '오남리 상가 정류장'</strong> 하차 후 도보 6분 거리입니다.</li>
              </SubTextList>

              <FindButton 
                href="https://map.naver.com/p/directions/-/14160319.7506183,4535095.7998733,%EC%84%9C%EA%B2%BD%EC%82%B0%EC%97%85,33254233,PLACE_POI/-/transit?c=16.72,0,0,0,dh"
                target="_blank"
                rel="noopener noreferrer"
              >
                대중교통 경로 찾기 &gt;
              </FindButton>
            </TransportBox>
          </InfoColumn>
        </InfoGrid>
      </ContentWrapper>
    </Container>
  )
}

const MapWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: #e9ecef;
  margin-bottom: 80px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`

const Container = styled.main`
  width: 100%;
  padding-bottom: 120px;
  background-color: white;
`

const HeaderSection = styled.section`
  background-color: #f8f9fa;
  padding: 80px 0;
  text-align: center;
  margin-bottom: 60px;
`

const PageTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: ${theme.colors.text.primary};
  margin: 0 0 16px 0;
`

const PageSubtitle = styled.p`
  font-size: 16px;
  color: ${theme.colors.text.secondary};
  margin: 0;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const StyledMapContainer = styled.div`
  width: 100%;
  height: 100%;
`

const MapPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #868e96;
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin: 0 0 20px 0;
`

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #eee;
  margin: 0 0 30px 0;
  width: 100%;
`

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const ContactItem = styled.li`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`

const IconWrapper = styled.div`
  font-size: 20px;
  margin-top: 2px;
`

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Label = styled.span`
  font-weight: 700;
  color: ${theme.colors.text.primary};
  font-size: 16px;
`

const Text = styled.span`
  color: ${theme.colors.text.secondary};
  font-size: 16px;
  line-height: 1.6;
`

const SubText = styled.span`
  color: #999;
  font-size: 14px;
  margin-top: 2px;
`

const TransportBox = styled.div`
  border: 1px solid ${theme.colors.border.light};
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 24px;
  background-color: white;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const TransportHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`

const TransportIcon = styled.span`
  font-size: 24px;
`

const TransportTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${theme.colors.text.primary};
`

const TransportDesc = styled.p`
  font-size: 15px;
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin: 0 0 12px 0;

  strong {
    color: ${theme.colors.primary};
    font-weight: 600;
  }
`

const SmallText = styled.p`
  font-size: 13px;
  color: #999;
  margin: 0 0 20px 0;
`

const SubTextList = styled.ul`
  margin: 12px 0 24px 0;
  font-size: 14px;
  color: ${theme.colors.text.secondary};
  line-height: 1.6;

  li {
    margin-bottom: 6px;
  }
  
  strong {
    font-weight: 600;
    color: ${theme.colors.text.primary};
  }
`

const FindButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #f8f9fa;
  color: ${theme.colors.text.primary};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  transition: all 0.2s;

  &:hover {
    background-color: ${theme.colors.primary};
    color: white;
    border-color: ${theme.colors.primary};
  }
`