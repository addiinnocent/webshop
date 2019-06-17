var Item = Backbone.Model.extend({
	defaults: {
		id: '',
		name: '',
		category: '',
		price: 0,
		amount: 0,
		timestamp: Number(new Date()),
	},
});

var ItemCollection = Backbone.Collection.extend({
  model: Item,
	comparators: {
		reverse: false,
	  time: function(m) {
			var time = m.get('timestamp');
			if (this.comparators.reverse) return time;
			return -time;
	  },
		name: function(a, b) {
			if (this.comparators.reverse) return -a.get('name').localeCompare(b.get('name'));
			return a.get('name').localeCompare(b.get('name'));
		},
		category: function(a, b) {
			if (this.comparators.reverse) return -a.get('user').name.localeCompare(b.get('user').name);
			return a.get('user').name.localeCompare(b.get('user').name);
		},
	}
});
