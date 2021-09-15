import "../style/reset.css";
import "../style/style.css";

import { project } from "./logic/project";
import { paintDOM } from "./DOM/appFlow";
import { getFromLocalStorage, saveToLocalStorage } from "./helper";

let allProjects = [];
const checkLocalStorage = JSON.parse(
  localStorage.getItem("todo-projects"),
);
let firstVisit = false;

if (checkLocalStorage) {
  getFromLocalStorage(checkLocalStorage);
} else {
  const startProject = project("Starter");

  allProjects.push(startProject);
  firstVisit = true;

  saveToLocalStorage();
}

const starterProject = allProjects.find(
  (project) => project.projectName === "Starter",
);

paintDOM(starterProject.projectID, firstVisit);

export { allProjects };
