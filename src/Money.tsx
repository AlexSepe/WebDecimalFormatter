export function money(amount: any, decimalSeparator = ",", thousandsSeparator = ".", decimalCount = 2): string {
    const decimal = decimalSeparator || ",";
    const thousands = thousandsSeparator || ".";
    decimalCount = Math.abs(Math.max(decimalCount, 0));
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const options = { style: "decimal", maximumFractionDigits: decimalCount };
    const numberFormat = new Intl.NumberFormat("pt-BR", options);

    const parts = numberFormat.formatToParts(amount);
    const partValues = parts.map(p => {
        switch (p.type) {
            case "group":
                return thousands;
            case "decimal":
                return decimal;
            default:
                return p.value;
        }
    });
    return partValues.join("");
}
