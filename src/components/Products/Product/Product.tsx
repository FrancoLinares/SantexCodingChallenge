import React from 'react';
import {
  getProducts_products_items,
  getProducts_products_items_variants,
} from '../../../graphql/__generated__/getProducts';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import { StyledCard, StyledImg } from './styled';
import { PRODUCT_CARD_BUTTON_CONTENT } from '../contstants';
import { useMutation } from '@apollo/client';
import { ADD_TO_CART_MUTATION } from '../../../graphql/mutations';
import useOrder from '../../../hooks/useOrder';
import { addItemToOrder_addItemToOrder_Order } from '../../../graphql/__generated__/addItemToOrder';

const Product = ({
  variant,
  productName,
}: {
  productName: getProducts_products_items['name'];
  variant: getProducts_products_items_variants;
}) => {
  const { description } = variant.product;
  const { id: productVariantId, price, currencyCode, name } = variant;
  const assetURL = variant.product.assets[0].source;
  const { setSubTotal, setCartItems } = useOrder();

  const onCompleteMutation = ({
    addItemToOrder,
  }: {
    addItemToOrder: addItemToOrder_addItemToOrder_Order;
  }) => {
    // If the mutation was successful,
    // update the context with the new data
    const order = addItemToOrder;
    // Checks to verify that the mutation was successful
    if (order?.state === 'AddingItems' && !!order?.total) {
      // Update the subtotal shared state - to keep it in sync with local storage
      setSubTotal(order?.total);
      // Add the new product to the cart shared state
      setCartItems(order?.lines || []);
    }
  };

  const [addToCart] = useMutation<{
    addItemToOrder: addItemToOrder_addItemToOrder_Order;
  }>(ADD_TO_CART_MUTATION, { onCompleted: onCompleteMutation });

  const handleBuy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    addToCart({
      variables: {
        productVariantId,
        // For the purposes of this challenge, only one product can be added
        quantity: 1,
      },
    });
  };

  return (
    <StyledCard
      variant="outlined"
      data-testid={`product-variant-card-${productName}`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {/* Product Type */}
          {productName}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <StyledImg src={assetURL} alt={name} />
      <CardActions>
        <Typography>Price: {`${price} ${currencyCode}`}</Typography>
        <Button size="small" onClick={handleBuy}>
          {PRODUCT_CARD_BUTTON_CONTENT}
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default Product;
