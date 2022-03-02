import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Layout from '../components/Layout'
import {
  ApolloClient,
  ApolloProvider,
  DefaultOptions,
  InMemoryCache,
} from '@apollo/client'

function MyApp({ Component, pageProps }: AppProps) {
  // const defaultOptions: DefaultOptions = {
  //   watchQuery: {
  //     fetchPolicy: 'no-cache',
  //     errorPolicy: 'all',
  //   },
  //   query: {
  //     fetchPolicy: 'no-cache',
  //     errorPolicy: 'all',
  //   },
  // }

  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            author: {
              merge: (existing = [], incoming) => {
                return incoming
              },
            },
          },
        },
      },
    }),
  })

  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default MyApp
