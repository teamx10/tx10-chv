import React, { FC, useEffect, useState } from 'react';

import './App.css';

import { getData } from './api/getData';
import { CoinsList } from './components/coins-list';
import { CryptoCurrencyRaw } from './interfaces/CryptoCurrency';

export const App: FC = () => {
  const [cryptoCurrencyList, setCryptoCurrencyList] = useState<CryptoCurrencyRaw[] | null>(null);
  useEffect(() => {
    void getData().then(setCryptoCurrencyList);
  }, []);
  // eslint-disable-next-line no-console
  console.log('data', cryptoCurrencyList);

  return cryptoCurrencyList ? (
    <CoinsList coins={cryptoCurrencyList} changeKey="percent_change_24h" />
  ) : (
    <div>Loading...</div>
  );
};
