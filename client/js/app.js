angular.module('app', ['ngRoute', 'ngResource', 'travel.controller', 'travel.service'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	  $routeProvider
		  .when('/', {
			  templateUrl: 'views/travel.html',
			  controller: 'TravelController'
		  });
	  $locationProvider.html5Mode(true);
  }]);
