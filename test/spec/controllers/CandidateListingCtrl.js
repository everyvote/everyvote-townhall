'use strict';

describe('Controller: CandidateListingCtrl', function () {

  // load the controller's module
  beforeEach(module('everyvoteTuresoApp'));

  var CandidateListingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidateListingCtrl = $controller('CandidateListingCtrl', {
      $scope: scope
    });
  }));

  it('should instantiate', function () {
    expect(CandidateListingCtrl).toBeDefined();
  });
});
