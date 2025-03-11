"use client"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL, 
  cache: new InMemoryCache()
});

const ApolloContext = ({ children }) => {

    return (
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    )
}

export default ApolloContext;
