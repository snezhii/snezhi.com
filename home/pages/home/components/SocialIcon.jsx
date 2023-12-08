import styled from 'styled-components'
import { getSocialIcon } from '../../../public/socialIcons'

const IconWrapper = styled.a`
  --icon-width: 56px;
  --hover-offset: 16px;
  width: var(--icon-width);
  height: calc(var(--icon-width)+ (2 * var(--hover-offset)));

  & > svg {
    margin-top: var(--hover-offset);
    color: ${({ color, theme }) => (color ? color : theme.color.pale.blue)};
    transition: margin 300ms, color 300ms;
  }
  &:hover {
    cursor: pointer;
    & > svg {
      margin: 0;
      color: ${({ theme }) => theme.color.main.contrast};
    }
  }
`

const SocialIcon = ({ kind = 'DEV', color, href }) => {
  const Icon = getSocialIcon(kind)

  return (
    <IconWrapper
      color={color}
      target="_blank"
      rel="noopener noreferrer"
      href={href}>
      <Icon />
    </IconWrapper>
  )
}

export default SocialIcon
