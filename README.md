# Basic Webshop in Nodejs

Ein Projekt für die CS Community.
Bevor das Programm mit dem Command node 'path/run' gestartet werden kann, müssen folgende Programme und Module installiert werden (npm install).

# Dependencies:

Programme:
- NodeJs
- MongoDB

Module:
- express
- morgan
- method-override
- serve-favicon
- errorhandler
- mongoose
- socket.io

# Features

I/O Single Page Applikation:

Clientseiting wird das Backbone.js Rendering System genutzt. Die Kommunikation zwischen Client und Server erfolgt per Socket.io - Daten werden vom Client über die Funktion Sockets.* angefordert ('sockets/outgoing.js'), vom Server verarbeitet und als Callback zurückgegeben ('sockets/incoming.js').
Um eine möglichst flüssige Performance zu ermöglichen wird ein Input vorab vom Client realisiert, bevor er vom Server endgültig verarbeitet wird.

Das Routing wird ebenfalls über Backbone.js realisiert. Um eine neue Route zu erstellen muss diese zunächst für den Client ('routing/routing.js') als auch für den Server ('routes/index.js') hinzugefügt werden.

# Status

Very Early Stage:
- Startseite provisorisch gestaltet
- Produkte können hinzugefügt werden 
- Produkte werden ausgegeben
