'use strict';

/**
 * @ngdoc directive
 * @name everyvoteTuresoApp.directive:evProfileFolder
 * @description
 * # evProfileFolder
 */
angular.module('everyvoteTuresoApp')
  .directive('evSidebarProfileFolder', function () {
    return {
      scope: {
        post: '='
      },
      templateUrl: 'views/directives/evSidebarProfileFolder.html',
      restrict: 'E',
      controller: function ($scope) {
        $scope.sidebarFolderExpanded = true;

        $scope.toggleSidebarFolder = function() {
          $scope.sidebarFolderExpanded = (! $scope.sidebarFolderExpanded);

        }

        $scope.post.totalCandidates = $scope.post.candidateIds.length;
      }
    }
  });
