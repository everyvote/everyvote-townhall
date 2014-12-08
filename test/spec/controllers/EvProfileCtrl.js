'use strict';

describe('Controller: EvprofilectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('everyvoteTuresoApp'));

  var EvProfileCtrl,
    scope,
    CandidateService,
    getCandidateSpy,
    testGetCandidateRetVal;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _CandidateService_, $q) {

    //
    // Set up getCandidate spy/mock
    //
    testGetCandidateRetVal = 'test';
    var deferred = $q.defer();
    CandidateService = _CandidateService_;
    getCandidateSpy = spyOn(CandidateService, 'getCandidate')
      .andReturn(deferred.promise);
    deferred.resolve(testGetCandidateRetVal);

    //
    // Set up scope
    //
    scope = $rootScope.$new();
    scope.candidateId = 'abcd';

    EvProfileCtrl = $controller('EvProfileCtrl', {
      $scope: scope,
      CandidateService: CandidateService
    });

    scope.$apply();
  }));

  it('should retrieve the candidate information', function () {
    expect(getCandidateSpy).toHaveBeenCalledWith(scope.candidateId);
  });

  it('should make the candidate information available on the scope', function () {
    expect(scope.candidate).toBe(testGetCandidateRetVal);
  });

});
