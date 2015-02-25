/* jshint camelcase: false */
'use strict';

describe('Service: ElectionService', function () {

  var testOrganization = {
    result: {
      some_other_stuff: '',
      next_election: {
        name: 'Test Election 2015',
        post_order: ['post2', 'post1'],
        candidates: [
          {
            person_id: 'abcd',
            post_id: 'post1'
          },
          {
            person_id: 'abcd2',
            post_id: 'post2'
          },
          {
            person_id: 'abcd3',
            post_id: 'post1'
          }
        ]
      }
    }
  },

  testPosts = {
    'post1': {
      result: {
        label: 'Post1Label'
      }
    },
    'post2': {
      result: {
        label: 'Post2Label'
      }
    }
  };

  beforeEach(module('everyvoteTuresoApp'));

  // load the service's module and mock dependencies
  beforeEach(function () {

    angular.module('mocks', ['everyvoteTuresoApp'])
      .service('PopIt', function ($q) {

        this.getModel = jasmine.createSpy('getModel')
          .and.callFake(function (model, id) {
            var deferred = $q.defer();

            if (model === 'organization') {
              deferred.resolve(testOrganization);
            }

            if (model === 'post') {
              deferred.resolve(testPosts[id]);
            }

            return deferred.promise;
          });

      })
      .service('ElectionModelOrchestrator', function () {
        this.groupByPost = jasmine.createSpy('groupByPost')
          .and.returnValue({
            'post1': [
              'candidate1', 'candidate2'
            ],
            'post2': [
              'candidate1', 'candidate2'
            ]
          });
      })
      .constant('ORGANIZATION_ID', 'orgid');

    module('mocks');
  });

  // instantiate service
  var ElectionService, $scope, PopIt, ElectionModelOrchestrator, $q;

  beforeEach(inject(function (_ElectionService_, _$rootScope_, _PopIt_,
    _ElectionModelOrchestrator_, _$q_) {

    $q = _$q_;
    ElectionModelOrchestrator = _ElectionModelOrchestrator_;
    PopIt = _PopIt_;
    $scope = _$rootScope_;
    ElectionService = _ElectionService_;

  }));


  describe('when obtaining election viewmodel', function () {
    var result;

    beforeEach(function () {

      ElectionService.getElection()
      .then(function (election) {
        result = election;
      });

      $scope.$apply();
    });

    it('should get the organization model from popit', function () {
      expect(PopIt.getModel).toHaveBeenCalledWith('organization', 'orgid');
    });

    it('should get the Post information for each involved Post', function () {
      expect(PopIt.getModel).toHaveBeenCalledWith('post', 'post1');
      expect(PopIt.getModel).toHaveBeenCalledWith('post', 'post2');
    });


    it('should group the Candidates', function () {

      expect(ElectionModelOrchestrator.groupByPost)
        .toHaveBeenCalledWith(testOrganization.result.next_election);

    });

    it('should return the viewmodel as expected', function () {
      expect(result.name).toEqual('Test Election 2015');

      expect(_.map(result.posts, function(post) {
        return post.name;
      })).toEqual(['Post2Label', 'Post1Label']);

      expect(result.posts).toContain({
        name: 'Post1Label', candidateIds: ['candidate1', 'candidate2']
      });

      expect(result.posts).toContain({
        name: 'Post2Label', candidateIds: ['candidate1', 'candidate2']
      });

    });

  });

  describe('when traversing the candidates on the viewmodel', function () {

    var result;

    beforeEach(function () {

      spyOn(ElectionService, 'getElection')
        .and.callFake(function () {
          var deferred = $q.defer();
          deferred.resolve({
            posts: [
              {
                name: 'Pres',
                candidateIds: ['idA', 'idB']
              },
              {
                name: 'VP',
                candidateIds: ['idC', 'idD']
              }
            ]
          });
          return deferred.promise;
        });


    });

    describe('to the next candidate', function () {

      beforeEach(function () {

        ElectionService.getNextCandidateId('idB')
        .then(function (election) {
          result = election;
        });

        $scope.$apply();
      });


      it('should return the next candidate Id', function () {
        expect(result).toBe('idC');
      });
    });

    describe('to the previous candidate', function () {
      beforeEach(function () {

        ElectionService.getPreviousCandidateId('idA')
        .then(function (election) {
          result = election;
        });

        $scope.$apply();
      });

      it('should return the previous candidate Id', function () {
        expect(result).toBe('idD');
      });

    });

  });

});
