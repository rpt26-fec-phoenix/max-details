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
  describe('getDetailTitle()', function() {

    it('should return an object', async function() {
      const detailTitle = await db.getDetailTitle(12);
      expect(detailTitle).to.be.an('object');
    });

    it('should have typeOfPlace and propertyType properties', async function() {
      const properties = ['typeOfPlace', 'propertyType'];
      const detailTitle = await db.getDetailTitle(12);
      properties.forEach((property) => {
        expect(detailTitle[property]).to.not.equal('undefined');
      })
    });

    it('should return a detail title based on property id', async function() {
      const propertyId = 60;
      const detail = await db.getDetails(propertyId);
      const detailId = detail['_id'];
      const detailTitle = await db.getDetailTitle(propertyId);
      const detailTitleId = detailTitle['_id'];

      expect(JSON.stringify(detailId)).to.equal(JSON.stringify(detailTitleId));
    });
  });

  // get number of guests from the server
});