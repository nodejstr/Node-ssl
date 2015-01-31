# node-ssl-examples
Example code for using ssl with node


Installing
==========
```bash
npm install
```
Examples
========
```js
node server
```


Runs a basic server that serve at port 9000.

This source code uses `express` framework.


```js
node socket
```


This source also serving a basic http server but in additionally using `socket.io`.

You have kill other server if you started it before, because both of these servers are using port 9000

As you can see as same as previous file. Just added `socket.io` configurations.