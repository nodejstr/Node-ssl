var fs = require('fs'), path = require("path"), url = require("url")
var connect = require('connect');
var base_url = "https://veyselsahin.com.tr/api/";
var options = {
    key: fs.readFileSync('/etc/pki/CA/certs/ca.key'),
    cert: fs.readFileSync('/etc/pki/CA/certs/ca.crt'),
    ca: fs.readFileSync('/etc/pki/tls/certs/ca-bundle.crt'),
    requestCert: true,
    rejectUnauthorized: false
};


var express = require('express'),
    app = express(),
    https = require('https'),
    server = https.createServer(options, app),
    io = require('socket.io').listen(server, {origins: '*:*'});
    
    
    
server.listen(9000);
