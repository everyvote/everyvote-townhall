/* jshint camelcase: false */
'use strict';

/**
 * @ngdoc service
 * @name everyvoteTuresoApp.ElectionService
 * @description
 * # ElectionService
 * Service in the everyvoteTuresoApp.
 */
angular.module('everyvoteTuresoApp')
  .service('ElectionService', function (ORGANIZATION_ID, $q, PopIt, ElectionModelOrchestrator) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this;

    this.getElection = function () {

      var postGroups,
          viewModel = {
            name: undefined,
            posts: []
          },
          postOrder,
          deferred = $q.defer();

      //
      // Put mock data in the object being resolved below.
      //

      PopIt.getModel('organization', ORGANIZATION_ID)

        .then(function (organization) {
          // Resolve our Posts
          var postPromises = {};

          // Store things from our organization object for later.
          organization = organization.result;
          postOrder = organization.next_election.post_order;
          viewModel.name = organization.next_election.name;

          // Group candidates by post.
          postGroups = ElectionModelOrchestrator
            .groupByPost(organization.next_election);

          // Get the all the Post models.
          _.forEach(postGroups, function (candidates, key) {
            postPromises[key] = PopIt.getModel('post', key);
          });

          return $q.all(postPromises);

        })

        .then(function (postModels) {

          // Now that we have the Post models,
          // Lets build up the Election ViewModel
          _.forEach(postOrder, function (postId) {

            var post = postModels[postId].result;

            viewModel.posts.push({
              name: post.label,
              candidateIds: postGroups[postId]
            });

          });

          deferred.resolve(viewModel);
        });

      return deferred.promise;
    };


    this.getNextCandidateId = function (id) {

       var deferred = $q.defer();

       this.getElection()
        .then(function (electionViewModel) {

          var candidates = self._concatCandidates(electionViewModel),
              idx = _.indexOf(candidates, id);

          if(idx === candidates.length-1) {
            deferred.resolve(candidates[0]);
          } else {
            deferred.resolve(candidates[idx+1]);
          }

        });

      return deferred.promise;
    };

    this.getPreviousCandidateId = function (id) {

      var deferred = $q.defer();

      this.getElection()
        .then(function (electionViewModel) {

          var candidates = self._concatCandidates(electionViewModel),
              idx = _.indexOf(candidates, id);

          if(idx === 0) {
            deferred.resolve(candidates[candidates.length-1]);
          } else {
            deferred.resolve(candidates[idx-1]);
          }

        });

      return deferred.promise;
    };

    this._concatCandidates = function (electionViewModel) {
      var candidates = [];

      for(var e = 0; e < electionViewModel.posts.length; e++) {
        var post = electionViewModel.posts[e];
        candidates = candidates.concat(post.candidateIds);
      }

      return candidates;
    };

  });
