var UserWorker = require('./UserWorker');

exports.getTabledata = function(req,res) {
	
	UserWorker.getTablevalues(function(err, resultData) {
		
		var messages = [];
		var Data;
		
	for(var i = 0; i < resultData.length; i++) { 
		
		 var message={};
		 Data = resultData[i];
		 message.id = Data._id;
		 message.username=Data.username;
		 message.Mobile=Data.Mobile;
		 messages.push(message);
	}
	
	var Tablevalues = messages;
	if (err) {
		res.jsonp("error");
	} else {
		res.jsonp(Tablevalues);
	}
	});
}
	
exports.getView = function(req, res) {
	res.render('New.html');
}

exports.deleteFunction = function(req,res) {
	
	var Reqbody=[];
	Reqbody=req.body;
	
	UserWorker.deleteUsername(function(err, resultData) {
		
		if (err) {
			res.jsonp("error");
		} else {
			res.jsonp(resultData);
		}
	},Reqbody);
}
//add
exports.addFunction = function(req,res) {
	
	var Reqbody=[];
	Reqbody=req.body;

	UserWorker.addUsername(function(err, resultData) {
		
		if (err) {
			res.jsonp("error");
		} else {
			res.jsonp(resultData);
		}
	},Reqbody);
}


//edit

exports.editFunction = function(req,res) {
	
	var Reqbody=[];
	Reqbody=req.body;

	UserWorker.editUsername(function(err, resultData) {
		
		if (err) {
			res.jsonp("error");
		} else {
			res.jsonp(resultData);
		}
	}, Reqbody);	
}