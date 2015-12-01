var express = require('express');
var server = express();

require('./api/routes')(server);
server.use(express.static('./client'));

server.get('*', function(req, res) {
	res.sendFile('/client/views/index.html', { root: __dirname });
});

server.listen(3000, function() {
	console.log('Listening on 3000');
});

