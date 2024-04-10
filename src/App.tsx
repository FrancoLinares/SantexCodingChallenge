import { ApolloProvider } from '@apollo/client';
import { Header } from './components/Header';
import { ProductList } from './components/Products/ProductList';
import client from './apollo/client';

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div>
          <ProductList />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
