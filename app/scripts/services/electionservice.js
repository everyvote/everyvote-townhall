'use strict';

/**
 * @ngdoc service
 * @name everyvoteTuresoApp.ElectionService
 * @description
 * # ElectionService
 * Service in the everyvoteTuresoApp.
 */
angular.module('everyvoteTuresoApp')
  .service('ElectionService', function ($q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getElection = function () {

      var deferred = $q.defer();

      //
      // Put mock data in the object being resolved below.
      //

      deferred.resolve({
        name: 'Test Election 2015',
        posts: [
          {
            name: 'President',
            candidateIds: [
              'vince-s114',
              '547bd934bbdd16e9231c1630'
            ]
          },
          {
            name: 'Vice President',
            candidateIds: [
              '547bd934bbdd16e9231c1630'
            ]
          }
        ]
      });

      return deferred.promise;
    };

    this.getNextCandidate = function (id) {

      var deferred = $q.defer();

      this.getElection().then(function (election) {

        /*
        var allCandidates = _.reduce(election.posts, function (memo, post) {
          return memo.concat(post.candidateIds);
        }, []);

        var indexOfCurrentCandidate = _.indexOf(allCandidates, id);
        var indexOfNextCandidate = indexOfCurrentCandidate + 1;

        var nextCandidateId = allCandidates[indexOfNextCandidate];
        */
        deferred.resolve('dummyId');
      });

      return deferred.promise;
    };

  });
