'use strict';

/**
 * @ngdoc directive
 * @name everyvoteTuresoApp.directive:evProfile
 * @description
 * # evProfile
 */
angular.module('everyvoteTuresoApp')
  .directive('evProfileDetail', function () {
    return {
      scope: {
        candidateId: '='
      },
      controller: 'EvProfileCtrl',
      templateUrl: 'views/directives/evProfileDetail.html',
      restrict: 'E'
    };
  });
