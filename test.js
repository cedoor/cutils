const assert = require('assert')
const utils = require('./index.js')

describe('Capitalization', function () {
  describe('#capitalizeWord()', function () {
    it('should return the word with the first letter capitalized', function () {
      const result = utils.capitalizeWord('heLlO')
      assert.equal(result, 'Hello')
    })
  })

  describe('#capitalizeWords()', function () {
    it('should return the words with the first letter capitalized', function () {
      const result = utils.capitalizeWords('heLlO worLd')
      assert.equal(result, 'Hello World')
    })
  })

  describe('#capitalizeWordList()', function () {
    it('should return an array of word with first letter capitalized', function () {
      const result = utils.capitalizeWordList(['heLlO', 'heLlO worLd']).join(', ')
      assert.equal(result, 'Hello, Hello World')
    })
  })
})