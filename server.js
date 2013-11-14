/*
	Will contains all Server Side code for our app

		1)  Serving a single static page using Express
		2)  Config Express to serve page from the repo views with the jade temmplating
		3)  Creating a Jade Temlate page
		4)  Add our Response HTML file

*/
	/// Including Express 
	var express = require("express"), app  = express.createServer();
	//  Including Jade
	var jade = require('jade');

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



