const faker = require('faker');

module.exports = class Detail {
  constructor(propertyId) {
    this.typeOfPlace = null;
    this.propertyType = null;
    this.cancellation = null;
    this.houseRules = {};
    this.about = {};
    this.sleepingArrangements = {};
    this.propertyId = propertyId;

    this.setProperty();
    this.setCancellation();
    this.setHouseRules();
    this.setAbout();
    this.setSleepingArrangements();
  }

  setProperty() {
    const typesOfPlaces = ['entirePlace', 'privateRoom', 'sharedRoom'];
    const propertyTypes = ['apartment', 'house', 'secondaryUnit', 'uniqueSpace', 'b&b', 'boutiqueHotel'];

    this.typeOfPlace = typesOfPlaces[Math.floor(Math.random() * typesOfPlaces.length)];

    if (this.typeOfPlace === 'entirePlace') {
      this.propertyType = propertyTypes[Math.floor(Math.random() * (propertyTypes.length - 2))];
    } else {
      this.propertyType = propertyTypes[Math.floor(Math.random() * (propertyTypes.length))];
    }
  }

  setCancellation() {
    const cancellationPolicies = ['flexible', 'moderate', 'strict'];
    this.cancellation = cancellationPolicies[Math.floor(Math.random() * cancellationPolicies.length)];
  }

  setHouseRules() {
    const houseRules = {
      checkIn: null,
      checkOut: null,
      selfCheckIn: {
        allowSelfCheckIn: null,
        howToCheckIn: null
      },
      suitableAge: null,
      smoking: null,
      parties: null,
      pets: null,
      longTermStay: null,
      additionalRules: null
    };

    const checkInTimes = ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
    houseRules.checkIn = checkInTimes[Math.floor(Math.random() * checkInTimes.length)];

    const checkInCopy = houseRules.checkIn;
    let hour = Number(checkInCopy.split(':')[0]);
    if (hour === 12) {
      houseRules.checkOut = '10:00 AM';
    } else if (hour === 1) {
      houseRules.checkOut = '11:00 AM';
    } else if (hour === 2) {
      houseRules.checkOut = '12:00 PM';
    } else if (hour === 3) {
      houseRules.checkOut = '1:00 PM';
    } else if (hour === 4) {
      houseRules.checkOut = '2:00 PM';
    } else if (hour === 5) {
      houseRules.checkOut = '3:00 PM';
    }

    houseRules.selfCheckIn.allowSelfCheckIn = Math.floor(Math.random() * 2) === 0 ? true : false;
    const selfCheckInOptions = ['lockbox', 'keypad', 'doorman'];
    if (houseRules.selfCheckIn.allowSelfCheckIn === true) {
      houseRules.selfCheckIn.howToCheckIn = selfCheckInOptions[Math.floor(Math.random() * selfCheckInOptions.length)];
    }

    const ages = ['infants', 'children', 'all'];
    houseRules.suitableAge = ages[Math.floor(Math.random() * ages.length)];

    houseRules.smoking = Math.random() < 0.5;
    houseRules.parties = Math.random() < 0.5;
    houseRules.pets = Math.random() < 0.5;
    houseRules.longTermStay = Math.random() < 0.5;

    let additionalRules = faker.lorem.sentences(Math.floor(Math.random() * 5));
    houseRules.additionalRules = additionalRules;

    this.houseRules = houseRules;
  }

  setAbout() {
    const about = {
      description: null,
      space: null,
      access: null,
      other: null
    };

    for (let key in about) {
      about[key] = faker.lorem.paragraph();
    }

    this.about = about;
  }

  setSleepingArrangements() {
    const sleepingArrangements = {
      guests: null,
      bedrooms: null,
      beds: null,
      baths: null
    };

    if (this.typeOfPlace === 'privateRoom') {
      sleepingArrangements.bedrooms = 1;
    } else {
      sleepingArrangements.bedrooms = Math.floor(Math.random() * (7 - 1) + 1);
    }

    sleepingArrangements.beds = Math.floor(Math.random() * (3 - 1) + 1) * sleepingArrangements.bedrooms;

    sleepingArrangements.baths = Math.floor(Math.random() * (sleepingArrangements.bedrooms - 1) + 1);

    sleepingArrangements.guests = Math.floor(Math.random() * (3 - 1) + 1) * sleepingArrangements.beds;

    this.sleepingArrangements = sleepingArrangements;
  }
};

