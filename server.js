var express = require('express');
var WebSocket = require('ws');
var app = express();

var wss = new WebSocket.Server({
    port: 8080
})

wss.on('connection', function(client){
    console.log('Client connected');
    
    client.on('message', function(data) {
        console.log('Client said: ' + data);

        client.send(data);
    })
})


app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Server is running')
})