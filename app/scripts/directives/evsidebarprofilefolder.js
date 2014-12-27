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
      restrict: 'E'
    };
  });
