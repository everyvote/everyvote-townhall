'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:CandidateListingCtrl
 * @description
 * # CandidateListingCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('CandidateListingCtrl', function ($scope) {
    $scope.posts = [
      'US Senate Seat',
      '3rd Congressional District'
    ];
  });
