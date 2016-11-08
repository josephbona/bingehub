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
    .state('user', {
      url: '/user/:id',
      template: '<user data="$resolve.user" movies="$resolve.movies"></user>',
      resolve: {
        user: function(UserService, $stateParams) {
          return UserService.findById($stateParams.id);
        },
        movies: function(UserService, MovieService, $stateParams) {
          return UserService.findById($stateParams.id)
            .then(function(user) {
              var movieList = [];
              for (var i = 0; i < user.list.movies.length; i++) {
                MovieService.findMovieById(user.list.movies[i])
                    .then(function(movie) {
                      movieList.push(movie);
                    });
              }
              return movieList;
            });
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
    .state('movies', {
      url: '/movies',
      template: '<archive data="$resolve.movies" title="Movies"></archive>',
      resolve: {
        movies: function(MovieService) {
          return MovieService.findMovies(0, 18, 'all');
        }
      }
    })
})