import { ChangeEvent, useState } from "react";
import { DEFAULT_FROM_CURRENCY } from "../../constant";
import { useExchangeRate } from "../../context/Exchange";
import { delSign, findRate, hasSign } from "../../utils/exchangeConversion";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import {IoMdArrowDown, IoMdArrowUp} from 'react-icons/io'
import "./index.scss";

export default function CurrencyRows() {
  const {
    exchangeRates,
    toCurrency,
    setToCurrency,
    fromCurrency,
    setFromCurrency,
    isBuying,
    setIsBuying,
  } = useExchangeRate();

  const [amount, setAmount] = useState<string>();
  const [isEditingInputFrom, setIsEditingInputFrom] = useState(true);

  let toAmount: string = "",
    fromAmount: string = "";
  const absAmount = Math.abs(Number(amount));
  const exchangeRate = findRate(toCurrency, exchangeRates);
  if (amount && isEditingInputFrom) {
    fromAmount = delSign(amount);
    if (fromCurrency === DEFAULT_FROM_CURRENCY) {
      toAmount = (absAmount * exchangeRate).toFixed(2);
    } else {
      // extract the toCurrency/fromCurrency and then multiply to amount
      toAmount = (
        (exchangeRate / findRate(fromCurrency, exchangeRates)) *
        absAmount
      ).toFixed(2);
    }
  }
  if (amount && !isEditingInputFrom) {
    toAmount = delSign(amount);
    if (fromCurrency === DEFAULT_FROM_CURRENCY) {
      fromAmount = (absAmount / exchangeRate).toFixed(2);
    } else {
      fromAmount = (
        (findRate(fromCurrency, exchangeRates) / exchangeRate) *
        absAmount
      ).toFixed(2);
    }
  }
  const isNumber = !isNaN(Number(amount));
  if (isNumber) {
    if (!hasSign(fromAmount)) {
      fromAmount = (isBuying ? "-" : "+") + fromAmount;
    }
    if (!hasSign(toAmount)) {
      toAmount = (isBuying ? "+" : "-") + toAmount;
    }
  } else {
    fromAmount = "";
    toAmount = "";
  }

  const handleFromCurrencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && !isNaN(Number(value))) {
      setAmount(value);
      setIsEditingInputFrom(true);
      return;
    }
    setAmount(undefined);
    setIsEditingInputFrom(true);
  };
  const handleToCurrencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && !isNaN(Number(value))) {
      setAmount(value);
      setIsEditingInputFrom(false);
      return;
    }
    setAmount(undefined);
    setIsEditingInputFrom(false);
  };

  return (
    <section className="currency_rows">
      <CurrencyInput
        selectedCurrency={fromCurrency}
        selectedAnotherCurrency={toCurrency}
        onChangeCurrency={setFromCurrency}
        amount={fromAmount}
        onChangeAmount={handleFromCurrencyChange}
      />
      <button
        className="swap"
        onClick={() => {
          setIsBuying((prev) => !prev);
        }}
      >
       {isBuying ? <IoMdArrowDown /> : <IoMdArrowUp />} 
      </button>
      <CurrencyInput
        selectedCurrency={toCurrency}
        selectedAnotherCurrency={fromCurrency}
        onChangeCurrency={setToCurrency}
        amount={toAmount}
        onChangeAmount={handleToCurrencyChange}
      />
    </section>
  );
}
