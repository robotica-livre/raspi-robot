/**
 * Raspberry Pi Robot
 * 
 * The purpose of this 
 */
var express = require('express');
var drive = require('./robot/drive.js');

var Main = function() {
	
	var self = this;
	
	self.address = "192.168.1.122";
	self.port = "3000";
	
	var app = express.createServer();
	
	self.startServer = function() {
		self.app.listen(self.port, self.address, function() {
			console.log('%s: Node server started on %s:%d ...', Date(Date.now()), self.ipaddr, self.port);
		});
	};
	
	self.app.get('/', function(req, res) {
		res.send("Hello World!");
	})
	
};

// Call the main function
var app = new Main();
app.startServer();