'use strict';

/**
 * @ngdoc directive
 * @name everyvoteTuresoApp.directive:evTruncatedText
 * @description
 * # evTruncatedText
 */
angular.module('everyvoteTuresoApp')
  .directive('evTruncatedText', function () {
    return {
      scope: {
        text: '=',
        wordLimit: '@'
      },
      templateUrl: 'views/directives/evTruncatedText.html',
      restrict: 'E',
      controller: function ($scope) {

        // If the text we recieve is undefined
        // then assume it's a blank string.
        $scope.text = $scope.text || '';

        // Truncate by default
        $scope.truncate = true;

        $scope.toggle = function () {
          $scope.truncate = !$scope.truncate;
        };

        $scope.$watch('text', function() {
          console.log($scope.text);
          var totalWords = $scope.text.split(/\s+/).length;
          console.log(totalWords);
        });

      }
    };
  });
