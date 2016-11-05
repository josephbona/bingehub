var baseUrl = 'https://api-public.guidebox.com/v1.43/US/rKa9RZs4fNNY2TyTBQ7BPVSUKFBbzije';
app.factory('MovieService', MovieService);

function MovieService($http) {
  return {

    // {Base API URL} /movies/all/ {limit 1} / {limit 2} / {sources} / {platform}
    findMovies: function(start, count, sources) {
      if(start === 'random')
        start = getRandomMovieStart();
      return $http.get(baseUrl + '/movies/all/' + start + '/' + count + '/' + sources + '/all')
        .then(function(result) {
          return result.data;
        })
    },
    findMovieById: function(id) {
      return $http.get(baseUrl + '/movie/' + id )
        .then(function(result) {
          return result.data;
        })
    },
    findMovieByTitle: function(string) {
      var encodedString = encodeURI(encodeURI(encodeURI(string)));
      return $http.get(baseUrl + '/search/movie/title/' + encodedString + '/fuzzy')
        .then(function(result) {
          return result.data;
        })
    },
    findMovieImages: function(id) {
      return $http.get(baseUrl + '/movie/' + id + '/images/all')
        .then(function(result) {
          return result.data;
        })
    }


  }
}

function getRandomMovieStart() {
  return Math.floor(Math.random() * (71509 - 0 + 1)) + 0;
}