const detailClass = require('./detail.js');
const mongoose = require('mongoose');
// connect to mongodb
mongoose.connect('mongodb://localhost/airbnb', {userNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('We are connected!');
});

// define details schema
const detailSchema = new mongoose.Schema({
  typeOfPlace: String,
  propertyType: String,
  cancellation: String,
  houseRules: {
    checkin: String,
    checkout: String,
    selfCheckIn: {
      allowSelfCheckIn: Boolean,
      howToCheckIn: String
    },
    suitableAge: String,
    smoking: Boolean,
    parties: Boolean,
    pets: Boolean,
    longTermStay: Boolean,
    additionalRules: String
  },
  about: {
    description: String,
    access: String,
    other: String
  },
  sleepingArrangements: {
    guests: Number,
    bedrooms: Number,
    beds: Number,
    baths: Number
  },
  propertyId: Number
});

// compile schema into model
const Detail = mongoose.model('Detail', detailSchema);

// create record
const newDetail = new Detail({
  typeOfPlace: 'House'
});

// add record to db
newDetail.save(function (err) {
  if (err) { return console.error(err); }
});

console.log(new detailClass(1));