var child_process = require('child_process'),
	op = process.argv[2];

op = op ? op : '-soft';
switch(op) {
	case '-help':
		console.log('node '+ process.argv[1] + ' -soft --start the server without executing db scripts');
		console.log('node '+ process.argv[1] + ' -hard --start the server with db scripts');
	break;
	case '-soft':
		startNodeServer();
	break;
	case '-hard':
		runDbScripts();
		startNodeServer();
	break;
}

function startNodeServer() {
	var nodeServer = child_process.exec('node server.js', function(err, stdout, stderr) {
		console.log(err);
		console.log(stdout);
		console.log(stderr);
	});

	var httpStaticServer = child_process.exec('http-server', function(err, stdout, stderr) {
		console.log(err);
		console.log(stdout);
		console.log(stderr);
	});
}

function runDbScripts() {
	
}