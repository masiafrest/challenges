import { AssestIcon, ExchangeRates } from "../types/exchanges";

const apiKey = import.meta.env.VITE_COIN_API_KEY;
const baseUrl = "https://rest.coinapi.io/v1";

const headers = new Headers()
headers.append('X-CoinAPI-Key', apiKey)

const getAssetsIcons = (iconSize = 32) => {
  return fetch(`${baseUrl}/assets/icons/${iconSize}?apikey=${apiKey}` ).then(
    (res) => res.json() as Promise<AssestIcon[]>
  );
};

function getExchangeRate(assetIdBase: string): Promise<ExchangeRates> {
  return fetch(`${baseUrl}/exchangerate/${assetIdBase}?apikey=${apiKey}`).then((res) =>
    res.json()
  );
}

export {
  getAssetsIcons,
  getExchangeRate,
};
