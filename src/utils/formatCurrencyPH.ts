/**
 * Formats a number as Philippine Peso currency.
 *
 * @param amount - The numeric amount to format.
 * @returns The formatted currency string, e.g. "₱ 100.20".
 *
 * @throws {Error} If the provided amount is not a valid number.
 */
export function formatCurrencyPH(amount: number): string {
  if (typeof amount !== 'number' || isNaN(amount) || isNaN(amount)) {
    throw new Error('Invalid amount provided to formatCurrencyPH');
  }

  // Format the number with exactly two decimal places and comma separators for thousands.
  const formatted = amount.toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `₱ ${formatted}`;
}
