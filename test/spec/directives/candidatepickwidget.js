'use strict';

describe('Directive: CandidatePickWidget', function () {

  // load the directive's module
  beforeEach(module('everyvoteTuresoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should not error', inject(function ($compile) {
    element = angular.element('<candidate-pick-widget />');
    element = $compile(element)(scope);
  }));
});
