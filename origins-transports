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
    

io.set('origins', '*veyselsahin.com.tr*:*');
io.set('transports', [
    'websocket', 'flashsocket', 'htmlfile', 'xhr-polling', 'jsonp-polling'
]);

app.configure(function ()
{
    app.use(function (req, res, next)
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "origin, content-type, accept");
        next();
    });
});
server.listen(9000);
