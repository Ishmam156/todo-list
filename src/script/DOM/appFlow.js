import { firstVisit } from "./addForm";
import { mainLayout } from "./mainLayout";

const paintUI = (projectID, localStatus) => {
  const logo = document.getElementById("logo");
  logo.addEventListener("click", () => location.reload());

  const reStart = document.getElementById("reStart");
  reStart.addEventListener("click", () => {
    console.log("test");
    localStorage.clear();
    location.reload();
  });

  if (localStatus) {
    mainLayout(projectID);
  } else {
    firstVisit(projectID);
  }
};

export { paintUI };
