// моментально выполняет код сразуже прсле подключения
(function () {

  // функция для 'CustomerController'
  function CustomerController() {
      var vm = this;
      vm.title = 'Some Title';
      //vm.sendMessage = function() { };
  }

  //использование модуля 'app' для 'CustomerController'
  angular
      .module('app')
      .controller('CustomerController', CustomerController);

})();
