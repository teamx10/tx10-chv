import React, { FC } from 'react';

import './App.css';

import { useCoinMarketCapCoins } from '@hooks/useCoinMarketCapCoins';

import { CoinsList } from './components/coins-list';

export const App: FC = () => {
  const { coins } = useCoinMarketCapCoins();
  // eslint-disable-next-line no-console
  console.log('coins', coins);

  return coins ? <CoinsList coins={coins} changeKey="percent_change_24h" /> : <div>Loading...</div>;
};
