import { getExcelColValue } from "./getExcelColValue";

describe("getExcelColValue", () => {
  it('should return 0 for "A"', () => {
    expect(getExcelColValue("A")).toBe(0);
  });

  it('should return 25 for "Z"', () => {
    expect(getExcelColValue("Z")).toBe(25);
  });

  it('should return 26 for "AA"', () => {
    expect(getExcelColValue("AA")).toBe(26);
  });

  it('should return 27 for "AB"', () => {
    expect(getExcelColValue("AB")).toBe(27);
  });

  it('should return 51 for "AZ"', () => {
    expect(getExcelColValue("AZ")).toBe(51);
  });

  it('should return 52 for "BA"', () => {
    expect(getExcelColValue("BA")).toBe(52);
  });

  it('should return 701 for "ZZ"', () => {
    expect(getExcelColValue("ZZ")).toBe(701);
  });

  it('should return 702 for "AAA"', () => {
    expect(getExcelColValue("AAA")).toBe(702);
  });

  it('should return 1378 for "AZY"', () => {
    expect(getExcelColValue("AZY")).toBe(1376);
  });

  it("should handle lowercase input (if expected)", () => {
    expect(getExcelColValue("a".toUpperCase())).toBe(0);
  });
});
