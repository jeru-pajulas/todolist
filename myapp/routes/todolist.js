var express = require('express');
var router = express.Router();

/* GET todo list page. */
router.get('/', function(req, res, next) {
  res.render('todolist', { title: 'My Todo List' });
  //res.send('respond with a resource');
});

/*const button = document.getElementById('todo');
button.addEventListener('click', function(e){
  console.log("button clicked");
});*/

module.exports = router;
