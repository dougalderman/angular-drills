angular.module('apiApp').
controller('apiController', function ($scope, $sce, apiService) {

  $scope.getTheBlog = function(url) {
        $scope.blog = {};
        $scope.year = '';
        $scope.posts = [];
        if (url.slice(0, 7) === 'http://')
          url = url.slice(7);
        apiService.getBlog(url)
        .then(function(data) {
          if (data)  {
            $scope.blog = data;
            $scope.getYearPublished();
            console.log(data);
          }
      })
  };

  $scope.getYearPublished = function() {
    $scope.year = $scope.blog.published.slice(0, 4);
  };

  $scope.getPosts = function() {
    apiService.getPosts($scope.blog.id)
    .then(function(data) {
      if (data)  {
        $scope.posts = data.items;
        console.log(data.items);
      }
    })
  };

  $scope.renderHtml = function(html_code) {
    return $sce.trustAsHtml(html_code);
  };

  })
