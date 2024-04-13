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
import Pagination from '../../Pagination';
import { LOADING_TYPES, PAGE_SIZE } from '../contstants';
import { StyledGridItem } from './styled';
import Loading from '../../Loading';

export function ProductList() {
  const [page, setPage] = useState(0);

  const { data, loading, error } = useQuery<getProducts>(GET_PRODUCTS, {
    variables: {
      take: PAGE_SIZE,
      skip: PAGE_SIZE * page,
    },
  });

  const totalPages = Math.round((data?.products.totalItems || 0) / PAGE_SIZE);
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

  if (loading)
    return <Loading type={LOADING_TYPES.SKELETON} skeletonQuantity={8} />;
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
            >
              {variantsByProduct.map((variant) => (
                <StyledGridItem item xs={12} key={variant.id}>
                  <Product variant={variant} productName={productName} />
                </StyledGridItem>
              ))}
            </Grid>
          </div>
        )
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}
