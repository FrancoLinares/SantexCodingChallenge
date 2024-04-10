import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { productsMocks } from './utils/testMocks';
import App from './App';

const renderMockedApp = () =>
  render(
    <MockedProvider mocks={productsMocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

describe('App component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render logo on Header', async () => {
    renderMockedApp();

    expect(await screen.findByAltText('logo')).toBeInTheDocument();
  });
  it('should render sub total', async () => {
    renderMockedApp();

    expect(await screen.findByTestId('subtotal')).toBeInTheDocument();
  });
  it('should render products names', async () => {
    renderMockedApp();

    expect(await screen.findByText('Loading...')).toBeInTheDocument();

    const productsNames = await screen.findAllByTestId('product-name');
    expect(productsNames).toHaveLength(2);
    const productNamesMocked = productsMocks[0].result.data.products.items.map(
      ({ name }) => name
    );
    // Verify that the product names are correct
    productsNames.forEach((product, index) => {
      expect(product).toHaveTextContent(productNamesMocked[index]);
    });
  });
});
