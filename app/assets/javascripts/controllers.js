var appController = angular.module('appControllers', []);

appController.controller('HomeController', ['$scope', '$http', function($scope, $http) {
	$http.get('/data').success(function(data){
		$scope.items = data;
	});
	$scope.sortBy = 'name'
}]);

appController.controller('ItemController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('/data/' + $routeParams.item_id).success(function(data){
		$scope.items = data;
	});
	$scope.sortBy = 'name'
}]);