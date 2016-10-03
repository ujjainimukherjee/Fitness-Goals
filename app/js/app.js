'use strict';

var programApp = angular.module('programApp', [
  'ngRoute'   
]);

programApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/programs', {
        templateUrl: 'partials/program-blueprints.html',
        controller: 'programMainCtrl'
      }).      
      when('/detail/:guid', {
        templateUrl: 'partials/detail.html',
        controller: 'programDetailCtrl'
      }).
      otherwise({
        redirectTo: '/programs'
      });
     
  }]);
