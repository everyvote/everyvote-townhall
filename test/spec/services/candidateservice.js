'use strict';

describe('Service: CandidateService', function () {

  var popitPersonResponse = {
    'result': {
      name: 'test'
    }
  };

  // load the service's module
  beforeEach(module('everyvoteTuresoApp'));

  beforeEach(function () {

    angular.module('mocks', ['everyvoteTuresoApp'])

      .service('PopIt', function ($q) {

        this.getModel = jasmine.createSpy('getModel')
          .and.callFake(function () {
            var deferred = $q.defer();
            deferred.resolve(popitPersonResponse);
            return deferred.promise;
          });
      })

      .service('ElectionService', function ($q) {

        this.getPostIdByPersonId = jasmine.createSpy('getPostIdByPersonId')
          .and.callFake(function () {
            var deferred = $q.defer();
            deferred.resolve('the-post-id-for-the-person-id');
            return deferred.promise;
          });
      });
    module('mocks');

  });

  // instantiate service
  var CandidateService, scope, PopIt;

  beforeEach(inject(function (_$rootScope_, _CandidateService_, _PopIt_) {

    PopIt = _PopIt_;
    scope = _$rootScope_;
    CandidateService = _CandidateService_;
  }));

  describe('when obtaning a candidate', function () {
    var result;

    beforeEach(function () {

      CandidateService.getCandidate('abcd')
        .then(function(data) {
          result = data;
        });

      scope.$apply();
    });

    it('should return the candidate result object from the PopIt API', function () {
      expect(result).toBe(popitPersonResponse.result);
    });

    it('should have the post_id of the candidate', function () {
      expect(result.post_id).toBe('the-post-id-for-the-person-id');
    });

  });

});
