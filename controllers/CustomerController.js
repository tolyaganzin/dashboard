// моментально выполняет код сразуже прсле подключения
(function () {

  // функция для 'CustomerController'
  function CustomerController() {
      var customer = this;
      customer.name = 'Some customer Title';
  }

  //использование модуля 'app' для 'CustomerController'
  angular
      .module('app')
      .controller('CustomerController', CustomerController);

})();
