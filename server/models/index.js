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

var postMovie = (data, callback) => {
  var query = `insert into movieList (title, watched, infoPanel, summary, year) 
               values ('${data.title}', 0, 0, '${data.summary}', '${data.year}')`;
  connection.query(query, (err) => {
    if (err) {
      console.log('error adding movie to database');
      return;
    }
    callback(null);
  })
}

module.exports = {
  getMovies,
  postMovie,
}