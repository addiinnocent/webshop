var Items = require('./items');

exports.core = function(socket, io) {
	socket.emit('connect');
	socket.on('index', () => {
		Items.getAll({name: {$exists: true}}, (result) => {
			socket.emit('index', result);
		});
	});
	socket.on('items.add', (data) => {
		Items.add(data, (entry) => {
			console.log(entry.name+' added')
		});
	});
};
