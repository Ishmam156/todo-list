import { IDGenerator } from "../helper";

const project = (name) => {
  const projectName = name;
  const projectID = IDGenerator();
  const todoList = [];

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  return {
    projectName,
    projectID,
    todoList,
    addTodo,
  };
};

export { project };
