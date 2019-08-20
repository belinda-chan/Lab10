
var express = require('Express');
var app = express();
var router = require('./Lab3.js');
//both router.js and server.js should be in same directory
app.use('/', router);
app.listen(8080);
console.log("Server running at http://localhost:8080");