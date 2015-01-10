'use strict';

/**
 * @ngdoc directive
 * @name everyvoteTuresoApp.directive:evProfile
 * @description
 * # evProfile
 */
angular.module('everyvoteTuresoApp')
  .directive('evProfileListing', function () {
    return {
      scope: {
        candidateId: '='
      },
      controller: 'EvProfileCtrl',
      templateUrl: 'views/directives/evProfileListing.html',
      restrict: 'E'
    };
  });
