class Index {
	constructor() {
		this.Site = new getSite({events: this.events()});
		this.Site.render('index');
		this.Item = new Object;
		Backbone.history.navigate('/');
	}
	set(data) {
		let items = new ItemCollection;
		for (let entry of data) {
			items.add(entry);
		}
		this.View = new ItemsView({collection: items});
	}
	events() {
		return {
			'change input#item': e => this.check(e),
			'click button#add': e => this.add(e),
		}
	}
  check(e) {
		this.Item[e.target.name] = e.target.value;
	}
	add() {
		this.View.collection.add(this.Item);
		Sockets.items.add(this.Item);
	}
}
