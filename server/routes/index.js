exports.index = function(app) {
	app.get('/', (req, res) => res.render('index'));
}
