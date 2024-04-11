import React from 'react';
import { Button, Typography } from '@mui/material';
import {
  ARIA_LABEL_CURRENT_PAGE,
  ARIA_LABEL_NAV,
  NEXT_BUTTON_LABEL,
  PAGINATION_LABEL,
  PREV_BUTTON_LABEL,
} from './constants';
import { StyledNavigation } from './styled';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = React.memo(
  ({ currentPage, totalPages, setPage }: PaginationProps) => (
    <StyledNavigation role="navigation" aria-label={ARIA_LABEL_NAV}>
      <Button
        disabled={currentPage === 0}
        onClick={() => setPage((prevState) => prevState - 1)}
      >
        {PREV_BUTTON_LABEL}
      </Button>
      <Typography
        variant="h6"
        aria-label={`${ARIA_LABEL_CURRENT_PAGE} ${currentPage}`}
      >
        {PAGINATION_LABEL} {currentPage + 1} / {totalPages}
      </Typography>
      <Button
        disabled={currentPage >= totalPages - 1}
        onClick={() => setPage((prevState) => prevState + 1)}
      >
        {NEXT_BUTTON_LABEL}
      </Button>
    </StyledNavigation>
  )
);

export default Pagination;
