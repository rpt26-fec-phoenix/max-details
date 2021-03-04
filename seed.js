// connect to mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnb', {userNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('We are connected!');
});
// create record

// add record to db