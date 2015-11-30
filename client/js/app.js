angular.module('app', ['ngRoute', 'ngResource'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	  $routeProvider
		  .when('/', {
			  templateUrl: 'views/travel.html',
			  controller: 'TravelController'
		  });
	  $locationProvider.html5Mode(true);
  }]);
