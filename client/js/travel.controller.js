angular.module('travel.controller', [])
	.controller('TravelController', function($scope, TravelService) {
		$scope.add = function() {
			TravelService.query({
				origin: $scope.origin,
				destination: $scope.destination,
				phone: $scope.phone,
				carrier: $scope.carrier,
				time: $scope.time,
				monday: $scope.monday,
				tuesday: $scope.tuesday,
				wednesday: $scope.wednesday,
				thursday: $scope.thursday,
				friday: $scope.friday,
				saturday: $scope.saturday,
				sunday: $scope.sunday
				});
		};
	});
