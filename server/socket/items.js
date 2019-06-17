var DB = require('../database/items');

module.exports = this;

this.get = (data, callback) => {
	DB.get(data, (result) => {
		return callback(result);
	});
}

this.getAll = (data, callback) => {
	DB.getAll(data, (result) => {
		return callback(result);
	});
}

this.add = (data, callback) => {
	DB.add(data, (entry) => {
		return callback(entry);
	});
}
