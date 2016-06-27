angular.module('myApp', [])
  .controller('FirstController', function($scope) {
    $scope.count = 0;
    $scope.aggiungi = function() {
      $scope.count += 1;
    };
    $scope.sottrai = function() {
      $scope.count -= 1;
    };
  });
