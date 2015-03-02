'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:PagechangewidgetCtrl
 * @description
 * # PagechangewidgetCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('PagechangewidgetCtrl', function ($scope, $route) {
    function getCurrentPageName() {
      $scope.currentPageName = $route.current.$$route.name;
    }

    $scope.$on('$routeChangeSuccess', getCurrentPageName);
  });
