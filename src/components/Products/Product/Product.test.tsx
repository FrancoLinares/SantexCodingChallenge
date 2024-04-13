import '@testing-library/jest-dom';
import { act, cleanup, render, screen } from '@testing-library/react';
import { addToCartMutationMock, productsMocks } from '../../../utils/testMocks';
import Product from './Product';
import {
  getProducts_products_items,
  getProducts_products_items_variants,
} from '../../../graphql/__generated__/getProducts';
import { PRODUCT_CARD_BUTTON_CONTENT } from '../contstants';
import { OrderProvider } from '../../../providers/OrderProvider';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { Header } from '../../Header/Header';
import { currencyFormat } from '../../../utils/helpers';

const renderMockedApp = ({
  productName,
  variant,
  mockedData = productsMocks,
}: {
  productName: getProducts_products_items['name'];
  variant: getProducts_products_items_variants;
  mockedData?: MockedResponse;
}) =>
  render(
    <MockedProvider mocks={[mockedData]} addTypename={false}>
      <OrderProvider>
        <Header />
        <Product variant={variant} productName={productName} />
      </OrderProvider>
    </MockedProvider>
  );

describe('Product component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render card product correctly', async () => {
    const variant = productsMocks.result.data.products.items[0]
      .variants[0] as getProducts_products_items_variants;
    renderMockedApp({
      productName: 'Laptop',
      variant,
    });

    // Name
    expect(await screen.findByText(variant.name)).toBeInTheDocument();
    // Price and currency code
    expect(
      await screen.findByText(`Price: ${variant.price} ${variant.currencyCode}`)
    ).toBeInTheDocument();
    // Description
    expect(
      await screen.findByText(variant.product.description)
    ).toBeInTheDocument();

    // Image
    expect(await screen.findByAltText(variant.name)).toBeInTheDocument();

    // Button
    expect(
      await screen.findByRole('button', { name: PRODUCT_CARD_BUTTON_CONTENT })
    ).toBeInTheDocument();
  });

  it('should update the state when BUY button is clicked', async () => {
    const variant = productsMocks.result.data.products.items[0]
      .variants[0] as getProducts_products_items_variants;

    renderMockedApp({
      productName: 'Laptop',
      variant,
      mockedData: addToCartMutationMock({
        total: variant.price,
        productVariantId: variant.id,
        totalQuantity: 1,
      }),
    });

    const button = await screen.findByRole('button', {
      name: PRODUCT_CARD_BUTTON_CONTENT,
    });
    button.click();

    const subTotalContent = await screen.findByTestId('subtotal');
    expect(subTotalContent).toHaveTextContent(currencyFormat(variant.price));
  });
});
