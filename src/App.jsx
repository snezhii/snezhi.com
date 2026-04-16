import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { styled } from '@linaria/react'
import { MEDIA_QUERY } from './utils'

const Header = styled.h1`
  font-family: 'PP Mondwest';
  font-size: 96px;
  line-height: 1.1;
  text-align: left;
  text-wrap: balance;

  @media (prefers-reduced-motion) {
    align-self: center;
  }
  @media (prefers-reduced-motion: no-preference) {
    position: absolute;
    animation: headerParallax linear;
    animation-timeline: view(-500px);
  }
  @keyframes headerParallax {
    from {
      top: 60%;
    }
    to {
      top: 15%;
    }
  }
`

const Typewriter = styled.span`
  --type-speed: 1s;
  display: inline-block;
  margin-bottom: -0.273em;

  @media (prefers-reduced-motion: no-preference) {
    visibility: hidden;
    &::before {
      overflow: hidden;
      visibility: visible;
      content: 'sheep?';
      position: absolute;
      animation:
        typewriter var(--type-speed) steps(1),
        marker-blink 1s step-end var(--type-speed) infinite;
      margin-right: 0.08em;
      border-right: 0.08em solid var(--text-h);
    }
  }

  @keyframes typewriter {
    from {
      width: 0em;
    }
    16% {
      // s
      width: 0.4em;
    }
    33% {
      // sh
      width: 0.9em;
    }
    50% {
      // she
      width: 1.35em;
    }
    66% {
      // shee
      width: 1.78em;
    }
    83% {
      // sheep
      width: 2.25em;
    }
    to {
      // sheep?
      width: unset;
    }
  }
  @keyframes marker-blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: var(--text-h);
    }
  }
`

const FullSection = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 16px;
  ${MEDIA_QUERY.TABLET} {
    padding: 32px;
  }
  ${MEDIA_QUERY.DESKTOP} {
    padding: 32px 64px;
  }
  display: flex;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FullSection>
        <Header>
          Do engineers dream of CSS <Typewriter>sheep?</Typewriter>
        </Header>
      </FullSection>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>Hello world!!</p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
