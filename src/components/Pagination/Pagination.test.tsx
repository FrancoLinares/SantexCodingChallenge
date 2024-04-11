import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Pagination, { PaginationProps } from '.';
import React from 'react';
import {
  NEXT_BUTTON_LABEL,
  PAGINATION_LABEL,
  PREV_BUTTON_LABEL,
} from './constants';

const renderMockedApp = ({
  currentPage,
  totalPages,
  setPage,
}: PaginationProps) => {
  return render(
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      setPage={setPage}
    />
  );
};

describe('Pagination component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render props correctly', async () => {
    const mockData = { currentPage: 0, totalPages: 2, setPage: () => {} };
    renderMockedApp(mockData);

    // Prev button
    expect(await screen.findByText(PREV_BUTTON_LABEL)).toBeInTheDocument();
    // Next button
    expect(await screen.findByText(NEXT_BUTTON_LABEL)).toBeInTheDocument();
    // Page content
    expect(
      await screen.findByText(
        `${PAGINATION_LABEL} ${mockData.currentPage + 1} / ${
          mockData.totalPages
        }`
      )
    ).toBeInTheDocument();
  });

  describe('Next button', () => {
    it('should call setPage when click next button', async () => {
      const mockData = {
        currentPage: 0,
        totalPages: 2,
        setPage: () => jest.fn(),
      };

      const setPage = jest.spyOn(mockData, 'setPage');

      renderMockedApp(mockData);
      // Next button
      const nextButton = await screen.findByText(NEXT_BUTTON_LABEL);
      expect(nextButton).toBeInTheDocument();

      // Click next button
      nextButton.click();

      expect(setPage).toHaveBeenCalled();
    });
    it('should NOT call setPage when click next button - last page - button disabled', async () => {
      const mockData = {
        currentPage: 2,
        totalPages: 2,
        setPage: () => jest.fn(),
      };

      const setPage = jest.spyOn(mockData, 'setPage');

      renderMockedApp(mockData);
      // Next button
      const nextButton = await screen.findByText(NEXT_BUTTON_LABEL);
      expect(nextButton).toBeInTheDocument();

      // Click next button
      nextButton.click();

      expect(setPage).not.toHaveBeenCalled();
    });
  });

  describe('Previous button', () => {
    it('should call setPage when click previous button', async () => {
      const mockData = {
        currentPage: 1,
        totalPages: 2,
        setPage: () => jest.fn(),
      };

      const setPage = jest.spyOn(mockData, 'setPage');

      renderMockedApp(mockData);

      // Prev button
      const prevButton = await screen.findByText(PREV_BUTTON_LABEL);
      expect(prevButton).toBeInTheDocument();
      expect(prevButton).toHaveTextContent(PREV_BUTTON_LABEL);

      // Click Prev button
      prevButton.click();

      expect(setPage).toHaveBeenCalled();
    });

    it('should NOT call setPage when click previous button - currentPage = 0 - button disabled', async () => {
      const mockData = {
        currentPage: 0,
        totalPages: 2,
        setPage: () => jest.fn(),
      };

      const setPage = jest.spyOn(mockData, 'setPage');

      renderMockedApp(mockData);

      // Prev button
      const prevButton = await screen.findByText(PREV_BUTTON_LABEL);
      expect(prevButton).toBeInTheDocument();
      expect(prevButton).toHaveTextContent(PREV_BUTTON_LABEL);

      // Click Prev button
      prevButton.click();

      expect(setPage).not.toHaveBeenCalled();
    });
  });
});
