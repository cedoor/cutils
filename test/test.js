const tape = require('tape');
const cutls = require('../dist/cutls')

tape('timing test', function (test) {
  test.equal(cutls.general.capitalizeWord('hello'), 'Hello')
  test.equal(cutls.general.capitalizeWords('hello world'), 'Hello World')
  test.deepEqual(cutls.general.capitalizeWordList(['hello', 'world']), ['Hello', 'World'])
  test.end()
});