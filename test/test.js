const tape = require('tape')
const cutls = require('../dist/cutls')

/** String module tests **/

tape('Capitalize functions', function (test) {
  test.equal(cutls.strings.capitalize('hello'), 'Hello')
  test.deepEqual(cutls.strings.capitalizeList(['hello', 'world']), ['Hello', 'World'])
  test.throws(() => cutls.strings.capitalize(1))
  test.throws(() => cutls.strings.capitalize(true))
  test.throws(() => cutls.strings.capitalizeList(['hello', 1]))
  test.end()
})
