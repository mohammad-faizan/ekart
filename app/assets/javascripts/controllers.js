var appController = angular.module('appControllers', []);

appController.controller('HomeController', ['$scope', 'Api', function($scope, Api) {
	$scope.items = Api.query();
	$scope.sortBy = 'name'
}]);

appController.controller('ItemController', ['$scope', '$routeParams', 'Api', function($scope, $routeParams, Api) {
	$scope.item = Api.get({id: $routeParams.id});
}]);

appController.controller('EditItemController', ['$scope', '$routeParams', 'Api', function($scope, $routeParams, Api) {
	$scope.item = Api.get({id: $routeParams.id});
}]);

appController.controller('NewItemController', ['$scope', '$routeParams', '$location', 'Api', function($scope, $routeParams, $location, Api) {
	$scope.categoryOptions = [
		"Electronics",
		"Appliances",
		"Men",
		"Women",
		"Kids",
		"Sports",
		"Others"
	]

	$scope.item = {
		availability: true
	};

	$scope.saveItem = function() {
		Api.save($scope.item, function(response){
			if(response.status == 200){
				$location.path('/');
			}else{
				alert('something went wrong');
			}
		});
	}
}]);