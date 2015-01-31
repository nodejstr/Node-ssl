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
server.listen(9000);