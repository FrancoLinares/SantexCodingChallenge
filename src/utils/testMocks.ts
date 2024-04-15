import { GraphQLError } from 'graphql';
import { ADD_TO_CART_MUTATION } from '../graphql/mutations';
import { GET_PRODUCTS } from '../graphql/queries';

export const productsMocks = {
  delay: 30,
  request: {
    query: GET_PRODUCTS,
    variables: {
      take: 5,
      skip: 0,
    },
  },
  result: {
    data: {
      products: {
        __typename: 'ProductList',
        items: [
          {
            __typename: 'Product',
            id: '1',
            description:
              'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
            name: 'Laptop',
            variants: [
              {
                __typename: 'ProductVariant',
                id: '1',
                product: {
                  __typename: 'Product',
                  id: '1',
                  description:
                    'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
                  name: 'Laptop',
                  assets: [
                    {
                      __typename: 'Asset',
                      id: '1',
                      name: 'derick-david-409858-unsplash.jpg',
                      source:
                        'https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg',
                      preview:
                        'https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
                    },
                  ],
                },
                productId: '1',
                languageCode: 'en',
                sku: 'L2201308',
                name: 'Laptop 13 inch 8GB',
                price: 129900,
                currencyCode: 'USD',
                priceWithTax: 155880,
              },
              {
                __typename: 'ProductVariant',
                id: '2',
                product: {
                  __typename: 'Product',
                  id: '1',
                  description:
                    'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
                  name: 'Laptop',
                  assets: [
                    {
                      __typename: 'Asset',
                      id: '1',
                      name: 'derick-david-409858-unsplash.jpg',
                      source:
                        'https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg',
                      preview:
                        'https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
                    },
                  ],
                },
                productId: '1',
                languageCode: 'en',
                sku: 'L2201508',
                name: 'Laptop 15 inch 8GB',
                price: 139900,
                currencyCode: 'USD',
                priceWithTax: 167880,
              },
              {
                __typename: 'ProductVariant',
                id: '3',
                product: {
                  __typename: 'Product',
                  id: '1',
                  description:
                    'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
                  name: 'Laptop',
                  assets: [
                    {
                      __typename: 'Asset',
                      id: '1',
                      name: 'derick-david-409858-unsplash.jpg',
                      source:
                        'https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg',
                      preview:
                        'https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
                    },
                  ],
                },
                productId: '1',
                languageCode: 'en',
                sku: 'L2201316',
                name: 'Laptop 13 inch 16GB',
                price: 219900,
                currencyCode: 'USD',
                priceWithTax: 263880,
              },
              {
                __typename: 'ProductVariant',
                id: '4',
                product: {
                  __typename: 'Product',
                  id: '1',
                  description:
                    'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
                  name: 'Laptop',
                  assets: [
                    {
                      __typename: 'Asset',
                      id: '1',
                      name: 'derick-david-409858-unsplash.jpg',
                      source:
                        'https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg',
                      preview:
                        'https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
                    },
                  ],
                },
                productId: '1',
                languageCode: 'en',
                sku: 'L2201516',
                name: 'Laptop 15 inch 16GB',
                price: 229900,
                currencyCode: 'USD',
                priceWithTax: 275880,
              },
            ],
          },
          {
            __typename: 'Product',
            id: '2',
            description:
              'If the computer were invented today, what would it look like? It would be powerful enough for any task. So mobile you could take it everywhere. And so intuitive you could use it any way you wanted — with touch, a keyboard, or even a pencil. In other words, it wouldn’t really be a "computer." It would be Tablet.',
            name: 'Tablet',
            variants: [
              {
                __typename: 'ProductVariant',
                id: '5',
                product: {
                  __typename: 'Product',
                  id: '2',
                  description:
                    'If the computer were invented today, what would it look like? It would be powerful enough for any task. So mobile you could take it everywhere. And so intuitive you could use it any way you wanted — with touch, a keyboard, or even a pencil. In other words, it wouldn’t really be a "computer." It would be Tablet.',
                  name: 'Tablet',
                  assets: [
                    {
                      __typename: 'Asset',
                      id: '2',
                      name: 'kelly-sikkema-685291-unsplash.jpg',
                      source:
                        'https://demo.vendure.io/assets/source/5a/kelly-sikkema-685291-unsplash.jpg',
                      preview:
                        'https://demo.vendure.io/assets/preview/b8/kelly-sikkema-685291-unsplash__preview.jpg',
                    },
                  ],
                },
                productId: '2',
                languageCode: 'en',
                sku: 'TBL200032',
                name: 'Tablet 32GB',
                price: 32900,
                currencyCode: 'USD',
                priceWithTax: 39480,
              },
              {
                __typename: 'ProductVariant',
                id: '6',
                product: {
                  __typename: 'Product',
                  id: '2',
                  description:
                    'If the computer were invented today, what would it look like? It would be powerful enough for any task. So mobile you could take it everywhere. And so intuitive you could use it any way you wanted — with touch, a keyboard, or even a pencil. In other words, it wouldn’t really be a "computer." It would be Tablet.',
                  name: 'Tablet',
                  assets: [
                    {
                      __typename: 'Asset',
                      id: '2',
                      name: 'kelly-sikkema-685291-unsplash.jpg',
                      source:
                        'https://demo.vendure.io/assets/source/5a/kelly-sikkema-685291-unsplash.jpg',
                      preview:
                        'https://demo.vendure.io/assets/preview/b8/kelly-sikkema-685291-unsplash__preview.jpg',
                    },
                  ],
                },
                productId: '2',
                languageCode: 'en',
                sku: 'TBL200128',
                name: 'Tablet 128GB',
                price: 44500,
                currencyCode: 'USD',
                priceWithTax: 53400,
              },
            ],
          },
        ],
        totalItems: 54,
      },
    },
  },
};

export const addToCartMutationMock = ({
  total,
  productVariantId,
  totalQuantity,
}: {
  total: number;
  productVariantId: string;
  totalQuantity: number;
}) => ({
  request: {
    query: ADD_TO_CART_MUTATION,
    variables: {
      productVariantId,
      quantity: 1,
    },
  },
  result: {
    data: {
      addItemToOrder: {
        code: 'NFNCUJSPGJG8N6R7',
        id: '5',
        lines: [],
        state: 'AddingItems',
        total,
        totalQuantity,
      },
    },
  },
});

export const addToCartMutationErrorMock = ({
  productVariantId,
}: {
  productVariantId: string;
}) => ({
  request: {
    query: ADD_TO_CART_MUTATION,
    variables: {
      productVariantId,
      quantity: 1,
    },
  },
  result: {
    errors: [new GraphQLError('Error!')],
  },
});
