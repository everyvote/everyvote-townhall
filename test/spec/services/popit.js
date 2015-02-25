'use strict';

describe('Service: PopIt', function () {

  var FAKE_POPIT_API = 'http://example.com/foo';

  // load the service's module
  beforeEach(module('everyvoteTuresoApp'));

  beforeEach(module(function($provide) {
    $provide.constant('POPIT_API', FAKE_POPIT_API);
  }));

  // instantiate servic
  var PopIt, $scope, $httpBackend;

  beforeEach(inject(function (_PopIt_, _$rootScope_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $scope = _$rootScope_;
    PopIt = _PopIt_;
  }));

  describe('when GETing a model', function () {

    var result,
        fakeResponse = {
          result: 'testobj'
        };

    beforeEach(function (done) {

      $httpBackend.when('GET', FAKE_POPIT_API + '/candidates/hhhfh')
        .respond(fakeResponse);

      PopIt.getModel('candidate', 'hhhfh')
        .then(function (model) {
          result = model;
          done();
        });

      $httpBackend.flush();
      $scope.$digest();

    });

    afterEach(function () {
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return the response from PopIt', function () {
      expect(result).toEqual(fakeResponse);
    });

  });


});
