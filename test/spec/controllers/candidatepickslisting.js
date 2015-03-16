'use strict';

describe('Controller: CandidatePicksListingCtrl', function () {

  // load the controller's module
  beforeEach(module('everyvoteTuresoApp'));

  var CandidatePicksListingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidatePicksListingCtrl = $controller('CandidatePicksListingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    
  });
});
