'use strict';

describe('Controller: CandidatedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('everyvoteTuresoApp'));

  var CandidatedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidatedetailCtrl = $controller('CandidatedetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
