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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CandidateListingCtrl'
      })
      .when('/myMagicalBurrito', {
        templateUrl: 'views/burrito.html',
        controller: 'CandidateListingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
