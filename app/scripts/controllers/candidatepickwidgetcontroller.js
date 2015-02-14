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

    // INIT
    $scope.$watch('candidateId', function () {

      var pick = CandidatePicksService.getPick($scope.candidateId);

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


    ////

    $scope.setNotVotingFor = function () {

      if ($scope.notVotingForFlag === true) {

        CandidatePicksService.savePick($scope.candidateId, 'U');
        $scope.notVotingForFlag = false;

      } else {

        CandidatePicksService.savePick($scope.candidateId, 'N');

        $scope.notVotingForFlag = true;
        $scope.votingForFlag = false;
      }

    };

    $scope.setVotingFor = function () {

      if ($scope.votingForFlag === true) {

        CandidatePicksService.savePick($scope.candidateId, 'U');
        $scope.votingForFlag = false;

      } else {

        CandidatePicksService.savePick($scope.candidateId, 'V');

        $scope.votingForFlag = true;
        $scope.notVotingForFlag = false;
      }


    };

  });
