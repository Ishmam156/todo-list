import { IDGenerator, saveToLocalStorage } from "../helper";

// To-Do Factory Function
const todo = (
  title,
  description,
  dueDate,
  priority,
  projectID,
  completion = "",
) => {
  const itemTitle = title;
  const itemDescription = description;
  const itemDue = dueDate;
  let itemPriority = priority;
  let itemCompletionStatus = completion ? completion : false; // Help with re-render from localStorage
  const parentID = projectID;
  const id = IDGenerator();

  // Update localStorage on any changes made to keep updated
  const updatePriority = (priority) => {
    itemPriority = priority;
    saveToLocalStorage();
    return itemPriority;
  };

  const updateCompletionStatus = () => {
    itemCompletionStatus = !itemCompletionStatus;
    saveToLocalStorage();
    return itemCompletionStatus;
  };

  const todoItem = () => {
    return {
      id,
      parentID,
      itemTitle,
      itemDescription,
      itemDue,
      itemPriority,
      itemCompletionStatus,
    };
  };

  return {
    todoItem,
    updatePriority,
    updateCompletionStatus,
  };
};

export { todo };
