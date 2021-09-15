/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style/reset.css":
/*!*****************************!*\
  !*** ./src/style/reset.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/script/DOM/aboutPage.js":
/*!*************************************!*\
  !*** ./src/script/DOM/aboutPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAbout": () => (/* binding */ displayAbout)
/* harmony export */ });
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




/***/ }),

/***/ "./src/script/DOM/addForm.js":
/*!***********************************!*\
  !*** ./src/script/DOM/addForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayForms": () => (/* binding */ displayForms)
/* harmony export */ });
/* harmony import */ var _logic_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/todo */ "./src/script/logic/todo.js");
/* harmony import */ var _logic_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/project */ "./src/script/logic/project.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/script/index.js");
/* harmony import */ var _mainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainLayout */ "./src/script/DOM/mainLayout.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper */ "./src/script/helper.js");






const displayForms = (projectID, type) => {
  const mainContainer = document.getElementById("innerContainer");

  const displayErrorDiv = (parentNode) => {
    const displayError = document.createElement("div");
    displayError.style.background = _helper__WEBPACK_IMPORTED_MODULE_4__.pastelRed;
    displayError.style.display = "none";
    displayError.id = "displayError";
    parentNode.appendChild(displayError);
  };

  const showError = (text) => {
    const displayError = document.getElementById("displayError");
    displayError.textContent = text;
    displayError.style.display = "block";

    setTimeout(() => {
      displayError.textContent = "";
      displayError.style.display = "none";
    }, 1500);
  };

  const addProjectDisplay = () => {
    mainContainer.innerHTML = "";
    const projectForm = document.createElement("form");
    projectForm.id = "messageDiv";

    projectForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!(0,_helper__WEBPACK_IMPORTED_MODULE_4__.checkBlankString)(event.target.projectLabel.value)) {
        showError("You need to add a project name!");
        return null;
      }

      const newProject = (0,_logic_project__WEBPACK_IMPORTED_MODULE_1__.project)(event.target.projectLabel.value);
      _index__WEBPACK_IMPORTED_MODULE_2__.allProjects.push(newProject);

      (0,_mainLayout__WEBPACK_IMPORTED_MODULE_3__.mainLayout)(newProject.projectID);
      (0,_helper__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)();
    });

    const header = document.createElement("h3");
    header.textContent = "Add your Project!";
    projectForm.appendChild(header);

    displayErrorDiv(projectForm);

    const projectLabel = document.createElement("label");
    projectLabel.htmlFor = "projectLabel";
    projectLabel.innerText = "Project Name:";
    projectLabel.style.display = "block";
    projectForm.appendChild(projectLabel);

    const input = document.createElement("input");
    input.type = "text";
    input.name = "projectLabel";
    input.id = "projectLabel";
    input.required = true;
    input.autofocus = true;
    projectForm.appendChild(input);

    const submit = document.createElement("input");
    submit.style.display = "block";
    submit.type = "submit";
    submit.name = "Add";
    submit.id = "submit";
    projectForm.appendChild(submit);

    mainContainer.appendChild(projectForm);
  };

  const addTodoDisplay = () => {
    mainContainer.innerHTML = "";
    const todoForm = document.createElement("form");
    todoForm.id = "messageDiv";

    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const project = _index__WEBPACK_IMPORTED_MODULE_2__.allProjects.find(
        (item) => item.projectID === projectID,
      );

      if (!(0,_helper__WEBPACK_IMPORTED_MODULE_4__.checkBlankString)(event.target.title.value)) {
        showError("You need to provide a title!");
        return null;
      } else if (!(0,_helper__WEBPACK_IMPORTED_MODULE_4__.checkBlankString)(event.target.description.value)) {
        showError("You need to provide a description!");
        return null;
      }

      const newToDo = (0,_logic_todo__WEBPACK_IMPORTED_MODULE_0__.todo)(
        event.target.title.value,
        event.target.description.value,
        event.target.duedate.value,
        event.target.priority.value,
        projectID,
      );

      project.addTodo(newToDo);
      (0,_helper__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)();

      (0,_mainLayout__WEBPACK_IMPORTED_MODULE_3__.mainLayout)(projectID);
    });

    const header = document.createElement("h3");
    header.textContent = "Add your To-Do!";
    todoForm.appendChild(header);

    displayErrorDiv(todoForm);

    const inputItems = [
      {
        name: "title",
        message: "What to Do:",
      },
      {
        name: "description",
        message: "Some details:",
      },
    ];

    inputItems.forEach((item) => {
      const label = document.createElement("label");
      label.htmlFor = item.name;
      label.innerText = item.message;
      label.style.display = "block";
      todoForm.appendChild(label);

      const input = document.createElement("input");
      input.type = "text";
      input.name = item.name;
      input.id = item.name;
      input.required = true;

      if (item.name === "title") {
        input.autofocus = true;
      }
      todoForm.appendChild(input);
    });

    const dueDateLabel = document.createElement("label");
    dueDateLabel.htmlFor = "duedate";
    dueDateLabel.innerText = "By when:";
    dueDateLabel.style.display = "block";
    todoForm.appendChild(dueDateLabel);

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.name = "duedate";
    dueDateInput.id = "duedate";
    dueDateInput.required = true;
    todoForm.appendChild(dueDateInput);

    const priorityLabel = document.createElement("label");
    priorityLabel.htmlFor = "priority";
    priorityLabel.style.display = "block";
    priorityLabel.textContent = "Task priority";
    todoForm.appendChild(priorityLabel);

    const priorityParent = document.createElement("fieldset");
    priorityParent.id = "priority";

    const priortyOptions = ["low", "medium", "high"];

    priortyOptions.forEach((item) => {
      const label = document.createElement("label");
      label.htmlFor = item;
      label.textContent = item;
      priorityParent.appendChild(label);

      const priority = document.createElement("input");
      priority.type = "radio";
      priority.id = item;
      priority.value = item;
      priority.name = "priority";

      if (item === "medium") {
        priority.checked = true;
      }

      priorityParent.appendChild(priority);
    });

    todoForm.appendChild(priorityParent);

    const submit = document.createElement("input");
    submit.style.display = "block";
    submit.type = "submit";
    submit.name = "Add";
    submit.id = "submit";
    todoForm.appendChild(submit);

    mainContainer.appendChild(todoForm);
  };

  const welcomeMessage = () => {
    mainContainer.innerHTML = "";
    const messageDiv = document.createElement("div");
    messageDiv.id = "messageDiv";
    const welcomeMessage = document.createElement("h3");
    welcomeMessage.textContent =
      "Let's change all your To-Dos into To-Dones!";
    messageDiv.appendChild(welcomeMessage);

    const clickDetails = document.createElement("p");
    clickDetails.textContent =
      "Your To-Dos will get added to Projects which will help you organize them!";
    messageDiv.appendChild(clickDetails);

    const clickFinalMessage = document.createElement("p");
    clickFinalMessage.textContent =
      "We've created the first project for you :)";
    clickFinalMessage.id = "clickFinalMessage";
    messageDiv.appendChild(clickFinalMessage);

    const clickButton = document.createElement("button");
    clickButton.textContent = "Yes, yes & yes!";

    clickButton.addEventListener("click", addTodoDisplay);

    messageDiv.appendChild(clickButton);
    mainContainer.appendChild(messageDiv);
  };

  if (type === "first") {
    welcomeMessage();
  } else if (type === "todo") {
    addTodoDisplay();
  } else {
    addProjectDisplay();
  }
};




