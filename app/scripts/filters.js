'use strict';

angular.module('everyvoteFilters', []).
  filter('htmlToPlaintext', function() {
    return function(text) {
      return String(text).replace(/<[^>]+>/gm, '');
    };
  }
);