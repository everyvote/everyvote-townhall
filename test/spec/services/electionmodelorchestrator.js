/* jshint camelcase: false */
'use strict';

describe('Service: ElectionModelOrchestrator', function () {

  // load the service's module
  beforeEach(module('everyvoteTuresoApp'));

  // instantiate service
  var ElectionModelOrchestrator;
  beforeEach(inject(function (_ElectionModelOrchestrator_) {
    ElectionModelOrchestrator = _ElectionModelOrchestrator_;
  }));

  it('should do something', function () {

    var testElectionModel = {
      candidates: [
        {
          post_id: 'pres',
          person_id: 'freddy'
        },
        {
          post_id: 'pres',
          person_id: 'markus'
        },
        {
          post_id: 'pres',
          person_id: 'lance'
        },
        {
          post_id: 'vicepres',
          person_id: 'freddy'
        },
        {
          post_id: 'vicepres',
          person_id: 'markus'
        }
      ]
    };

    var result = ElectionModelOrchestrator.groupByPost(testElectionModel);

    expect(result.pres.length).toBe(3);
    expect(result.vicepres.length).toBe(2);

    expect(result.vicepres).toContain('freddy');
    expect(result.vicepres).toContain('markus');

    expect(result.pres).toContain('freddy');
    expect(result.pres).toContain('markus');
    expect(result.pres).toContain('lance');

  });

});
