const path = require('path');
const express = require('express');
const port = 3001;

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/test', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});