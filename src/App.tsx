import React, { FC, useEffect, useState } from 'react';

import './App.css';

import { Box } from '@mui/material';

import { getData } from './api/getData';
import { CryptoCurrencyRaw } from './interfaces/CryptoCurrency';

export const App: FC = () => {
  const [cryptoCurrencyList, setCryptoCurrencyList] = useState<CryptoCurrencyRaw[]>([]);
  useEffect(() => {
    void getData().then(setCryptoCurrencyList);
  }, []);
  // eslint-disable-next-line no-console
  console.log('data', cryptoCurrencyList);

  return (
    <Box>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
    </Box>
  );
};
