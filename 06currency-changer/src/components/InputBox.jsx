import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-4 rounded-xl shadow-sm text-sm flex flex-col sm:flex-row gap-4 ${className}`}>
      {/* Amount Input */}
      <div className="w-full sm:w-1/2">
        <label htmlFor={amountInputId} className="text-gray-500 mb-1 inline-block font-medium">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />
      </div>

      {/* Currency Select */}
      <div className="w-full sm:w-1/2 text-right">
        <label className="text-gray-500 mb-1 inline-block font-medium w-full text-left sm:text-right">
          Currency Type
        </label>
        <select
          disabled={currencyDisable}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="mt-1 w-full sm:w-auto border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
