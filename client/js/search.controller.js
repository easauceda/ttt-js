angular.module('search.controller', [])
	.controller('SearchController', function($scope, SearchService) {
		$scope.search = function() {
			SearchService.query({$number: $scope.number}, function(response) {
				$scope.reminders = response;
			});
		};
	});
