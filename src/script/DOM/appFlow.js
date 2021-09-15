import { displayForms } from "./addForm";
import { displayAbout } from "./aboutPage";

const paintDOM = (projectID) => {
  const logoButton = document.getElementById("logo");
  logoButton.addEventListener("click", () => location.reload());

  const aboutButton = document.getElementById("about");
  aboutButton.addEventListener("click", () => displayAbout());

  displayForms(projectID, "first");
};

export { paintDOM };
