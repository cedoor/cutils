const tape = require('tape')
const utils = require('../dist/utils')

/** String module tests **/

tape('Capitalize functions', function (test) {
  test.equal(utils.strings.capitalize('hello'), 'Hello')
  test.deepEqual(utils.strings.capitalizeList(['hello', 'world']), ['Hello', 'World'])
  test.throws(() => utils.strings.capitalize(1))
  test.throws(() => utils.strings.capitalize(true))
  test.throws(() => utils.strings.capitalizeList(['hello', 1]))
  test.end()
})
