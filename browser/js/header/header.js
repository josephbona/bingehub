app.directive('appHeader', function($rootScope, AuthService, AUTH_EVENTS, $state) {

  return {
    restrict: 'E',
    scope: {},
    replace: true,
    templateUrl: 'js/header/header.html',
    controlller: function($scope, $anchorScroll, $window) {
      $scope.scrollToTop = function(duration) {
        var scrollStep = window.scrollY / (duration / 15),
            scrollInterval = setInterval(function() {
              if(window.scrollY != 0) {
                window.scrollBy(0,scrollStep);
              } else {
                clearInterval(scrollInterval);
              }
            }, 15);
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