var caffeineApp = angular.module('caffeineApp', [
  'ngRoute',
]);

caffeineApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/status', {
        templateUrl: 'templates/home.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
