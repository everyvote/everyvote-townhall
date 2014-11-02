'use strict';

describe('Controller: EvbodyCtrl', function () {

  // load the controller's module
  beforeEach(module('everyvoteTuresoApp'));

  var EvPageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EvPageCtrl = $controller('EvPageCtrl', {
      $scope: scope
    });
  }));

  it('should instantiate', function () {
    expect(EvPageCtrl).toBeDefined();
  });
});
