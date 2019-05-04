var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'scott',
  database : 'movieListDB'
});

var getMovies = (callback) => {
  var query = "select * from movieList";
  connection.query(query, (err, movieList) => {
    if (err) {
      console.log('error connecting to database');
      return;
    }
    callback(null, movieList);
  })
}

module.exports = {
  getMovies,
}