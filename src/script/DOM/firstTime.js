import { todo } from "../logic/todo";
import { allProjects } from "../index";

const firstVisit = (projectID) => {
  const mainContainer = document.getElementById("mainContainer");

  const welcomeMessage = document.createElement("h2");
  welcomeMessage.textContent =
    "Let's change those to-dos to to-done!";
  mainContainer.appendChild(welcomeMessage);

  const todoForm = document.createElement("form");

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const project = allProjects.find(
      (item) => item.projectID === projectID,
    );

    const checklist = Array.from(event.target.checklist)
      .filter((item) => item.value !== "")
      .map((item) => {
        return {
          task: item.value,
        };
      });

    const newToDo = todo(
      event.target.title.value,
      event.target.description.value,
      event.target.duedate.value,
      event.target.priority.value,
      event.target.notes.value,
      checklist,
      projectID,
    );

    project.addTodo(newToDo);
    console.log(
      project.todoList.forEach((item) =>
        console.log(item.todoItem()),
      ),
    );
  });

  const inputItems = [
    {
      name: "title",
      message: "What to Do:",
    },
    {
      name: "description",
      message: "Some details:",
    },
    {
      name: "notes",
      message: "Further notes:",
    },
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

  const checkListLabel = document.createElement("label");
  checkListLabel.htmlFor = "checklist";
  checkListLabel.style.display = "block";
  checkListLabel.textContent = "Task Checklist";
  todoForm.appendChild(checkListLabel);

  const checkListParent = document.createElement("ol");
  checkListParent.id = "checklist";

  for (let index = 0; index < 3; index++) {
    const checkListItem = document.createElement("li");
    const checkListInput = document.createElement("input");
    checkListInput.name = "checklist";
    checkListInput.type = "text";
    checkListItem.appendChild(checkListInput);
    checkListParent.append(checkListItem);
  }

  todoForm.appendChild(checkListParent);

  const submit = document.createElement("input");
  submit.style.display = "block";
  submit.type = "submit";
  submit.name = "Add";
  submit.id = "submit";
  todoForm.appendChild(submit);

  mainContainer.appendChild(todoForm);
};

export { firstVisit };