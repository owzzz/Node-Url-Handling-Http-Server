/*
 * Url-Handling-Http-Server
 * https://github.com/owzzz/Node-Url-Handling-Http-Server
 *
 * Copyright (c) 2013 Owzzz
 * Licensed under the MIT license.
 */
var http = require('http'),
		url  = require('url');

exports.CreateServer = function() {

	'use strict';

	http.createServer(function (request, response) {
   // Attach listener on end event.
	   request.on('end', function () {
	      // Parse the request for arguments and store them in _get variable.
	      // This function parses the url from request and returns object representation.
	      var _get = url.parse(request.url, true).query;
	      // Write headers to the response.
	      response.writeHead(200, {
	         'Content-Type': 'text/plain'
	      });
	      // Send data and end response.
	      response.end('Here is your data: ' + JSON.stringify(_get));
	   });
	// Listen on the 8080 port.
	}).listen(1337);

	console.log('Server Started')

  return 'Server Started';
};

exports.CreateServer();