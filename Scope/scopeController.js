angular.module('myApp', [])
  .controller('MyController',
  function($scope) {
    $scope.persona = {};
    $scope.persona.nome = "Luca";
    $scope.persona.cognome = "Rossi";
    $scope.persona.dataNascita = "06/06/1993";
  });
