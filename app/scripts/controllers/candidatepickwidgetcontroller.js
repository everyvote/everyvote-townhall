'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:CandidatepickwidgetcontrollerCtrl
 * @description
 * # CandidatepickwidgetcontrollerCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('CandidatePickWidgetController', function ($scope, CandidatePicksService) {

    var init = function () {
      // Quit if there's no candidateId
      if(!$scope.candidateId) {
        return;
      }

      CandidatePicksService.getPick($scope.candidateId)
        .then(function (pick) {

          if (pick === 'V') {

            $scope.notVotingForFlag = false;
            $scope.votingForFlag = true;

          } else if (pick === 'N') {

            $scope.notVotingForFlag = true;
            $scope.votingForFlag = false;

          } else {
            $scope.notVotingForFlag = false;
            $scope.votingForFlag = false;
          }
      });

    };

    // Make sure we reinit if the candidateId changes
    $scope.$watch('candidateId', function (oldVal, newVal) {

      // Only reinit when it really changed.
      // if (oldVal !== newVal) {
        init();
      // }
    });

    init();

    ////
    // Scope methods
    ////

    $scope.setNotVotingFor = function () {

      if ($scope.notVotingForFlag === true) {

        CandidatePicksService.savePick($scope.candidateId, 'U')
          .then(function () {
            $scope.notVotingForFlag = false;
          });

      } else {

        CandidatePicksService.savePick($scope.candidateId, 'N')
          .then(function () {
            $scope.notVotingForFlag = true;
            $scope.votingForFlag = false;
          });
      }

    };

    $scope.setVotingFor = function () {

      if ($scope.votingForFlag === true) {

        CandidatePicksService.savePick($scope.candidateId, 'U')
          .then(function () {
            $scope.votingForFlag = false;
          });

      } else {

        CandidatePicksService.savePick($scope.candidateId, 'V')
          .then(function () {
            $scope.votingForFlag = true;
            $scope.notVotingForFlag = false;
          });

      }


    };

  });
