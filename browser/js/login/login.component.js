app.component('login', {
  templateUrl: 'js/login/login.html',
  controller: LoginCtrl
});

function LoginCtrl(AuthService, $state) {
  var $ctrl = this;
  $ctrl.login = {};
  $ctrl.error = null;
  $ctrl.submitLogin = submitLogin;

  function submitLogin() {
    return AuthService.login($ctrl.login)
      .then(function () {
        $state.go('home');
      }).catch(function () {
        $ctrl.error = 'Invalid login credentials.';
      });
  }
}
