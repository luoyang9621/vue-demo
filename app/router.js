const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res, next) => {
  console.log('默认路由执行成功了', Date.now());
  res.sendFile(path.resolve(__dirname, './../serverHtml/index.html'));
  // res.send('okoko')
});

module.exports = router;
