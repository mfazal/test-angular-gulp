(function() {
  'use strict';

  angular
    .module('testMyng')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
