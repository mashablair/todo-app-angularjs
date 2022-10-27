function TodoService ($http) {
  var API = 'https://jsonplaceholder.typicode.com/todos/';

  function retrieve( ) {
    return $http
      .get(API)
      .then(function(response) {
        return response.data.splice(1, 5);
      });
  }

  // add new todo from the form
  function create(item) {
    return $http
      .post(API, item)
      // we don't need to indicate new 'id' b/c it's automatically created in API
      .then(function(response) {
        return response.data;
      })
  }

  function update(item) {
    return $http
      .put(API + item.id)
      .then(function(response) {
        return response.data;
      });
  }

  function remove(item) {
    return $http
      .delete(API + item.id)
      .then(function(response) {
        return response.data;
      });
  }

  return {
    create: create,
    retrieve: retrieve,
    update: update,
    remove: remove
  }
}

angular
  .module('app')
  .factory('TodoService', TodoService);
