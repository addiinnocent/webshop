/*-----events-----*/
var Sockets = {
	index: (data) => {
		socket.emit('index');
	},
	items: {
		add: function(data) {
			socket.emit('items.add', data);
		},
	},
}
