const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router'); // 前端界面
const admin = require('./admin'); // 后端界面
const api = require('./api'); // 接口api
const path = require('path');
const connectHistoryApiFallback = require('connect-history-api-fallback');

// app.use(connectHistoryApiFallback({
//   verbose: true,
//   rewrites: [
//     { from: /\//, to: '/ly' }
//   ]
// }));
app.use(express.static(path.resolve(__dirname, './../serverHtml/dist')));
app.use(express.static(path.resolve(__dirname, './../serverHtml/dist2')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
  console.log(req.query, req.path);
  res.redirect('/ly');
  // next();
});
app.use('/ly', router);
app.use('/admin', admin);
app.use('/api', api);

const server = app.listen(2222, 'localhost', () => {
  const href = server.address().address + ':' + server.address().port;
  console.dirxml('app ir running on' + '<a href='+href+'>'+href+'</a>');
});