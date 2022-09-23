import { money } from "../Money";

describe("Money", () => {
    it("should show 0", () => {
        const result = money(0.0, ",", ".", 0);

        expect(result).toEqual("0");
    });

    it("should show 0,00 1", () => {
        const result = money(0.0);

        expect(result).toEqual("0,00");
    });

    it("should show 0,00 2", () => {
        const result = money(0.0, ",", ".");

        expect(result).toEqual("0,00");
    });

    it("should show 0,00 3", () => {
        const result = money(0.0, ",");

        expect(result).toEqual("0,00");
    });

    it("should show 0,00 4", () => {
        const result = money("0.00");

        expect(result).toEqual("0,00");
    });

    it("should show 0,00 NaN", () => {
        const result = money(0.0, ",", ".", NaN);

        expect(result).toEqual("0,00");
    });

    it("should show 0,00 Undefined", () => {
        const result = money(0.0, undefined, undefined, NaN);

        expect(result).toEqual("0,00");
    });

    it("should show 0 decimal < 0", () => {
        const result = money(0.0, undefined, undefined, -1);

        expect(result).toEqual("0");
    });

    it("should show 0.00 null", () => {
        const result = money(null);

        expect(result).toEqual("0,00");
    });

    it("should show 1.000.00", () => {
        const result = money(1000.0, ",", ".", 2);

        expect(result).toBe("1.000,00");
    });

    it("should show 1.000", () => {
        const result = money(1000.0, ",", ".", 0);

        expect(result).toBe("1.000");
    });

    it("should show 1.000,01", () => {
        const result = money(1000.006, ",", ".", 2);

        expect(result).toBe("1.000,01");
    });

    it("should show 1.000,006", () => {
        const result = money(1000.006, ",", ".", 3);

        expect(result).toBe("1.000,006");
    });

    it("should show 10.000", () => {
        const result = money(9999.999, ",", ".", 0);

        expect(result).toBe("10.000");
    });
});
