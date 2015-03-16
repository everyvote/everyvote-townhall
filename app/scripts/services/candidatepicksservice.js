'use strict';

/**
 * @ngdoc service
 * @name everyvoteTuresoApp.CandidatePicksService
 * @description
 * # CandidatePicksService
 * Service in the everyvoteTuresoApp.
 */
angular.module('everyvoteTuresoApp')
  .service('CandidatePicksService', function ($q, storage) {

    var _getStorageKey = function (candidateId) {
      return 'candidatePick' + '-' + candidateId;
    };

    this.savePick = function (candidateId, stance) {
      var deferred = $q.defer();

      storage.set(_getStorageKey(candidateId), stance);

      var candidatePicks = storage.get('candidatePicks');
      if (!candidatePicks) {
        candidatePicks = '[]';
      }

      candidatePicks = JSON.parse(candidatePicks);

      if (stance === 'V') {
        candidatePicks.push((candidateId));
      } else {
        candidatePicks = _.without(candidatePicks, (candidateId));
      }

      candidatePicks = JSON.stringify(candidatePicks);
      storage.set('candidatePicks', candidatePicks);

      deferred.resolve(true);

      return deferred.promise;
    };

    this.getPick = function (candidateId) {

      var deferred = $q.defer();

      var pick = storage.get(_getStorageKey(candidateId));
      if (pick === null) {
        pick = 'U';
      }

      deferred.resolve(pick);

      return deferred.promise;
    };

    this.getPicks = function () {

      var deferred = $q.defer();

      var picks = storage.get('candidatePicks');
      if (!picks) {
        picks = [];
      }

      picks = JSON.parse(picks);

      deferred.resolve(picks);

      return deferred.promise;

    };

  });
