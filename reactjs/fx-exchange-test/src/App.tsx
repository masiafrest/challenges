import { useEffect, useState } from "react";
import "./App.scss";
import CurrencyRows from "./components/CurrencyRows/CurrencyRows";
import InfoHeader from "./components/InfoHeader/InfoHeader";
import Header from "./components/Header/Header";
import { AssestIcon } from "./types/exchanges";
import { ExchangeRateProvider } from "./context/Exchange";

let header = new Headers();
header.append("apikey", "8cx6HVZZyxCXEo64IahP8xtyc2bkDFuE");

let reqOptions: RequestInit = {
  method: "GET",
  redirect: "follow",
  headers: header,
};

let base = "https://api.apilayer.com/exchangerates_data/latest?base=USD";

function App() {
  return (
    <div className="app">
      <ExchangeRateProvider>
        <Header />
        <InfoHeader />
        <CurrencyRows />
      </ExchangeRateProvider>
    </div>
  );
}

export default App;
