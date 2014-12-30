var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/test1');

var sp = new mongoose.Schema({
	title : String,
	name : String,
	description : String,
	by:String
}, {
	collection : 'test2'
});
var cols = mongoose.model('test2', sp);

exports.getJSON = function(req,res) {
	
	Abc(function(err, resultData) {
	
		if (err) {
			res.jsonp("error");
		} else {
			res.jsonp(resultData);
		}
	});
}
	

function Abc(mycallback) {

	cols.find({}, function(err, col) {
		mycallback(err, col)
	});
};

exports.getTable = function(req, res) {
	res.render('New.html');

}