import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://demo.vendure.io/shop-api/',
  cache: new InMemoryCache(),
});

export default client;
