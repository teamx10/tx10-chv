import { useEffect, useState } from 'react';

import { getCoinMarketCapCoins } from '../api/coinmarketcap/getCoinMarketCapCoins';
import { CryptoCurrencyRaw } from '../interfaces/CryptoCurrency';

export const useCoinMarketCapCoins = () => {
  const [cryptoCurrencyList, setCryptoCurrencyList] = useState<CryptoCurrencyRaw[] | null>(null);
  useEffect(() => {
    void getCoinMarketCapCoins().then(setCryptoCurrencyList);
  }, []);

  return {
    coins: cryptoCurrencyList
  };
};
