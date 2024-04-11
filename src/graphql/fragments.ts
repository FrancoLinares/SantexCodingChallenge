import { gql } from '@apollo/client';

export const PRODUCT_ASSETS_FRAGMENT = gql`
  fragment ProductAssetsFragment on Asset {
    id
    name
    source
    preview
  }
`;

export const CORE_PRODUCT_FIELDS_FRAGMENT = gql`
  fragment CoreProductFieldsFragment on Product {
    id
    name
  }
`;

export const PRODUCT_VARIANT_FIELDS_FRAGMENT = gql`
  fragment ProductVariantFieldsFragment on ProductVariant {
    id
    name
    productId
    price
    currencyCode
  }
`;
