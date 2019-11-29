const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res, next) => {
  console.log('admin admin');
  console.log('路由执行成功了2', Date.now());
  res.sendFile(path.resolve(__dirname, './../dist2/index.html'));
  // res.send('okoko')
});


module.exports = router;

