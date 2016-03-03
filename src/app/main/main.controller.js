(function() {
  'use strict';

  angular
    .module('testMyng')
    .controller('MainController', ['$http', '$log', MainController]);

  /** @ngInject */
  function MainController($http, $log) {
    var vm = this;

    vm.editorEnabled = false;
    
    vm.locationdata = {
      name: '',
      place: '',
      editing: false
    };

    vm.clearForm = function(){
      vm.locationdata = {
        name: '',
        place: '',
        editing: false
      };      
    };

    vm.locations=[];

    vm.addLocation = function(){
      console.log("Entering");
      vm.locations.push(vm.locationdata);
      vm.locationdata = {
        name: '',
        place: '',
        editing: false
      };      
    };

    vm.checkData = function(){
      $log.info(vm.locations);
    };

    vm.clickToEdit = function(location){
      location.editing=true;
    };

    vm.clickToSave = function(location){
      location.editing=false;
    };

  }
})();
