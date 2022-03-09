import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps }) {

  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default App