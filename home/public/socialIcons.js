import { default as CodePen } from './assets/icons/codepen.svg'
import { default as Dev } from './assets/icons/dev.svg'
import { default as Envelope } from './assets/icons/envelope.svg'
import { default as GitHub } from './assets/icons/github.svg'
import { default as LinkedIn } from './assets/icons/linkedin.svg'

export const SOCIAL_ICONS = {
  CODEPEN: 'CODEPEN',
  DEV: 'DEV',
  ENVELOPE: 'ENVELOPE',
  GITHUB: 'GITHUB',
  LINKEDIN: 'LINKEDIN'
}

export const getSocialIcon = (kind) => ({
  CODEPEN: CodePen,
  DEV: Dev,
  ENVELOPE: Envelope,
  GITHUB: GitHub,
  LINKEDIN: LinkedIn 
}[kind])

