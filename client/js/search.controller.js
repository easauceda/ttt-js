angular.module('search.controller', [])
	.controller('SearchController', function($scope, SearchService) {
		$scope.search = function() {
			SearchService.get({$number: $scope.number}, function(response) {				$scope.reminders = response;
			});
		};
	});
