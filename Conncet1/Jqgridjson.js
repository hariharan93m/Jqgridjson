var express = require('express');
var app = express();
var userHandler = require('./UserHandler');
var bodyParser = require('body-parser');
// it will search in Views folder for html file
app.engine('.html', require('ejs').__express);
//  for getTable function inside userhandler.js
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50000kb'}));

app.get('/', userHandler.getView);
app.get('/getTableData', userHandler.getTabledata);

app.post('/Delete', userHandler.deleteFunction);
app.post('/add', userHandler.addFunction);
app.post('/edit', userHandler.editFunction);

var server = app.listen(3000, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});