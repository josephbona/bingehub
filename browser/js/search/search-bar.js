app.component('searchBar', {
  templateUrl: 'js/search/search-bar.html',
  controller: function(MovieService, $state) {
    this.randomMovie = function() {
      MovieService.findMovies('random', 1, 'all')
        .then(function(result) {
          console.log(result);
          var id = result.results[0].id.toString();
          $state.go('movie', {id: id});
        })
    }
  }
});