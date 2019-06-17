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

Single Page Applikation Webshop:

Clientseiting wird das Backbone.js Rendering System genutzt. Die Kommunikation zwischen Client und Server erfolgt per Socket.io. Daten werden vom Client mit der Funktion Sockets.* ('sockets/outgoing-js') angefordert und werden als Callback zurückgegeben ('sockets/incoming.js').

Das Routing wird ebenfalls über Backbone.js realisiert. Um eine neue Route zu erstellen muss diese zunächst für den Client ('routing/routing.js') als auch für den Server ('routes/index.js') hinzugefügt werden.
