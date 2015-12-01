var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('travelers');

//Add a traveler
module.exports = function(app) {
	app.get('/api', function(req, res) {
		console.log(req.query);
	});
};
//Retrieve a traveler and their time

