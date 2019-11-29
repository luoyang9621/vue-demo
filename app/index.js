const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router'); // 前端界面
const admin = require('./admin'); // 后端界面
const api = require('./api'); // 接口api
const path = require('path');


app.use(express.static(path.resolve(__dirname, './../dist')));
app.use(express.static(path.resolve(__dirname, './../dist2')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);
app.use('/admin', admin);
app.use('/api', api);

app.listen(2222, () => {
  console.log('app ir running on 2222');
});