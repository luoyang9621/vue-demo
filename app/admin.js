const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res, next) => {
  console.log('admin路由执行成功了2', Date.now());
  res.sendFile(path.resolve(__dirname, './../serverHtml/index2.html'));
  // res.send('okoko')
});


module.exports = router;

