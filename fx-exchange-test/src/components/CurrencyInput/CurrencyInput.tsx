import React, { ChangeEvent, InputHTMLAttributes, useRef } from "react";
import { AssestIcon } from "../../types/exchanges";
import CurrencyList from "../CurrencyList/CurrencyList";
import DropdownArrow from "../DropdownArrow/DropdownArrow";
import "./index.scss";

type Props = {
  amount?: InputHTMLAttributes<HTMLInputElement>["value"];
  onChangeAmount: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedCurrency: string;
  selectedAnotherCurrency: string;
  onChangeCurrency: (currency: string) => void;
};

export default function CurrencyInput({
  amount,
  onChangeAmount,
  selectedCurrency,
  selectedAnotherCurrency,
  onChangeCurrency,
}: Props) {
  const dialogRefElem = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null)

  const openDialog = () => {
    dialogRefElem.current?.show();
  };

  return (
    <>
      <div className="currency_input" onClick={() => {
        inputRef.current?.focus()
      }}>
        <div className="first_row">
          <button className="currency_selector" onClick={openDialog}
          data-testid="currency_selector" 
          >
            {selectedCurrency} <DropdownArrow dir="down" />
          </button>
          <input
            ref={inputRef}
            type="text"
            inputMode="decimal"
            step={0.01}
            value={amount}
            placeholder="0"
            onKeyDown={(e) => {
              const { code, key } = e;
              // console.log({ e, code, key });
              const allowedKeys = [
                "+",
                "-",
                ".",
                "Backspace",
                "ArrowLeft",
                "ArrowRight",
                "Home",
                "End",
              ];
              const isNumber = !isNaN(Number(key));
              if (allowedKeys.includes(key) || isNumber) {
                // console.log({key}, 'accepted')
              } else {
                e.preventDefault();
              }
            }}
            // onFocus={(e) => {
            //   console.log('onfocus', e.currentTarget)
            //   e.currentTarget.setSelectionRange(
            //     e.currentTarget.value.length,
            //     e.currentTarget.value.length
            //   );
            //   e.currentTarget.value = '1'
            // }}
            onChange={onChangeAmount}
          />
        </div>
        <div className="balance">balance</div>
      </div>
      <dialog className="dialog" ref={dialogRefElem}>
        <form method="dialog">
          <div>
            <button type="submit">{"<--"}</button>
            <input id="search-currency" />
          </div>
          <CurrencyList
            onClick={(currency) => {
              onChangeCurrency(currency);
              dialogRefElem.current?.close();
            }}
            selectedCurrency={selectedCurrency}
            selectedAnotherCurrency={selectedAnotherCurrency}
          />
        </form>
      </dialog>
    </>
  );
}
