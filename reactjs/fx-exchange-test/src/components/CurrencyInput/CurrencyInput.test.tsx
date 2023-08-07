import { render, screen, fireEvent } from "@testing-library/react";
import { expect, vi } from "vitest";
import CurrencyInput from "./CurrencyInput";

describe("CurrendyInput", () => {
  it("when click on select open the currency dialog list", () => {
    const onChangeAmountHandler = vi.fn();
    const amount = "";
    const selectedCurrency = "";
    const onChangeCurrencyHandler = vi.fn();
    const selectedAnotherCurrency = "";

    // render(
    //     <CurrencyInput
    //       amount={amount}
    //       onChangeAmount={onChangeAmountHandler}
    //       selectedCurrency={selectedCurrency}
    //       selectedAnotherCurrency={selectedAnotherCurrency}
    //       onChangeCurrency={onChangeCurrencyHandler}
    //     />
    // );
    // const selectBtn = screen.getByTestId("currency_selector");
    // const dialog = screen.getByRole("dialog");

    // fireEvent.click(selectBtn);

    // expect(dialog).toHaveAttribute("open");
  });
});
