import { Dispatch, SetStateAction } from "react";

export interface AssestIcon {
  asset_id: string;
  url: string;
}

export interface Rates {
  asset_id_quote: string;
  time: string;
  rate: number;
}

export interface ExchangeRates {
  asset_id_base: string;
  rates: Rates[];
}

export interface ExchangeRateContextValues {
  assetsIcons?: AssestIcon[];
  exchangeRates: ExchangeRates;
  toCurrency: string;
  setToCurrency: Dispatch<SetStateAction<string>>;
  fromCurrency: string;
  setFromCurrency: Dispatch<SetStateAction<string>>;
  isBuying:boolean
  setIsBuying: Dispatch<SetStateAction<boolean>>
}