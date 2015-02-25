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
  .service('ElectionModelOrchestrator', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.groupByPost = function (election) {

      return _.transform(election.candidates, function (result, val) {


        var array = result[val.post_id] = (result[val.post_id] || []);

        array.push(val.person_id);

        return result;

      }, {});
    };
    
  });
