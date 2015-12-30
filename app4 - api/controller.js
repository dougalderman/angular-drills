angular.module('apiApp').
controller('apiController', function ($scope, apiService) {

  $scope.getTheBlog = function(url) {
        apiService.getBlog(url)
        .then(function(data) {
          if (data)  {
            $scope.blog = data;
            console.log(data);
          }
      })
  };

  })
