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
      scope: {
        candidateId: '='
      },
      controller: 'EvProfileCtrl',
      templateUrl: 'views/directives/evProfile.html',
      restrict: 'E'
    };
  });
