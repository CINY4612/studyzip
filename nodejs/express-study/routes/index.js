/**
 * URL path 를 매핑하여 GET / 요청을 처리
 * json 응답이 아닌 views/index.pug 화면 렌더링
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
