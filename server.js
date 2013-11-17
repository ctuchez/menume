var http = require('http');

function start() {
	function onRequest(req, res) {
		res.writeHead(200, {'content-Type': 'text/plain'});
		res.write('testing this shit');
		res.end();
	}
	http.createServer(onRequest).listen(8000);
}

exports.start = start;