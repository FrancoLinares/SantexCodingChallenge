import React from 'react';
import styled from 'styled-components';
import { LOADING_TYPES } from './Products/contstants';
import Skeleton from './Skeleton';

const LoadingContainer = styled.div`
  width: 75vw;
  margin: auto;
`;

const Loading = ({
  type,
  skeletonQuantity,
}: {
  type: LOADING_TYPES;
  skeletonQuantity?: number;
}) => {
  const LoadingComponents = {
    [LOADING_TYPES.SKELETON]: <Skeleton skeletonQuantity={skeletonQuantity} />,
    [LOADING_TYPES.DEFAULT]: <p>Loading...</p>,
  };

  return (
    <LoadingContainer data-testid="loading">
      {LoadingComponents[type]}
    </LoadingContainer>
  );
};

export default Loading;
