import currency from "currency.js";

export function money(amount: any, decimalSeparator = ",", thousandsSeparator = ".", decimalCount = 2): string {
    const decimal = decimalSeparator || ",";
    const thousands = thousandsSeparator || ".";
    decimalCount = Math.abs(Math.max(decimalCount, 0));
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    return currency(amount, { symbol: "", separator: thousands, decimal, precision: decimalCount }).format();
}
