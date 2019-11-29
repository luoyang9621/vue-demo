const express = require('express');
const router = express.Router();


router.get('/getList1', (req, res, next) => {
  console.log('api路由执行成功了', Date.now());
  res.send({
    code: 1,
    data: [
      { name: 'Alice', age: 12, sex: '男', id: 345214972 },
      { name: 'Bob', age: 12, sex: '男', id: 893454214 },
      { name: 'Cindy', age: 12, sex: '男', id: 789231545 },
      { name: 'Dave', age: 12, sex: '男', id: 176854323 },
      { name: 'Ella', age: 12, sex: '男', id: 678203454 }
    ]
  });
});


module.exports = router;