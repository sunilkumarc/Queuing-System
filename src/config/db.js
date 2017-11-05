var mongoose = require('mongoose');

var db_url = 'mongodb://localhost:27017/ola-queuing-system';

mongoose.connect(db_url, { useMongoClient: true }, function(err, conn) {
    if(err) {
        console.log('Error while connecting to Mongoose : ' + err);
    }
});