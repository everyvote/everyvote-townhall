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
    CandidateService) {

    CandidateService
      .getCandidate($routeParams.id)
      .then(function (candidate) {
        $scope.candidateId = $routeParams.id;
        console.log($scope.candidateId);
        console.log("asdf");
        $scope.fullname = candidate.name;
        console.log($scope.fullname);
        $scope.summary = candidate.summary;
      })

      // On error
      .catch(function () {
        $scope.notFound = true;
      });

  });
