//  моментально выполняет код после подключения
(function () {
  //установка модуля 'app'
  angular.module('app',['ngRoute']);

  function config ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/customer.html',
      controller: 'CustomerController',
      controllerAs: 'customer'
    });
  }
  angular
    .module('app')
    .config(config);
})();
