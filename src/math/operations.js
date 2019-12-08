/**
 * Get numbers and return their sum.
 * @param numbers
 * @returns {number}
 */
export function sum (...numbers) {
  if (numbers.some(number => typeof number !== 'number')) {
    throw TypeError('Parameters must be numbers.')
  }

  return numbers.reduce((a, b) => a + b, 0)
}
