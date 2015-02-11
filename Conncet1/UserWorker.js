var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/test1');

var sp = new mongoose.Schema ({
	
	username : String,
	Mobile : Number,
	
},{ collection : 'unametable'
});

var Model = mongoose.model('unametable', sp);

exports.editUsername = function (mycallback, Reqbody) {
	
	var unametable = {}
	unametable.username = Reqbody.username;
	unametable.Mobile = Reqbody.Mobile;
	
	Model.update({"_id":Reqbody.id},{$set:unametable}, function(err, col) {
		mycallback(err, col);
	});
	
};

exports.addUsername = function (mycallback,Reqbody) {
	
	var unametable = new Model;
	
	unametable.username = Reqbody.username;
	unametable.Mobile = Reqbody.Mobile;
	
	unametable.save( function(err, col) {
		mycallback(err, col);
	});

};

exports.deleteUsername = function (mycallback,Reqbody) {
	
	var id=Reqbody.id
	Model.remove({"_id":id}, function(err, col) {
		mycallback(err, col);
	});

};

exports.getTablevalues = function (mycallback) {

	Model.find({}, function(err, col) {
		mycallback(err, col)
	});

};