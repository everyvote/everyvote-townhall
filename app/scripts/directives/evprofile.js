'use strict';

/**
 * @ngdoc directive
 * @name everyvoteTuresoApp.directive:evProfile
 * @description
 * # evProfile
 */
angular.module('everyvoteTuresoApp')
  .directive('evProfile', function () {
    return {
      templateUrl: 'views/directives/evProfile.html',
      restrict: 'E'
    };
  });
