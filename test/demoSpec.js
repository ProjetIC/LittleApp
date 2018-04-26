var assert = require('assert')

describe('Premier Test', function () {
  it('faire un truc', function () {
    var a = 3
    assert.equal(a * 2, 6, 'la multiplication n\'a pas fonctionné')
  })
})