/***/ }),

/***/ "./src/script/DOM/appFlow.js":
/*!***********************************!*\
  !*** ./src/script/DOM/appFlow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paintDOM": () => (/* binding */ paintDOM)
/* harmony export */ });
/* harmony import */ var _addForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addForm */ "./src/script/DOM/addForm.js");
/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutPage */ "./src/script/DOM/aboutPage.js");
/* harmony import */ var _mainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainLayout */ "./src/script/DOM/mainLayout.js");




const paintDOM = (projectID, firstVisit) => {
  const logoButton = document.getElementById("logo");
  logoButton.addEventListener("click", () => location.reload());

  const restartButton = document.getElementById("restart");
  restartButton.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });

  const aboutButton = document.getElementById("about");
  aboutButton.addEventListener("click", () => (0,_aboutPage__WEBPACK_IMPORTED_MODULE_1__.displayAbout)());

  if (firstVisit) {
    (0,_addForm__WEBPACK_IMPORTED_MODULE_0__.displayForms)(projectID, "first");
  } else {
    (0,_mainLayout__WEBPACK_IMPORTED_MODULE_2__.mainLayout)(projectID);
  }
};




/***/ }),

/***/ "./src/script/DOM/mainLayout.js":
/*!**************************************!*\
  !*** ./src/script/DOM/mainLayout.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainLayout": () => (/* binding */ mainLayout)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/script/index.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ "./src/script/helper.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var _addForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addForm */ "./src/script/DOM/addForm.js");





const mainLayout = (projectID) => {
  const mainContainer = document.getElementById("innerContainer");

  mainContainer.innerHTML = ""; // remove later

  const dashboard = document.createElement("div");
  dashboard.id = "dashboard";

  const toDosDisplay = (id) => {
    const singleProject = _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.find(
      (project) => project.projectID === id,
    );

    const clearDiv = document.getElementById("todos");
    if (clearDiv) {
      clearDiv.remove();
    }

    const taskDisplayCheck = document.getElementById("singleItem");
    if (taskDisplayCheck) {
      taskDisplayCheck.remove();
    }

    const todos = document.createElement("div");
    todos.id = "todos";

    const todoTitle = document.createElement("h2");
    todoTitle.textContent = "Todos";

    const addTodoButton = document.createElement("button");
    addTodoButton.textContent = "+ Add Todo";

    addTodoButton.addEventListener("click", () => {
      (0,_addForm__WEBPACK_IMPORTED_MODULE_2__.displayForms)(singleProject.projectID, "todo");
    });

    todos.appendChild(todoTitle);
    todos.appendChild(addTodoButton);

    const projectList = singleProject.getTodo();

    projectList.forEach((task) => {
      const singleToDo = task.todoItem();

      const todoDiv = document.createElement("div");
      todoDiv.className = "singleToDo";
      todoDiv.textContent = singleToDo.itemTitle;

      const colorPriority = {
        high: _helper__WEBPACK_IMPORTED_MODULE_1__.pastelRed,
        medium: _helper__WEBPACK_IMPORTED_MODULE_1__.pastelYellow,
        low: _helper__WEBPACK_IMPORTED_MODULE_1__.pastelGreen,
      };

      todoDiv.style.backgroundColor =
        colorPriority[singleToDo.itemPriority];

      if (singleToDo.itemCompletionStatus) {
        // todoDiv.style.textDecoration = "line-through";
        todoDiv.classList.add("strike");
        todoDiv.style.backgroundColor = _helper__WEBPACK_IMPORTED_MODULE_1__.pastelGreen;
      }

      todoDiv.addEventListener("click", () => {
        singleTaskDisplay(singleToDo.id, singleToDo.parentID);
      });

      todos.appendChild(todoDiv);
    });
    dashboard.appendChild(todos);
  };

  const singleTaskDisplay = (taskID, projectID) => {
    const taskDisplayCheck = document.getElementById("singleItem");
    if (taskDisplayCheck) {
      taskDisplayCheck.remove();
    }

    const projectTask = _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.find(
      (project) => project.projectID === projectID,
    );

    const task = projectTask
      .getTodo()
      .find((task) => task.todoItem().id === taskID);

    const taskDetails = task.todoItem();

    const singleItem = document.createElement("div");
    singleItem.id = "singleItem";

    const title = document.createElement("h2");
    title.id = "todoTitle";
    title.textContent = taskDetails.itemTitle;

    const descriptionLabel = document.createElement("label");
    descriptionLabel.htmlFor = "todoDescription";
    descriptionLabel.textContent = "Task description";
    descriptionLabel.classList.add("todoLabel");

    const description = document.createElement("div");
    description.id = "todoDescription";
    description.textContent = taskDetails.itemDescription;

    const priorityLabel = document.createElement("label");
    priorityLabel.htmlFor = "todoPriority";
    priorityLabel.textContent = "Priority";
    priorityLabel.classList.add("todoLabel");

    const priority = document.createElement("div");
    priority.id = "todoPriority";

    const priorityTypes = [
      { type: "low", color: _helper__WEBPACK_IMPORTED_MODULE_1__.pastelGreen },
      { type: "medium", color: _helper__WEBPACK_IMPORTED_MODULE_1__.pastelYellow },
      { type: "high", color: _helper__WEBPACK_IMPORTED_MODULE_1__.pastelRed },
    ];

    priorityTypes.forEach((item) => {
      const element = document.createElement("div");
      element.textContent = item.type;
      element.style.backgroundColor = item.color;
      element.style.fontSize = "14px";

      element.addEventListener("click", () => {
        task.updatePriority(item.type);
        toDosDisplay(taskDetails.parentID);
        singleTaskDisplay(taskDetails.id, taskDetails.parentID);
      });

      priority.appendChild(element);
    });

    const dueDateLabel = document.createElement("label");
    dueDateLabel.htmlFor = "todoDueDate";
    dueDateLabel.textContent = "Due Date";
    dueDateLabel.classList.add("todoLabel");

    const dueDate = document.createElement("div");
    dueDate.id = "todoDueDate";

    const daysLeft = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(
      new Date(taskDetails.itemDue),
      new Date(),
    );
    dueDate.textContent =
      daysLeft > 1
        ? `${daysLeft} days`
        : daysLeft > 0
        ? `${daysLeft} day`
        : "Date over";

    if (daysLeft < 0) {
      dueDate.style.backgroundColor = _helper__WEBPACK_IMPORTED_MODULE_1__.pastelRed;
    }

    const completionColor = {
      true: _helper__WEBPACK_IMPORTED_MODULE_1__.pastelGreen,
      false: _helper__WEBPACK_IMPORTED_MODULE_1__.pastelRed,
    };

    const completionLabel = document.createElement("label");
    completionLabel.htmlFor = "todoCompletion";
    completionLabel.textContent = "Task Status";
    completionLabel.classList.add("todoLabel");

    const completionStatus = document.createElement("div");
    completionStatus.id = "todoCompletion";
    completionStatus.textContent = taskDetails.itemCompletionStatus
      ? "Completed"
      : "Not Completed";
    completionStatus.style.backgroundColor =
      completionColor[taskDetails.itemCompletionStatus];

    completionStatus.style.color = "black";

    completionStatus.addEventListener("click", () => {
      task.updateCompletionStatus();
      toDosDisplay(taskDetails.parentID);
      singleTaskDisplay(taskDetails.id, taskDetails.parentID);
    });

    const deleteTask = document.createElement("button");
    deleteTask.textContent = "Delete Task";
    deleteTask.style.backgroundColor = "red";

    deleteTask.addEventListener("click", () => {
      projectTask.deleteTodo(taskID);
      displayProjects(projectTask.projectID);
      toDosDisplay(projectTask.projectID);
    });

    singleItem.appendChild(title);
    singleItem.appendChild(descriptionLabel);
    singleItem.appendChild(description);
    singleItem.appendChild(priorityLabel);
    singleItem.appendChild(priority);
    singleItem.appendChild(dueDateLabel);
    singleItem.appendChild(dueDate);
    singleItem.appendChild(completionLabel);
    singleItem.appendChild(completionStatus);
    singleItem.appendChild(deleteTask);
    dashboard.appendChild(singleItem);
  };

  const displayProjects = (id) => {
    const clearDiv = document.getElementById("projects");
    if (clearDiv) {
      clearDiv.remove();
    }
    const projects = document.createElement("div");
    projects.id = "projects";

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = "Projects";

    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "+ Add Project";
    addProjectButton.addEventListener("click", () => {
      (0,_addForm__WEBPACK_IMPORTED_MODULE_2__.displayForms)("", "project");
    });
    projects.appendChild(projectTitle);
    projects.appendChild(addProjectButton);

    _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((project) => {
      const singleProject = document.createElement("div");
      singleProject.textContent = project.projectName;
      singleProject.className = "singleProject";
      singleProject.dataset.projectId = project.projectID;

      if (project.projectID === id) {
        singleProject.style.backgroundColor = "#7aa09b";
      }

      singleProject.addEventListener("click", () => {
        displayProjects(project.projectID);
        toDosDisplay(project.projectID);
      });

      projects.appendChild(singleProject);
    });

    dashboard.appendChild(projects);
  };

  mainContainer.appendChild(dashboard);
  displayProjects(projectID);
  toDosDisplay(projectID);
};




