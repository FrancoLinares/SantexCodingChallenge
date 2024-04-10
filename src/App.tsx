import { ApolloProvider } from '@apollo/client';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import client from './apollo';

function App() {
  return (
    <>
      <Header></Header>
      <div>
        <ApolloProvider client={client}>
          <ProductList></ProductList>
        </ApolloProvider>
      </div>
    </>
  );
}

export default App;
