import { todo } from "../logic/todo";
import { project } from "../logic/project";
import { allProjects } from "../index";
import { mainLayout } from "./mainLayout";

const displayForms = (projectID, type) => {
  const mainContainer = document.getElementById("innerContainer");

  const addProjectDisplay = () => {
    mainContainer.innerHTML = "";
    const projectForm = document.createElement("form");
    projectForm.id = "messageDiv";

    projectForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const newProject = project(event.target.projectLabel.value);
      allProjects.push(newProject);

      mainLayout(newProject.projectID);
    });

    const header = document.createElement("h3");
    header.textContent = "Add your Project!";
    projectForm.appendChild(header);

    const projectLabel = document.createElement("label");
    projectLabel.htmlFor = "projectLabel";
    projectLabel.innerText = "Project Name:";
    projectLabel.style.display = "block";
    projectForm.appendChild(projectLabel);

    const input = document.createElement("input");
    input.type = "text";
    input.name = "projectLabel";
    input.id = "projectLabel";
    input.required = true;
    input.autofocus = true;
    projectForm.appendChild(input);

    const submit = document.createElement("input");
    submit.style.display = "block";
    submit.type = "submit";
    submit.name = "Add";
    submit.id = "submit";
    projectForm.appendChild(submit);

    mainContainer.appendChild(projectForm);
  };

  const addTodoDisplay = () => {
    mainContainer.innerHTML = "";
    const todoForm = document.createElement("form");
    todoForm.id = "messageDiv";

    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const project = allProjects.find(
        (item) => item.projectID === projectID,
      );

      // const checklist = Array.from(event.target.checklist)
      //   .filter((item) => item.value !== "")
      //   .map((item) => {
      //     return {
      //       task: item.value,
      //     };
      //   });

      const newToDo = todo(
        event.target.title.value,
        event.target.description.value,
        event.target.duedate.value,
        event.target.priority.value,
        // event.target.notes.value,
        // checklist,
        projectID,
      );

      project.addTodo(newToDo);

      mainLayout(projectID);
    });

    const header = document.createElement("h3");
    header.textContent = "Add your To-Do!";
    todoForm.appendChild(header);

    const inputItems = [
      {
        name: "title",
        message: "What to Do:",
        value: "Testing", // remove later
      },
      {
        name: "description",
        message: "Some details:",
        value: "Life", // remove later
      },
      // {
      //   name: "notes",
      //   message: "Further notes:",
      // },
    ];

    inputItems.forEach((item) => {
      const label = document.createElement("label");
      label.htmlFor = item.name;
      label.innerText = item.message;
      label.style.display = "block";
      todoForm.appendChild(label);

      const input = document.createElement("input");
      input.type = "text";
      input.name = item.name;
      input.id = item.name;
      input.required = true;
      input.value = item.value; // remove later

      if (item.name === "title") {
        input.autofocus = true;
      }
      todoForm.appendChild(input);
    });

    const dueDateLabel = document.createElement("label");
    dueDateLabel.htmlFor = "duedate";
    dueDateLabel.innerText = "By when:";
    dueDateLabel.style.display = "block";
    todoForm.appendChild(dueDateLabel);

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.name = "duedate";
    dueDateInput.id = "duedate";
    dueDateInput.required = true;
    dueDateInput.value = "2021-09-23"; // remove later
    todoForm.appendChild(dueDateInput);

    const priorityLabel = document.createElement("label");
    priorityLabel.htmlFor = "priority";
    priorityLabel.style.display = "block";
    priorityLabel.textContent = "Task priority";
    todoForm.appendChild(priorityLabel);

    const priorityParent = document.createElement("fieldset");
    priorityParent.id = "priority";

    const priortyOptions = ["low", "medium", "high"];

    priortyOptions.forEach((item) => {
      const label = document.createElement("label");
      label.htmlFor = item;
      label.textContent = item;
      priorityParent.appendChild(label);

      const priority = document.createElement("input");
      priority.type = "radio";
      priority.id = item;
      priority.value = item;
      priority.name = "priority";

      if (item === "medium") {
        priority.checked = true;
      }

      priorityParent.appendChild(priority);
    });

    todoForm.appendChild(priorityParent);

    // const checkListLabel = document.createElement("label");
    // checkListLabel.htmlFor = "checklist";
    // checkListLabel.id = "checklistLabel";
    // checkListLabel.style.display = "block";
    // checkListLabel.textContent = "Task Checklist";
    // todoForm.appendChild(checkListLabel);

    // const checkListParent = document.createElement("ol");
    // checkListParent.id = "checklist";

    // for (let index = 0; index < 3; index++) {
    //   const checkListItem = document.createElement("li");
    //   const checkListInput = document.createElement("input");
    //   checkListInput.name = "checklist";
    //   checkListInput.type = "text";
    //   checkListItem.appendChild(checkListInput);
    //   checkListParent.append(checkListItem);
    // }

    // todoForm.appendChild(checkListParent);

    const submit = document.createElement("input");
    submit.style.display = "block";
    submit.type = "submit";
    submit.name = "Add";
    submit.id = "submit";
    todoForm.appendChild(submit);

    mainContainer.appendChild(todoForm);
  };

  const welcomeMessage = () => {
    mainContainer.innerHTML = "";
    const messageDiv = document.createElement("div");
    messageDiv.id = "messageDiv";
    const welcomeMessage = document.createElement("h3");
    welcomeMessage.textContent =
      "Let's change those all your To-Dos into To-Dones!";
    messageDiv.appendChild(welcomeMessage);

    const clickMessage = document.createElement("p");
    clickMessage.textContent =
      "Are you ready to make your life easy?";
    messageDiv.appendChild(clickMessage);

    const clickButton = document.createElement("button");
    clickButton.textContent = "Yes, yes & yes!";

    clickButton.addEventListener("click", addTodoDisplay);
    // clickButton.addEventListener("click", () =>
    //   mainLayout(projectID),
    // );

    messageDiv.appendChild(clickButton);
    mainContainer.appendChild(messageDiv);
  };

  if (type === "first") {
    welcomeMessage();
  } else if (type === "todo") {
    addTodoDisplay();
  } else {
    console.log("here");
    addProjectDisplay();
  }
};

export { displayForms };
