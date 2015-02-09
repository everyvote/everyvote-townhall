'use strict';

/**
 * @ngdoc overview
 * @name everyvoteTuresoApp
 * @description
 * # everyvoteTuresoApp
 *
 * Main module of the application.
 */
angular
  .module('everyvoteTuresoApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'everyvoteFilters',
    'truncate'
  ])
  .constant('POPIT_API', 'https://everyvote-demo.popit.mysociety.org/api/v0.1')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/candidateListing.html',
        controller: 'CandidateListingCtrl'
      })
      .when('/candidates/:id', {
        templateUrl: 'views/candidateDetail.html',
        controller: 'CandidateDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(false);

  }]);