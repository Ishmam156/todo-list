import { IDGenerator, saveToLocalStorage } from "../helper";

const project = (name, id = "") => {
  const projectName = name;
  const projectID = id ? id : IDGenerator();
  let todoList = [];

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const deleteTodo = (id) => {
    todoList = todoList.filter((item) => item.todoItem().id !== id);
    saveToLocalStorage();
  };

  const getTodo = () => todoList;

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
