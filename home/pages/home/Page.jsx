import styled from 'styled-components'
import Socials from './components/Socials.page'
import { mediaQueries } from '../../ui/mediaQueries'

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mediaQueries.smallPhone} {
    & > *:last-child {
      position: absolute;
      bottom: 40px;
    }
  }
`

const Hi = styled.span`
  font-family: 'arlenexpanded_bold';
  font-size: 48px;
  margin-left: 15%;
  margin-right: 15%;
  color: ${({ theme }) => theme.color.bright.blue};

  ${mediaQueries.smallPhone} {
    margin: 0 24px;
  }
`

const Name = styled.h1`
  font-family: 'arlenrelaxed_heavy';
  line-height: 0.75;
  font-size: 128px;
  text-align: center;
  margin: -8px 0 0;
  color: ${({ theme }) => theme.color.bright.pink};

  ${mediaQueries.smallPhone} {
    margin: 0 24px;
    text-align: left;
    font-size: 88px;
  }
`

const Body = styled.p`
  font-family: 'pp_neue_montrealbold';
  font-size: 24px;
  line-height: 1.1em;
  margin: 0 15% 8px;
  color: ${({ theme }) => theme.color.pale.blue};

  ${mediaQueries.smallPhone} {
    font-size: 22px;
    margin: 0 24px 8px;
  }
`

const ContentWrapper = styled.div`
  max-width: 500px;
  width: 100%;
`

const Home = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <Hi>Hi! I&apos;m</Hi>
        <Name>Snezhi</Name>
        <Body>A front-end engineer from the forests of Hälsingland.</Body>
        <Body>I like developing fun designs in React, and I looooove CSS.</Body>
        <Body>I think CSS is the bee&apos;s knees. </Body>
      </ContentWrapper>
      <Socials />
    </PageContainer>
  )
}

export default Home
