'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'

export default function IntroPage() {
  return (
    <Container>
      <TopImageSection>
        <BuildingImage src="/images/test/intro_img.png" alt="서경산업 이미지" />
      </TopImageSection>

      <ContentSection>
        <TitleWrapper>
          <Title>CEO 인사말</Title>
        </TitleWrapper>

        <MessageBody>
          <Paragraph>
            안녕하십니까, 대표이사 이남영입니다.<br />
            더 이상 계단은 매일 오르내리는 단순한 이동 통로가 아닙니다.<br />
            계단은 사람을 지키는 <strong>'안전'</strong>의 최전선이자, 건물의 <strong>품격</strong>을 결정짓는 '얼굴'입니다.
          </Paragraph>

          <Paragraph>
            그렇기에 저희는 설립 이래 <strong>'타협하지 않는 품질'</strong>이라는 단 하나의 원칙을 고집스럽게 지켜왔습니다.<br />
            수많은 현장에서 쌓아온 데이터와 노하우는 이제 누구도 모방할 수 없는 우리만의 독보적인 경쟁력입니다.
          </Paragraph>

          <Paragraph>
            단순한 납품과 시공에 그치지 않겠습니다. 화려한 말보다는 빈틈없는 마감과 결과물로 증명하며,<br />
            귀사의 환경에 최적화된 솔루션을 제공하겠습니다.
          </Paragraph>

          <Paragraph>
            공간에 안전과 가치를 더하는 든든한 파트너가 되겠습니다. 감사합니다.
          </Paragraph>
        </MessageBody>

        <Signature>
          대표이사 <Name>이 남 영</Name>
        </Signature>
      </ContentSection>
    </Container>
  )
}

const Container = styled.main`
  width: 100%;
  background-color: white;
  padding-bottom: 120px;
`

const TopImageSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 0;
  display: flex;
  justify-content: center;
`

const BuildingImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  border-radius: 10px;
  object-fit: cover;
`

const ContentSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleWrapper = styled.div`
  margin-bottom: 60px;
  position: relative;
  text-align: center;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${theme.colors.primary};
    margin: 20px auto 0;
  }
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${theme.colors.text.primary};
  margin: 0;
`

const MessageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 80px;
`

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.8;
  color: ${theme.colors.text.primary};
  margin: 0;
  word-break: keep-all;

  strong {
    font-weight: 700;
  }
`

const Signature = styled.div`
  width: 100%;
  text-align: right;
  font-size: 20px;
  color: ${theme.colors.text.primary};
  font-weight: 600;
  margin-top: 20px;
`

const Name = styled.span`
  font-size: 28px;
  font-weight: 800;
  margin-left: 12px;
  color: ${theme.colors.text.primary};
`