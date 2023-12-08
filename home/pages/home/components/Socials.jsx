import styled, { useTheme } from 'styled-components'
import SocialIcon from './SocialIcon'
import { SOCIAL_ICONS } from '../../../public/socialIcons'
import { mediaQueries } from '../../../ui/mediaQueries'

const SocialsContainer = styled.div`
  width: 400px;
  height: 160px;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 80px);

  & > *:nth-child(1) {
    margin-top: 3px;
    transform: rotate(-6deg);
    color: ${({ theme }) => theme.color.bright.blue};
    &:hover ~ p::after {
      color: ${({ theme }) => theme.color.bright.blue};
      content: 'hi@snezhi.com';
    }
  }
  & > *:nth-child(2) {
    margin-top: 24px;
    transform: rotate(4deg);
    color: ${({ theme }) => theme.color.bright.salmon};
    &:hover ~ p::after {
      color: ${({ theme }) => theme.color.bright.salmon};
      content: '@snezhi';
    }
  }
  & > *:nth-child(3) {
    margin-top: 4px;
    transform: rotate(-5deg);
    color: ${({ theme }) => theme.color.bright.pink};
    &:hover ~ p::after {
      color: ${({ theme }) => theme.color.bright.pink};
      content: '@snezhii';
    }
  }
  & > *:nth-child(4) {
    margin-top: 4px;
    transform: rotate(7deg);
    color: ${({ theme }) => theme.color.bright.purple};
    &:hover ~ p::after {
      color: ${({ theme }) => theme.color.bright.purple};
      content: '@snezhi';
    }
  }
  & > *:nth-child(5) {
    margin-top: 5px;
    transform: rotate(12deg);
    color: ${({ theme }) => theme.color.bright.lime};
    &:hover ~ p::after {
      color: ${({ theme }) => theme.color.bright.lime};
      content: 'in/snezhi';
    }
  }

  ${mediaQueries.smallPhone} {
    width: 100%;
    max-width: 400px;
    height: 80px;
    grid-template-rows: 80px;
  }
`

const Text = styled.p`
  grid-column-start: 1;
  grid-column-end: 6;
  font-family: 'pp_neue_montrealbold';
  font-size: 24px;
  line-height: 1em;
  margin: 32px;
  text-align: center;
  color: #b2c8ff;

  ${mediaQueries.smallPhone} {
    display: none;
  }
`

const Socials = () => {
  const theme = useTheme()
  return (
    <>
      <SocialsContainer>
        <SocialIcon
          kind={SOCIAL_ICONS.ENVELOPE}
          color={theme.color.bright.blue}
          href="mailto:hi@snezhi.com?subject=Hello there!&body=(Write your dazzling message here 👀)"
        />
        <SocialIcon
          kind={SOCIAL_ICONS.DEV}
          color={theme.color.bright.salmon}
          href="https://dev.to/snezhi"
        />
        <SocialIcon
          kind={SOCIAL_ICONS.GITHUB}
          color={theme.color.bright.pink}
          href="https://github.com/snezhii"
        />
        <SocialIcon
          kind={SOCIAL_ICONS.CODEPEN}
          color={theme.color.bright.purple}
          href="https://codepen.io/snezhi"
        />
        <SocialIcon
          kind={SOCIAL_ICONS.LINKEDIN}
          color={theme.color.bright.lime}
          href="https://www.linkedin.com/in/snezhi/"
        />
        <Text />
      </SocialsContainer>
    </>
  )
}

export default Socials
