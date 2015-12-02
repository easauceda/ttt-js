angular.module('app', ['ngRoute', 'ngResource', 'travel.controller', 'travel.service', 'search.service', 'search.controller'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	  $routeProvider
		  .when('/', {
			  templateUrl: 'views/travel.html',
			  controller: 'TravelController'
		  })
	  	  .when('/search', {
				  	templateUrl: 'views/search.html',
				  	controller: 'SearchController'
		  });
	$locationProvider.html5Mode(true);
  }]);
