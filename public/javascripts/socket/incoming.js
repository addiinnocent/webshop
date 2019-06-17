var socket = io();

socket.on('connect', function() {
	var user;
	if (localStorage.getItem('user')) user = JSON.parse(localStorage.user);
	socket.emit('user', user);
});

socket.on('index', (data) => {
	var site = new Index;
	site.set(data);
});
