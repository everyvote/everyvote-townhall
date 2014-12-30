'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:EvprofilectrlCtrl
 * @description
 * # EvprofilectrlCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('EvProfileCtrl', function ($scope, CandidateService) {

    CandidateService.getCandidate($scope.candidateId)
      .then(function (candidate) {
        $scope.candidate = candidate;
        $scope.summary = candidate.summary;
        $scope.truncSummary = candidate.summary.substring(0, 220);
        if ($scope.summary.length > 220) {
          $scope.truncSummary = $scope.truncSummary + "...";
        }
        $scope.fullSummary = false;

        // make social link names lowercase to work with Font Awesome icons
        $scope.socialLinks = candidate.links;
        var socialLinks = candidate.links,
            i,
            isSupported = ["facebook", "twitter", "linkedin", "homepage"];

        for (i = 0; i < socialLinks.length; i++) {
            socialLinks[i].note = socialLinks[i].note.toLowerCase();

            // check if social link icon is supported by Font Awesome
            if (isSupported.indexOf(socialLinks[i].note) > -1) {
              socialLinks[i].isSupported = true;
            }
        }

        // check if "homepage" is a link, then move to front of socialLinks array,
        // also convert socialLink.note to "home" for Font Awesome compatibility
        var homePos = socialLinks.map(function(obj) {
          return obj.note;
        }).indexOf("homepage");


        if (homePos > -1) {
          var homeObj = socialLinks.splice(homePos, 1);
          homeObj[0].note = "home";
          socialLinks.splice(0, 0, homeObj[0]);
        }

        // remove socialLinks that are duplicate social media websites/methods
        // using the ___ shared by ___ on Stack Overflow - ___
        console.log($scope.socialLinks);
        $scope.socialLinks = socialLinks.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
        console.log($scope.socialLinks);
        $scope.displayedSocialLinks = socialLinks.slice(0,3);

        if ($scope.socialLinks.length > 3) {
          $scope.showMoreSocialIcon = true;
        } else {
          $scope.showMoreSocialIcon = false;
        }

        $scope.socialIconsAreDisplayed = false;

        $scope.toggleSocialIcons = function() {
          if ($scope.displayedSocialLinks.length <= 3) {
            $scope.displayedSocialLinks = $scope.socialLinks;
            $scope.socialIconsAreDisplayed = true;
          } else {
            $scope.displayedSocialLinks = $scope.socialLinks.slice(0,3);
            $scope.socialIconsAreDisplayed = false;
          }
        }

        $scope.toggleSummary = function() {
          $scope.fullSummary = (! $scope.fullSummary);
        }

      });

  });
