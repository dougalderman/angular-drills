angular.module('filterApp')
.controller('myController', function($scope, myService) {

  $scope.personArray = myService.getData();

});
