angular.module('programApp').factory('programService', function ($http) {
	var service = {};

	service.getAllProgramBluePrints = function(){
		return $http.get('data/program_blueprints.json');
	}

	service.getAllProgramGoals = function(){
		return $http.get('data/goals.json');
	}

	return service;
});