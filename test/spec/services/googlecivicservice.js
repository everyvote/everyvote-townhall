'use strict';

describe('Service: googlecivicservice', function () {

  // load the service's module
  beforeEach(module('everyvoteTuresoApp'));

  // instantiate service
  var googlecivicservice;
  beforeEach(inject(function (_googlecivicservice_) {
    googlecivicservice = _googlecivicservice_;
  }));

  it('should do something', function () {
    expect(!!googlecivicservice).toBe(true);
  });

});
