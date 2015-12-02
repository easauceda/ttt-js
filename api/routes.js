var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('reminders');

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
};