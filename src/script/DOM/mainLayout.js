import { todo } from "../logic/todo";
import { allProjects } from "../index";

const mainLayout = (projectID) => {
  const mainContainer = document.getElementById("innerContainer");

  mainContainer.innerHTML = ""; // remove later

  const dashboard = document.createElement("div");
  dashboard.id = "dashboard";

  const toDosDisplay = (id) => {
    const singleProject = allProjects.find(
      (project) => project.projectID === id,
    );

    const clearDiv = document.getElementById("todos");
    if (clearDiv) {
      clearDiv.remove();
    }

    const taskDisplayCheck = document.getElementById("singleItem");
    if (taskDisplayCheck) {
      taskDisplayCheck.remove();
    }

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

      const colorPriority = {
        high: "red",
        medium: "lightyellow",
        low: "lightgreen",
      };

      todoDiv.style.backgroundColor =
        colorPriority[singleToDo.itemPriority];

      // todoDiv.dataset.taskId = singleToDo.id;
      // todoDiv.dataset.projectId = singleToDo.parentID;

      todoDiv.addEventListener("click", () =>
        singleTaskDisplay(singleToDo.id, id),
      );

      todos.appendChild(todoDiv);
      dashboard.appendChild(todos);
    });
  };

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

    const completionColor = {
      true: "green",
      false: "red",
    };

    const completionTextColor = {
      true: "white",
      false: "black",
    };

    const completionStatus = document.createElement("div");
    completionStatus.textContent = taskDetails.itemCompletionStatus
      ? "Completed"
      : "Not Completed";
    completionStatus.style.backgroundColor =
      completionColor[taskDetails.itemCompletionStatus];

    completionStatus.style.color =
      completionTextColor[taskDetails.itemCompletionStatus];

    completionStatus.addEventListener("click", () => {
      task.updateCompletionStatus();
      toDosDisplay(taskDetails.parentID);
      singleTaskDisplay(taskDetails.id, taskDetails.parentID);
    });

    singleItem.appendChild(title);
    singleItem.appendChild(description);
    singleItem.appendChild(priority);
    singleItem.appendChild(dueDate);
    singleItem.appendChild(completionStatus);
    dashboard.appendChild(singleItem);
  };

  const displayProjects = (id) => {
    const clearDiv = document.getElementById("projects");
    if (clearDiv) {
      clearDiv.remove();
    }
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

      if (project.projectID === id) {
        singleProject.style.backgroundColor = "#7aa09b";
      }

      singleProject.addEventListener("click", () => {
        displayProjects(project.projectID);
        toDosDisplay(project.projectID);
      });

      projects.appendChild(singleProject);
    });

    dashboard.appendChild(projects);
  };

  displayProjects(projectID);
  mainContainer.appendChild(dashboard);
  toDosDisplay(projectID);
};

export { mainLayout };
