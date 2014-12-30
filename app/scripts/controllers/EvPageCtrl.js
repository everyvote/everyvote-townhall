'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:EvbodyCtrl
 * @description
 * # EvbodyCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('EvPageCtrl', function ($scope) {

    $scope.zone = 'EveryVote University > Student Association';
    $scope.electionName = 'Spring 2015 Semester';
    $scope.summary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat elit eu sodales bibendum. Pellentesque nibh libero, mattis sed vehicula at, tincidunt blandit mauris. Integer pellentesque dapibus nisi, accumsan fermentum metus tristique eget. Nulla non varius libero, vitae bibendum odio. Nullam quis malesuada erat. Cras quam justo, hendrerit sit amet turpis sit amet, sollicitudin consectetur nulla. Nulla posuere felis nec turpis auctor, vitae interdum velit eleifend. Curabitur rhoncus tincidunt dolor, ac condimentum tellus posuere vel. Cras mollis mollis urna, a molestie mi posuere eget. Vivamus id consectetur ipsum, a condimentum magna. Phasellus ac porta justo, et pharetra purus. Vestibulum eget nisl blandit, pretium lorem et, lacinia leo. Nulla at purus mi. Praesent volutpat leo nec gravida commodo.';
    $scope.truncSummary = $scope.summary.substring(0,500);
    if ($scope.summary.length > 500) {
      $scope.truncSummary = $scope.truncSummary + "...";
      $scope.truncSummaryIsLessThanSummary = true;
    } else {
      $scope.truncSummaryIsLessThanSummary = false;
    }

    $scope.fullSummary = false;

    $scope.toggleSummary = function() {
      $scope.fullSummary = (! $scope.fullSummary);
    }

  });
