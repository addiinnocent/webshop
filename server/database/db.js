const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Items = new Schema({
	id: String,
	vendor: {type: Schema.Types.ObjectId},
	name: String,
	price: Number,
	category: {type: String, default: null},
	amount: {type: Number, default: 0},
	timestamp: {type: Number, default: Date.now},
});
mongoose.model('items', Items)


var LogSchema = new Schema({
	key: String,
	time: {type: Date, default: Date.now},
	data: {},
});

mongoose.model('logs', LogSchema);
