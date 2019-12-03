const express = require('express');
const router = express.Router();
const path = require('path');

express().use(express.static(path.resolve(__dirname, './../client/static')));

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../client/index.html'))
});

module.exports = router;