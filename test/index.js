var test     = require('tape')
var fabulous = require('../')

test('fabulous(str)', function(assert) {
  var actual   = fabulous('function() {}')
  var expected = '<span class="keyword">function</span>() {}'
  assert.equal(actual, expected, 'highlights a match of a rule')
  assert.end()
})

test('fabulous(str)', function(assert) {
  var actual   = fabulous('var test = function() {}')
  var expected = '<span class="keyword">var</span> test = <span class="keyword">function</span>() {}'
  assert.equal(actual, expected, 'highlights different matches of the same rule')
  assert.end()
})

test('fabulous(str)', function(assert) {
  var actual   = fabulous('var test = 1')
  var expected = '<span class="keyword">var</span> test = <span class="number">1</span>'
  assert.equal(actual, expected, 'highlights different matches of different rules')
  assert.end()
})

test('fabulous(str, rules)', function(assert) {
  var rules    = { fruit: /apple|banana|orange/g }
  var actual   = fabulous('An apple, a banana and an orange.', rules)
  var expected = 'An <span class="fruit">apple</span>, a <span class="fruit">banana</span> and an <span class="fruit">orange</span>.'
  assert.equal(actual, expected, 'highlights custom rules')
  assert.end()
})
