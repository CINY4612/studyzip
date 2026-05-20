/**
 * app.js 의 app.use('users', usersRouter) 와 연결되어
 * GET /users 요청을 처리함
 */

var express = require('express');
var router = express.Router();

var users = [
  { id: 1, name: 'Zoey' },
  { id: 2, name: 'Minako' }
];

router.get('/', function(req, res){
  res.json(users);
});

router.get('/:id', function(req, res) {
  var id = Number(req.params.id);
  var user = users.find(function(user) {
    return user.id === id;
  });

  if (!user) {
    return res.status(404).json({
      message: 'User not found'
    });
  }

  res.json(user);
})

router.post('/', function(req, res){
  var name = req.body.name;

  var newUser = {
    id: users.length + 1,
    name: name
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
