var express = require('express');
var middlewaresConfig = require('./src/config/middlewares');
var RequestsController = require('./src/controllers/requests');
var DriversController = require('./src/controllers/drivers');
var server = express();

// DB Connection
require('./src/config/db');

// Middleware
middlewaresConfig(server);

server.get('/', function(req, res){
    res.status(200).send("Server Working Fine :D");
});

RequestsController.set(server);
DriversController.set(server);

var port = Number(process.env.PORT || 8000)
server.listen(port, err => {
    if (err)
        console.log(err);
    else
        console.log('Ola queuing system started ...');
});