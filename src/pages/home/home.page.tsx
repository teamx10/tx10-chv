import React, { FC } from 'react';

import { CoinsList } from '../../components/coins-list';
import { PageUi } from '../../components/page-ui';
import { useCoinMarketCapCoins } from '../../hooks/useCoinMarketCapCoins';

export const HomePage: FC = () => {
  const { coins } = useCoinMarketCapCoins();

  return (
    <PageUi>
      <h1>Home Page</h1>
      {coins ? <CoinsList coins={coins} changeKey="percent_change_24h" /> : <div>Loading...</div>}
    </PageUi>
  );
};
