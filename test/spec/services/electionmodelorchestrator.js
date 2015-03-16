/* jshint camelcase: false */
'use strict';

describe('Service: ElectionModelOrchestrator', function () {
  var ElectionModelOrchestrator, CandidatePicksService, $scope, $q;

  // load the service's module
  beforeEach(module('everyvoteTuresoApp'));

  // instantiate service

  beforeEach(inject(function (_ElectionModelOrchestrator_, _CandidatePicksService_,
    _$rootScope_, _$q_) {

    $scope = _$rootScope_;
    $q = _$q_;
    ElectionModelOrchestrator = _ElectionModelOrchestrator_;
    CandidatePicksService = _CandidatePicksService_;

    spyOn(CandidatePicksService, 'getPick')
      .and.callFake(function (id) {
        if(id === 'freddy'){
          return 'V';
        }

        if(id === 'markus') {
          return 'V';
        }

        return 'N';
      });
  }));

  var testElectionModel, result;

  describe('description', function () {
    testElectionModel = {
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

    describe('grouping by post', function () {

        beforeEach(function () {
          result = ElectionModelOrchestrator.groupByPost(testElectionModel.candidates);
        });

        it('should be able to group the flat candidate data by posts', function () {

          expect(result.pres.length).toBe(3);
          expect(result.vicepres.length).toBe(2);

          expect(result.vicepres).toContain('freddy');
          expect(result.vicepres).toContain('markus');

          expect(result.pres).toContain('freddy');
          expect(result.pres).toContain('markus');
          expect(result.pres).toContain('lance');

        });
    });

    describe('filtering out non-candidates', function () {
      var result;

      beforeEach(function () {

        spyOn(CandidatePicksService, 'getPicks')
          .and.callFake(function () {
            var deferred = $q.defer();

            deferred.resolve(['lance', 'freddy']);

            return deferred.promise;
          });

        ElectionModelOrchestrator.filterOnlyPicks(testElectionModel.candidates)
          .then(function(candidates) {
            result = candidates;
          });

        $scope.$apply();

      });

      it('should return only candidates that have been picked', function () {

          var mapped = _.map(result, function(candidate) {
            return candidate.person_id;
          });

          expect(mapped).not.toContain('markus');
          expect(mapped).toContain('lance');
          expect(mapped).toContain('freddy');
        });

    });



  });



});
