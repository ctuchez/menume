'use strict';

menuMeApp.controller('ThankYouController', function ThankYouController($scope, $routeParams) {
  $scope.orderId = $routeParams.orderId;
});
