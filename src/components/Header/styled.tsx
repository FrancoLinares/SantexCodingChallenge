import styled from 'styled-components';
import { CartIcon } from '../Icons';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  background: red;
  padding: 2vh 1vw;
`;

export const SubTotal = styled.div`
  margin: 0 3vw 0 0;
  font-size: 1.3rem;
`;

export const Cart = styled.div`
  display: flex;
`;

export const StyledCartIcon = styled(CartIcon)`
  margin: 0 2vw 0 0.5vw;
  cursor: pointer;
`;
