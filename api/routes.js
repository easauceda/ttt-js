var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('reminders');
var uuid = require('node-uuid');

//Add a reminder
module.exports = function(app) {
    app.get('/api', function(req, res) {
        console.log(req.query);
        //console.log(req.query.carrier);
        if (!req.query){
            return res.sendStatus(400);
        }

          // Convert our form input into JSON ready to store in Couchbase
          var json = JSON.stringify(req.query);
          
          console.log(json);

          // Save it into Couchbase with keyname user
          bucket.insert(Math.random().toString(), json, function (err, response){
            if (err) {
                  console.log('Failed to save to Couchbase', err);
                  return;
            } else {
                  res.send('Saved to Couchbase!');
            }
          });
    });
    app.get('/api/reminder', function(req, res) {
    	//tims couchbase code here
	    res.json({"reminders" : {
  					"carrier": "T-Mobile",
					"id": uuid.v1(),
  					"destination": "Venice, CA",
  					"monday": "true",
  					"origin": "Covina, CA",
  					"phone": "6266784572",
  					"time": "1970-01-01T21:30:00.000Z",
  					"wednesday": "true"
				}});
    });
    app.get('/api/delete/:id', function(req, res) {
	    //couchbase call here
	    console.log(req.params.id);
	    res.send("OK");
    });
};
