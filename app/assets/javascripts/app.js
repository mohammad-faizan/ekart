var ekartApp = angular.module('Ekart', 
	[
		'ngRoute',
		'appControllers',
		'availabilityFilter',
		'itemServices'
	]
);

ekartApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/item-list.html',
			controller: 'HomeController'
		}).
		when('/:id', {
			templateUrl: 'partials/item-details.html',
			controller: 'ItemController'
		}).
		when('/item/new', {
			templateUrl: 'partials/item-form.html',
			controller: 'NewItemController'
		}).
		otherwise({
			redirectTo: '/'
		})
}]);