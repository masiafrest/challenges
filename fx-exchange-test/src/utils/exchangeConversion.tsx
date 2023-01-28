import { SIGN_SYMBOLS } from "../constant";
import { ExchangeRates } from "../types/exchanges";

export function delSign(amount: string) {
  if (amount.startsWith("+") || amount.startsWith("-")) {
    return amount.slice(1);
  }
  return amount;
}

export function hasSign(str?: string): boolean {
  if (str && str.length > 0) {
    return SIGN_SYMBOLS.includes(str[0]);
  }
  return false;
}

export const findRate = (currency: string, exchangeRates: ExchangeRates) => {
    return (
      exchangeRates?.rates.find((r) => r.asset_id_quote === currency)?.rate || 0
    );
};
