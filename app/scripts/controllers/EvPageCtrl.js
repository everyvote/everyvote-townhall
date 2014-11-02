'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:EvbodyCtrl
 * @description
 * # EvbodyCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('EvPageCtrl', function ($scope) {
    
    $scope.zone = 'Town, State';
    $scope.electionName = 'November 2014 Election Season';
    
  });
