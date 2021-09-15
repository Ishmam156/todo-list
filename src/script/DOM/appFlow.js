import { displayForms } from "./addForm";
import { displayAbout } from "./aboutPage";
import { mainLayout } from "./mainLayout";

const paintDOM = (projectID, firstVisit) => {
  const logoButton = document.getElementById("logo");
  logoButton.addEventListener("click", () => location.reload());

  const aboutButton = document.getElementById("about");
  aboutButton.addEventListener("click", () => displayAbout());

  if (firstVisit) {
    displayForms(projectID, "first");
  } else {
    mainLayout(projectID);
  }
};

export { paintDOM };
