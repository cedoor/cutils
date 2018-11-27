/**
 * Return the word with the first letter capitalized.
 * @param word
 * @returns {string}
 */
function capitalizeWord (word) {
  return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)
}

/**
 * Return the words with the first letter capitalized.
 * @param words
 * @returns {string}
 */
function capitalizeWords (words) {
  return words.split(' ').map(capitalizeWord).join(' ')
}

/**
 * Return an array of word with first letter capitalized.
 * @param wordList
 * @returns {string[]}
 */
function capitalizeWordList (wordList) {
  return wordList.map(capitalizeWords)
}

// Exports
module.exports = {
  capitalizeWord,
  capitalizeWords,
  capitalizeWordList
}