/***/ }),

/***/ "./src/script/helper.js":
/*!******************************!*\
  !*** ./src/script/helper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDGenerator": () => (/* binding */ IDGenerator),
/* harmony export */   "pastelGreen": () => (/* binding */ pastelGreen),
/* harmony export */   "pastelYellow": () => (/* binding */ pastelYellow),
/* harmony export */   "pastelRed": () => (/* binding */ pastelRed),
/* harmony export */   "checkBlankString": () => (/* binding */ checkBlankString),
/* harmony export */   "saveToLocalStorage": () => (/* binding */ saveToLocalStorage),
/* harmony export */   "getFromLocalStorage": () => (/* binding */ getFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/script/index.js");
/* harmony import */ var _logic_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/project */ "./src/script/logic/project.js");
/* harmony import */ var _logic_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/todo */ "./src/script/logic/todo.js");




function IDGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0)
      .toString(16)
      .substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

const pastelGreen = "#9AD7A5";
const pastelYellow = "#FFD9BD";
const pastelRed = "#EE9D94";

const checkBlankString = (string) => {
  return string.trim().length;
};

const getFromLocalStorage = (checkLocalStorage) => {
  checkLocalStorage.map((item) => {
    const singleProject = (0,_logic_project__WEBPACK_IMPORTED_MODULE_1__.project)(item.projectName, item.projectID);

    item.todos.forEach((singleTodo) => {
      singleProject.addTodo(
        (0,_logic_todo__WEBPACK_IMPORTED_MODULE_2__.todo)(
          singleTodo.title,
          singleTodo.description,
          singleTodo.dueDate,
          singleTodo.priority,
          singleTodo.parentID,
          singleTodo.completion,
        ),
      );
    });

    _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.push(singleProject);
  });
};

const saveToLocalStorage = () => {
  const projectsToLocalStorage = _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.map((project) =>
    project.toJSON(),
  );

  localStorage.setItem(
    "todo-projects",
    JSON.stringify(projectsToLocalStorage),
  );
};



// Object relationship
// Checklist -> Todo -> Project
// Checklist -> Checklist ID and Todo ID
// Todo -> Todo ID and Project ID


/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects)
/* harmony export */ });
/* harmony import */ var _style_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/reset.css */ "./src/style/reset.css");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");
/* harmony import */ var _logic_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/project */ "./src/script/logic/project.js");
/* harmony import */ var _DOM_appFlow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM/appFlow */ "./src/script/DOM/appFlow.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper */ "./src/script/helper.js");







let allProjects = [];
const checkLocalStorage = JSON.parse(
  localStorage.getItem("todo-projects"),
);
let firstVisit = false;

if (checkLocalStorage) {
  (0,_helper__WEBPACK_IMPORTED_MODULE_4__.getFromLocalStorage)(checkLocalStorage);
} else {
  const startProject = (0,_logic_project__WEBPACK_IMPORTED_MODULE_2__.project)("Starter");

  allProjects.push(startProject);
  firstVisit = true;

  (0,_helper__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)();
}

const starterProject = allProjects.find(
  (project) => project.projectName === "Starter",
);

(0,_DOM_appFlow__WEBPACK_IMPORTED_MODULE_3__.paintDOM)(starterProject.projectID, firstVisit);




/***/ }),

/***/ "./src/script/logic/project.js":
/*!*************************************!*\
  !*** ./src/script/logic/project.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/script/helper.js");


const project = (name, id = "") => {
  const projectName = name;
  const projectID = id ? id : (0,_helper__WEBPACK_IMPORTED_MODULE_0__.IDGenerator)();
  let todoList = [];

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const deleteTodo = (id) => {
    todoList = todoList.filter((item) => item.todoItem().id !== id);
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();
  };

  const getTodo = () => todoList;

  const toJSON = () => {
    return {
      projectName,
      projectID,
      todos: todoList.map((todo) => {
        const singleToDo = todo.todoItem();
        return {
          title: singleToDo.itemTitle,
          description: singleToDo.itemDescription,
          dueDate: singleToDo.itemDue,
          priority: singleToDo.itemPriority,
          parentID: singleToDo.parentID,
          completion: singleToDo.itemCompletionStatus,
        };
      }),
    };
  };

  return {
    projectName,
    projectID,
    getTodo,
    addTodo,
    deleteTodo,
    toJSON,
  };
};




/***/ }),

