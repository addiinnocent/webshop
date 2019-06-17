this.title = 'Tag the Wolrd';

var getSite = Backbone.View.extend({
	el: '#site',
	index: _.template(document.getElementById('index-template').innerHTML),
	render: function(key) {
		var template = this[key];
		this.el.innerHTML = template();
	},
	back: function() {
		Backbone.history.history.back();
	}
});

var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
	},
	index: function() {
		Sockets.index();
	},
});

new Router();
Backbone.history.start({pushState: true});
