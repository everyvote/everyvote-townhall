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
    $scope.summary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat elit eu sodales bibendum. Pellentesque nibh libero, mattis sed vehicula at, tincidunt blandit mauris. Integer pellentesque dapibus nisi, accumsan fermentum metus tristique eget. Nulla non varius libero, vitae bibendum odio. Nullam quis malesuada erat. Cras quam justo, hendrerit sit amet turpis sit amet, sollicitudin consectetur nulla. Nulla posuere felis nec turpis auctor, vitae interdum velit eleifend. Curabitur rhoncus tincidunt dolor, ac condimentum tellus posuere vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat elit eu sodales bibendum. Pellentesque nibh libero, mattis sed vehicula at, tincidunt blandit mauris. Integer pellentesque dapibus nisi, accumsan fermentum metus tristique eget. Nulla non varius libero, vitae bibendum odio. Nullam quis malesuada erat. Cras quam justo, hendrerit sit amet turpis sit amet, sollicitudin consectetur nulla. Nulla posuere felis nec turpis auctor, vitae interdum velit eleifend. Curabitur rhoncus tincidunt dolor, ac condimentum tellus posuere vel.';

    // Hide by default
    $scope.showSummary = false;

    $scope.toggle = function () {
      $scope.showSummary = !$scope.showSummary;
    };

  });
