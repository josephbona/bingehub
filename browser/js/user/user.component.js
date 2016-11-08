app.component('user', {
  bindings: {
    user: '=data',
    movies: '='
  },
  templateUrl: 'js/user/user.html',
  contoller: UserCtrl
});

function UserCtrl(AuthService) {
  var $ctrl = this;
  $ctrl.getLoggedInUser = getLoggedInUser;

  function getLoggedInUser() {
    AuthService.getLogedInUser()
      .then(function(user) {
        console.log(user);
      });
  }
}