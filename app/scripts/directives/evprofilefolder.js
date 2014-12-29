'use strict';

/**
 * @ngdoc directive
 * @name everyvoteTuresoApp.directive:evProfileFolder
 * @description
 * # evProfileFolder
 */
angular.module('everyvoteTuresoApp')
  .directive('evProfileFolder', function () {
    return {
      scope: {
        post: '='
      },
      templateUrl: 'views/directives/evProfileFolder.html',
      restrict: 'E',
      controller: function ($scope) {
        $scope.folderExpanded = true;

        $scope.toggleFolder = function() {
          $scope.folderExpanded = (! $scope.folderExpanded);
        }

        $scope.post.totalCandidates = $scope.post.candidateIds.length;
      }
    };
  });
