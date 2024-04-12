// Here we put mutations. Remove next line
import { gql } from '@apollo/client';
import { ERROR_ORDER_PAGE, PRODUCT_VARIANT_FIELDS_FRAGMENT } from './fragments';

export const ADD_TO_CART_MUTATION = gql`
  ${ERROR_ORDER_PAGE.fragments.OrderModificationError}
  ${ERROR_ORDER_PAGE.fragments.OrderLimitError}
  ${ERROR_ORDER_PAGE.fragments.NegativeQuantityError}
  ${ERROR_ORDER_PAGE.fragments.InsufficientStockError}
  ${PRODUCT_VARIANT_FIELDS_FRAGMENT}
  mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      __typename
      ... on Order {
        id
        state
        totalQuantity
        total
        code
        lines {
          id
          quantity
          productVariant {
            ...ProductVariantFieldsFragment
          }
        }
      }
      ...OrderModificationErrorFields
      ...OrderLimitErrorFields
      ...NegativeQuantityErrorFields
      ...InsufficientStockErrorFields
    }
  }
`;
