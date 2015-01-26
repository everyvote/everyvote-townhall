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

              '548e5dd2ad8307d10c2f19fc',
              '548e4fa4ad8307d10c2f19f4',
              '547bd934bbdd16e9231c1630',
              '548e5c3fad8307d10c2f19f8',
              '548e5e35ad8307d10c2f19fe'
            ]
          },
          {
            name: 'Vice President',
            candidateIds: [
              '548e5026ad8307d10c2f19f6',
              '548e5d34ad8307d10c2f19fa',
              '548e4bbcad8307d10c2f19ec'
            ]
          },
          {
            name: 'Treasurer',
            candidateIds: [
              '548e5ee9ad8307d10c2f1a02',
              '548e4a16ad8307d10c2f19ea',
              '548e6056ad8307d10c2f1a06',
              '548e4c89ad8307d10c2f19ee'
            ]
          },
          {
            name: 'Secretary',
            candidateIds: [
              '548e4cf5ad8307d10c2f19f0',
              '548e609dad8307d10c2f1a08',
              '548e6130ad8307d10c2f1a0a',
              '548e5eb1ad8307d10c2f1a00'
            ]
          },
          {
            name: 'Senator - District 1',
            candidateIds: [
              '548e5fe5ad8307d10c2f1a04',
              '548e4eeaad8307d10c2f19f2',
            ]
          }
        ]
      });

      return deferred.promise;
    };

    // this.getNextCandidate = function (id) {

    //   var deferred = $q.defer();

    //   this.getElection().then(function (election) {

    //     var allCandidates = _.reduce(election.posts, function (memo, post) {
    //       return memo.concat(post.candidateIds);
    //     }, []);

    //     var indexOfCurrentCandidate = _.indexOf(allCandidates, id);
    //     var indexOfNextCandidate = indexOfCurrentCandidate + 1;

    //     var nextCandidateId = allCandidates[indexOfNextCandidate];

    //     deferred.resolve('dummyId');
    //   });

    //   return deferred.promise;
    // };

  });
