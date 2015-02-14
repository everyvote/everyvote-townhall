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
      storage.set(_getStorageKey(candidateId), stance);
    };

    this.getPick = function (candidateId) {
      var pick = storage.get(_getStorageKey(candidateId));
      console.log(_getStorageKey(candidateId));
      if (pick === null) {
        pick = 'U';
      }

      return pick;
    };

  });
