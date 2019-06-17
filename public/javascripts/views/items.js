var ItemsView = Backbone.View.extend({
  el: '.items',
  initialize: function() {
    this.collection.comparator = this.collection.comparators.time;
    this.collection.sort();
    this.listenTo(this.collection, 'add', this.render);
    this.render();
    return this;
  },
  render: function() {
    this.el.innerHTML = '';
    this.collection.each(function(model) {
      var item = new ItemView({model: model});
      this.el.append(item.render().el);
    }.bind(this));
    return this;
  }
});

var ItemView = Backbone.View.extend({
  className: 'item',
  template: _.template(document.getElementById('item-template').innerHTML),
	render: function() {
		this.el.innerHTML = this.template(this.model.toJSON());
    return this;
  },
  events: {
    'click button': 'buy',
  },
  buy: function(e) {
    console.log(this.model.get('timestamp'));
  }
});
