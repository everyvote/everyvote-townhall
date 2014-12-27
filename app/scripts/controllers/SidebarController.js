'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:SidebarController
 * @description
 * # SidebarController
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('SidebarController', function ($scope, ElectionService) {

    ElectionService.getElection()
      .then(function (election) {
        $scope.posts = election.posts;
      });
      
  });
