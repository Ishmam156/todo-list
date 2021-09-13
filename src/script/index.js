import "../style/reset.css";
import "../style/style.css";

import { todo } from "./logic/todo";
import { project } from "./logic/project";
import { paintLayout } from "./DOM/layout";

const allProjects = [];

const startProject = project();

allProjects.push(startProject);

// const date = new Date();

// const newTodo = todo(
//   "First Todo",
//   "This is going to change things",
//   date,
//   "high",
//   "Really need to look into this",
//   "",
//   startProject.projectID,
// );
// startProject.addTodo(newTodo);

// // console.log("todo", newTodo);
// console.log("todo item", newTodo.todoItem());
// // console.log("project", startProject);

// newTodo.addToChecklist("Hungry now", false);
// newTodo.addToChecklist("Order food", true);

// const id = newTodo.todoItem().itemChecklist[0].id;

// // console.log("todo item", newTodo.todoItem.itemChecklist);
// console.log(newTodo.updateCheckList(id));
// console.log(newTodo.updateCompletionStatus());
// // console.log("todo item", newTodo.todoItem());
// console.log(newTodo.updatePriority("low"));
// // console.log("todo item", newTodo.todoItem());
// console.log(
//   allProjects
//     .find((item) => item.projectID === startProject.projectID)
//     .todoList[0].todoItem(),
// );

paintLayout(startProject.projectID);

export { allProjects };
