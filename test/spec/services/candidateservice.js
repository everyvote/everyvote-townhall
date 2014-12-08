'use strict';

describe('Service: CandidateService', function () {

  var FAKE_POPIT_API = 'http://example.com/api';

  // load the service's module
  beforeEach(module('everyvoteTuresoApp'));

  beforeEach(module(function($provide) {
    $provide.constant('POPIT_API', FAKE_POPIT_API);
  }));

  // instantiate service
  var CandidateService, scope, $httpBackend;
  beforeEach(inject(function (_$rootScope_, _CandidateService_, _$httpBackend_) {

    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', FAKE_POPIT_API + '/persons/abcd')
      .respond({
        result: 'testobj'
      });

    scope = _$rootScope_;

    CandidateService = _CandidateService_;
  }));

  it('should do something', function () {
    expect(!!CandidateService).toBe(true);
  });

  it('should have the getCandidate method', function (){

    var test;

    CandidateService.getCandidate('abcd')
      .then(function(data) {
        test = data;
      });

      $httpBackend.flush();
      scope.$apply();

      expect(test).toBeDefined('testobj');
  });

});
