import { ThemeProvider } from 'styled-components'
import theme from '../themes/dark'
import Head from 'next/head'
import '../public/fonts.css'
import '../public/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>✨This tab here!✨ 👀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
