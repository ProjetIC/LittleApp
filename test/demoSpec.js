var assert = require('assert')
var Unitaire = require('../src/routes/Unitaire')

describe('Unitaire', function () {

  describe('test', function(){
    it('Chiffre dans test', function(){
      assert.equal(1 + 6, 7)
    })
  })

  describe('#TestUnitaire', function () {
  it('besoin de chiffres pour l\'addition', function(){
    assert.equal(Unitaire.TestUnitaire(5,4), 10)
    assert.equal(Unitaire.TestUnitaire(1,2), 3)
  })
  })
})
