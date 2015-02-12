'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:EvprofilectrlCtrl
 * @description
 * # EvprofilectrlCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('EvProfileCtrl', function ($scope, CandidateService, $routeParams) {

    //
    // set $scope.isFocused if we are on the detail page.
    // should go in its own controller for the sidebar.
    //
    function checkIfOnDetailPage () {
      $scope.isFocused = ($routeParams.id === $scope.candidateId);
    }

    checkIfOnDetailPage();
    $scope.$on('$routeChangeSuccess', checkIfOnDetailPage);
    //
    //
    //

    // CandidatePicksService.declareChoice($scope.candidateId)
    //   .then(function (choice) {
    //     $scope.votingFor = false;
    //     $scope.notVotingFor = false;

    //     if (choice === "Voting For") {
    //       $scope.votingFor = true;
    //       $scope.notVotingFor = false;
    //     }
    //     if (choice === "Not Voting For") {
    //       $scope.notVotingFor = true;
    //       $scope.votingFor = false;
    //     }

    // })

    CandidateService.getCandidate($scope.candidateId)
      .then(function (candidate) {

        $scope.candidate = candidate;
        $scope.summary = candidate.summary;

        // make social link names lowercase to work with Font Awesome icons
        $scope.socialLinks = candidate.links;
        var socialLinks = candidate.links,
            i,
            isSupported = ['homepage', 'email', 'facebook', 'twitter',
                           'linkedin', 'reddit', 'github', 'instagram',
                           'bitbucket', 'googleplus', 'pinterest', 'skype',
                           'youtube', 'yelp', 'tumblr', 'stumbleupon',
                           'stackoverflow', 'vine'];

        for (i = 0; i < socialLinks.length; i++) {
            socialLinks[i].note = socialLinks[i].note.toLowerCase();

            // check if social link icon is supported by Font Awesome
            if (isSupported.indexOf(socialLinks[i].note) > -1) {
              socialLinks[i].isSupported = true;
            }
        }

        var stackoverflowPos = socialLinks.map(function(obj) {
          return obj.note;
        }).indexOf('stackoverflow');

        if (stackoverflowPos > -1) {
          socialLinks[stackoverflowPos].note = 'stack-overflow';
        }

        var googlePlusPos = socialLinks.map(function(obj) {
          return obj.note;
        }).indexOf('googleplus');

        if (googlePlusPos > -1) {
          socialLinks[googlePlusPos].note = 'google-plus';
        }

        var emailPos = socialLinks.map(function(obj) {
          return obj.note;
        }).indexOf('email');

        if (emailPos > -1) {
          socialLinks[emailPos].note = 'envelope';
        }

        // check if "homepage" is a link, then move to front of socialLinks array,
        // also convert socialLink.note to "home" for Font Awesome compatibility
        var homePos = socialLinks.map(function(obj) {
          return obj.note;
        }).indexOf('homepage');

        if (homePos > -1) {
          var homeObj = socialLinks.splice(homePos, 1);
          homeObj[0].note = 'home';
          socialLinks.splice(0, 0, homeObj[0]);
        }

        // remove socialLinks that are duplicate social media websites/methods
        // using the ___ shared by ___ on Stack Overflow - ___
        $scope.socialLinks = socialLinks.reduce(function(a,b){if(a.indexOf(b)<0){a.push(b);return a;}},[]);

        if ($scope.socialLinks.length > 4) {
          $scope.showMoreSocialIcon = true;
          $scope.displayedSocialLinks = socialLinks.slice(0,3);
        } else {
          $scope.showMoreSocialIcon = false;
          $scope.displayedSocialLinks = socialLinks.slice(0,4);
        }

        $scope.socialIconsAreDisplayed = false;

        $scope.toggleSocialIcons = function() {
          if ($scope.displayedSocialLinks.length <= 3) {
            $scope.displayedSocialLinks = $scope.socialLinks;
            $scope.socialIconsAreDisplayed = true;
          } else {
            $scope.displayedSocialLinks = $scope.socialLinks.slice(0,4);
            $scope.socialIconsAreDisplayed = false;
          }
        };

        $scope.votingFor = false;
        $scope.notVotingFor = false;

        $scope.toggleVotingFor = function() {
          $scope.votingFor = (! $scope.votingFor);
          if ($scope.notVotingFor === true) {
            $scope.notVotingFor = false;
          }
        };
        $scope.toggleNotVotingFor = function() {
          $scope.notVotingFor = (! $scope.notVotingFor);
          if ($scope.votingFor === true) {
            $scope.votingFor = false;
          }
        };

      });

  });
