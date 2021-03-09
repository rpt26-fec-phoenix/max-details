const db = require('../database/index.js');
const expect = require('chai').expect;

describe('Database Helpers', function() {

  describe('getDetails()', function() {

    it('should return an object', async function() {
      const detail = await db.getDetails(12);
      expect(detail).to.be.an('object');
    });

    it('should return all the details', async function() {
      const example = {
        typeOfPlace: '',
        propertyType: '',
        cancellation: '',
        houseRules: {},
        about: {},
        sleepingArrangements: {},
        propertyId: null
      }
      const detail = await db.getDetails(12);
      for (key in example) {
        expect(detail[key]).to.not.equal('undefined');
      }
    })

    it('should return a detail based on property id', async function() {
      const propertyId = 72;
      const detail = await db.getDetails(propertyId);

      expect(detail['propertyId']).to.equal(propertyId);
    });

  });

  // get detail title from the server

  // get number of guests from the server
});