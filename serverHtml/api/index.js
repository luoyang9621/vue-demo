const express = require('express');
const router = express.Router();

router.get('/getList1', (req, res) => {
  res.send({
    code: 1,
    data: [
      { name: 'aa' },
      { name: 'bb' },
      { name: 'cc' },
    ]
  });
  res.end();
});

router.get('/getList2', (req, res) => {
  res.send({
    code: 1,
    data: [
      { name: '哈哈' },
      { name: '呵呵' },
      { name: '嗯嗯' },
    ]
  });
  res.end();
});

router.post('/getList3/:id', (req, res) => {
  console.log('req', req.params, req.query, req.body);
  // return;
  res.json({
    code: 1,
    data: null,
    msg: '提交成功',
  });
});

module.exports = router;