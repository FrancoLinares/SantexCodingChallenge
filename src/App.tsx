import { ApolloProvider } from '@apollo/client';
import { Header } from './components/Header';
import { ProductList } from './components/Products/ProductList';
import client from './apollo/client';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <>
      <ApolloProvider client={client}>
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
