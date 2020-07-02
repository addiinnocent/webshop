# Backbone Webshop

Vielseitiges Backbone Shop System für Private oder Business.
Solider Aufbau, verständliche Syntax und maximal skalierbar.

# Features

I/O Single Page Applikation:

Clientseiting wird das Backbone.js Rendering System genutzt. Die Kommunikation zwischen Client und Server erfolgt per Socket.io - Daten werden vom Client über die Funktion Sockets.* angefordert ('javascripts/sockets/outgoing.js'), vom Server verarbeitet und als Callback zurückgegeben ('javascripts/sockets/incoming.js').
Um maximale Performance zu erreichen wird ein Input vorab vom Client realisiert, bevor er vom Server verarbeitet wird.

Das Routing wird ebenfalls über Backbone.js realisiert. Um eine neue Route zu erstellen muss diese zunächst für den Client ('public/javascripts/routing/routing.js') als auch für den Server ('server/routes/index.js') hinzugefügt werden.

Als HTML Template Engine wird auf Jade gesetzt!

# Dependencies:

Programme:
- NodeJS
- MongoDB

Module:
- express
- mongoose
- socket.io
- jade



# Status

Very Early Stage:
- Startseite provisorisch gestaltet
- Produkte können hinzugefügt werden 
- Produkte werden angezeigt
