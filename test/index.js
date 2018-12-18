const test = require('ava')

const localopen = require('../')

test('localopen', function (t) {
  t.truthy(localopen, 'module is require-able')
})
