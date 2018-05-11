const express = require('express');

var app = express();

app.get('/', function(request, response) {
	response.send('Hey there!');
});

app.get('/orders', function(request, response) {
	response.send('Orders page');
});

app.get('/orders/admin', function(request, response) {
	response.send('Orders admin page');
});

app.get('/about', (request, response) => {
	response.send('About page');
});

// start listening
var server = app.listen(8000, () => {
	console.log('successfully listening...');
});