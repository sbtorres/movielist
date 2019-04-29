$(document).ready(function() {

  var movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];
  
  
  movies.map(() => ($(".movieList").append('<div class="movie">movies.title</div>')));
});
