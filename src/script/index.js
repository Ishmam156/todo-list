import "../style/reset.css";
import "../style/style.css";

import { todo } from "./logic/todo";
import { project } from "./logic/project";
import { paintDOM } from "./DOM/appFlow";

let allProjects = [];
const checkLocalStorage = JSON.parse(
  localStorage.getItem("todo-projects"),
);

if (checkLocalStorage) {
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
  // console.log(startProject.toJSON());
  // localStorage.setItem(
  //   "initialProjects",
  //   JSON.stringify(startProject),
  // );
  // const check = JSON.parse(localStorage.getItem("initialProjects"));
  // console.log("check", check);
  // const checkConvert = project(check.projectName, check.projectID);
  // check.todos.forEach((item) => {
  //   checkConvert.addTodo(
  //     todo(
  //       item.title,
  //       item.description,
  //       item.dueDate,
  //       item.priority,
  //       item.parentID,
  //       item.completion,
  //     ),
  //   );
  // });
  // console.log(checkConvert);
  // console.log(checkConvert.getTodo());
} else {
  const startProject = project("Starter");

  allProjects.push(startProject);

  const secondProject = project("Home");
  allProjects.push(secondProject);

  const newTodo = todo(
    "Get Groceries",
    "Should I do this?",
    "2021-09-27",
    "high",
    startProject.projectID,
  );
  startProject.addTodo(newTodo);

  const newTodo2 = todo(
    "Finish Forecasting",
    "This is going to change things and I am now doing a big string here, let's see",
    "2021-09-05",
    "low",
    startProject.projectID,
  );
  startProject.addTodo(newTodo2);

  const newTodo3 = todo(
    "Do Meetings",
    "Don't really want to",
    "2021-12-23",
    "medium",
    secondProject.projectID,
  );
  secondProject.addTodo(newTodo3);

  const projectsToLocalStorage = allProjects.map((project) =>
    project.toJSON(),
  );

  localStorage.setItem(
    "todo-projects",
    JSON.stringify(projectsToLocalStorage),
  );
}

// const allProjects = [];

// console.log(startProject.toJSON());
// localStorage.setItem("initialProjects", JSON.stringify(startProject));
// const check = JSON.parse(localStorage.getItem("initialProjects"));
// console.log("check", check);
// const checkConvert = project(check.projectName, check.projectID);

// check.todos.forEach((item) => {
//   checkConvert.addTodo(
//     todo(
//       item.title,
//       item.description,
//       item.dueDate,
//       item.priority,
//       item.parentID,
//       item.completion,
//     ),
//   );
// });

console.log(allProjects);

const check = allProjects.find(
  (project) => project.projectName === "Starter",
);
console.log(check);

paintDOM(check.projectID);

export { allProjects };
