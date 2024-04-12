import { ApolloProvider } from '@apollo/client';
import { Header } from './components/Header';
import { ProductList } from './components/Products/ProductList/ProductList';
import apolloClient from './apollo/client';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ErrorBoundary>
          <Header />
          <div>
            <ProductList />
          </div>
        </ErrorBoundary>
      </ApolloProvider>
    </>
  );
}

export default App;
