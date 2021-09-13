import "../style/reset.css";
import "../style/style.css";

import { todo } from "./logic/todo";
import { project } from "./logic/project";
import { paintLayout } from "./DOM/layout";

const allProjects = [];

const startProject = project("Starter");

allProjects.push(startProject);

const newTodo = todo(
  "Get Groceries",
  "Should I do this?",
  "2021-09-27",
  "high",
  "Really need to look into this",
  "",
  startProject.projectID,
);
startProject.addTodo(newTodo);

const newTodo2 = todo(
  "Finish Forecasting",
  "This is going to change things",
  "2021-09-23",
  "low",
  "Really need to look into this",
  "",
  startProject.projectID,
);
startProject.addTodo(newTodo2);

const newTodo3 = todo(
  "Do Meetings",
  "Don't really want to",
  "2021-12-23",
  "medium",
  "Really need to look into this",
  "",
  startProject.projectID,
);
startProject.addTodo(newTodo3);

paintLayout(startProject.projectID);

export { allProjects };
