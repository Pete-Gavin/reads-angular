'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('GenomicsTest', [
  'ngRoute',
  'ngMockE2E'
]);


app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/index'});
}]);
