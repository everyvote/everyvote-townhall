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
    'truncate',
    'angularLocalStorage',
    'angular-data.DSCacheFactory'
  ])
  .constant('POPIT_API', 'https://everyvote-demo.popit.mysociety.org/api/v0.1')

  .factory('CandidateCache', function (DSCacheFactory) {
    return DSCacheFactory.createCache('CandidateCache', {
      storageMode: 'localStorage'
    });
  })

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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/mycandidates', {
        templateUrl: 'views/candidatePicks.html',
        controller: 'CandidatePicksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(false);

  }]);
