const displayAbout = (projectID, type) => {
  const mainContainer = document.getElementById("innerContainer");

  mainContainer.innerHTML = "";
  const aboutElement = document.createElement("div");
  aboutElement.id = "messageDiv";

  const header = document.createElement("h3");
  header.textContent = "Implementation Details";
  aboutElement.appendChild(header);

  const firstParagraph = document.createElement("p");
  firstParagraph.textContent =
    "Welcome to your dynamic To-Do App that lets you add and keep track of all your tasks!";
  aboutElement.appendChild(firstParagraph);

  const secondParagraph = document.createElement("p");
  secondParagraph.textContent =
    "The main features of the application are as below:";
  aboutElement.appendChild(secondParagraph);

  const list = document.createElement("ul");

  const features = [
    "Ability to create your own project",
    "Categories your To-Dos as per the project",
    "Change priority of your To-Dos",
    "Get an idea of number of days left till task deadline",
    "Remove To-Do's from the list once done",
    "Single Page App with all information dynamically refreshing",
  ];

  features.forEach((item) => {
    const element = document.createElement("li");
    element.textContent = item;
    list.appendChild(element);
  });

  aboutElement.appendChild(list);

  const goBack = document.createElement("button");
  goBack.textContent = "Finish To-Dos!";
  goBack.id = "goBack";
  aboutElement.appendChild(goBack);

  goBack.addEventListener("click", () => location.reload());

  mainContainer.appendChild(aboutElement);
};

export { displayAbout };
