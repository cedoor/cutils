const tape = require('tape')
const utils = require('../dist/utils')

/** String module tests **/

tape('Capitalize functions', function (test) {
  test.equal(utils.capitalize('hello'), 'Hello')
  test.deepEqual(utils.capitalizeList(['hello', 'world']), ['Hello', 'World'])

  test.throws(() => utils.capitalize(1))
  test.throws(() => utils.capitalize(true))
  test.throws(() => utils.capitalizeList(['hello', 1]))

  test.end()
})

tape('ParseURL function', function (test) {
  const parsedURL = utils.parseURL('http://example.com:4200?a=1&b=2')
  const parsedURLParams = Array.from(parsedURL.params)

  test.equal(parsedURL.hostname, 'example.com')
  test.equal(parsedURL.port, '4200')
  test.equal(parsedURL.protocol, 'http')
  test.deepEqual(parsedURLParams, [['a', '1'], ['b', '2']])

  test.end()
})
