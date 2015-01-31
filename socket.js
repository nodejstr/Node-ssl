var fs = require('fs');
var options = {
  key: fs.readFileSync('/path/of/file/ca.key'),
  cert: fs.readFileSync('/path/of/file/ca.crt'),
  ca: fs.readFileSync('/path/of/file/ca-bundle.crt'),
  requestCert: true,
  rejectUnauthorized: false
};

var express = require('express');
var app = express();
var https = require('https');
var server = https.createServer(options, app);
var io = require('socket.io');

io.listen(server, {origins: '*:*'});
io.set('origins', '*veyselsahin.com.tr*:*');
io.set('transports', [
  'websocket', 'flashsocket', 'htmlfile', 'xhr-polling', 'jsonp-polling'
]);

app.configure(function () {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
    next();
  });
});
server.listen(9000);
