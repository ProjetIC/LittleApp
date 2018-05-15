var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Little App' });
});

router.post('/signin', function(req, res, next) {
  var item = {
    email: req.body.email,
    password: req.body.password
  }

  mongo.connect(url, function(err, client) {
    var db = client.db('user-data');
    assert.equal(null, err);
    db.collection('users').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Data insert!');
      client.close();
    });
  });

  res.redirect('/');
});

module.exports = router;
