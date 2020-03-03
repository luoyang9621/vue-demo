const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const client = require('./client');
const admin = require('./admin');
const api = require('./../api');

// app.use(express.static(path.resolve(__dirname, './static')));
// app.use(express.static(path.resolve(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res, next) => {
  // res.send('欢迎来到express demo页面，');
  // next();
  console.log(req.path);
  if (req.path === '/') {
    res.redirect('/client');
  } else {
    next();
  }
});
app.use('/client', client);
app.use('/admin', admin);
app.use('/api', api);

app.listen(8899, 'localhost', () => {
  console.log('app is running on' + 8899);
});