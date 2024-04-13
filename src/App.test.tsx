import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { productsMocks } from './utils/testMocks';
import App from './App';
import { OrderProvider } from './providers/OrderProvider';

const renderMockedApp = () =>
  render(
    <MockedProvider mocks={[productsMocks]} addTypename={false}>
      <OrderProvider>
        <App />
      </OrderProvider>
    </MockedProvider>
  );

describe('App component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render logo on Header', async () => {
    renderMockedApp();

    expect(await screen.findByAltText('logo')).toBeInTheDocument();
  });
  it('should render sub total', async () => {
    renderMockedApp();

    expect(await screen.findByTestId('subtotal')).toBeInTheDocument();
  });
  it('should render products names', async () => {
    renderMockedApp();

    expect(await screen.findByTestId('loading')).toBeInTheDocument();
  });
});
