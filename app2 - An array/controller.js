angular.module("arrayApp")
.controller("arrayController", function($scope, arrayService) {

    $scope.personArray = arrayService.getData();


});
