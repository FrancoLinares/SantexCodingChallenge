import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const API_URL = `https://demo.vendure.io/shop-api`;

const AUTH_TOKEN_KEY = 'auth_token';

const httpLink = new HttpLink({
  uri: API_URL,
  // This is required if using cookie-based session management,
  // so that any cookies get sent with the request.
  credentials: 'include',
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get('vendure-auth-token');
    if (authHeader) {
      // If the auth token has been returned by the Vendure
      // server, we store it in localStorage
      localStorage.setItem(AUTH_TOKEN_KEY, authHeader);
    }
    return response;
  });
});

const client = new ApolloClient({
  link: ApolloLink.from([
    // If we have stored the authToken from a previous
    // response, we attach it to all subsequent requests.
    setContext((request, operation) => {
      const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
      let headers: Record<string, any> = {};
      if (authToken) {
        headers.authorization = `Bearer ${authToken}`;
      }

      return { headers };
    }),
    afterwareLink,
    httpLink,
  ]),
  cache: new InMemoryCache(),
});

export default client;
