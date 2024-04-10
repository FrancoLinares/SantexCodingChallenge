// Here we put queries. Remove next line
import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query getProducts($take: Int, $skip: Int) {
    products(options: { take: $take, skip: $skip }) {
      items {
        id
        description
        name
        variants {
          id
          product {
            id
            description
            name
            assets {
              id
              name
              source
              preview
            }
          }
          productId
          languageCode
          sku
          name
          price
          currencyCode
          priceWithTax
        }
      }
      totalItems
    }
  }
`;
