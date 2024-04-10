import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../../graphql/queries';
import {
  getProducts,
  getProducts_products_items_variants,
} from '../../../graphql/__generated__/getProducts';
import Product from '../Product/Product';
import { Grid, Typography } from '@mui/material';
import { GENERIC_ERROR } from '../../constants';

export function ProductList() {
  const [take, setTake] = useState(2);
  const [skip, setSkip] = useState(0);

  const { data, loading, error } = useQuery<getProducts>(GET_PRODUCTS, {
    variables: {
      take,
      skip,
    },
  });

  const products = data?.products.items || [];
  const variantsByProducts = products.reduce((acc, product) => {
    const productName = product.name;

    const variants = product.variants.map((variant) => ({
      ...variant,
      productName,
    }));

    acc[productName] = variants;

    return acc;
  }, {} as { [key: string]: getProducts_products_items_variants[] });

  if (loading) return <p>Loading...</p>;
  if (error) return <h2>{GENERIC_ERROR}</h2>;

  return (
    <div>
      {Object.entries(variantsByProducts).map(
        ([productName, variantsByProduct]) => (
          <div key={productName}>
            <Typography variant="h5" data-testid="product-name">
              {productName}
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              wrap="nowrap"
            >
              {variantsByProduct.map((variant) => (
                <Grid item xs={12} key={variant.id}>
                  <Product variant={variant} productName={productName} />
                </Grid>
              ))}
            </Grid>
          </div>
        )
      )}
    </div>
  );
}
