import { FC } from 'react';

import { Box } from '@mui/material';

import { CryptoCurrencyRaw } from '../../interfaces/CryptoCurrency';

const MIN_SIZE = 50;

interface Props {
  coin: CryptoCurrencyRaw;
  size: number;
  changeKey: keyof CryptoCurrencyRaw['quote']['USD'];
}

export const CoinItem: FC<Props> = ({ coin, size, changeKey }) => {
  const width = size > MIN_SIZE ? size : MIN_SIZE;
  const height = size > MIN_SIZE ? size : MIN_SIZE;
  const bgcolor = coin.quote.USD[changeKey] >= 0 ? 'success.main' : 'error.main';

  return (
    <Box
      sx={{
        boxShadow: 1,
        p: 1,
        display: 'flex',
        width,
        height,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor
      }}
    >
      {coin.symbol}
    </Box>
  );
};
