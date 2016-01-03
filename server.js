/** Simple static file server for testing purposes **/
/** >node server.js **/

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(80);
console.log("Server running. Browse to http://localhost:8080");
