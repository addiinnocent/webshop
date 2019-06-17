var mongoose = require('mongoose');
var Items = mongoose.model('items');

module.exports = this;

this.getAll = (by, callback) => {
	Items.find(by).
	select('-_id').
	select('-__v').
	exec((err, result) => {
		if (err) return console.error(err);
		return callback(result);
	});
}

this.get = (by, callback) => {
	Items.findOne(by).
	sort({$natural:-1}).
	exec((err, result) => {
		if (err) return console.error(err);
		return callback(result);
	});
}

this.addMany = (data, callback) => {
	if (!data) return;
	Items.insertMany(data, (err, result) => {
		if (err) return console.error(err);
		return callback(result);
	});
}

this.add = (data, callback) => {
	var item = new Items(data);
	item.save((err, entry) => {
		if (err) return console.error(err);
		return callback(entry);
	});
}
