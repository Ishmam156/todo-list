import { firstVisit } from "./addForm";

const paintLayout = (projectID) => {
  const logo = document.getElementById("logo");
  logo.addEventListener("click", () => location.reload());

  firstVisit(projectID, true);
};

export { paintLayout };
