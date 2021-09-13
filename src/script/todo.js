import { IDGenerator } from "./helper";

const todo = (
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist,
  projectID
) => {
  const itemTitle = title;
  const itemDescription = description;
  const itemDue = dueDate;
  const itemPriority = priority;
  const itemNotes = notes;
  const parentID = projectID;
  const id = IDGenerator();
  let itemChecklist = [];

  if (checklist) {
    checklist.forEach((item) => {
      addToChecklist(item.task, item.status);
    });
  }

  const addToChecklist = (task, status) => {
    itemChecklist.push({
      task,
      status,
      id: IDGenerator(),
    });
  };

  const updateCheckList = (id) => {
    itemChecklist = itemChecklist.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );

    return itemChecklist;
  };

  const todoItem = {
    id,
    parentID,
    itemTitle,
    itemDescription,
    itemDue,
    itemPriority,
    itemNotes,
    itemChecklist,
  };

  return {
    todoItem,
    addToChecklist,
    updateCheckList,
  };
};

export { todo };
