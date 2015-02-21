'use strict';

/**
 * @ngdoc service
 * @name everyvoteTuresoApp.CandidateService
 * @description
 * # CandidateService
 * Service in the everyvoteTuresoApp.
 */
angular.module('everyvoteTuresoApp')
  .service('CandidateService', function ($q, $http, POPIT_API, CandidateCache) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getCandidate = function (id) {

      var deferred = $q.defer();

      var cachedCandidate = CandidateCache.get(id);

      if(cachedCandidate) {
        deferred.resolve(cachedCandidate);
        return deferred.promise;
      }

      $http.get(POPIT_API + '/persons/' + id)
        .success(function (data) {

          // We're going to do something to the data here
          // For now we're just gonna just shift the data from popit
          var person = data.result;

          CandidateCache.put(id, person);

          deferred.resolve(person);
        })

        .error(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    };

  });
