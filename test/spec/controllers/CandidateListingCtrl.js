'use strict';

describe('Controller: CandidateListingCtrl', function () {

  // load the controller's module
  beforeEach(module('everyvoteTuresoApp'));

  var CandidateListingCtrl,
    scope,
    ElectionService,
    getElectionSpy,
    testGetElectionRetVal;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _ElectionService_, $q) {

    //
    // Build spy for getElection
    //
    testGetElectionRetVal = {
      name: 'test election',
      posts: 'test post array'
    };
    var deferred = $q.defer();
    ElectionService = _ElectionService_;
    getElectionSpy = spyOn(ElectionService, 'getElection')
      .andReturn(deferred.promise);
    deferred.resolve(testGetElectionRetVal);

    scope = $rootScope.$new();

    CandidateListingCtrl = $controller('CandidateListingCtrl', {
      $scope: scope,
      ElectionService: ElectionService
    });

    scope.$apply();
  }));

  it('should instantiate', function () {
    expect(CandidateListingCtrl).toBeDefined();
  });

  it('should obtain elections', function () {
    expect(getElectionSpy).toHaveBeenCalled();
  });

  it('should make the elections available on the scope', function (){
    expect(scope.posts).toBe(testGetElectionRetVal.posts);
  });

});
