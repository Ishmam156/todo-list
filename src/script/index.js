import "../style/reset.css";
import "../style/style.css";

import { todo } from "./todo";
import { project } from "./project";

const allProjects = [];

const startProject = project();

allProjects.push(startProject);

const date = new Date();

const newTodo = todo(
  "First Todo",
  "This is going to change things",
  date,
  "high",
  "Really need to look into this",
  "",
  startProject.projectID
);
startProject.addTodo(newTodo);

console.log("todo", newTodo);
console.log("todo item", newTodo.todoItem);
console.log("project", startProject);

newTodo.addToChecklist("Hungry now", false);
newTodo.addToChecklist("Order food", true);

const id = newTodo.todoItem.itemChecklist[0].id;

console.log({ id });

console.log("todo item", newTodo.todoItem.itemChecklist);
console.log(newTodo.updateCheckList(id));
// console.log("todo item", newTodo.todoItem.itemChecklist);
