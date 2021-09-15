import { IDGenerator } from "../helper";

const todo = (title, description, dueDate, priority, projectID) => {
  const itemTitle = title;
  const itemDescription = description;
  const itemDue = dueDate;
  let itemPriority = priority;
  let itemCompletionStatus = false;
  const parentID = projectID;
  const id = IDGenerator();

  const updatePriority = (priority) => {
    itemPriority = priority;
    return itemPriority;
  };

  const updateCompletionStatus = () => {
    itemCompletionStatus = !itemCompletionStatus;
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
