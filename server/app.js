const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./models/index.js');
const cors = require('cors');
//const movies = require('./api/movies.js');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  // var results = null;
  db.getMovies((err, movieList) => {
    if (err) {
      console.log('error in getting movie list data');
      return;
    }
    console.log(movieList);
    res.status(200);
    res.send(JSON.stringify(movieList));
  })
  // res.status(200);
  // res.send(null, results);
})

app.get('/api/movies', (req, res) => {

  res.status(200);
  res.send('in the movies get request');
})

app.listen(port, () => console.log(`Now Listening on port ${port}!`));