app.config(function($stateProvider) {
  $stateProvider
    .state('movie', {
      url: '/movie/:id',
      template: '<movie data="$resolve.movie" images="$resolve.images"></movie>',
      resolve: {
        movie: function(MovieService, $stateParams) {
          return MovieService.findMovieById($stateParams.id);
        },
        images: function(MovieService, $stateParams) {
          return MovieService.findMovieImages($stateParams.id);
        }
      }
    })
    .state('login', {
      url: '/login',
      template: '<login></login>',
    })
    .state('register', {
      url: '/register',
      template: '<register></register>',
    })
})