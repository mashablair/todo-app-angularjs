function todoAutofocus() {
  return {
    restrict: 'A',
    scope: false,
    link: function($scope, $elem, $attrs) {
      $scope.$watch($attrs.todoAutofocus, function(newVal, oldVal) {

        // newVal is 'showEditField' in this case
        if (!newVal) {return;}
        // if value of attr changes, we have to use setTimeout to push this event to the end of the call stack
        setTimeout(function() {
          $elem[0].focus();
        }, 0);
      });
    }
  }
}

angular
  .module('app')
  .directive('todoAutofocus', todoAutofocus);
