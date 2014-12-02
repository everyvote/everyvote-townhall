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
        candidates: [
          {
            name: 'Sojourner Truth',
            profile_picture: 'images/ppl/sojournertruth.jpg'
          },
          {
            name: 'Frederick Douglass',
            profile_picture: 'images/ppl/frederickdouglass.jpg'
          },
          {
            name: 'Jane Addams',
            profile_picture: 'images/ppl/janeaddams.jpg'
          },
          {
            name: 'Thomas Paine',
            profile_picture: 'images/ppl/thomaspaine.jpg'
          }
        ],
      },
      {
        name: 'Vice-President',
        candidates: [
          {
            name: 'Abraham Lincoln',
            profile_picture: 'images/ppl/abrahamlincoln.jpg'
          },
          {
            name: 'Susan B. Anthony',
            profile_picture: 'images/ppl/susanbanthony.jpg'
          },
          {
            name: 'Denis Diderot',
            profile_picture: 'images/ppl/denisdiderot.jpg'
          },
          {
            name: 'Booker T. Washington',
            profile_picture: 'images/ppl/bookertwashington.jpg'
          }
        ],
      },
      {
        name: 'Treasurer',
        candidates: [
          {
            name: 'Buckminster Fuller',
            profile_picture: 'images/ppl/buckminsterfuller.jpg'
          },
          {
            name: 'Harriet Tubman',
            profile_picture: 'images/ppl/harriettubman.jpg'
          },
          {
            name: 'James Baldwin',
            profile_picture: 'images/ppl/jamesbaldwin.jpg'
          },
          {
            name: 'Albert Einstein',
            profile_picture: 'images/ppl/alberteinstein.jpg'
          }
        ],
      },
      {
        name: 'Secretary',
        candidates: [
          {
            name: 'Marshall McLuhan',
            profile_picture: 'images/ppl/marshallmcluhan.jpg'
          },
          {
            name: 'Mark Twain',
            profile_picture: 'images/ppl/marktwain.jpg'
          },
          {
            name: 'Martin Luther King Jr.',
            profile_picture: 'images/ppl/martinlutherkingjr.jpg'
          },
          {
            name: 'Harriet Beecher Stowe',
            profile_picture: 'images/ppl/harrietbeecherstowe.jpg'
          }
        ],
      },
    ];
  });
