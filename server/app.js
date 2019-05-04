const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./models/index.js');
//const movies = require('./api/movies.js');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  db.getMovies((err, movieList) => {
    if (err) {
      console.log('error in getting movie list data');
      return;
    }
    res.status(200);
    res.send(JSON.stringify(movieList));
  })
})

app.get('/api/movies', (req, res) => {

  res.status(200);
  res.send('in the movies get request');
})

app.listen(port, () => console.log(`Now Listening on port ${port}!`));