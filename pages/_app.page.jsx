import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../themes/dark'
import Head from 'next/head'
import '../public/fonts.css'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.color.main.background};
  }

  html,
  body,
  body > div:first-child,
  div#__next {
    height: 100%;
    margin: 0;
  }
`

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>✨This tab here!✨ 👀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
