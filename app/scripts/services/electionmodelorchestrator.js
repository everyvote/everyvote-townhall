/* jshint camelcase: false */

'use strict';

/**
 * @ngdoc service
 * @name everyvoteTuresoApp.ElectionModelOrchestrator
 * @description
 * # ElectionModelOrchestrator
 * Service in the everyvoteTuresoApp.
 */
angular.module('everyvoteTuresoApp')
  .service('ElectionModelOrchestrator', function (CandidatePicksService, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.groupByPost = function (candidates) {

      return _.transform(candidates, function (result, val) {

        var array = result[val.post_id] = (result[val.post_id] || []);

        array.push(val.person_id);

        return result;

      }, {});
    };

    this.filterOnlyPicks = function (candidates) {

      var deferred = $q.defer();

      CandidatePicksService.getPicks()
        .then(function (picks) {

          var filtered = _.filter(candidates, function (candidate) {
            return _.contains(picks, candidate.person_id);
          });

          deferred.resolve(filtered);

        });

      return deferred.promise;

    };

  });
