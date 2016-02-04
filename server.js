var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send('got \'/\'')
});

var port = Number(process.env.PORT || 3000)

app.listen(port, () => {
	console.log('listening on ' + port)
});