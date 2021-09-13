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
  const itemChecklist = checklist ? [...checklist] : [];
  const itemID = projectID;

  const addToChecklist = (task, status) => {
    itemChecklist.push({
      task,
      status,
      id: IDGenerator(),
    });
  };

  const todoItem = () => {
    return {
      itemID,
      itemTitle,
      itemDescription,
      itemDue,
      itemPriority,
      itemNotes,
      itemChecklist,
    };
  };

  return {
    todoItem,
    addToChecklist,
  };
};
