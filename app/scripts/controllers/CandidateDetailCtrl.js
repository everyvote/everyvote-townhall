'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:CandidatedetailCtrl
 * @description
 * # CandidatedetailCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('CandidateDetailCtrl', function ($scope, $routeParams,
    CandidateService, ElectionService) {

    $scope.candidateId = $routeParams.id;

    ElectionService.getNextCandidateId($scope.candidateId)
      .then(function (id) {
        $scope.nextCandidateId = id;
      });

    ElectionService.getPreviousCandidateId($scope.candidateId)
      .then(function (id) {
        $scope.prevCandidateId = id;
      });

    CandidateService
      .getCandidate($routeParams.id)
      .then(function (candidate) {
        $scope.candidate = {};
        $scope.candidate.name = candidate.name;
        $scope.candidate.summary = candidate.summary;
      })

      // On error
      .catch(function () {
        $scope.notFound = true;
      });

  });
