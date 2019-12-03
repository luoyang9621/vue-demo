const express = require('express');
const router = express.Router();
const path = require('path');

express().use(express.static(path.resolve(__dirname, './../admin/static')));

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../admin/index.html'))
});
router.get('/list', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../admin/list.html'))
});

module.exports = router;