import { todo } from "../logic/todo";
import { allProjects } from "../index";
import { pastelGreen, pastelYellow, pastelRed } from "../helper";
import { differenceInCalendarDays } from "date-fns";
import { firstVisit } from "./addForm";

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

    addTodoButton.addEventListener("click", () => {
      console.log("here");
      firstVisit(singleProject.projectID, false);
    });

    todos.appendChild(todoTitle);
    todos.appendChild(addTodoButton);

    const projectList = singleProject.getTodo();

    projectList.forEach((task) => {
      const singleToDo = task.todoItem();

      const todoDiv = document.createElement("div");
      todoDiv.className = "singleToDo";
      todoDiv.textContent = singleToDo.itemTitle;

      const colorPriority = {
        high: pastelRed,
        medium: pastelYellow,
        low: pastelGreen,
      };

      todoDiv.style.backgroundColor =
        colorPriority[singleToDo.itemPriority];

      if (singleToDo.itemCompletionStatus) {
        todoDiv.style.textDecoration = "line-through";
        todoDiv.style.backgroundColor = pastelGreen;
      }

      todoDiv.addEventListener("click", () => {
        singleTaskDisplay(singleToDo.id, singleToDo.parentID);
      });

      todos.appendChild(todoDiv);
    });
    dashboard.appendChild(todos);
  };

  const singleTaskDisplay = (taskID, projectID) => {
    const taskDisplayCheck = document.getElementById("singleItem");
    if (taskDisplayCheck) {
      taskDisplayCheck.remove();
    }

    console.log(projectID);

    const projectTask = allProjects.find(
      (project) => project.projectID === projectID,
    );

    const task = projectTask
      .getTodo()
      .find((task) => task.todoItem().id === taskID);

    const taskDetails = task.todoItem();

    const singleItem = document.createElement("div");
    singleItem.id = "singleItem";

    const title = document.createElement("h2");
    title.id = "todoTitle";
    title.textContent = taskDetails.itemTitle;

    const descriptionLabel = document.createElement("label");
    descriptionLabel.htmlFor = "todoDescription";
    descriptionLabel.textContent = "Task description";
    descriptionLabel.classList.add("todoLabel");

    const description = document.createElement("div");
    description.id = "todoDescription";
    description.textContent = taskDetails.itemDescription;

    const priorityLabel = document.createElement("label");
    priorityLabel.htmlFor = "todoPriority";
    priorityLabel.textContent = "Priority";
    priorityLabel.classList.add("todoLabel");

    const priority = document.createElement("div");
    priority.id = "todoPriority";

    const priorityTypes = [
      { type: "low", color: pastelGreen },
      { type: "medium", color: pastelYellow },
      { type: "high", color: pastelRed },
    ];

    priorityTypes.forEach((item) => {
      const element = document.createElement("div");
      element.textContent = item.type;
      element.style.backgroundColor = item.color;
      element.style.fontSize = "14px";

      element.addEventListener("click", () => {
        task.updatePriority(item.type);
        toDosDisplay(taskDetails.parentID);
        singleTaskDisplay(taskDetails.id, taskDetails.parentID);
      });

      priority.appendChild(element);
    });

    const dueDateLabel = document.createElement("label");
    dueDateLabel.htmlFor = "todoDueDate";
    dueDateLabel.textContent = "Due Date";
    dueDateLabel.classList.add("todoLabel");

    const dueDate = document.createElement("div");
    dueDate.id = "todoDueDate";

    const daysLeft = differenceInCalendarDays(
      new Date(taskDetails.itemDue),
      new Date(),
    );
    dueDate.textContent =
      daysLeft > 1
        ? `${daysLeft} days`
        : daysLeft > 0
        ? `${daysLeft} day`
        : "Date over";

    if (daysLeft < 0) {
      dueDate.style.backgroundColor = pastelRed;
    }

    const completionColor = {
      true: pastelGreen,
      false: pastelRed,
    };

    const completionLabel = document.createElement("label");
    completionLabel.htmlFor = "todoCompletion";
    completionLabel.textContent = "Task Status";
    completionLabel.classList.add("todoLabel");

    const completionStatus = document.createElement("div");
    completionStatus.id = "todoCompletion";
    completionStatus.textContent = taskDetails.itemCompletionStatus
      ? "Completed"
      : "Not Completed";
    completionStatus.style.backgroundColor =
      completionColor[taskDetails.itemCompletionStatus];

    completionStatus.style.color = "black";

    completionStatus.addEventListener("click", () => {
      task.updateCompletionStatus();
      toDosDisplay(taskDetails.parentID);
      singleTaskDisplay(taskDetails.id, taskDetails.parentID);
    });

    const deleteTask = document.createElement("button");
    deleteTask.textContent = "Delete Task";
    deleteTask.style.backgroundColor = "red";

    deleteTask.addEventListener("click", () => {
      projectTask.deleteTodo(taskID);
      displayProjects(projectTask.projectID);
      toDosDisplay(projectTask.projectID);
    });

    singleItem.appendChild(title);
    singleItem.appendChild(descriptionLabel);
    singleItem.appendChild(description);
    singleItem.appendChild(priorityLabel);
    singleItem.appendChild(priority);
    singleItem.appendChild(dueDateLabel);
    singleItem.appendChild(dueDate);
    singleItem.appendChild(completionLabel);
    singleItem.appendChild(completionStatus);
    singleItem.appendChild(deleteTask);
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

  mainContainer.appendChild(dashboard);
  displayProjects(projectID);
  toDosDisplay(projectID);
};

export { mainLayout };
