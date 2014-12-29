'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:EvprofilectrlCtrl
 * @description
 * # EvprofilectrlCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('EvProfileCtrl', function ($scope, CandidateService) {

    CandidateService.getCandidate($scope.candidateId)
      .then(function (candidate) {
        $scope.candidate = candidate;
        $scope.summary = candidate.summary;
        $scope.truncSummary = candidate.summary.substring(0, 220);
        $scope.fullSummary = false;

        $scope.toggleSummary = function() {
          $scope.fullSummary = (! $scope.fullSummary);
        }

      });

  });
