var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

var runEves = require('./evolution/runEves');
var settings = require('./evolution/settings');

var PORT = process.env.PORT || 8080;
var ENV = process.env.NODE_ENV || 'development';

server.listen(PORT); // change for production

// server.listen(app.get('port'));
console.log('Node environment:', ENV)
console.log('Server listening on port', PORT);

// CORS handling
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

var Eves = [];
setTimeout(runEves.bind(null, Eves),1000);

app.use(express.static(__dirname + '/../client/dist'));

// Routes
app.get('/evolution', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/evolution/index.html'))
});

app.get('/api/state', (req, res) => {
  res.status(200).send({Eves:Eves, settings:settings});
});

app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'))
});


