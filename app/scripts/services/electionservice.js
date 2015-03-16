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

    this.getElection = function (params) {
      params = params || {};

      var
          postGroups,
          viewModel = {
            name: undefined,
            posts: []
          },
          postOrder,
          onlyMyPicks = params.onlyMyPicks,
          deferred = $q.defer();

      //
      // Put mock data in the object being resolved below.
      //

      PopIt.getModel('organization', ORGANIZATION_ID)

        .then(function (organization) {

          var deferred = $q.defer();

          // Store things from our organization object for later.
          organization = organization.result;
          postOrder = organization.next_election.post_order;
          viewModel.name = organization.next_election.name;

          var candidates = organization.next_election.candidates;

          // Filter the candidates
          if(onlyMyPicks) {

            candidates = ElectionModelOrchestrator
              .filterOnlyPicks(candidates);

            deferred.resolve(candidates);

          } else {
            deferred.resolve(candidates);
          }

          return deferred.promise;

        })

        .then(function (candidates) {

          // Resolve our Posts
          var postPromises = {};

          // Group candidates by post.
          postGroups = ElectionModelOrchestrator
          .groupByPost(candidates);

          // Get the all the Post models.
          _.forEach(postGroups, function (postOrder, key) {
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

    this.getPostIdByPersonId = function (personId) {
      var deferred = $q.defer();

      PopIt.getModel('organization', ORGANIZATION_ID)
        .then(function (organization) {

          var election = organization.result.next_election,

          candidate = _.find(election.candidates, function (candidacy) {
            return candidacy.person_id === personId;
          });

          if (candidate) {
            deferred.resolve(candidate.post_id);
          } else {
            deferred.reject();
          }

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
