# Santex RBI Team - Front End Training Challenge

Quick challenge to help candidates to join RBI Team to catch up with currently used technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Goals

- Get familiar with Styled Components as styling strategy
- Get a good understanding of Apollo Client and how to integrate Graphql to a React front end application
- Use Graphql Fragments
- Acquire good practices with Jest and testing both components and hooks
- Review React hooks concepts and develop custom hooks

## Requirements

- Implement a home page with a grid of products that includes product picture, description and price (from any product variant). Hint: use Graphql query.
- Create a "Buy" button for each product in the greed and implement a mutation to update an order everytime a user clicks on that button.
  The mutation is called `addItemToOrder`. Hint: look into the API documentation section of this document
- Implement app header component that includes the subtotal of the current order and persists through page refresh. Hint: use Graphql mutation and Context API
- Add custom hook named `useStateWithStorage` with same API as `useState` hook but adding local storage capabilities. Can be used for header subtotal
- Create tests for grid UI item and other components

## API documentation

Even thought the app is already connected to a graphql endpoint, the trainee can find here all required information about `queries`, `mutations` and Graphql types.

- https://www.vendure.io/docs/graphql-api/shop/

## Scripts

### `yarn codegen`

Generate Graphql types with `yarn run codegen`

### `yarn start`

Runs the app in the development mode.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## How to use

Run `nvm use` to set node version (you need nvm to be installed)

Run `yarn` to install dependencies

Run `yarn start` to start the app

Happy coding!

To create the build use `yarn build`

## URL of the deployed project

https://FrancoLinares.github.io/SantexCodingChallenge

## Franco's Changes

### Description and explanation of decision making

Apollo Client: When implementing the Apollo client in this project it is very important to inject the session token in the request because without it every time the `addItemToOrder` mutation is executed a new order is created because the API cannot recognize the session.

State management: For state management between components we chose to use the Context API, if it was necessary to add, modify and delete elements in the order we would have chosen to add a reducer inside the context to make it cleaner and simpler to manage.
To keep the localStorage updated I decided to implement a custom hook to keep it synchronized with the context, and only have to update the state once.

GraphQL: Since we work with Typescript it is very important to generate the types based on the GraphQL schema, for this a `codegen` was added in the package.json . There are many ways to generate the types based on GraphQL schemas, I used the simplest one that does not need new packages since it is a coding challenge.

Important:

- To simplify the use case, the auth token is not verified to be valid before starting the mutation, the API session is not synchronized with the data at startup, therefore, if the auth token expires but the localStorage does not, an incorrect value would be displayed (out of sync).
- There are libraries that do not work with NodeJS versions older than v18, so an nvm file was added and the supported versions were specified in the package.json to avoid errors.

### Changes list

- Add .nvmrc(and engine package.json) for node version. Node v18 is not working, postcss module fails.
- Add generated Apollo types - `yarn run codegen`
- Add pagination
- Components Code splitting
- Persist order code, subTotal and auth token

### Implementations I would have liked to perform

- Implement relative paths. For example, `src/components/Products/ProductList/ProductList.tsx` should be `@/components/Products/ProductList/ProductList.tsx`.
  This will make it easier to maintain the codebase. It's a simple change, but `create-react-app` prevents us from doing so since we need to modify the compiler.
- Login page
- Lazy loading for Apollo client
- Show cart items(added to Context state)
- Add more unit test
- Add E2E test - Playwright
- Improve desktop and mobile styles
- If it was a more complex app(CRUD), I would have added a reducer
