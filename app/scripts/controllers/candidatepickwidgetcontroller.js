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
    };

    $scope.$watch('candidateId', init);

    init();


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
