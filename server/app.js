const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./models/index.js');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

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

app.post('/', (req, res) => {
  db.postMovie(req.body, (err) => {
    if (err) {
      console.log('error adding movie to database');
    }
    res.send('Successfully added movie to database!');
  })
})

app.listen(port, () => console.log(`Now Listening on port ${port}!`));