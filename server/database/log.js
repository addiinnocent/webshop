var mongoose = require('mongoose');
var logs = mongoose.model('logs');

exports.get = function(by, callback) {
	logs.find(by, function (err, result) {
    if (err) return console.error(err);
    return callback(result);
  });
}

exports.add = function(data) {
	var log = new logs(data);
	log.save(function (err, entry) {
		if (err) return console.error(err);
	});
}

exports.countAll = function(callback) {
	logs.estimatedDocumentCount(function (err, result) {
    if (err) return console.error(err);
    return callback(result);
  });
}
