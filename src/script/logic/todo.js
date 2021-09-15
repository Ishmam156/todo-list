import { IDGenerator, saveToLocalStorage } from "../helper";

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
  let itemCompletionStatus = completion ? completion : false;
  const parentID = projectID;
  const id = IDGenerator();

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
