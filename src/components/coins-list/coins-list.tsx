import React, { FC } from 'react';

import { Box } from '@mui/material';

import { CryptoCurrencyRaw } from '../../interfaces/CryptoCurrency';
import { CoinItem } from '../coin-item';

interface Props {
  coins: CryptoCurrencyRaw[];
  changeKey: keyof CryptoCurrencyRaw['quote']['USD'];
}

const MAX_SIZE = 500;

export const CoinsList: FC<Props> = ({ coins, changeKey }) => {
  const SIZE_KOEF = MAX_SIZE / coins[0]?.quote.USD.fully_diluted_market_cap;

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {coins.map(coin => (
        <CoinItem
          key={coin.id}
          coin={coin}
          size={Math.round(coin.quote.USD.fully_diluted_market_cap * SIZE_KOEF)}
          changeKey={changeKey}
        />
      ))}
    </Box>
  );
};
