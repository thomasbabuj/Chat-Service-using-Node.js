/*
	Will contains all Server Side code for our app

		1)  Serving a single static page using Express
		2)  Config Express to serve page from the repo views with the jade temmplating
		3)  Creating a Jade Temlate page
		4)  Add our Response HTML file
		5)  Socket.io Server side configuration
		6)  Socket.io Client side configuration

*/
	/// Including Express 
	var express = require("express"), app  = express();
	//  Including Jade
	var jade = require('jade');
	//  Including Socket.io
	var io = require('socket.io').listen(app);

	// To change express to serve like a client webserver adding public folder which contains JS/CSS/Image files

	app.set('views', __dirname + '/views');
	app.set('view engine' , 'jade');
	app.set('view options', { layout : false });
	app.configure(function() {
		app.use( express.static( __dirname + '/public'));
	});

	// Config Express to serve home.jade file and setting express to listen port 3000

	app.get('/', function(req, res){
		res.render('home.jade');
	});
	app.listen(3000);

	// Initializing the socket.io connection
	//  first arugument is event
	//  second argument is callback function
	io.sockets.on('connection', function(socket){  
		// Adding "pseudo" events
		socket.on('setPseudo', function(data) {
			socket.set('pseduo', data);
		});

		socket.on('message', function(message){
			socket.get('pseduo', function(error, name) {
				var data = {'message' : message, pseduo : name};
				socket.broadcast.emit('message', data);
				console.log (" User " + name + "Send this : " + message );
			})
		})

	});

