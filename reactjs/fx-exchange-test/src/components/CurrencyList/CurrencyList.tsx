import { useExchangeRate } from "../../context/Exchange";
import "./index.scss";
type Props = {
  onClick: (currency: string) => void;
  selectedCurrency: string;
  selectedAnotherCurrency: string;
};

export default function CurrencyList({ onClick, selectedCurrency, selectedAnotherCurrency }: Props) {
  const { assetsIcons } = useExchangeRate();
  return (
    <ul className="currency_list">
      {assetsIcons?.map((a) => {
        if (a.asset_id === selectedCurrency || a.asset_id === selectedAnotherCurrency) return null;
        return (
          <li>
            <img src={a.url} />
            <button
              onClick={(e) => {
                onClick(a.asset_id);
              }}
            >
              {a.asset_id}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
