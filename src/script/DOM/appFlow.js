import { displayForms } from "./addForm";
import { displayAbout } from "./aboutPage";
import { mainLayout } from "./mainLayout";

const paintDOM = (projectID, firstVisit) => {
  // Event listeners for navigation help
  const logoButton = document.getElementById("logo");
  logoButton.addEventListener("click", () => location.reload());

  const restartButton = document.getElementById("restart");
  restartButton.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });

  const aboutButton = document.getElementById("about");
  aboutButton.addEventListener("click", () => displayAbout());

  // Show App introduction if first time visit
  if (firstVisit) {
    displayForms(projectID, "first");
  } else {
    mainLayout(projectID);
  }
};

export { paintDOM };
