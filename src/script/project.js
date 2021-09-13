const project = (id) => {
  const projectID = id;
  const todoList = [];

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  return {
    projectID,
    todoList,
    addTodo,
  };
};
