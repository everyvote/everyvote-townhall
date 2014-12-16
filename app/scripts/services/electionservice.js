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

  });
