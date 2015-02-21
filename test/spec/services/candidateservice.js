'use strict';

describe('Service: CandidateService', function () {

  var FAKE_POPIT_API = 'http://example.com/api';

  // load the service's module
  beforeEach(module('everyvoteTuresoApp'));

  beforeEach(module(function($provide) {
    $provide.constant('POPIT_API', FAKE_POPIT_API);
  }));

  // instantiate service
  var CandidateService, scope, $httpBackend, CandidateCache;

  beforeEach(inject(function (_$rootScope_, _CandidateService_, _$httpBackend_,
    _CandidateCache_) {

    CandidateCache = _CandidateCache_;
    CandidateCache.removeAll();

    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', FAKE_POPIT_API + '/persons/abcd')
      .respond({
        result: 'testobj'
      });

    scope = _$rootScope_;

    CandidateService = _CandidateService_;
  }));

  describe('when obtaning a candidate that has been cached', function () {
    var result;

    beforeEach(function () {

      CandidateCache.put('abcd', 'testobj');

      CandidateService.getCandidate('abcd')
        .then(function(data) {
          result = data;
        });

      scope.$apply();
    });

    it('should return the candidate reuslt object from cache without HTTP request',
      function () {
      expect(result).toBe('testobj');
      $httpBackend.verifyNoOutstandingRequest();
    });

  });

  describe('when obtaning a candidate without being cached', function () {
    var result;

    beforeEach(function () {

      CandidateService.getCandidate('abcd')
      .then(function(data) {
        result = data;
      });

      $httpBackend.flush();
      scope.$apply();
    });

    it('should return the candidate reuslt object from the PopIt API', function () {
      expect(result).toBe('testobj');
    });

    it('should put the candidate in the cache', function () {
      expect(CandidateCache.get('abcd')).toBe('testobj');
    });

  });

});
