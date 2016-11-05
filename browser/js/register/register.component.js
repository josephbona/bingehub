app.component('register', {
  templateUrl: 'js/register/register.html',
  controller: RegisterCtrl
});

function RegisterCtrl(UserService, $state, AuthService) {
  var $ctrl = this;
  $ctrl.newUser = {};
  $ctrl.error = null;
  $ctrl.registerUser = registerUser;

  function registerUser() {
    UserService.create($ctrl.newUser)
      .then(function(user) {
        return AuthService.login({email: user.email, password: $ctrl.newUser.password})
      })
      .then(function() {
        $state.go('home');
      }).catch(function(err) {
        $ctrl.error = err;
      });
  }
}
