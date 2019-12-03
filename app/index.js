const express = require('express');
const app = express();
const path = require('path');


app.use('/static', express.static(path.resolve(__dirname, './../dist/lyWWW/static'), {}));
/**
 * 静态文件资源路径，由于vue打包的时候把js，css，img等都放在了static文件夹下面，
 * 所以为了保证正常，我们这里也需要增加一个虚拟路径/static.
 */

app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../dist/lyWWW/index.html'));
});

const server = app.listen('1234', () => {
  const address = server.address();
  console.log('app is running on ' + address.port);
});