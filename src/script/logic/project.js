import { IDGenerator, saveToLocalStorage } from "../helper";

// Project Factory Function
const project = (name, id = "") => {
  const projectName = name;
  const projectID = id ? id : IDGenerator(); // Helps when re-rendering project from localStorage
  let todoList = [];

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  // Update localStorage on any changes made to keep updated
  const deleteTodo = (id) => {
    todoList = todoList.filter((item) => item.todoItem().id !== id);
    saveToLocalStorage();
  };

  const getTodo = () => todoList;

  // Convert current project to JSON form to help with localStorage
  const toJSON = () => {
    return {
      projectName,
      projectID,
      todos: todoList.map((todo) => {
        const singleToDo = todo.todoItem();
        return {
          title: singleToDo.itemTitle,
          description: singleToDo.itemDescription,
          dueDate: singleToDo.itemDue,
          priority: singleToDo.itemPriority,
          parentID: singleToDo.parentID,
          completion: singleToDo.itemCompletionStatus,
        };
      }),
    };
  };

  return {
    projectName,
    projectID,
    getTodo,
    addTodo,
    deleteTodo,
    toJSON,
  };
};

export { project };
