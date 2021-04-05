const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/airbnbDetails', {useNewUrlParser: true, useUnifiedTopology: true});

const detailSchema = new mongoose.Schema({
  typeOfPlace: String,
  propertyType: String,
  cancellation: String,
  houseRules: {
    checkIn: String,
    checkOut: String,
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
    space: String,
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

const Detail = mongoose.model('Detail', detailSchema);

const getDetails = async function(propertyId) {
  return await Detail.findOne({propertyId})
};

const getDetailTitle = async function(propertyId) {
  return await Detail.findOne({propertyId}, 'typeOfPlace propertyType')
};

const getGuests = async function(propertyId) {
  const detail = await Detail.findOne({propertyId}, 'sleepingArrangements');
  return detail.sleepingArrangements.guests;
};

const closeConnection = function() {
  mongoose.connection.close();
}

module.exports = {
  getDetails,
  getDetailTitle,
  getGuests,
  closeConnection
};