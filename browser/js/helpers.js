app.directive("scroll", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      if (this.pageYOffset >= 100) {
        scope.hasScrolled = true;
      } else {
        scope.hasScrolled = false;
      }
      scope.$apply();
    });
  };
});