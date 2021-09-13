import { firstVisit } from "./firstTime";

const paintLayout = (projectID) => {
  const logo = document.getElementById("logo");
  logo.addEventListener("click", () => location.reload());

  firstVisit(projectID);
};

export { paintLayout };
