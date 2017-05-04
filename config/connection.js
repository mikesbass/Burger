//Node Connection to MySQL
var mysql = require ('mysql');

var connection;

	if (process.env.JAWSDB_URL)
	{
		connection = mysql.createConnection(process.env.JAWSDB_URL);
	}
	else
	{
		connection = mysql.createConnection(
		{
			host: 'jsk3f4rbvp8ayd7w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
			user: 'unbz77lm0q1x3ee8',
			password: 'au8v0ydnsiyxb6ev',
			database: 'burgers_db'
		});
	};


	connection.connect(function(err) 
	{
	  if (err) 
	  {
	    console.error('error connecting: ' + err.stack);
	    return;
	  };
	  console.log('connected as id ' + connection.threadId);
	});

module.exports = connection;