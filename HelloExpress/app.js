var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/SubmitHello', function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Hello ' + request.query.userName + '!<br />');
    response.end('Have a great day !');
    console.log('Handled request from ' + request.query.userName);
});

var port = 8080;
app.listen(port);
console.log('Listening on port' + port);
