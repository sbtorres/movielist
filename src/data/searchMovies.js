import api_key from './../../env/movieList.config.js';

var getMovieByName = (query, callback) => {
  $.ajax({
    url: 'https://api.themoviedb.org/3/search/movie',
    type: 'GET',
    dataType: 'jsonP',
    data: {
      api_key: api_key,
      query: query
    },
    contentType: 'application/json',
    success: (data) => {
        callback(data);
    },
    error: function(error) {
      console.error('Failed to fetch messages', error);
    }
  })
}

export default getMovieByName;