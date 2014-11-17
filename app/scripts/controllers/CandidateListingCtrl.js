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
      {
        name: 'US Senate Seat!!!!!!!!!!',
        candidates: [], 
      },
      {
        name: '3rd Congressional District',
        candidates: [],
      },
      {
        name: '3rd Congressional District',
        candidates: [],
      },
      {
        name: '3rd Congressional District',
        candidates: [],
      }
    ];
    
  });
