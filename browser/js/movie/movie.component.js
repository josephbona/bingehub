app.component('movie', {
  bindings: {
    movie: '=data',
    images: '='
  },
  templateUrl: 'js/movie/movie.html',
  contoller: MovieCtrl
});

function MovieCtrl(UserService, Session) {
  var $ctrl = this;
  $ctrl.user = Session.user;

  function addToFavorites(id) {
    UserService.addToFavorites(id)
      .then(function() {
        $state.go('user', {id: $ctrl.user})
      });
  }
}