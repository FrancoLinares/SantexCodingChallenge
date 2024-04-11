import React from 'react';
import { Button, Typography } from '@mui/material';
import { ARIA_LABEL_CURRENT_PAGE, ARIA_LABEL_NAV } from './constants';
import { StyledNavigation } from './styled';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = React.memo(
  ({ currentPage, totalPages, setPage }: PaginationProps) => {
    return (
      <StyledNavigation role="navigation" aria-label={ARIA_LABEL_NAV}>
        <Button
          disabled={currentPage === 0}
          onClick={() => setPage((prevState) => prevState - 1)}
        >
          Previous
        </Button>
        <Typography
          variant="h6"
          aria-label={`${ARIA_LABEL_CURRENT_PAGE} ${currentPage}`}
        >
          Page {currentPage + 1} / {totalPages}
        </Typography>
        <Button
          disabled={currentPage === totalPages - 1}
          onClick={() => setPage((prevState) => prevState + 1)}
        >
          Next
        </Button>
      </StyledNavigation>
    );
  }
);

export default Pagination;
