// Here we put queries. Remove next line
import { gql } from '@apollo/client';
import {
  CORE_PRODUCT_FIELDS_FRAGMENT,
  PRODUCT_ASSETS_FRAGMENT,
  PRODUCT_VARIANT_FIELDS_FRAGMENT,
} from './fragments';

export const GET_PRODUCTS = gql`
  ${PRODUCT_ASSETS_FRAGMENT}
  ${CORE_PRODUCT_FIELDS_FRAGMENT}
  ${PRODUCT_VARIANT_FIELDS_FRAGMENT}
  query getProducts($take: Int, $skip: Int) {
    products(options: { take: $take, skip: $skip }) {
      items {
        ...CoreProductFieldsFragment
        variants {
          ...ProductVariantFieldsFragment
          product {
            ...CoreProductFieldsFragment
            description
            assets {
              ...ProductAssetsFragment
            }
          }
        }
      }
      totalItems
    }
  }
`;
