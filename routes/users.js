var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {title : 'Page User ', users: 'Nom : Barry, Nom : Yves, Nom : Hatim'});
});

module.exports = router;
