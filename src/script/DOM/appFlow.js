import { displayForms } from "./addForm";

const paintLayout = (projectID) => {
  const logo = document.getElementById("logo");
  logo.addEventListener("click", () => location.reload());

  displayForms(projectID, "first");
};

export { paintLayout };
