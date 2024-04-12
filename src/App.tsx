import { ApolloProvider } from '@apollo/client';
import { Header } from './components/Header';
import { ProductList } from './components/Products/ProductList/ProductList';
import apolloClient from './apollo/client';
import ErrorBoundary from './components/ErrorBoundary';
import { OrderProvider } from './providers/OrderProvider';

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <OrderProvider>
          <ErrorBoundary>
            <Header />
            <div>
              <ProductList />
            </div>
          </ErrorBoundary>
        </OrderProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
