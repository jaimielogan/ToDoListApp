var express = require('express');
var router = express.Router();
var todos = require('../data/todo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { list: todos
  });
});

router.post('/add', function(req, res, next) {
  if(req.body.newtodo !== ''){
    todos.push(req.body.newtodo);
  }
  res.redirect('/todo');
});

router.get('/del/:id', function(req, res, next) {
  todos.splice(req.params.id, 1);
  res.redirect('/todo');
});

router.get('/edit/:id', function(req, res, next){
  todos[req.params.id] = req.query.editToDo;
  res.redirect('/todo');
});

module.exports = router;
