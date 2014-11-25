'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:CandidateListingCtrl
 * @description
 * # CandidateListingCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('CandidateListingCtrl', function ($scope) {
    
    $scope.posts = [
      {
        name: 'President',
        candidates: ['Sojourner Truth', 'Frederick Douglass', 'Jane Addams', 'Thomas Paine'], 
      },
      {
        name: 'Vice-President',
        candidates: ['Abraham Lincoln', 'Susan B. Anthony', 'Denis Diderot', 'Booker T. Washington'],
      },
      {
        name: 'Treasurer',
        candidates: ['Buckminster Fuller', 'Harriet Tubman', 'James Baldwin', 'Albert Einstein'],
      },
      {
        name: 'Secretary',
        candidates: ['Marshall McLuhan', 'Mark Twain', 'Martin Luther King Jr.', 'Harriet Beecher Stowe'],
      }
    ];
    
  });
