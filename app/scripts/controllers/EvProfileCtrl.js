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
            $scope.socialLinks[i].note = socialLinks[i].note.toLowerCase();
            // check if social link icon is supported by Font Awesome
            console.log(i);

            if (isSupported.indexOf($scope.socialLinks[i].note) > -1) {
              console.log($scope.socialLinks[i].note);
              console.log(i);
              $scope.socialLinks[i].isSupported = true;
            }
        }

        // check if "homepage" is a link, then move to front of socialLinks array,
        // also convert socialLink.note to "home" for Font Awesome compatibility
        var homePos = $scope.socialLinks.map(function(obj) {
          return obj.note;
        }).indexOf("homepage");


        if (homePos > -1) {
          var homeObj = $scope.socialLinks.splice(homePos, 1);
          homeObj[0].note = "home";
          $scope.socialLinks.splice(0, 0, homeObj[0]);
        }

        $scope.toggleSummary = function() {
          $scope.fullSummary = (! $scope.fullSummary);
        }

      });

  });
