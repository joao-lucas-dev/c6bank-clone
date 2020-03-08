import React, { useState, memo } from 'react';

import {
  ViewBalance,
  Top,
  Nationality,
  TitleBalance,
  Bottom,
  BottomLeft,
  Symbol,
  Balance,
  ViewHidden,
  Hidden,
  BottomRight,
  ButtonSee,
  See,
} from './styles';

function BalanceItem() {
  const [visible, setVisible] = useState(false);

  return (
    <ViewBalance>
      <Top>
        <Nationality />
        <TitleBalance>Saldo</TitleBalance>
      </Top>

      <Bottom>
        <BottomLeft>
          <Symbol>R$</Symbol>
          {visible ? (
            <Balance>1.234.876,00</Balance>
          ) : (
            <ViewHidden>
              <Hidden />
              <Hidden />
              <Hidden />
              <Hidden />
              <Hidden />
              <Hidden />
            </ViewHidden>
          )}
        </BottomLeft>

        <BottomRight>
          <ButtonSee onPress={() => setVisible(!visible)}>
            {visible ? <See>Ocultar</See> : <See>Exibir</See>}
          </ButtonSee>
        </BottomRight>
      </Bottom>
    </ViewBalance>
  );
}

export default memo(BalanceItem);
