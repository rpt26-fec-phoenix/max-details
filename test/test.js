const db = require('../database/index.js');

afterAll(() => {
  db.closeConnection();
})

describe('Database Helpers', () => {

  describe('getDetails()', () => {

    test('should return an object', async () => {
      const detail = await db.getDetails(12);
      expect(typeof detail).toBe('object');
    });

    test('should return all the details', async function() {
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
        expect(detail[key]).not.toEqual('undefined');
      }
    });

    test('should return a detail based on property id', async function() {
      const propertyId = 72;
      const detail = await db.getDetails(propertyId);

      expect(detail['propertyId']).toEqual(propertyId);
    });

  });

  describe('getDetailTitle()', function() {

    test('should return an object', async function() {
      const detailTitle = await db.getDetailTitle(12);
      expect(typeof detailTitle).toBe('object');
    });

    test('should have typeOfPlace and propertyType properties', async function() {
      const properties = ['typeOfPlace', 'propertyType'];
      const detailTitle = await db.getDetailTitle(12);
      properties.forEach((property) => {
        expect(detailTitle[property]).not.toEqual('undefined');
      })
    });

    test('should return a detail title based on property id', async function() {
      const propertyId = 60;
      const detail = await db.getDetails(propertyId);
      const detailId = detail['_id'];
      const detailTitle = await db.getDetailTitle(propertyId);
      const detailTitleId = detailTitle['_id'];

      expect(JSON.stringify(detailId)).toEqual(JSON.stringify(detailTitleId));
    });

  });

  describe('getGuests', function() {
    test('should be a function', function() {
      expect(typeof db.getGuests).toEqual('function');
    })

    test('should return an integer', async function() {
      const numberOfGuests = await db.getGuests(23);
      expect(typeof numberOfGuests).toEqual('number');
    })

    test('should retuen the number of guests for the provided property id', async function() {
      const propertyId = 44;
      const detail = await db.getDetails(propertyId);
      const numberOfGuests = detail.sleepingArrangements.guests;
      const guests = await db.getGuests(propertyId);

      expect(guests).toEqual(numberOfGuests);
    });
  })

});

