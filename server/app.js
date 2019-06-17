_Config = require('./config.json');

const fs = require('fs');
const express = require('express');
const logger = require('morgan');
const parser = require('body-parser');
const methodoverride = require('method-override');
const favicon = require('serve-favicon');
const static = require('serve-static');
const errorhandler = require('errorhandler');
const http = require('http');
const https = require('https');
const path = require('path');
const mongoose = require('mongoose');

const database = require('./database/db');
const routes = require('./routes');

var app = express();

// all environments
process.stdout.write('pending...');
app.set('port', process.env.PORT || _Config.port);
if(_Config.ssl == true)
	app.set('safeport', process.env.PORT || _Config.safeport);
else
	app.set('safeport', process.env.PORT || _Config.port);
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'jade');
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(methodoverride());
app.use ((req, res, next) => {
	if (_Config.ssl == false) return next();
	if (req.secure) return next();
	return res.redirect('https://' + req.headers.host + req.url);
});

//list of pages
routes.index(app);

//statics
//app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.ico')));
app.use(static(path.join(__dirname, '..', 'public')));
app.use(static(path.join(__dirname, '..', 'views')));
app.use(function(req, res) {
	res.status(404).send('404: Page not Found');
});


// development only
if ('development' == app.get('env')) {
	app.use(errorhandler());
}

//start the server
let options = {useNewUrlParser: true};
mongoose.connect('mongodb://localhost:'+_Config.mongoport+'/handelskette', options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	process.stdout.write("\r\x1b[K");
	var server = http.createServer(app);
	if(_Config.ssl == true) {
		let options = {
			key  : fs.readFileSync(_Config.sslkey),
			cert : fs.readFileSync(_Config.sslcert)
		}
		server.listen(app.get('port'), function(){
			console.log('Server listening on port ' + app.get('port'));
		});
		server = https.createServer(options, app);
	}
	var io = require('socket.io')(server);
	io.on('connection', function (socket) {
		require('./socket').core(socket, io);
	});
	server.listen(app.get('safeport'), function(){
		console.log('Server listening on port ' + app.get('safeport'));
	});
});
