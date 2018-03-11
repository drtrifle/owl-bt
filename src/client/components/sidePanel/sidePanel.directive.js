(function () {
  'use strict';
  angular.module('editorApp')
    .directive('sidePanel', function (_) {
      return {
        templateUrl: 'components/sidePanel/sidePanel.html',
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
          title: '@',
          name: '@'
        },
        link: (scope) => {
          const expandStorageKey = `panel-expand-${scope.name}`;
          scope.isExpanded = localStorage.getItem(expandStorageKey);
          if (_.isNil(scope.isExpanded)) {
            scope.isExpanded = true;
          } else {
            scope.isExpanded = scope.isExpanded === 'true';
          }
          scope.expand = expand => {
            scope.isExpanded = expand;
            localStorage.setItem(expandStorageKey, scope.isExpanded);
          }
        }
      };
    });
})();
