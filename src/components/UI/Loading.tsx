import React from 'react';
import styled from 'styled-components';
import { LOADING_TYPES } from '../Products/contstants';
import Skeleton from './Skeleton';
import { CircularProgress } from '@mui/material';

const LoadingContainer = styled.div`
  width: 75vw;
  margin: auto;
`;

const Loading = ({
  type = LOADING_TYPES.DEFAULT,
  skeletonQuantity,
}: {
  type?: LOADING_TYPES;
  skeletonQuantity?: number;
}) => {
  const LoadingComponents = {
    [LOADING_TYPES.SKELETON]: <Skeleton skeletonQuantity={skeletonQuantity} />,
    [LOADING_TYPES.DEFAULT]: <CircularProgress />,
  };

  return (
    <LoadingContainer data-testid="loading">
      {LoadingComponents[type]}
    </LoadingContainer>
  );
};

export default Loading;
