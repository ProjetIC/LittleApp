var express = require('express');
var router = express.Router();
var User = require('../lib/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Little App' });
});

router.post('/', function(req, res, next) {
  if (req.body.email &&
    req.body.password) {

    var userData = {
      email: req.body.email,
      password: req.body.password,
    }
    
    User.create(userData, function(err, user) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/users');
      }
    });
  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        return res.redirect('/users');
      }
    });
  }
});

router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;
