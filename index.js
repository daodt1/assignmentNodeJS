/**
 * @file 
 * Provides connection to a pseudo server to read and save some data.
 */
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var conf = require('./config.json');
var personController = require('./person.js');
	
var PORT = conf.port;

var app = express();
app.listen(PORT);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MYSQL SETUP
//------------------------------------------------------------------
var connection = mysql.createConnection({
	host     : conf.host,
	user     : conf.user,
	password : conf.password,
	database : conf.database
});

app.get('/person', function (req, res) {
	personController.getPerson(req, res, connection);
});

app.post('/person', function (req, res) {
	personController.setPerson(req, res, connection);
});