/**
 * Return the string with the first letter capitalized.
 * @param string
 * @returns {string}
 */
export function capitalize (string) {
  if (typeof string !== 'string') {
    throw TypeError('Parameter must be a string.')
  }

  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1)
}

/**
 * Return an array of strings with first letter capitalized.
 * @param list
 * @returns {string[]}
 */
export function capitalizeList (list) {
  if (!Array.isArray(list) || !list.every(string => typeof string === 'string')) {
    throw TypeError('Parameter must be an array of strings.')
  }

  return list.map(capitalize)
}
