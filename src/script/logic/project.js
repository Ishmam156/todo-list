import { IDGenerator } from "../helper";

const project = (name) => {
  const projectName = name;
  const projectID = IDGenerator();
  let todoList = [];

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const deleteTodo = (id) => {
    todoList = todoList.filter((item) => item.todoItem().id !== id);
    console.log(todoList);
  };

  const getTodo = () => todoList;

  return {
    projectName,
    projectID,
    getTodo,
    addTodo,
    deleteTodo,
  };
};

export { project };
