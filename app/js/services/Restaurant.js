'use strict';

menuMeApp.factory('Restaurant', function($resource) {
  return $resource('/api/restaurant/:id', {id: '@id'});
});
