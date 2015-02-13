'use strict';

/**
 * @ngdoc service
 * @name everyvoteTuresoApp.CandidatePicksService
 * @description
 * # CandidatePicksService
 * Service in the everyvoteTuresoApp.
 */
angular.module('everyvoteTuresoApp')
  .service('CandidatePicksService', function ($q) {
    // this.declareChoice = function(candidateId, stance) {
    //   if (stance === ) {
    //     return "Voting For";
    //   }
    //   if (stance === ) {
    //     return "Not Voting For";
    //   }
    // }
    this.getPicks = function() {
      var deferred = $q.defer();

      //
      // Put mock data in the object being resolved below.
      //

      deferred.resolve({
        name: 'Spring Election 2015',
        posts: [
          {
            name: 'President',
            candidateIds: [
              '547bd934bbdd16e9231c1630'
            ]
          },
          {
            name: 'Vice President',
            candidateIds: [
              '548e5d34ad8307d10c2f19fa'
            ]
          },
          {
            name: 'Treasurer',
            candidateIds: [
              '548e6056ad8307d10c2f1a06'
            ]
          },
          {
            name: 'Secretary',
            candidateIds: [
              '548e6130ad8307d10c2f1a0a'
            ]
          },
          {
            name: 'Senator - District 1',
            candidateIds: [
              '548e5fe5ad8307d10c2f1a04'
            ]
          }
        ]
      });

      return deferred.promise;
    };
  });
