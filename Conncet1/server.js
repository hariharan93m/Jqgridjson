var mongoose = require('mongoose');
//var MongoClient = require('mongodb').MongoClient;
var db = mongoose.connect('mongodb://127.0.0.1:27017/newdb1');
mongoose.connection.once('connected', function() {
	var sp=new mongoose.Schema({
		name: String,
		age: Number,
		mobile:Number,
		company:String
	},{ collection: 'coll' });
	var cols = mongoose.model('coll', sp);
	cols.find({},function(err, col) {
		  if (err) {
			  return console.error(col);
		  }
			  console.dir(col);
		});
	});