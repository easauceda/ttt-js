var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('reminders');
var uuid = require('node-uuid');

//Add a reminder
module.exports = function(app) {
        app.get('/api', function(req, res) {
            console.log(req.query);
            //console.log(req.query.carrier);
            if (!req.query) {
                return res.sendStatus(400);
            }

            // Convert our form input into JSON ready to store in Couchbase
            var uid = uuid.v1();
            req.query.id = uid;
            var json = JSON.stringify(req.query);
            console.log(json);

            // Save it into Couchbase with keyname user
            bucket.insert(uid, json, function(err, response) {
                if (err) {
                    console.log('Failed to save to Couchbase', err);
                    return;
                } else {
                    res.send('Saved to Couchbase!');
                }
            });
        });
        app.get('/api/reminder', function(req, res) {
                //couchbase code here
                var query = ViewQuery.from('dev_by_number')
                    .key(req.params.$number)
                    .stale(ViewQuery.Update.BEFORE);
                bucket.query(query, function(err, results) {
                        res.json({
                            'reminders': results
                        })
                    };
                }); app.get('/api/delete/:id', function(req, res) {
                //couchbase call here
                console.log(req.params.id);
                res.send("OK");
            });
        };