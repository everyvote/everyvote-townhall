'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:EvbodyCtrl
 * @description
 * # EvbodyCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('EvPageCtrl', function ($scope, $location) {

    $scope.zone = 'EveryVote University > Student Association';
    $scope.electionName = 'Spring 2015 Semester';
    $scope.summary = 'Learn about, connect with, and share your opinion on all of your candidates for office from one convenient page. Make a list of the candidates you are voting for in your next election, then share your My Candidates list to other social networks. EveryVote is free and open source, financially transparent, 100% donation-sustained, and is working to be compliant with international open government data specifications. EveryVote will never have advertisements, will never sell your data, and will never collect a fee from candidates or users.';

    // Hide by default
    $scope.showSummary = false;

    $scope.toggle = function () {
      $scope.showSummary = !$scope.showSummary;
    };

    // Add y-offset to make anchor appear below fixed nav
    if ($location.hash() !== '') {
      setTimeout(function() {
        window.scrollTo(window.scrollX, window.scrollY - 90);
      }, 500);
    }

    // why doesn't this work? i thought i could use angular.element(window) instead of setTimeout...
    // if ($location.hash() !== '') {
    //   angular.element(window).ready(function () {
    //       window.scrollTo(window.scrollX, window.scrollY - 90);
    //   });
    // }

  });
