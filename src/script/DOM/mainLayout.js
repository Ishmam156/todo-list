import { todo } from "../logic/todo";
import { allProjects } from "../index";

const mainLayout = (projectID) => {
  const mainContainer = document.getElementById("innerContainer");

  mainContainer.innerHTML = ""; // remove later

  const dashboardDiv = document.createElement("div");
  // dashboardDiv.id = "dashboardDiv";
  const welcomeMessage = document.createElement("h5");
  welcomeMessage.textContent = "Your To-Dashboard!";
  dashboardDiv.appendChild(welcomeMessage);

  mainContainer.appendChild(dashboardDiv);

  allProjects.forEach((project) => {
    const projectDiv = document.createElement("div");
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.projectName;
    projectDiv.appendChild(projectTitle);

    const toDos = document.createElement("div");

    project.todoList.forEach((item) => {
      const todoItem = item.todoItem();
      const todoDiv = document.createElement("div");
      const todoTitle = document.createElement("p");
      todoTitle.textContent = todoItem.itemTitle;

      console.log(todoItem);

      const todoPriority = document.createElement("p");
      todoPriority.textContent = todoItem.itemPriority;

      todoDiv.appendChild(todoTitle);
      todoDiv.appendChild(todoPriority);
      toDos.appendChild(todoDiv);
    });

    projectDiv.appendChild(toDos);
    mainContainer.appendChild(projectDiv);
  });
};

export { mainLayout };
