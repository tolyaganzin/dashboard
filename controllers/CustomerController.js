angular
    .module('app')
    .controller('CustomerController', CustomerController);

    function CustomerController() {
        var vm = this;
        vm.title = 'Some Title';
        vm.sendMessage = function() { };
    }
