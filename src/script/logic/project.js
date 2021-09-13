import { IDGenerator } from "../helper";

const project = () => {
  const projectID = IDGenerator();
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

export { project };
