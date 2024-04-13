import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { ProductList } from './ProductList';
import { productsMocks } from '../../../utils/testMocks';
import { GENERIC_ERROR } from '../../constants';
import { OrderProvider } from '../../../providers/OrderProvider';

const renderMockedApp = (mockData: MockedResponse) =>
  render(
    <MockedProvider mocks={[mockData]} addTypename={false}>
      <OrderProvider>
        <ProductList />
      </OrderProvider>
    </MockedProvider>
  );

describe('ProductList component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render error when query fails', async () => {
    const mockErrorData = {
      request: productsMocks.request,
      error: new Error(),
    };
    renderMockedApp(mockErrorData);

    expect(await screen.findByText(GENERIC_ERROR)).toBeInTheDocument();
  });

  it('should render product names and variants', async () => {
    renderMockedApp(productsMocks);

    // Products names verification
    const productNamesMocked = productsMocks.result.data.products.items.map(
      ({ name }) => name
    );
    const productsNames = await screen.findAllByTestId('product-name');
    expect(productsNames).toHaveLength(2);

    // Verify that the product names are correct
    productsNames.forEach((product, index) => {
      expect(product).toHaveTextContent(productNamesMocked[index]);
    });

    // Products variants verification
    // Data from `productsMocks`
    const lengthByProductName = {
      Laptop: 4,
      Tablet: 2,
    } as { [key: string]: number };

    const productsVariantLaptop = await screen.findAllByTestId(
      `product-variant-card-Laptop`
    );
    expect(productsVariantLaptop).toHaveLength(lengthByProductName['Laptop']);

    const productsVariantTablet = await screen.findAllByTestId(
      `product-variant-card-Tablet`
    );
    expect(productsVariantTablet).toHaveLength(lengthByProductName['Tablet']);
  });
});
