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

export const ERROR_ORDER_PAGE = {
  fragments: {
    OrderModificationError: gql`
      fragment OrderModificationErrorFields on OrderModificationError {
        message
        errorCode
      }
    `,
    OrderLimitError: gql`
      fragment OrderLimitErrorFields on OrderLimitError {
        message
        errorCode
        maxItems
      }
    `,
    NegativeQuantityError: gql`
      fragment NegativeQuantityErrorFields on NegativeQuantityError {
        message
        errorCode
      }
    `,
    InsufficientStockError: gql`
      fragment InsufficientStockErrorFields on InsufficientStockError {
        message
        errorCode
      }
    `,
  },
};
