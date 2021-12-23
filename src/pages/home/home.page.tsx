import { FC, useEffect } from 'react';

import { CoinsList } from '../../components/coins-list';
import { PageUi } from '../../components/page-ui';
import { useCoinMarketCapCoins } from '../../hooks/useCoinMarketCapCoins';
import { useTitle } from '../../hooks/useTitle';

export const HomePage: FC = () => {
  const { coins } = useCoinMarketCapCoins();

  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle('Home Page');
  }, [setTitle]);

  return (
    <PageUi>
      <h1>Home Page</h1>
      {coins ? <CoinsList coins={coins} changeKey="percent_change_24h" /> : <div>Loading...</div>}
    </PageUi>
  );
};
