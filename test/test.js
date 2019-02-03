const tape = require('tape');
const cutils = require('../dist/cutils')

tape('timing test', function (test) {
  test.equal(cutils.general.capitalizeWord('hello'), 'Hello')
  test.equal(cutils.general.capitalizeWords('hello world'), 'Hello World')
  test.deepEqual(cutils.general.capitalizeWordList(['hello', 'world']), ['Hello', 'World'])
  test.end()
});