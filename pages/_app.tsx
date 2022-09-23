import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Layout from '../components/common/Layout'
import {
  ApolloClient,
  ApolloProvider,
  DefaultOptions,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

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

  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.NEXT_PUBLIC__GRAPHCMS_TOKEN}`,
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
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
