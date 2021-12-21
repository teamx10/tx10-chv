import { FC } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton } from '@mui/material';

import { CryptoCurrencyRaw } from '../../interfaces/CryptoCurrency';

const MIN_SIZE = 50;

interface Props {
  coin: CryptoCurrencyRaw;
  size: number;
  changeKey: keyof CryptoCurrencyRaw['quote']['USD'];
  onRemove: () => void;
}

export const CoinItem: FC<Props> = ({ coin, size, changeKey, onRemove }) => {
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
        bgcolor,
        position: 'relative'
      }}
    >
      {coin.symbol}
      <IconButton aria-label="delete" sx={{ position: 'absolute', top: 0, right: 0 }} onClick={onRemove}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};
