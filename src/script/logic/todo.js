import { IDGenerator } from "../helper";

const todo = (
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist,
  projectID,
) => {
  const itemTitle = title;
  const itemDescription = description;
  const itemDue = dueDate;
  let itemPriority = priority;
  const itemNotes = notes;
  let itemCompletionStatus = false;
  const parentID = projectID;
  const id = IDGenerator();
  let itemChecklist = [];

  const addToChecklist = (task, status) => {
    itemChecklist.push({
      task,
      status,
      id: IDGenerator(),
    });
  };

  if (checklist) {
    checklist.forEach((item) => {
      addToChecklist(item.task, false);
    });
  }

  const updateCheckList = (id) => {
    itemChecklist = itemChecklist.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item,
    );

    return itemChecklist;
  };

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
      itemNotes,
      itemCompletionStatus,
      itemChecklist,
    };
  };

  return {
    todoItem,
    addToChecklist,
    updateCheckList,
    updatePriority,
    updateCompletionStatus,
  };
};

export { todo };
