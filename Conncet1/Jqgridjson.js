var express = require('express');
var app = express();
var userHandler = require('./UserHandler');
// it will search in Views folder for html file
app.engine('.html', require('ejs').__express);
// / for getTable function inside userhandler.js
app.get('/', userHandler.getTable);
app.get('/getTableData', userHandler.getJSON);
var server = app.listen(3000, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});