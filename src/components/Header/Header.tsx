import { useMemo } from 'react';
import useOrder from '../../hooks/useOrder';
import { currencyFormat } from '../../utils/helpers';
import {
  Cart,
  HeaderImg,
  StyledCartIcon,
  StyledHeader,
  SubTotal,
} from './styled';

export function Header() {
  const { subTotal } = useOrder();
  const currencyFormatted = useMemo(() => currencyFormat(subTotal), [subTotal]);

  return (
    <StyledHeader>
      <HeaderImg
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <Cart>
        <SubTotal data-testid="subtotal">
          Sub total: {currencyFormatted}
        </SubTotal>
        <StyledCartIcon
          onClick={() => {
            console.log('hola');
          }}
        />
      </Cart>
    </StyledHeader>
  );
}
