var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('reminders');
var ViewQuery = couchbase.ViewQuery;
var spawn = require('child_process').spawn;

//run every minute
var minutes = 1, the_interval = minutes * 60 * 1000;

//query
setInterval(function() {

	//get current time
	var date = new Date();
	var def_date = new Date('1970-1-1');
	//edit date to use correct year
	def_date.setHours(date.getHours());
	def_date.setMinutes(date.getMinutes());

	console.log('Searching for jobs: ' + def_date.toISOString());

	//query against couchbase view
	var query = ViewQuery.from('dev_by_number', 'date')
			     .key(def_date.toISOString())
			     .stale(ViewQuery.Update.BEFORE);
	//run query against bucket
	bucket.query(query, function(err, results) {
		//send text for each result
		for (var i in results){

			var phone = results[i].value.phone;
			var origin = results[i].value.origin;
			var destination = results[i].value.destination;
			var carrier = results[i].value.carrier;
			console.log(carrier);

			var job = spawn('python',["time_js.py", phone, origin, destination, carrier]);

			job.stdout.on('data', function (data){
				console.log('Sent Message');
			});
		}

	});
	    }, the_interval);
