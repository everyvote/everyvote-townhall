'use strict';

/**
 * @ngdoc service
 * @name everyvoteTuresoApp.CandidateService
 * @description
 * # CandidateService
 * Service in the everyvoteTuresoApp.
 */
angular.module('everyvoteTuresoApp')
  .service('CandidateService', function ($q, $http, POPIT_API, PopIt) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getCandidate = function (id) {

      var deferred = $q.defer();

      PopIt.getModel('person', id)
        .then(function (person) {
          deferred.resolve(person.result);
        });

      return deferred.promise;
    };

  });
