app.component('search', {
  templateUrl: 'js/search/search.html',
  controller: 'SearchCtrl'
});

app.controller('SearchCtrl', function (MovieService, $scope, $timeout) {

  // This is what you will bind the query to
  $scope.query = '';
  $scope.loading = false;
  $scope.focus = false;
  $scope.setFocus = function(bool) {
    $timeout(function() {
      $scope.focus = bool;
    }, 100);
  };

  // Instantiate these variables outside the watch
  var tempQuery = '',
      queryTimeout;
    $scope.$watch('query', function (val) {
      if (queryTimeout) $timeout.cancel(queryTimeout);

      tempQuery = val;
      queryTimeout = $timeout(function() {
        $scope.results = [];
        $scope.query = tempQuery;
        if($scope.query !== '') $scope.loading = true;
        MovieService.findMovieByTitle($scope.query)
          .then(function(results) {
            $scope.results = results.results;
            $scope.loading = false;
          })
      }, 250); // delay 250 ms
    });

})

