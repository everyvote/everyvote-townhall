'use strict';

/**
 * @ngdoc directive
 * @name everyvoteTuresoApp.directive:evProfile
 * @description
 * # evProfile
 */
angular.module('everyvoteTuresoApp')
  .directive('evSidebarProfile', function () {
    return {
      scope: {
        candidateId: '='
      },
      controller: 'EvProfileCtrl',
      templateUrl: 'views/directives/evSidebarProfile.html',
      restrict: 'E'
    };
  });
