export interface CryptoCurrencyRaw {
  circulating_supply: number;
  cmc_rank: number;
  date_added: string;
  id: number;
  last_updated: string;
  max_supply: number;
  name: string;
  num_market_pairs: number;
  platform: null | string;
  quote: {
    USD: {
      fully_diluted_market_cap: number;
      last_updated: string;
      market_cap: number;
      market_cap_dominance: number;
      percent_change_1h: number;
      percent_change_7d: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_60d: number;
      percent_change_90d: number;
      price: number;
      volume_24h: number;
      volume_change_24h: number;
    };
  };
  slug: string;
  symbol: string;
  tags: string[];
  total_supply: number;
}
