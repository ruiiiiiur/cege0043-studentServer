
// 1. express is the server that forms part of the nodejs program
var express = require('express');
var path = require("path");
var app = express();



// 2. add an http server to serve files to the Edge browser
// due to certificate issues it rejects the https files if they are not
// directly called in a typed URL
var http = require('http');
var httpServer = http.createServer(app);
httpServer.listen(4480);


// 8. “cross origin request”
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
	});


// 4. adding functionality to log the requests
app.use(function (req, res, next) {
	var filename = path.basename(req.url);
	var extension = path.extname(filename);
	console.log("The file " + filename + " was requested.");
	next();
	});

// 3. 
app.get('/',function (req,res) {
	res.send("hello world from the HTTP server (Rui Server)");
	});


//5. the server returns test.html when it is requested
// serve an HTML file
//app.get('/test.html', function (req, res) {
	// run some server-side code
//	console.log('test.html requested');
	// note that __dirname gives the path to the studentServer.js file
//	res.sendFile(__dirname + '/test.html');
//	});


// 6. serve any HTML file
//app.get('/:fileName', function (req, res) {
	// run some server-side code
//	var fileName = req.params.fileName;
//	console.log(fileName + ' requested');
	// note that __dirname gives the path to the studentServer.js file
//	res.sendFile(__dirname + '/'+ fileName);
//	});



// 7. serve static files - e.g. html, css
// this should always be the last line in the server file
app.use(express.static(__dirname));