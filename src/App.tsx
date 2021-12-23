import React, { FC } from 'react';

import './App.css';

import { CoinsList } from './components/coins-list';
import { PageUi } from './components/page-ui';
import { useCoinMarketCapCoins } from './hooks/useCoinMarketCapCoins';

export const App: FC = () => {
  const { coins } = useCoinMarketCapCoins();
  // eslint-disable-next-line no-console
  console.log('coins', coins);

  return <PageUi>{coins ? <CoinsList coins={coins} changeKey="percent_change_24h" /> : <div>Loading...</div>}</PageUi>;
};
