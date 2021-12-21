import React, { FC, useState } from 'react';

import { Box } from '@mui/material';

import { CryptoCurrencyRaw } from '../../interfaces/CryptoCurrency';
import { CoinItem } from '../coin-item';

interface Props {
  coins: CryptoCurrencyRaw[];
  changeKey: keyof CryptoCurrencyRaw['quote']['USD'];
}

const MAX_SIZE = 500;

export const CoinsList: FC<Props> = ({ coins, changeKey }) => {
  const [list, setList] = useState(coins);

  const SIZE_KOEF = MAX_SIZE / list[0]?.quote.USD.fully_diluted_market_cap;

  const handleRemoveCoin = (coin: CryptoCurrencyRaw) => {
    setList(list.filter(({ id }) => id !== coin.id));
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {list.map(coin => (
        <CoinItem
          key={coin.id}
          coin={coin}
          size={Math.round(coin.quote.USD.fully_diluted_market_cap * SIZE_KOEF)}
          changeKey={changeKey}
          onRemove={() => handleRemoveCoin(coin)}
        />
      ))}
    </Box>
  );
};
