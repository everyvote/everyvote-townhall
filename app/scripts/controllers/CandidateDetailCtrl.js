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
        $scope.fullname = candidate.name;
        $scope.description = candidate.summary;
      })

      // On error
      .catch(function () {
        $scope.notFound = true;
      });

  });
