export function getExcelColValue(column: string): number {
  let result = 0;
  for (let i = 0; i < column.length; i++) {
    const charCode = column.charCodeAt(i) - 65; // 'A' is 65
    result = result * 26 + (charCode + 1);
  }
  return result - 1; // Make it zero-based
}
