var app = angular.module('configurationApp',['ngAnimate']);

app.factory('configurations',['$http', function($http){
  var obj = {};

  obj.data = function(){
    return $http.get('data.json');
  }

  return obj;
}]);

app.controller('mainController',['$scope','configurations', function($scope,configurations){
  configurations.data().success(function(res){
    $scope.configurations = res.configurations;
  })
  .catch(function(err){
    throw err;
  });
}]);
