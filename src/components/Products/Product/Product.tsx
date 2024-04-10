import React from 'react';
import {
  getProducts_products_items,
  getProducts_products_items_variants,
} from '../../../graphql/__generated__/getProducts';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import { StyledCard } from './styled';
import { PRODUCT_CARD_BUTTON_CONTENT } from '../contstants';

const Product = ({
  variant,
  productName,
}: {
  productName: getProducts_products_items['name'];
  variant: getProducts_products_items_variants;
}) => {
  const { description } = variant.product;
  const { price, currencyCode, name } = variant;

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
      <CardActions>
        <Typography>Price: {`${price} ${currencyCode}`}</Typography>
        <Button size="small">{PRODUCT_CARD_BUTTON_CONTENT}</Button>
      </CardActions>
    </StyledCard>
  );
};

export default Product;
