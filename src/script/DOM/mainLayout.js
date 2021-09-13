import { todo } from "../logic/todo";
import { allProjects } from "../index";

const mainLayout = (projectID) => {
  const mainContainer = document.getElementById("innerContainer");

  mainContainer.innerHTML = ""; // remove later

  const dashboard = document.createElement("div");
  dashboard.id = "dashboard";

  const singleTaskDisplay = (taskID, projectID) => {
    const taskDisplayCheck = document.getElementById("singleItem");
    if (taskDisplayCheck) {
      taskDisplayCheck.remove();
    }

    const projectTask = allProjects.find(
      (project) => project.projectID === projectID,
    );

    const task = projectTask.todoList.find(
      (task) => task.todoItem().id === taskID,
    );

    const taskDetails = task.todoItem();

    const singleItem = document.createElement("div");
    singleItem.id = "singleItem";

    const title = document.createElement("h2");
    title.textContent = taskDetails.itemTitle;

    const description = document.createElement("div");
    description.textContent = taskDetails.itemDescription;

    const priority = document.createElement("div");
    priority.textContent = taskDetails.itemPriority;

    const dueDate = document.createElement("div");
    dueDate.textContent = taskDetails.itemDue;

    singleItem.appendChild(title);
    singleItem.appendChild(description);
    singleItem.appendChild(priority);
    singleItem.appendChild(dueDate);
    dashboard.appendChild(singleItem);
  };

  const projects = document.createElement("div");
  projects.id = "projects";

  const projectTitle = document.createElement("h2");
  projectTitle.textContent = "Projects";

  const addProjectButton = document.createElement("button");
  addProjectButton.textContent = "+ Add Project";

  projects.appendChild(projectTitle);
  projects.appendChild(addProjectButton);

  allProjects.forEach((project) => {
    const singleProject = document.createElement("div");
    singleProject.textContent = project.projectName;
    singleProject.className = "singleProject";
    singleProject.dataset.projectId = project.projectID;

    if (project.projectID === projectID) {
      singleProject.style.backgroundColor = "#7aa09b";
    }

    projects.appendChild(singleProject);
  });

  dashboard.appendChild(projects);

  const singleProject = allProjects.find(
    (project) => project.projectID === projectID,
  );

  const todos = document.createElement("div");
  todos.id = "todos";

  const todoTitle = document.createElement("h2");
  todoTitle.textContent = "Todos";

  const addTodoButton = document.createElement("button");
  addTodoButton.textContent = "+ Add Todo";

  todos.appendChild(todoTitle);
  todos.appendChild(addTodoButton);

  const projectList = singleProject.todoList;

  projectList.forEach((task) => {
    const singleToDo = task.todoItem();

    const todoDiv = document.createElement("div");
    todoDiv.className = "singleToDo";
    todoDiv.textContent = singleToDo.itemTitle;

    // todoDiv.dataset.taskId = singleToDo.id;
    // todoDiv.dataset.projectId = singleToDo.parentID;

    todoDiv.addEventListener("click", () =>
      singleTaskDisplay(singleToDo.id, singleToDo.parentID),
    );

    todos.appendChild(todoDiv);
  });

  dashboard.appendChild(todos);

  mainContainer.appendChild(dashboard);
};

export { mainLayout };
