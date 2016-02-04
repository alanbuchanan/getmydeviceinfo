var express = require('express');
var app = express();

app.get('/', (req, res) => {
	console.log('connection:', req.headers)

	var fullLang = req.headers['accept-language'];
	var fullSoftware = req.headers['user-agent'];

	var ip = req.connection.remoteAddress,
		lang = fullLang.substr(0, fullLang.indexOf(',')),
		software = fullSoftware.match(/\((.*?)\)/)[1];

	res.send({ipAddress: ip, lang: lang, software: software});
});

var port = Number(process.env.PORT || 3000)

app.listen(port, () => {
	console.log('listening on ' + port)
});