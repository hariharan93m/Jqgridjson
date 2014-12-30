var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
var sampleSchema=new mongoose.Schema({
	Id: Number,
	FirstName: String,
	ContactNo: Number
});
var sample=mongoose.model('sample',sampleSchema);
var First = new sample({
	  Id: 1
	, FirstName: 'Rajesh'
	, ContactNo: '2'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
	});
First.save(function(err, First) {
	  if (err) return console.error(err);
	  console.dir(First);
	});
});
mongoose.connect('mongodb://127.0.0.1:27017/mydb');