var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({host:'localhost',user:'root',database:'userservice'});


/* 1- addUser: parametros: username, password, email (metodo PUT, respuesta: status_code = 0) */
router.put('/adduser', function(req, res, next) {
  if (req.body.username.length  || req.body.email.length || req.body.password.length)
  {
  	var sql = "INSERT INTO users (username, email, password) VALUES ?";
  	var values = [[req.body.username,req.body.email,req.body.password]];
	  connection.query(sql, [values], function (err, result) {
	  	if(result)
	  	{
	    	console.log("Number of records inserted: " + result.affectedRows);
	  	}
	  });
  }
  res.status(200).json({ status_code: 0});
});

/* 4- getUser: parametros: username (metodo GET, respuesta: username, password, emial)*/
router.get('/getUser/:username', function(req, res, next) {
 if (req.params.username.length)
  {
	var sql = 'SELECT username,password,email FROM users WHERE username = ' + mysql.escape(req.params.username);
	connection.query(sql, function (err, result) {
		if(result){
			res.status(200).json(result);
		}		
	});
  }
});
/*
2- activateUser: parametros: username (metodo POST, respuesta: status_code = 0)
*/
router.post('/activateUser', function(req, res, next) {
  if (req.body.username.length)
  {
  	var sql = "update users  set status=1 where username=" + mysql.escape(req.body.username);
  	connection.query(sql, function (err, result) {
	  	if(result)
	  	{
	    	console.log("Number of records update: " + result.affectedRows);
	  	}
	  });
  }
  res.status(200).json({ status_code: 0});
});
/*
3- deactivateUser: parametros: username (metodo POST, respuesta: status_code = 0)
*/

router.post('/deactivateUser', function(req, res, next) {
  if (req.body.username.length)
  {
  	var sql = "update users  set status=0 where username=" + mysql.escape(req.body.username);
  	connection.query(sql, function (err, result) {
	  	if(result)
	  	{
	    	console.log("Number of records update: " + result.affectedRows);
	  	}
	  });
  }
  res.status(200).json({ status_code: 0});
});

module.exports = router;
