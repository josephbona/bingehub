app.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/home/home.html',
    controller: homeCtrl,
    controllerAs: 'vm',
    resolve: {
      movies: function(MovieService) {
        return MovieService.findMovies(0, 6, 'all');
      }
    }
  });
});

function homeCtrl(movies) {
  var vm = this;
  vm.movies = movies.results;
}