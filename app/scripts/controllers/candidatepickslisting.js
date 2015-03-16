'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:CandidatePicksListingCtrl
 * @description
 * # CandidatePicksListingCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('CandidatePicksListingCtrl', function ($scope, ElectionService) {

    console.log('asdf');
    ElectionService.getElection({onlyMyPicks: true})
      .then(function (election) {

        console.log(election);
      });

  });
