import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { productsMocks } from '../../../utils/testMocks';
import Product from './Product';
import {
  getProducts_products_items,
  getProducts_products_items_variants,
} from '../../../graphql/__generated__/getProducts';
import { PRODUCT_CARD_BUTTON_CONTENT } from '../contstants';

const renderMockedApp = ({
  productName,
  variant,
}: {
  productName: getProducts_products_items['name'];
  variant: getProducts_products_items_variants;
}) => render(<Product variant={variant} productName={productName} />);

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
});
