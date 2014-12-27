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
    'ngRoute'
  ])
  .constant('POPIT_API', 'http://localhost:9000/api/popit/v0.1')
  .config(function ($routeProvider) {
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
  });
