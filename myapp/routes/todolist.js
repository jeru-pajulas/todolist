var express = require('express');
var router = express.Router();

/* GET todo list page. */
router.get('/', function(req, res, next) {
  res.render('todolist', { title: 'Express' });
  //res.send('respond with a resource');
});

module.exports = router;
