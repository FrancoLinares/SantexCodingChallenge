import styled from 'styled-components';
import { CartIcon } from '../UI/Icons';

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

  @media screen and (max-width: 425px) {
    font-size: 1rem;
  }
`;

export const Cart = styled.div`
  display: flex;
`;

export const StyledCartIcon = styled(CartIcon)`
  margin: 0 2vw 0 0.5vw;
  cursor: pointer;
`;

export const HeaderImg = styled.img`
  width: 15vw;

  @media screen and (max-width: 425px) {
    width: 30vw;
  }
`;
