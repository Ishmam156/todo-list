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
  const itemChecklist = [...checklist];
  const itemID = projectID;

  return {
    itemTitle,
    itemDescription,
    itemDue,
    itemPriority,
    itemNotes,
    itemChecklist,
  };
};
