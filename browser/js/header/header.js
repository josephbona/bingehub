app.directive('appHeader', function($rootScope, AuthService, AUTH_EVENTS, $state) {

  return {
    restrict: 'E',
    scope: {},
    replace: true,
    templateUrl: 'js/header/header.html',
    controller: function($scope) {
      $scope.scrollToTop = function(duration) {
        $('html, body').animate({ scrollTop: 0 }, duration);
        $('#search-bar').focus();
      }
    },
    link: function(scope) {

      scope.user = null;

      scope.isLoggedIn = function() {
        return AuthService.isAuthenticated();
      };

      scope.logout = function() {
        AuthService.logout().then(function() {
          $state.go('home');
        });
      };

      var setUser = function() {
        AuthService.getLoggedInUser().then(function(user) {
          scope.user = user;
        });
      };

      var removeUser = function() {
        scope.user = null;
      };

      setUser();

      $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
      $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
      $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

    }

  };

});