'use strict';

/**
 * @ngdoc directive
 * @name everyvoteTuresoApp.directive:CandidatePickWidget
 * @description
 * # CandidatePickWidget
 */
angular.module('everyvoteTuresoApp')
  .directive('candidatePickWidget', function () {
    return {
      scope: {
        candidateId: '='
      },
      controller: 'CandidatePickWidgetController',
      templateUrl: 'views/directives/candidatePickWidget.html',
      restrict: 'E'
    };
  });
