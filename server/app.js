const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
//const movies = require('./api/movies.js');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world!');
})

app.get('/api/movies', (req, res) => {
  res.status(200);
  res.send('in the movies get request');
})

app.listen(port, () => console.log(`Now Listening on port ${port}!`));