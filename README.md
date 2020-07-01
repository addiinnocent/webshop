# Backbone Webshop

Ein Projekt von der Coding Stübchen Community.
Bevor das Programm mit dem Command node 'path/run' gestartet werden kann, müssen folgende Programme und Module installiert werden (npm install).

# Dependencies:

Programme:
- NodeJS
- MongoDB

Module:
- express
- mongoose
- socket.io
- jade

# Features

I/O Single Page Applikation:

Clientseiting wird das Backbone.js Rendering System genutzt. Die Kommunikation zwischen Client und Server erfolgt per Socket.io - Daten werden vom Client über die Funktion Sockets.* angefordert ('javascripts/sockets/outgoing.js'), vom Server verarbeitet und als Callback zurückgegeben ('javascripts/sockets/incoming.js').
Um maximale Performance zu erreichen wird ein Input vorab vom Client realisiert, bevor er vom Server verarbeitet wird.

Das Routing wird ebenfalls über Backbone.js realisiert. Um eine neue Route zu erstellen muss diese zunächst für den Client ('public/javascripts/routing/routing.js') als auch für den Server ('server/routes/index.js') hinzugefügt werden.

Als HTML Template Engine wird auf Jade gesetzt!

# Status

Very Early Stage:
- Startseite provisorisch gestaltet
- Produkte können hinzugefügt werden 
- Produkte werden angezeigt
