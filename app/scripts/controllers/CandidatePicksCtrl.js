'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:CandidatePicksCtrl
 * @description
 * # CandidatePicksCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('CandidatePicksCtrl', function ($scope, CandidatePicksService) {

    CandidatePicksService.getPicks() /* use something to retrieve person's picks list */
      .then(function (picks) {
        $scope.posts = picks.posts;
      });

  });
