const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource messages');
  console.log(res.url);
});

router.post('/', function(req, res, next) {
  res.send('respond to post with a resource messages');
});


module.exports = router;