/***/ "./src/script/logic/todo.js":
/*!**********************************!*\
  !*** ./src/script/logic/todo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/script/helper.js");


const todo = (
  title,
  description,
  dueDate,
  priority,
  projectID,
  completion = "",
) => {
  const itemTitle = title;
  const itemDescription = description;
  const itemDue = dueDate;
  let itemPriority = priority;
  let itemCompletionStatus = completion ? completion : false;
  const parentID = projectID;
  const id = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.IDGenerator)();

  const updatePriority = (priority) => {
    itemPriority = priority;
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();
    return itemPriority;
  };

  const updateCompletionStatus = () => {
    itemCompletionStatus = !itemCompletionStatus;
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();
    return itemCompletionStatus;
  };

  const todoItem = () => {
    return {
      id,
      parentID,
      itemTitle,
      itemDescription,
      itemDue,
      itemPriority,
      itemCompletionStatus,
    };
  };

  return {
    todoItem,
    updatePriority,
    updateCompletionStatus,
  };
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9yZXNldC5jc3M/Y2MxZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzPzMyMGIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdC9ET00vYWJvdXRQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHQvRE9NL2FkZEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdC9ET00vYXBwRmxvdy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0L0RPTS9tYWluTGF5b3V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHQvaGVscGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdC9sb2dpYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHQvbG9naWMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fREFZKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBkaXNwbGF5QWJvdXQgPSAocHJvamVjdElELCB0eXBlKSA9PiB7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlubmVyQ29udGFpbmVyXCIpO1xuXG4gIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgYWJvdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWJvdXRFbGVtZW50LmlkID0gXCJtZXNzYWdlRGl2XCI7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkltcGxlbWVudGF0aW9uIERldGFpbHNcIjtcbiAgYWJvdXRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgZmlyc3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZmlyc3RQYXJhZ3JhcGgudGV4dENvbnRlbnQgPVxuICAgIFwiV2VsY29tZSB0byB5b3VyIGR5bmFtaWMgVG8tRG8gQXBwIHRoYXQgbGV0cyB5b3UgYWRkIGFuZCBrZWVwIHRyYWNrIG9mIGFsbCB5b3VyIHRhc2tzIVwiO1xuICBhYm91dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmlyc3RQYXJhZ3JhcGgpO1xuXG4gIGNvbnN0IHNlY29uZFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzZWNvbmRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPVxuICAgIFwiVGhlIG1haW4gZmVhdHVyZXMgb2YgdGhlIGFwcGxpY2F0aW9uIGFyZSBhcyBiZWxvdzpcIjtcbiAgYWJvdXRFbGVtZW50LmFwcGVuZENoaWxkKHNlY29uZFBhcmFncmFwaCk7XG5cbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICBjb25zdCBmZWF0dXJlcyA9IFtcbiAgICBcIkFiaWxpdHkgdG8gY3JlYXRlIHlvdXIgb3duIHByb2plY3RcIixcbiAgICBcIkNhdGVnb3JpZXMgeW91ciBUby1Eb3MgYXMgcGVyIHRoZSBwcm9qZWN0XCIsXG4gICAgXCJDaGFuZ2UgcHJpb3JpdHkgb2YgeW91ciBUby1Eb3NcIixcbiAgICBcIkdldCBhbiBpZGVhIG9mIG51bWJlciBvZiBkYXlzIGxlZnQgdGlsbCB0YXNrIGRlYWRsaW5lXCIsXG4gICAgXCJSZW1vdmUgVG8tRG8ncyBmcm9tIHRoZSBsaXN0IG9uY2UgZG9uZVwiLFxuICAgIFwiU2luZ2xlIFBhZ2UgQXBwIHdpdGggYWxsIGluZm9ybWF0aW9uIGR5bmFtaWNhbGx5IHJlZnJlc2hpbmdcIixcbiAgXTtcblxuICBmZWF0dXJlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcblxuICBhYm91dEVsZW1lbnQuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgY29uc3QgZ29CYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZ29CYWNrLnRleHRDb250ZW50ID0gXCJGaW5pc2ggVG8tRG9zIVwiO1xuICBnb0JhY2suaWQgPSBcImdvQmFja1wiO1xuICBhYm91dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ29CYWNrKTtcblxuICBnb0JhY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKTtcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0RWxlbWVudCk7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5QWJvdXQgfTtcbiIsImltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi4vbG9naWMvdG9kb1wiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuLi9sb2dpYy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgbWFpbkxheW91dCB9IGZyb20gXCIuL21haW5MYXlvdXRcIjtcbmltcG9ydCB7XG4gIGNoZWNrQmxhbmtTdHJpbmcsXG4gIHBhc3RlbFJlZCxcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlLFxufSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmNvbnN0IGRpc3BsYXlGb3JtcyA9IChwcm9qZWN0SUQsIHR5cGUpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5uZXJDb250YWluZXJcIik7XG5cbiAgY29uc3QgZGlzcGxheUVycm9yRGl2ID0gKHBhcmVudE5vZGUpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpc3BsYXlFcnJvci5zdHlsZS5iYWNrZ3JvdW5kID0gcGFzdGVsUmVkO1xuICAgIGRpc3BsYXlFcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGlzcGxheUVycm9yLmlkID0gXCJkaXNwbGF5RXJyb3JcIjtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGRpc3BsYXlFcnJvcik7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0Vycm9yID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlFcnJvclwiKTtcbiAgICBkaXNwbGF5RXJyb3IudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGRpc3BsYXlFcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXNwbGF5RXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZGlzcGxheUVycm9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9LCAxNTAwKTtcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0RGlzcGxheSA9ICgpID0+IHtcbiAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBwcm9qZWN0Rm9ybS5pZCA9IFwibWVzc2FnZURpdlwiO1xuXG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghY2hlY2tCbGFua1N0cmluZyhldmVudC50YXJnZXQucHJvamVjdExhYmVsLnZhbHVlKSkge1xuICAgICAgICBzaG93RXJyb3IoXCJZb3UgbmVlZCB0byBhZGQgYSBwcm9qZWN0IG5hbWUhXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QoZXZlbnQudGFyZ2V0LnByb2plY3RMYWJlbC52YWx1ZSk7XG4gICAgICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gICAgICBtYWluTGF5b3V0KG5ld1Byb2plY3QucHJvamVjdElEKTtcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIHlvdXIgUHJvamVjdCFcIjtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgZGlzcGxheUVycm9yRGl2KHByb2plY3RGb3JtKTtcblxuICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcm9qZWN0TGFiZWwuaHRtbEZvciA9IFwicHJvamVjdExhYmVsXCI7XG4gICAgcHJvamVjdExhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdCBOYW1lOlwiO1xuICAgIHByb2plY3RMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXQubmFtZSA9IFwicHJvamVjdExhYmVsXCI7XG4gICAgaW5wdXQuaWQgPSBcInByb2plY3RMYWJlbFwiO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dC5hdXRvZm9jdXMgPSB0cnVlO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBzdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0Lm5hbWUgPSBcIkFkZFwiO1xuICAgIHN1Ym1pdC5pZCA9IFwic3VibWl0XCI7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvZG9EaXNwbGF5ID0gKCkgPT4ge1xuICAgIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHRvZG9Gb3JtLmlkID0gXCJtZXNzYWdlRGl2XCI7XG5cbiAgICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgcHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnByb2plY3RJRCA9PT0gcHJvamVjdElELFxuICAgICAgKTtcblxuICAgICAgaWYgKCFjaGVja0JsYW5rU3RyaW5nKGV2ZW50LnRhcmdldC50aXRsZS52YWx1ZSkpIHtcbiAgICAgICAgc2hvd0Vycm9yKFwiWW91IG5lZWQgdG8gcHJvdmlkZSBhIHRpdGxlIVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2UgaWYgKCFjaGVja0JsYW5rU3RyaW5nKGV2ZW50LnRhcmdldC5kZXNjcmlwdGlvbi52YWx1ZSkpIHtcbiAgICAgICAgc2hvd0Vycm9yKFwiWW91IG5lZWQgdG8gcHJvdmlkZSBhIGRlc2NyaXB0aW9uIVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1RvRG8gPSB0b2RvKFxuICAgICAgICBldmVudC50YXJnZXQudGl0bGUudmFsdWUsXG4gICAgICAgIGV2ZW50LnRhcmdldC5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgZXZlbnQudGFyZ2V0LmR1ZWRhdGUudmFsdWUsXG4gICAgICAgIGV2ZW50LnRhcmdldC5wcmlvcml0eS52YWx1ZSxcbiAgICAgICAgcHJvamVjdElELFxuICAgICAgKTtcblxuICAgICAgcHJvamVjdC5hZGRUb2RvKG5ld1RvRG8pO1xuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAgIG1haW5MYXlvdXQocHJvamVjdElEKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCB5b3VyIFRvLURvIVwiO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBkaXNwbGF5RXJyb3JEaXYodG9kb0Zvcm0pO1xuXG4gICAgY29uc3QgaW5wdXRJdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgICBtZXNzYWdlOiBcIldoYXQgdG8gRG86XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiU29tZSBkZXRhaWxzOlwiLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgaW5wdXRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGxhYmVsLmh0bWxGb3IgPSBpdGVtLm5hbWU7XG4gICAgICBsYWJlbC5pbm5lclRleHQgPSBpdGVtLm1lc3NhZ2U7XG4gICAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgIGlucHV0Lm5hbWUgPSBpdGVtLm5hbWU7XG4gICAgICBpbnB1dC5pZCA9IGl0ZW0ubmFtZTtcbiAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgIGlucHV0LmF1dG9mb2N1cyA9IHRydWU7XG4gICAgICB9XG4gICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSBcImR1ZWRhdGVcIjtcbiAgICBkdWVEYXRlTGFiZWwuaW5uZXJUZXh0ID0gXCJCeSB3aGVuOlwiO1xuICAgIGR1ZURhdGVMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG5cbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZHVlZGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5pZCA9IFwiZHVlZGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gXCJwcmlvcml0eVwiO1xuICAgIHByaW9yaXR5TGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIHByaW9yaXR5XCI7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBjb25zdCBwcmlvcml0eVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICBwcmlvcml0eVBhcmVudC5pZCA9IFwicHJpb3JpdHlcIjtcblxuICAgIGNvbnN0IHByaW9ydHlPcHRpb25zID0gW1wibG93XCIsIFwibWVkaXVtXCIsIFwiaGlnaFwiXTtcblxuICAgIHByaW9ydHlPcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgbGFiZWwuaHRtbEZvciA9IGl0ZW07XG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICBwcmlvcml0eVBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgcHJpb3JpdHkudHlwZSA9IFwicmFkaW9cIjtcbiAgICAgIHByaW9yaXR5LmlkID0gaXRlbTtcbiAgICAgIHByaW9yaXR5LnZhbHVlID0gaXRlbTtcbiAgICAgIHByaW9yaXR5Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgICAgIGlmIChpdGVtID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgIHByaW9yaXR5LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwcmlvcml0eVBhcmVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgfSk7XG5cbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVBhcmVudCk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdC5uYW1lID0gXCJBZGRcIjtcbiAgICBzdWJtaXQuaWQgPSBcInN1Ym1pdFwiO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgfTtcblxuICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9ICgpID0+IHtcbiAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVzc2FnZURpdi5pZCA9IFwibWVzc2FnZURpdlwiO1xuICAgIGNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHdlbGNvbWVNZXNzYWdlLnRleHRDb250ZW50ID1cbiAgICAgIFwiTGV0J3MgY2hhbmdlIGFsbCB5b3VyIFRvLURvcyBpbnRvIFRvLURvbmVzIVwiO1xuICAgIG1lc3NhZ2VEaXYuYXBwZW5kQ2hpbGQod2VsY29tZU1lc3NhZ2UpO1xuXG4gICAgY29uc3QgY2xpY2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2xpY2tEZXRhaWxzLnRleHRDb250ZW50ID1cbiAgICAgIFwiWW91ciBUby1Eb3Mgd2lsbCBnZXQgYWRkZWQgdG8gUHJvamVjdHMgd2hpY2ggd2lsbCBoZWxwIHlvdSBvcmdhbml6ZSB0aGVtIVwiO1xuICAgIG1lc3NhZ2VEaXYuYXBwZW5kQ2hpbGQoY2xpY2tEZXRhaWxzKTtcblxuICAgIGNvbnN0IGNsaWNrRmluYWxNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2xpY2tGaW5hbE1lc3NhZ2UudGV4dENvbnRlbnQgPVxuICAgICAgXCJXZSd2ZSBjcmVhdGVkIHRoZSBmaXJzdCBwcm9qZWN0IGZvciB5b3UgOilcIjtcbiAgICBjbGlja0ZpbmFsTWVzc2FnZS5pZCA9IFwiY2xpY2tGaW5hbE1lc3NhZ2VcIjtcbiAgICBtZXNzYWdlRGl2LmFwcGVuZENoaWxkKGNsaWNrRmluYWxNZXNzYWdlKTtcblxuICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjbGlja0J1dHRvbi50ZXh0Q29udGVudCA9IFwiWWVzLCB5ZXMgJiB5ZXMhXCI7XG5cbiAgICBjbGlja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9kb0Rpc3BsYXkpO1xuXG4gICAgbWVzc2FnZURpdi5hcHBlbmRDaGlsZChjbGlja0J1dHRvbik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlRGl2KTtcbiAgfTtcblxuICBpZiAodHlwZSA9PT0gXCJmaXJzdFwiKSB7XG4gICAgd2VsY29tZU1lc3NhZ2UoKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcInRvZG9cIikge1xuICAgIGFkZFRvZG9EaXNwbGF5KCk7XG4gIH0gZWxzZSB7XG4gICAgYWRkUHJvamVjdERpc3BsYXkoKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZGlzcGxheUZvcm1zIH07XG4iLCJpbXBvcnQgeyBkaXNwbGF5Rm9ybXMgfSBmcm9tIFwiLi9hZGRGb3JtXCI7XG5pbXBvcnQgeyBkaXNwbGF5QWJvdXQgfSBmcm9tIFwiLi9hYm91dFBhZ2VcIjtcbmltcG9ydCB7IG1haW5MYXlvdXQgfSBmcm9tIFwiLi9tYWluTGF5b3V0XCI7XG5cbmNvbnN0IHBhaW50RE9NID0gKHByb2plY3RJRCwgZmlyc3RWaXNpdCkgPT4ge1xuICBjb25zdCBsb2dvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpO1xuICBsb2dvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSk7XG5cbiAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydFwiKTtcbiAgcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcblxuICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XG4gIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaXNwbGF5QWJvdXQoKSk7XG5cbiAgaWYgKGZpcnN0VmlzaXQpIHtcbiAgICBkaXNwbGF5Rm9ybXMocHJvamVjdElELCBcImZpcnN0XCIpO1xuICB9IGVsc2Uge1xuICAgIG1haW5MYXlvdXQocHJvamVjdElEKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgcGFpbnRET00gfTtcbiIsImltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBwYXN0ZWxHcmVlbiwgcGFzdGVsWWVsbG93LCBwYXN0ZWxSZWQgfSBmcm9tIFwiLi4vaGVscGVyXCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGRpc3BsYXlGb3JtcyB9IGZyb20gXCIuL2FkZEZvcm1cIjtcblxuY29uc3QgbWFpbkxheW91dCA9IChwcm9qZWN0SUQpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5uZXJDb250YWluZXJcIik7XG5cbiAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvLyByZW1vdmUgbGF0ZXJcblxuICBjb25zdCBkYXNoYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXNoYm9hcmQuaWQgPSBcImRhc2hib2FyZFwiO1xuXG4gIGNvbnN0IHRvRG9zRGlzcGxheSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHNpbmdsZVByb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdElEID09PSBpZCxcbiAgICApO1xuXG4gICAgY29uc3QgY2xlYXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpO1xuICAgIGlmIChjbGVhckRpdikge1xuICAgICAgY2xlYXJEaXYucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFza0Rpc3BsYXlDaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2luZ2xlSXRlbVwiKTtcbiAgICBpZiAodGFza0Rpc3BsYXlDaGVjaykge1xuICAgICAgdGFza0Rpc3BsYXlDaGVjay5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb3MuaWQgPSBcInRvZG9zXCI7XG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gXCJUb2Rvc1wiO1xuXG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBZGQgVG9kb1wiO1xuXG4gICAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheUZvcm1zKHNpbmdsZVByb2plY3QucHJvamVjdElELCBcInRvZG9cIik7XG4gICAgfSk7XG5cbiAgICB0b2Rvcy5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgIHRvZG9zLmFwcGVuZENoaWxkKGFkZFRvZG9CdXR0b24pO1xuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBzaW5nbGVQcm9qZWN0LmdldFRvZG8oKTtcblxuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHNpbmdsZVRvRG8gPSB0YXNrLnRvZG9JdGVtKCk7XG5cbiAgICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9kb0Rpdi5jbGFzc05hbWUgPSBcInNpbmdsZVRvRG9cIjtcbiAgICAgIHRvZG9EaXYudGV4dENvbnRlbnQgPSBzaW5nbGVUb0RvLml0ZW1UaXRsZTtcblxuICAgICAgY29uc3QgY29sb3JQcmlvcml0eSA9IHtcbiAgICAgICAgaGlnaDogcGFzdGVsUmVkLFxuICAgICAgICBtZWRpdW06IHBhc3RlbFllbGxvdyxcbiAgICAgICAgbG93OiBwYXN0ZWxHcmVlbixcbiAgICAgIH07XG5cbiAgICAgIHRvZG9EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgY29sb3JQcmlvcml0eVtzaW5nbGVUb0RvLml0ZW1Qcmlvcml0eV07XG5cbiAgICAgIGlmIChzaW5nbGVUb0RvLml0ZW1Db21wbGV0aW9uU3RhdHVzKSB7XG4gICAgICAgIC8vIHRvZG9EaXYuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJzdHJpa2VcIik7XG4gICAgICAgIHRvZG9EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFzdGVsR3JlZW47XG4gICAgICB9XG5cbiAgICAgIHRvZG9EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2luZ2xlVGFza0Rpc3BsYXkoc2luZ2xlVG9Eby5pZCwgc2luZ2xlVG9Eby5wYXJlbnRJRCk7XG4gICAgICB9KTtcblxuICAgICAgdG9kb3MuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gICAgfSk7XG4gICAgZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRvZG9zKTtcbiAgfTtcblxuICBjb25zdCBzaW5nbGVUYXNrRGlzcGxheSA9ICh0YXNrSUQsIHByb2plY3RJRCkgPT4ge1xuICAgIGNvbnN0IHRhc2tEaXNwbGF5Q2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpbmdsZUl0ZW1cIik7XG4gICAgaWYgKHRhc2tEaXNwbGF5Q2hlY2spIHtcbiAgICAgIHRhc2tEaXNwbGF5Q2hlY2sucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdFRhc2sgPSBhbGxQcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdElEID09PSBwcm9qZWN0SUQsXG4gICAgKTtcblxuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0VGFza1xuICAgICAgLmdldFRvZG8oKVxuICAgICAgLmZpbmQoKHRhc2spID0+IHRhc2sudG9kb0l0ZW0oKS5pZCA9PT0gdGFza0lEKTtcblxuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gdGFzay50b2RvSXRlbSgpO1xuXG4gICAgY29uc3Qgc2luZ2xlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2luZ2xlSXRlbS5pZCA9IFwic2luZ2xlSXRlbVwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUuaWQgPSBcInRvZG9UaXRsZVwiO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza0RldGFpbHMuaXRlbVRpdGxlO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSBcInRvZG9EZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGFiZWxcIik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb24uaWQgPSBcInRvZG9EZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza0RldGFpbHMuaXRlbURlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eUxhYmVsLmh0bWxGb3IgPSBcInRvZG9Qcmlvcml0eVwiO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKFwidG9kb0xhYmVsXCIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5LmlkID0gXCJ0b2RvUHJpb3JpdHlcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5VHlwZXMgPSBbXG4gICAgICB7IHR5cGU6IFwibG93XCIsIGNvbG9yOiBwYXN0ZWxHcmVlbiB9LFxuICAgICAgeyB0eXBlOiBcIm1lZGl1bVwiLCBjb2xvcjogcGFzdGVsWWVsbG93IH0sXG4gICAgICB7IHR5cGU6IFwiaGlnaFwiLCBjb2xvcjogcGFzdGVsUmVkIH0sXG4gICAgXTtcblxuICAgIHByaW9yaXR5VHlwZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaXRlbS50eXBlO1xuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBpdGVtLmNvbG9yO1xuICAgICAgZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwiMTRweFwiO1xuXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2sudXBkYXRlUHJpb3JpdHkoaXRlbS50eXBlKTtcbiAgICAgICAgdG9Eb3NEaXNwbGF5KHRhc2tEZXRhaWxzLnBhcmVudElEKTtcbiAgICAgICAgc2luZ2xlVGFza0Rpc3BsYXkodGFza0RldGFpbHMuaWQsIHRhc2tEZXRhaWxzLnBhcmVudElEKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9IFwidG9kb0R1ZURhdGVcIjtcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgZHVlRGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGFiZWxcIik7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWVEYXRlLmlkID0gXCJ0b2RvRHVlRGF0ZVwiO1xuXG4gICAgY29uc3QgZGF5c0xlZnQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gICAgICBuZXcgRGF0ZSh0YXNrRGV0YWlscy5pdGVtRHVlKSxcbiAgICAgIG5ldyBEYXRlKCksXG4gICAgKTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID1cbiAgICAgIGRheXNMZWZ0ID4gMVxuICAgICAgICA/IGAke2RheXNMZWZ0fSBkYXlzYFxuICAgICAgICA6IGRheXNMZWZ0ID4gMFxuICAgICAgICA/IGAke2RheXNMZWZ0fSBkYXlgXG4gICAgICAgIDogXCJEYXRlIG92ZXJcIjtcblxuICAgIGlmIChkYXlzTGVmdCA8IDApIHtcbiAgICAgIGR1ZURhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFzdGVsUmVkO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRpb25Db2xvciA9IHtcbiAgICAgIHRydWU6IHBhc3RlbEdyZWVuLFxuICAgICAgZmFsc2U6IHBhc3RlbFJlZCxcbiAgICB9O1xuXG4gICAgY29uc3QgY29tcGxldGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbXBsZXRpb25MYWJlbC5odG1sRm9yID0gXCJ0b2RvQ29tcGxldGlvblwiO1xuICAgIGNvbXBsZXRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBTdGF0dXNcIjtcbiAgICBjb21wbGV0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZChcInRvZG9MYWJlbFwiKTtcblxuICAgIGNvbnN0IGNvbXBsZXRpb25TdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbXBsZXRpb25TdGF0dXMuaWQgPSBcInRvZG9Db21wbGV0aW9uXCI7XG4gICAgY29tcGxldGlvblN0YXR1cy50ZXh0Q29udGVudCA9IHRhc2tEZXRhaWxzLml0ZW1Db21wbGV0aW9uU3RhdHVzXG4gICAgICA/IFwiQ29tcGxldGVkXCJcbiAgICAgIDogXCJOb3QgQ29tcGxldGVkXCI7XG4gICAgY29tcGxldGlvblN0YXR1cy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgY29tcGxldGlvbkNvbG9yW3Rhc2tEZXRhaWxzLml0ZW1Db21wbGV0aW9uU3RhdHVzXTtcblxuICAgIGNvbXBsZXRpb25TdGF0dXMuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG5cbiAgICBjb21wbGV0aW9uU3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0YXNrLnVwZGF0ZUNvbXBsZXRpb25TdGF0dXMoKTtcbiAgICAgIHRvRG9zRGlzcGxheSh0YXNrRGV0YWlscy5wYXJlbnRJRCk7XG4gICAgICBzaW5nbGVUYXNrRGlzcGxheSh0YXNrRGV0YWlscy5pZCwgdGFza0RldGFpbHMucGFyZW50SUQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlVGFzay50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFRhc2tcIjtcbiAgICBkZWxldGVUYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG5cbiAgICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0VGFzay5kZWxldGVUb2RvKHRhc2tJRCk7XG4gICAgICBkaXNwbGF5UHJvamVjdHMocHJvamVjdFRhc2sucHJvamVjdElEKTtcbiAgICAgIHRvRG9zRGlzcGxheShwcm9qZWN0VGFzay5wcm9qZWN0SUQpO1xuICAgIH0pO1xuXG4gICAgc2luZ2xlSXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgc2luZ2xlSXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBzaW5nbGVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBzaW5nbGVJdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIHNpbmdsZUl0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHNpbmdsZUl0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgICBzaW5nbGVJdGVtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIHNpbmdsZUl0ZW0uYXBwZW5kQ2hpbGQoY29tcGxldGlvbkxhYmVsKTtcbiAgICBzaW5nbGVJdGVtLmFwcGVuZENoaWxkKGNvbXBsZXRpb25TdGF0dXMpO1xuICAgIHNpbmdsZUl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlVGFzayk7XG4gICAgZGFzaGJvYXJkLmFwcGVuZENoaWxkKHNpbmdsZUl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGNsZWFyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcbiAgICBpZiAoY2xlYXJEaXYpIHtcbiAgICAgIGNsZWFyRGl2LnJlbW92ZSgpO1xuICAgIH1cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHMuaWQgPSBcInByb2plY3RzXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBZGQgUHJvamVjdFwiO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRpc3BsYXlGb3JtcyhcIlwiLCBcInByb2plY3RcIik7XG4gICAgfSk7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHNpbmdsZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2luZ2xlUHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgICBzaW5nbGVQcm9qZWN0LmNsYXNzTmFtZSA9IFwic2luZ2xlUHJvamVjdFwiO1xuICAgICAgc2luZ2xlUHJvamVjdC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QucHJvamVjdElEO1xuXG4gICAgICBpZiAocHJvamVjdC5wcm9qZWN0SUQgPT09IGlkKSB7XG4gICAgICAgIHNpbmdsZVByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjN2FhMDliXCI7XG4gICAgICB9XG5cbiAgICAgIHNpbmdsZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKHByb2plY3QucHJvamVjdElEKTtcbiAgICAgICAgdG9Eb3NEaXNwbGF5KHByb2plY3QucHJvamVjdElEKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChzaW5nbGVQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGRhc2hib2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gIH07XG5cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXNoYm9hcmQpO1xuICBkaXNwbGF5UHJvamVjdHMocHJvamVjdElEKTtcbiAgdG9Eb3NEaXNwbGF5KHByb2plY3RJRCk7XG59O1xuXG5leHBvcnQgeyBtYWluTGF5b3V0IH07XG4iLCJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vbG9naWMvcHJvamVjdFwiO1xuaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuL2xvZ2ljL3RvZG9cIjtcblxuZnVuY3Rpb24gSURHZW5lcmF0b3IoKSB7XG4gIHZhciBTNCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKCgoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkgfCAwKVxuICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgLnN1YnN0cmluZygxKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICBTNCgpICtcbiAgICBTNCgpICtcbiAgICBcIi1cIiArXG4gICAgUzQoKSArXG4gICAgXCItXCIgK1xuICAgIFM0KCkgK1xuICAgIFwiLVwiICtcbiAgICBTNCgpICtcbiAgICBcIi1cIiArXG4gICAgUzQoKSArXG4gICAgUzQoKSArXG4gICAgUzQoKVxuICApO1xufVxuXG5jb25zdCBwYXN0ZWxHcmVlbiA9IFwiIzlBRDdBNVwiO1xuY29uc3QgcGFzdGVsWWVsbG93ID0gXCIjRkZEOUJEXCI7XG5jb25zdCBwYXN0ZWxSZWQgPSBcIiNFRTlEOTRcIjtcblxuY29uc3QgY2hlY2tCbGFua1N0cmluZyA9IChzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHN0cmluZy50cmltKCkubGVuZ3RoO1xufTtcblxuY29uc3QgZ2V0RnJvbUxvY2FsU3RvcmFnZSA9IChjaGVja0xvY2FsU3RvcmFnZSkgPT4ge1xuICBjaGVja0xvY2FsU3RvcmFnZS5tYXAoKGl0ZW0pID0+IHtcbiAgICBjb25zdCBzaW5nbGVQcm9qZWN0ID0gcHJvamVjdChpdGVtLnByb2plY3ROYW1lLCBpdGVtLnByb2plY3RJRCk7XG5cbiAgICBpdGVtLnRvZG9zLmZvckVhY2goKHNpbmdsZVRvZG8pID0+IHtcbiAgICAgIHNpbmdsZVByb2plY3QuYWRkVG9kbyhcbiAgICAgICAgdG9kbyhcbiAgICAgICAgICBzaW5nbGVUb2RvLnRpdGxlLFxuICAgICAgICAgIHNpbmdsZVRvZG8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgc2luZ2xlVG9kby5kdWVEYXRlLFxuICAgICAgICAgIHNpbmdsZVRvZG8ucHJpb3JpdHksXG4gICAgICAgICAgc2luZ2xlVG9kby5wYXJlbnRJRCxcbiAgICAgICAgICBzaW5nbGVUb2RvLmNvbXBsZXRpb24sXG4gICAgICAgICksXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgYWxsUHJvamVjdHMucHVzaChzaW5nbGVQcm9qZWN0KTtcbiAgfSk7XG59O1xuXG5jb25zdCBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgPSBhbGxQcm9qZWN0cy5tYXAoKHByb2plY3QpID0+XG4gICAgcHJvamVjdC50b0pTT04oKSxcbiAgKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICBcInRvZG8tcHJvamVjdHNcIixcbiAgICBKU09OLnN0cmluZ2lmeShwcm9qZWN0c1RvTG9jYWxTdG9yYWdlKSxcbiAgKTtcbn07XG5cbmV4cG9ydCB7XG4gIElER2VuZXJhdG9yLFxuICBwYXN0ZWxHcmVlbixcbiAgcGFzdGVsWWVsbG93LFxuICBwYXN0ZWxSZWQsXG4gIGNoZWNrQmxhbmtTdHJpbmcsXG4gIHNhdmVUb0xvY2FsU3RvcmFnZSxcbiAgZ2V0RnJvbUxvY2FsU3RvcmFnZSxcbn07XG5cbi8vIE9iamVjdCByZWxhdGlvbnNoaXBcbi8vIENoZWNrbGlzdCAtPiBUb2RvIC0+IFByb2plY3Rcbi8vIENoZWNrbGlzdCAtPiBDaGVja2xpc3QgSUQgYW5kIFRvZG8gSURcbi8vIFRvZG8gLT4gVG9kbyBJRCBhbmQgUHJvamVjdCBJRFxuIiwiaW1wb3J0IFwiLi4vc3R5bGUvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZS9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL2xvZ2ljL3Byb2plY3RcIjtcbmltcG9ydCB7IHBhaW50RE9NIH0gZnJvbSBcIi4vRE9NL2FwcEZsb3dcIjtcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hlbHBlclwiO1xuXG5sZXQgYWxsUHJvamVjdHMgPSBbXTtcbmNvbnN0IGNoZWNrTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShcbiAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvLXByb2plY3RzXCIpLFxuKTtcbmxldCBmaXJzdFZpc2l0ID0gZmFsc2U7XG5cbmlmIChjaGVja0xvY2FsU3RvcmFnZSkge1xuICBnZXRGcm9tTG9jYWxTdG9yYWdlKGNoZWNrTG9jYWxTdG9yYWdlKTtcbn0gZWxzZSB7XG4gIGNvbnN0IHN0YXJ0UHJvamVjdCA9IHByb2plY3QoXCJTdGFydGVyXCIpO1xuXG4gIGFsbFByb2plY3RzLnB1c2goc3RhcnRQcm9qZWN0KTtcbiAgZmlyc3RWaXNpdCA9IHRydWU7XG5cbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG59XG5cbmNvbnN0IHN0YXJ0ZXJQcm9qZWN0ID0gYWxsUHJvamVjdHMuZmluZChcbiAgKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdE5hbWUgPT09IFwiU3RhcnRlclwiLFxuKTtcblxucGFpbnRET00oc3RhcnRlclByb2plY3QucHJvamVjdElELCBmaXJzdFZpc2l0KTtcblxuZXhwb3J0IHsgYWxsUHJvamVjdHMgfTtcbiIsImltcG9ydCB7IElER2VuZXJhdG9yLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmNvbnN0IHByb2plY3QgPSAobmFtZSwgaWQgPSBcIlwiKSA9PiB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gbmFtZTtcbiAgY29uc3QgcHJvamVjdElEID0gaWQgPyBpZCA6IElER2VuZXJhdG9yKCk7XG4gIGxldCB0b2RvTGlzdCA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IChpZCkgPT4ge1xuICAgIHRvZG9MaXN0ID0gdG9kb0xpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnRvZG9JdGVtKCkuaWQgIT09IGlkKTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICBjb25zdCBnZXRUb2RvID0gKCkgPT4gdG9kb0xpc3Q7XG5cbiAgY29uc3QgdG9KU09OID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0TmFtZSxcbiAgICAgIHByb2plY3RJRCxcbiAgICAgIHRvZG9zOiB0b2RvTGlzdC5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3Qgc2luZ2xlVG9EbyA9IHRvZG8udG9kb0l0ZW0oKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogc2luZ2xlVG9Eby5pdGVtVGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IHNpbmdsZVRvRG8uaXRlbURlc2NyaXB0aW9uLFxuICAgICAgICAgIGR1ZURhdGU6IHNpbmdsZVRvRG8uaXRlbUR1ZSxcbiAgICAgICAgICBwcmlvcml0eTogc2luZ2xlVG9Eby5pdGVtUHJpb3JpdHksXG4gICAgICAgICAgcGFyZW50SUQ6IHNpbmdsZVRvRG8ucGFyZW50SUQsXG4gICAgICAgICAgY29tcGxldGlvbjogc2luZ2xlVG9Eby5pdGVtQ29tcGxldGlvblN0YXR1cyxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0TmFtZSxcbiAgICBwcm9qZWN0SUQsXG4gICAgZ2V0VG9kbyxcbiAgICBhZGRUb2RvLFxuICAgIGRlbGV0ZVRvZG8sXG4gICAgdG9KU09OLFxuICB9O1xufTtcblxuZXhwb3J0IHsgcHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgSURHZW5lcmF0b3IsIHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxuY29uc3QgdG9kbyA9IChcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgcHJvamVjdElELFxuICBjb21wbGV0aW9uID0gXCJcIixcbikgPT4ge1xuICBjb25zdCBpdGVtVGl0bGUgPSB0aXRsZTtcbiAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIGNvbnN0IGl0ZW1EdWUgPSBkdWVEYXRlO1xuICBsZXQgaXRlbVByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIGxldCBpdGVtQ29tcGxldGlvblN0YXR1cyA9IGNvbXBsZXRpb24gPyBjb21wbGV0aW9uIDogZmFsc2U7XG4gIGNvbnN0IHBhcmVudElEID0gcHJvamVjdElEO1xuICBjb25zdCBpZCA9IElER2VuZXJhdG9yKCk7XG5cbiAgY29uc3QgdXBkYXRlUHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcbiAgICBpdGVtUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gaXRlbVByaW9yaXR5O1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUNvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgaXRlbUNvbXBsZXRpb25TdGF0dXMgPSAhaXRlbUNvbXBsZXRpb25TdGF0dXM7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgcmV0dXJuIGl0ZW1Db21wbGV0aW9uU3RhdHVzO1xuICB9O1xuXG4gIGNvbnN0IHRvZG9JdGVtID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIHBhcmVudElELFxuICAgICAgaXRlbVRpdGxlLFxuICAgICAgaXRlbURlc2NyaXB0aW9uLFxuICAgICAgaXRlbUR1ZSxcbiAgICAgIGl0ZW1Qcmlvcml0eSxcbiAgICAgIGl0ZW1Db21wbGV0aW9uU3RhdHVzLFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0b2RvSXRlbSxcbiAgICB1cGRhdGVQcmlvcml0eSxcbiAgICB1cGRhdGVDb21wbGV0aW9uU3RhdHVzLFxuICB9O1xufTtcblxuZXhwb3J0IHsgdG9kbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHQvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=