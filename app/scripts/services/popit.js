'use strict';

/**
 * @ngdoc service
 * @name everyvoteTuresoApp.PopIt
 * @description
 * # PopIt
 * Service in the everyvoteTuresoApp.
 */
angular.module('everyvoteTuresoApp')
  .service('PopIt', function (POPIT_API, $http, $q,
    PostCache, OrganizationCache, PersonCache) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getModel = function (modelName, id) {

      var deferred = $q.defer(),
          cache = this._cacheMap[modelName] || {get:function(){}, put: function(){}},

          cachedModel = cache.get(id);

      // Cache hit
      if(cachedModel) {
        deferred.resolve(cachedModel);
        return deferred.promise;
      }

      // Cache miss
      $http.get(POPIT_API + '/' + modelName + 's/' + id)
        .success(function (result) {
          cache.put(id, result);
          deferred.resolve(result);
        });

      return deferred.promise;
    };

    this._getModelCache = function (id) {
      return this._cacheMap[id] ||
        // NO-OP cache
        {get:function(){}, put: function(){}};
    };

    this._cacheMap = {
      'post': PostCache,
      'organization': OrganizationCache,
      'person': PersonCache
    };



  });
