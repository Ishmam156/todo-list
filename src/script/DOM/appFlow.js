import { displayForms } from "./addForm";

const paintDOM = (projectID) => {
  const logo = document.getElementById("logo");
  logo.addEventListener("click", () => location.reload());

  displayForms(projectID, "first");
};

export { paintDOM };
