    var express = require('express');
    var app = express();
    var formidable = require('formidable');
    var math = require('math_example');

app.use(express.static(__dirname + '/public'));

app.get('/addition', function (request, response) {
    var x = Number(request.query.x);
    var y = Number(request.query.y);
    var result = math.addition(x, y);

    response.writeHead('200', { 'Content-Type': 'application/json' });
    response.end('{"result" : ' + result + '}');
    console.log('Handled request for x= ' + x + 'y= ' + y);
});

app.post('/substraction', function (request, response) {
        var form = new formidable.IncomingForm();
        form.parse(request, function (err, fields) {
            var x = Number(fields.x);
            var y = Number(fields.y);
            var result = math.substraction(x, y);

            response.writeHead('200', { 'Content-Type': 'application/json' });
            response.end('{"result": ' + result + '}');
            console.log('Handled substraction request for x= ' + x + ' y= ' + y);
        });
    });

app.put('/mutliply', function (request, response) {
        var form = new formidable.IncomingForm();
        form.parse(request, function (err, fields) {
            var x = Number(fields.x);
            var y = Number(fields.y);
            var result = math.multiplication(x, y);

            response.writeHead('200', { 'Content-Type': 'application/json' });
            response.end('{"result": ' + result + '}');
            console.log('Handled multiplication request for x= ' + x + ' y= ' + y);
        });
    });

app.delete('/divide', function (request, response) {
        var form = new formidable();
        form.parse(request, function (err, fields) {
            var x = Number(fields.x);
            var y = Number(fields.y);
            var result = math.division(x, y);

            response.writeHead('200', { 'Content-Type': 'application/json' });
            response.end('{"result:" ' + result + '}');
            console.log('Handled division request for x= ' + x + ' y=' + y);
        });
    });


var port = 8080;
app.listen(port);
console.log('Listening on port: ' + port);

