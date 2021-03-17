const db = require('../database/index.js');
const path = require('path');
const express = require('express');
const port = 3003;

const app = express();

app.use('/:propertyId', express.static(path.join(__dirname, '../public')));

app.get('/details/:propertyId', (req, res) => {
  db.getDetails(req.params.propertyId)
    .then((detail) => {
      res.send(detail);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/detailTitle/:propertyId', (req, res) => {
  db.getDetailTitle(req.params.propertyId)
    .then((detailTitle) => {
      res.send(detailTitle);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/guests/:propertyId', (req, res) => {
  db.getGuests(req.params.propertyId)
    .then((numberOfGuests) => {
      res.send({numberOfGuests});
    })
    .catch((err) => {
      res.send(err);
    });
});


const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/1/`);
});

module.exports = {
  app,
  server
};
