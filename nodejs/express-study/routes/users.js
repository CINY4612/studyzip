/**
 * app.js 의 app.use('users', usersRouter) 와 연결되어
 * GEt /users 요청을 처리함
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
