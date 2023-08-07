import { DEFAULT_FROM_CURRENCY } from "../../constant";
import { useExchangeRate } from "../../context/Exchange";
import { findRate } from "../../utils/exchangeConversion";

import { IoMdTrendingUp } from "react-icons/io";

import "./index.scss";

export default function InfoHeader() {
  const { exchangeRates, isBuying, fromCurrency, toCurrency } =
    useExchangeRate();

  const rate =
    fromCurrency === DEFAULT_FROM_CURRENCY
      ? findRate(toCurrency, exchangeRates)
      : findRate(toCurrency, exchangeRates) /
        findRate(fromCurrency, exchangeRates);
  return (
    <section className="info_header">
      <h1 className="sell_buy">
        {isBuying ? "Sell" : "Buy"} {fromCurrency}
      </h1>
      <div className="ratio_exchange">
        {" "}
        <IoMdTrendingUp /> 1 = {rate.toFixed(2)}
      </div>
    </section>
  );
}
