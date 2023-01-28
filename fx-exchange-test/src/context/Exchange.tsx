import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_FROM_CURRENCY, DEFAULT_TO_CURRENCY } from "../constant";
import { getAssetsIcons, getExchangeRate } from "../services/coinApi.services";
import {
  AssestIcon,
  ExchangeRates,
  ExchangeRateContextValues,
} from "../types/exchanges";

const ExchangeRateContext = createContext<
  ExchangeRateContextValues | undefined
>(undefined);

function ExchangeRateProvider({ children }: { children: ReactNode }) {
  const [assetsIcons, setAssetsIcons] = useState<AssestIcon[]>([
    {
      asset_id: "EUR",
      url: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f231d7382689406f9a50dde841418c64.png",
    },
    {
      asset_id: "GBP",
      url: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/04836ff3bc4d4d95820e0155594dca86.png",
    },
    {
      asset_id: "USD",
      url: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4873707f25fe4de3b4bca6fa5c631011.png",
    },
  ]);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({
    asset_id_base: "GBP",
    rates: [
      {
        time: "2017-08-09T14:31:37.0520000Z",
        asset_id_quote: "EUR",
        rate: 1.1733,
      },
      {
        time: "2017-08-09T14:31:36.7570000Z",
        asset_id_quote: "USD",
        rate: 1.3971,
      },
    ],
  });
  const [fromCurrency, setFromCurrency] = useState(DEFAULT_FROM_CURRENCY);
  const [toCurrency, setToCurrency] = useState(DEFAULT_TO_CURRENCY);
  const [isBuying, setIsBuying] = useState(true);

  useEffect(() => {
    // Promise.all([getAssetsIcons(), getExchangeRate("USD")]).then(
    //   ([assetsIcons, exchangeRates]) => {
    //     setAssetsIcons(assetsIcons)
    //     setExchangeRates(exchangeRates)
    //   }
    // ).catch(err => {
    //   console.log({err})
    // });
  }, []);

  return (
    <ExchangeRateContext.Provider
      value={{
        assetsIcons,
        exchangeRates,
        toCurrency,
        fromCurrency,
        setToCurrency,
        setFromCurrency,
        isBuying, setIsBuying
      }}
    >
      {children}
    </ExchangeRateContext.Provider>
  );
}

const useExchangeRate = () => {
  const context = useContext(ExchangeRateContext);
  if (context === undefined) {
    throw new Error("Has to be inside of a exchange provider");
  }
  return context;
};

export { ExchangeRateProvider, useExchangeRate };
