var http = require('http');

var wServer = http.createServer(function(req, res){
	res.writeHead(200, {'Content-type': 'text/html'});
	res.write('Rent a book\n', 'utf8');
	response.end();
});
wServer.listen('1337');
