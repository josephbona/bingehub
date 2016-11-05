app.component('movie', {
  bindings: {
    movie: '=data',
    images: '='
  },
  templateUrl: 'js/movie/movie.html',
  contoller: MovieCtrl
});

function MovieCtrl() {
  var $ctrl = this;
  $ctrl.movie.getDurationMinutes = function(seconds) {
    return $ctrl.movie.duration / 60;
  }
}