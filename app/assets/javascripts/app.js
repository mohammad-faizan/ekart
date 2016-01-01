var ekartApp = angular.module('Ekart', ['ngRoute', 'appControllers'])

ekartApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/item-list.html',
			controller: 'HomeController'
		}).
		when('/:item_id', {
			templateUrl: 'partials/item-details.html',
			controller: 'ItemController'
		}).
		otherwise({
			redirectTo: '/'
		})
}]);