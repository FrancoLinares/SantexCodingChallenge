import { Suspense, lazy } from 'react';
import { ApolloProvider } from '@apollo/client';
import { OrderProvider } from './providers/OrderProvider';
import apolloClient from './apollo/client';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/UI/Loading';
// Code splitting
const Header = lazy(() =>
  import('./components/Header/Header').then(({ Header }) => ({
    default: Header,
  }))
);
const ProductList = lazy(() =>
  import('./components/Products/ProductList/ProductList').then(
    ({ ProductList }) => ({ default: ProductList })
  )
);

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </>
  );
}

export default App;
