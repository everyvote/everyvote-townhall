'use strict';

describe('Directive: evProfileListing', function () {

  // load the directive's module
  beforeEach(module('everyvoteTuresoApp'));
  beforeEach(module('views/directives/evProfileListing.html'));
  beforeEach(module('views/directives/evTruncatedText.html'));

  var element,
    scope;

  // Mock Ctrl, not testing the real Ctrl.
  beforeEach(module(function($controllerProvider) {
      $controllerProvider.register('EvProfileCtrl', function (){});
  }));

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ev-profile-listing candidateId="candidateId"></ev-profile-listing>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});
