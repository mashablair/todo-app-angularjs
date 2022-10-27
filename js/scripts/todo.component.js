function todoApp() {
  return {
    restrict: 'E',
    controller: "TodoController as todo",
    template: `
    <div class="todo">
      <form class="todo__form" ng-submit="todo.addTodo()">
        <input type="text" ng-model="todo.newTodo" placeholder="Add new todo!">
      </form>

        <ul class="todo__list">
          <li ng-repeat="item in todo.list">
            <!-- make sure ng-chage is on the <input>, not on the <label> -->
            <input type="checkbox" name="complete"
              id="todo-{{$index}}"
              ng-model="item.completed"
              ng-change="todo.toggleState(item)">
            <label
              for="todo-{{$index}}"
              class="toggle">
            </label>
            <p
              ng-dblclick="showEditField = true"
              ng-hide="showEditField">{{item.title}}
            </p>

            <input type="text"
              ng-model="item.title"
              ng-show="showEditField"
              ng-blur="todo.updateTodo(item, $index); showEditField = false"
              todo-autofocus="showEditField" />

              <a href=""
              ng-click="todo.removeTodo(item, $index)"
              aria-label="remove item">&#215
            </a>
          </li>
        </ul>
      </div>
    `
  }
}

angular
  .module('app')
  .directive('todoApp', todoApp);
