angular.module('travel.service', [])
	.factory('TravelService', function($resource) {
		return $resource('/api');
	});
