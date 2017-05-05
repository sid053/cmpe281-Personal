var express = require('express');
//var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
const fs = require('fs');
const fstream = require('fstream');
var router = express.Router();
var port = process.env.API_PORT || 3001;
var unzip = require('unzip');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var writeStream = fstream.Writer('/Users/sid/Desktop/output/path');

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 res.setHeader('Cache-Control', 'no-cache');
 next();
});
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

//adding the /order route to our /api router
 
 router.route('/file')

 

 //post new comment to the database
 .post(function(req, res) {
      console.log("File came here"); 
     //res.download(req.body);
     var readStream = fs.createReadStream(req.body.name);
       readStream.pipe(unzip.Parse()).pipe(writeStream)
     res.send(req.body);
 	});



 app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});