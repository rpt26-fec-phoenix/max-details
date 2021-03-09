const db = require('../database/index.js');
const path = require('path');
const express = require('express');
const port = 3001;

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/details/:propertyId', (req, res) => {
  db.getDetails(req.params.propertyId)
    .then((detail) => {
      res.send(detail);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});