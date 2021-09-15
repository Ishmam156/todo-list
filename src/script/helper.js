import { allProjects } from "./index";
import { project } from "./logic/project";
import { todo } from "./logic/todo";

function IDGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0)
      .toString(16)
      .substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

const pastelGreen = "#9AD7A5";
const pastelYellow = "#FFD9BD";
const pastelRed = "#EE9D94";

const checkBlankString = (string) => {
  return string.trim().length;
};

const getFromLocalStorage = (checkLocalStorage) => {
  checkLocalStorage.map((item) => {
    const singleProject = project(item.projectName, item.projectID);

    item.todos.forEach((singleTodo) => {
      singleProject.addTodo(
        todo(
          singleTodo.title,
          singleTodo.description,
          singleTodo.dueDate,
          singleTodo.priority,
          singleTodo.parentID,
          singleTodo.completion,
        ),
      );
    });

    allProjects.push(singleProject);
  });
};

const saveToLocalStorage = () => {
  const projectsToLocalStorage = allProjects.map((project) =>
    project.toJSON(),
  );

  localStorage.setItem(
    "todo-projects",
    JSON.stringify(projectsToLocalStorage),
  );
};

export {
  IDGenerator,
  pastelGreen,
  pastelYellow,
  pastelRed,
  checkBlankString,
  saveToLocalStorage,
  getFromLocalStorage,
};

// Object relationship
// Checklist -> Todo -> Project
// Checklist -> Checklist ID and Todo ID
// Todo -> Todo ID and Project ID
