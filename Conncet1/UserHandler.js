var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/test1');

var sp = new mongoose.Schema ({
	username : String,
	Mobile : Number
	} , { collection : 'unametable'
});
var cols = mongoose.model('unametable', sp);

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