import axios from 'axios';

import { CryptoCurrencyRaw } from '../interfaces/CryptoCurrency';

export const getData = async (): Promise<CryptoCurrencyRaw[]> => {
  try {
    const res = await axios.get('/data/listing.json');

    return res.data.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error', error);
  }

  return [];
};
