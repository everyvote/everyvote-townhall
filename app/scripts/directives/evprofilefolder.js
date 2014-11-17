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
        name: '='
      },
      templateUrl: 'views/directives/evProfileFolder.html',
      restrict: 'E'
    };
  });
