function TodoController(TodoService) {

  const ctrl = this;
  ctrl.list = [];

  function getTodos() {
    TodoService
      .retrieve()
      .then(function(response) {
        ctrl.list = response;
      });
  }

  ctrl.updateTodo = function(item, index) {
    if (!item.title) {
      ctrl.removeTodo(item, index);
      return;
    }
    TodoService
      .update(item);
  }

  ctrl.addTodo = function() {
    if (!ctrl.newTodo) return;
    TodoService
      .create({
        title: ctrl.newTodo,
        completed: false
      })
      .then(function(response) {
        ctrl.list.unshift(response);
        ctrl.newTodo = '';
      });
  }

  ctrl.removeTodo = function(item, index) {
    // we need index to talk to back-end
    TodoService
      .remove(item)
      .then(function(response) {
        // we should only update the view if our response is successful
        ctrl.list.splice(index, 1);
      });
  }

  ctrl.toggleState = function(item) {
    TodoService
      .update(item)
      .then(
        function() {
          // if no errors, we do nothing
        },
      // here we handle error
      function() {
        item.completed = !item.completed;
      })
  }

  getTodos();
}

angular
  .module('app')
  .controller('TodoController', TodoController);
