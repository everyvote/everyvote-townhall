'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:CandidatePicksCtrl
 * @description
 * # CandidatePicksCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('CandidatePicksCtrl', function ($scope, ElectionService) {

    ElectionService.getElection()
      .then(function (election) {
        $scope.posts = election.posts;
      });

    // CandidatePicksService.getPicks()
    //   .then(function (picks) {
    //     $scope.posts = picks.posts;
    //   });

  });
