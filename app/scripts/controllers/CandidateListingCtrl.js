'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:CandidateListingCtrl
 * @description
 * # CandidateListingCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('CandidateListingCtrl', function ($scope, ElectionService) {

    ElectionService.getElection()
      .then(function (election) {
        $scope.posts = election.posts;
      });

  });
