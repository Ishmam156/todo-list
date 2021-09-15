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
    dueDateInput.value = "2021-09-23"; // remove later
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSitGO0FBQy9DO0FBQ1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxRQUFRO0FBQ3JCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLHVCQUF1QixnRUFBVTtBQUNqQyx3QkFBd0IsZ0VBQVU7QUFDbEMsaURBQWlELHlGQUErQjtBQUNoRixtREFBbUQseUZBQStCLG1CQUFtQjtBQUNyRztBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRHdDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5QnlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0Esd0tBQXdLOztBQUV4SztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuREE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERhO0FBQ007QUFDSjtBQUNHO0FBS3ZCOztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsOENBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVyx5REFBZ0I7QUFDM0I7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qix1REFBTztBQUNoQyxNQUFNLG9EQUFnQjs7QUFFdEIsTUFBTSx1REFBVTtBQUNoQixNQUFNLDJEQUFrQjtBQUN4QixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCLG9EQUFnQjtBQUN0QztBQUNBOztBQUVBLFdBQVcseURBQWdCO0FBQzNCO0FBQ0E7QUFDQSxRQUFRLFVBQVUseURBQWdCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsaURBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwyREFBa0I7O0FBRXhCLE1BQU0sdURBQVU7QUFDaEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RQaUI7QUFDRTtBQUNEOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsOENBQThDLHdEQUFZOztBQUUxRDtBQUNBLElBQUksc0RBQVk7QUFDaEIsSUFBSTtBQUNKLElBQUksdURBQVU7QUFDZDtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCbUI7QUFDMEI7QUFDYjtBQUNYOztBQUV6QztBQUNBOztBQUVBLGdDQUFnQzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixvREFBZ0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU0sc0RBQVk7QUFDbEIsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyw4Q0FBUztBQUN2QixnQkFBZ0IsaURBQVk7QUFDNUIsYUFBYSxnREFBVztBQUN4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnREFBVztBQUNuRDs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG9EQUFnQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVEsb0JBQW9CLGdEQUFXLEVBQUU7QUFDekMsUUFBUSx1QkFBdUIsaURBQVksRUFBRTtBQUM3QyxRQUFRLHFCQUFxQiw4Q0FBUyxFQUFFO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixvREFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBLGFBQWEsVUFBVTtBQUN2Qjs7QUFFQTtBQUNBLHNDQUFzQyw4Q0FBUztBQUMvQzs7QUFFQTtBQUNBLFlBQVksZ0RBQVc7QUFDdkIsYUFBYSw4Q0FBUztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFZO0FBQ2xCLEtBQUs7QUFDTDtBQUNBOztBQUVBLElBQUksdURBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1BnQjtBQUNJO0FBQ047O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsdURBQU87O0FBRWpDO0FBQ0E7QUFDQSxRQUFRLGlEQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsSUFBSSxvREFBZ0I7QUFDcEIsR0FBRztBQUNIOztBQUVBO0FBQ0EsaUNBQWlDLG1EQUFlO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFVRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRTRCO0FBQ0E7O0FBRWM7QUFDRDtBQUMwQjs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNERBQW1CO0FBQ3JCLEVBQUU7QUFDRix1QkFBdUIsdURBQU87O0FBRTlCO0FBQ0E7O0FBRUEsRUFBRSwyREFBa0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNEQUFROztBQUVlOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJxQzs7QUFFNUQ7QUFDQTtBQUNBLDhCQUE4QixvREFBVztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMkRBQWtCO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7O0FDOUN5Qzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0RBQVc7O0FBRXhCO0FBQ0E7QUFDQSxJQUFJLDJEQUFrQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDJEQUFrQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7OztVQ2pEaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvcmVzZXQuY3NzP2NjMWUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcz8zMjBiIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHQvRE9NL2Fib3V0UGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0L0RPTS9hZGRGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHQvRE9NL2FwcEZsb3cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdC9ET00vbWFpbkxheW91dC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0L2hlbHBlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHQvbG9naWMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0L2xvZ2ljL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX0RBWSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgZGlzcGxheUFib3V0ID0gKHByb2plY3RJRCwgdHlwZSkgPT4ge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbm5lckNvbnRhaW5lclwiKTtcblxuICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGFib3V0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0RWxlbWVudC5pZCA9IFwibWVzc2FnZURpdlwiO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJJbXBsZW1lbnRhdGlvbiBEZXRhaWxzXCI7XG4gIGFib3V0RWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGZpcnN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZpcnN0UGFyYWdyYXBoLnRleHRDb250ZW50ID1cbiAgICBcIldlbGNvbWUgdG8geW91ciBkeW5hbWljIFRvLURvIEFwcCB0aGF0IGxldHMgeW91IGFkZCBhbmQga2VlcCB0cmFjayBvZiBhbGwgeW91ciB0YXNrcyFcIjtcbiAgYWJvdXRFbGVtZW50LmFwcGVuZENoaWxkKGZpcnN0UGFyYWdyYXBoKTtcblxuICBjb25zdCBzZWNvbmRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc2Vjb25kUGFyYWdyYXBoLnRleHRDb250ZW50ID1cbiAgICBcIlRoZSBtYWluIGZlYXR1cmVzIG9mIHRoZSBhcHBsaWNhdGlvbiBhcmUgYXMgYmVsb3c6XCI7XG4gIGFib3V0RWxlbWVudC5hcHBlbmRDaGlsZChzZWNvbmRQYXJhZ3JhcGgpO1xuXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgY29uc3QgZmVhdHVyZXMgPSBbXG4gICAgXCJBYmlsaXR5IHRvIGNyZWF0ZSB5b3VyIG93biBwcm9qZWN0XCIsXG4gICAgXCJDYXRlZ29yaWVzIHlvdXIgVG8tRG9zIGFzIHBlciB0aGUgcHJvamVjdFwiLFxuICAgIFwiQ2hhbmdlIHByaW9yaXR5IG9mIHlvdXIgVG8tRG9zXCIsXG4gICAgXCJHZXQgYW4gaWRlYSBvZiBudW1iZXIgb2YgZGF5cyBsZWZ0IHRpbGwgdGFzayBkZWFkbGluZVwiLFxuICAgIFwiUmVtb3ZlIFRvLURvJ3MgZnJvbSB0aGUgbGlzdCBvbmNlIGRvbmVcIixcbiAgICBcIlNpbmdsZSBQYWdlIEFwcCB3aXRoIGFsbCBpbmZvcm1hdGlvbiBkeW5hbWljYWxseSByZWZyZXNoaW5nXCIsXG4gIF07XG5cbiAgZmVhdHVyZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG5cbiAgYWJvdXRFbGVtZW50LmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gIGNvbnN0IGdvQmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGdvQmFjay50ZXh0Q29udGVudCA9IFwiRmluaXNoIFRvLURvcyFcIjtcbiAgZ29CYWNrLmlkID0gXCJnb0JhY2tcIjtcbiAgYWJvdXRFbGVtZW50LmFwcGVuZENoaWxkKGdvQmFjayk7XG5cbiAgZ29CYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSk7XG5cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dEVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheUFib3V0IH07XG4iLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4uL2xvZ2ljL3RvZG9cIjtcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi4vbG9naWMvcHJvamVjdFwiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IG1haW5MYXlvdXQgfSBmcm9tIFwiLi9tYWluTGF5b3V0XCI7XG5pbXBvcnQge1xuICBjaGVja0JsYW5rU3RyaW5nLFxuICBwYXN0ZWxSZWQsXG4gIHNhdmVUb0xvY2FsU3RvcmFnZSxcbn0gZnJvbSBcIi4uL2hlbHBlclwiO1xuXG5jb25zdCBkaXNwbGF5Rm9ybXMgPSAocHJvamVjdElELCB0eXBlKSA9PiB7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlubmVyQ29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGRpc3BsYXlFcnJvckRpdiA9IChwYXJlbnROb2RlKSA9PiB7XG4gICAgY29uc3QgZGlzcGxheUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXNwbGF5RXJyb3Iuc3R5bGUuYmFja2dyb3VuZCA9IHBhc3RlbFJlZDtcbiAgICBkaXNwbGF5RXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRpc3BsYXlFcnJvci5pZCA9IFwiZGlzcGxheUVycm9yXCI7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChkaXNwbGF5RXJyb3IpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dFcnJvciA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgZGlzcGxheUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5RXJyb3JcIik7XG4gICAgZGlzcGxheUVycm9yLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBkaXNwbGF5RXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGlzcGxheUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGRpc3BsYXlFcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSwgMTUwMCk7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdERpc3BsYXkgPSAoKSA9PiB7XG4gICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgcHJvamVjdEZvcm0uaWQgPSBcIm1lc3NhZ2VEaXZcIjtcblxuICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIWNoZWNrQmxhbmtTdHJpbmcoZXZlbnQudGFyZ2V0LnByb2plY3RMYWJlbC52YWx1ZSkpIHtcbiAgICAgICAgc2hvd0Vycm9yKFwiWW91IG5lZWQgdG8gYWRkIGEgcHJvamVjdCBuYW1lIVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KGV2ZW50LnRhcmdldC5wcm9qZWN0TGFiZWwudmFsdWUpO1xuICAgICAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuICAgICAgbWFpbkxheW91dChuZXdQcm9qZWN0LnByb2plY3RJRCk7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCB5b3VyIFByb2plY3QhXCI7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGRpc3BsYXlFcnJvckRpdihwcm9qZWN0Rm9ybSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvamVjdExhYmVsLmh0bWxGb3IgPSBcInByb2plY3RMYWJlbFwiO1xuICAgIHByb2plY3RMYWJlbC5pbm5lclRleHQgPSBcIlByb2plY3QgTmFtZTpcIjtcbiAgICBwcm9qZWN0TGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0Lm5hbWUgPSBcInByb2plY3RMYWJlbFwiO1xuICAgIGlucHV0LmlkID0gXCJwcm9qZWN0TGFiZWxcIjtcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgaW5wdXQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdC5uYW1lID0gXCJBZGRcIjtcbiAgICBzdWJtaXQuaWQgPSBcInN1Ym1pdFwiO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgfTtcblxuICBjb25zdCBhZGRUb2RvRGlzcGxheSA9ICgpID0+IHtcbiAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0b2RvRm9ybS5pZCA9IFwibWVzc2FnZURpdlwiO1xuXG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHByb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5wcm9qZWN0SUQgPT09IHByb2plY3RJRCxcbiAgICAgICk7XG5cbiAgICAgIGlmICghY2hlY2tCbGFua1N0cmluZyhldmVudC50YXJnZXQudGl0bGUudmFsdWUpKSB7XG4gICAgICAgIHNob3dFcnJvcihcIllvdSBuZWVkIHRvIHByb3ZpZGUgYSB0aXRsZSFcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIGlmICghY2hlY2tCbGFua1N0cmluZyhldmVudC50YXJnZXQuZGVzY3JpcHRpb24udmFsdWUpKSB7XG4gICAgICAgIHNob3dFcnJvcihcIllvdSBuZWVkIHRvIHByb3ZpZGUgYSBkZXNjcmlwdGlvbiFcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdUb0RvID0gdG9kbyhcbiAgICAgICAgZXZlbnQudGFyZ2V0LnRpdGxlLnZhbHVlLFxuICAgICAgICBldmVudC50YXJnZXQuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgIGV2ZW50LnRhcmdldC5kdWVkYXRlLnZhbHVlLFxuICAgICAgICBldmVudC50YXJnZXQucHJpb3JpdHkudmFsdWUsXG4gICAgICAgIHByb2plY3RJRCxcbiAgICAgICk7XG5cbiAgICAgIHByb2plY3QuYWRkVG9kbyhuZXdUb0RvKTtcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuXG4gICAgICBtYWluTGF5b3V0KHByb2plY3RJRCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgeW91ciBUby1EbyFcIjtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgZGlzcGxheUVycm9yRGl2KHRvZG9Gb3JtKTtcblxuICAgIGNvbnN0IGlucHV0SXRlbXMgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwidGl0bGVcIixcbiAgICAgICAgbWVzc2FnZTogXCJXaGF0IHRvIERvOlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICBtZXNzYWdlOiBcIlNvbWUgZGV0YWlsczpcIixcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIGlucHV0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBsYWJlbC5odG1sRm9yID0gaXRlbS5uYW1lO1xuICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gaXRlbS5tZXNzYWdlO1xuICAgICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICBpbnB1dC5uYW1lID0gaXRlbS5uYW1lO1xuICAgICAgaW5wdXQuaWQgPSBpdGVtLm5hbWU7XG4gICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgIGlmIChpdGVtLm5hbWUgPT09IFwidGl0bGVcIikge1xuICAgICAgICBpbnB1dC5hdXRvZm9jdXMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gXCJkdWVkYXRlXCI7XG4gICAgZHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9IFwiQnkgd2hlbjpcIjtcbiAgICBkdWVEYXRlTGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZWRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSBcImR1ZWRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IFwiMjAyMS0wOS0yM1wiOyAvLyByZW1vdmUgbGF0ZXJcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eUxhYmVsLmh0bWxGb3IgPSBcInByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgcHJpb3JpdHlcIjtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGNvbnN0IHByaW9yaXR5UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICAgIHByaW9yaXR5UGFyZW50LmlkID0gXCJwcmlvcml0eVwiO1xuXG4gICAgY29uc3QgcHJpb3J0eU9wdGlvbnMgPSBbXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJoaWdoXCJdO1xuXG4gICAgcHJpb3J0eU9wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBsYWJlbC5odG1sRm9yID0gaXRlbTtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgIHByaW9yaXR5UGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBwcmlvcml0eS50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgcHJpb3JpdHkuaWQgPSBpdGVtO1xuICAgICAgcHJpb3JpdHkudmFsdWUgPSBpdGVtO1xuICAgICAgcHJpb3JpdHkubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICAgICAgaWYgKGl0ZW0gPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgcHJpb3JpdHkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHByaW9yaXR5UGFyZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICB9KTtcblxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5UGFyZW50KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBzdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0Lm5hbWUgPSBcIkFkZFwiO1xuICAgIHN1Ym1pdC5pZCA9IFwic3VibWl0XCI7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICB9O1xuXG4gIGNvbnN0IHdlbGNvbWVNZXNzYWdlID0gKCkgPT4ge1xuICAgIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZXNzYWdlRGl2LmlkID0gXCJtZXNzYWdlRGl2XCI7XG4gICAgY29uc3Qgd2VsY29tZU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgd2VsY29tZU1lc3NhZ2UudGV4dENvbnRlbnQgPVxuICAgICAgXCJMZXQncyBjaGFuZ2UgYWxsIHlvdXIgVG8tRG9zIGludG8gVG8tRG9uZXMhXCI7XG4gICAgbWVzc2FnZURpdi5hcHBlbmRDaGlsZCh3ZWxjb21lTWVzc2FnZSk7XG5cbiAgICBjb25zdCBjbGlja0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjbGlja0RldGFpbHMudGV4dENvbnRlbnQgPVxuICAgICAgXCJZb3VyIFRvLURvcyB3aWxsIGdldCBhZGRlZCB0byBQcm9qZWN0cyB3aGljaCB3aWxsIGhlbHAgeW91IG9yZ2FuaXplIHRoZW0hXCI7XG4gICAgbWVzc2FnZURpdi5hcHBlbmRDaGlsZChjbGlja0RldGFpbHMpO1xuXG4gICAgY29uc3QgY2xpY2tGaW5hbE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjbGlja0ZpbmFsTWVzc2FnZS50ZXh0Q29udGVudCA9XG4gICAgICBcIldlJ3ZlIGNyZWF0ZWQgdGhlIGZpcnN0IHByb2plY3QgZm9yIHlvdSA6KVwiO1xuICAgIGNsaWNrRmluYWxNZXNzYWdlLmlkID0gXCJjbGlja0ZpbmFsTWVzc2FnZVwiO1xuICAgIG1lc3NhZ2VEaXYuYXBwZW5kQ2hpbGQoY2xpY2tGaW5hbE1lc3NhZ2UpO1xuXG4gICAgY29uc3QgY2xpY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsaWNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJZZXMsIHllcyAmIHllcyFcIjtcblxuICAgIGNsaWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb2RvRGlzcGxheSk7XG5cbiAgICBtZXNzYWdlRGl2LmFwcGVuZENoaWxkKGNsaWNrQnV0dG9uKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xuICB9O1xuXG4gIGlmICh0eXBlID09PSBcImZpcnN0XCIpIHtcbiAgICB3ZWxjb21lTWVzc2FnZSgpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidG9kb1wiKSB7XG4gICAgYWRkVG9kb0Rpc3BsYXkoKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRQcm9qZWN0RGlzcGxheSgpO1xuICB9XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5Rm9ybXMgfTtcbiIsImltcG9ydCB7IGRpc3BsYXlGb3JtcyB9IGZyb20gXCIuL2FkZEZvcm1cIjtcbmltcG9ydCB7IGRpc3BsYXlBYm91dCB9IGZyb20gXCIuL2Fib3V0UGFnZVwiO1xuaW1wb3J0IHsgbWFpbkxheW91dCB9IGZyb20gXCIuL21haW5MYXlvdXRcIjtcblxuY29uc3QgcGFpbnRET00gPSAocHJvamVjdElELCBmaXJzdFZpc2l0KSA9PiB7XG4gIGNvbnN0IGxvZ29CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29cIik7XG4gIGxvZ29CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKTtcblxuICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0XCIpO1xuICByZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKTtcbiAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpc3BsYXlBYm91dCgpKTtcblxuICBpZiAoZmlyc3RWaXNpdCkge1xuICAgIGRpc3BsYXlGb3Jtcyhwcm9qZWN0SUQsIFwiZmlyc3RcIik7XG4gIH0gZWxzZSB7XG4gICAgbWFpbkxheW91dChwcm9qZWN0SUQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBwYWludERPTSB9O1xuIiwiaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IHBhc3RlbEdyZWVuLCBwYXN0ZWxZZWxsb3csIHBhc3RlbFJlZCB9IGZyb20gXCIuLi9oZWxwZXJcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgZGlzcGxheUZvcm1zIH0gZnJvbSBcIi4vYWRkRm9ybVwiO1xuXG5jb25zdCBtYWluTGF5b3V0ID0gKHByb2plY3RJRCkgPT4ge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbm5lckNvbnRhaW5lclwiKTtcblxuICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7IC8vIHJlbW92ZSBsYXRlclxuXG4gIGNvbnN0IGRhc2hib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhc2hib2FyZC5pZCA9IFwiZGFzaGJvYXJkXCI7XG5cbiAgY29uc3QgdG9Eb3NEaXNwbGF5ID0gKGlkKSA9PiB7XG4gICAgY29uc3Qgc2luZ2xlUHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0SUQgPT09IGlkLFxuICAgICk7XG5cbiAgICBjb25zdCBjbGVhckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3NcIik7XG4gICAgaWYgKGNsZWFyRGl2KSB7XG4gICAgICBjbGVhckRpdi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXNrRGlzcGxheUNoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW5nbGVJdGVtXCIpO1xuICAgIGlmICh0YXNrRGlzcGxheUNoZWNrKSB7XG4gICAgICB0YXNrRGlzcGxheUNoZWNrLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2Rvcy5pZCA9IFwidG9kb3NcIjtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZG9zXCI7XG5cbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCBUb2RvXCI7XG5cbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5Rm9ybXMoc2luZ2xlUHJvamVjdC5wcm9qZWN0SUQsIFwidG9kb1wiKTtcbiAgICB9KTtcblxuICAgIHRvZG9zLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgdG9kb3MuYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvbik7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IHNpbmdsZVByb2plY3QuZ2V0VG9kbygpO1xuXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3Qgc2luZ2xlVG9EbyA9IHRhc2sudG9kb0l0ZW0oKTtcblxuICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0b2RvRGl2LmNsYXNzTmFtZSA9IFwic2luZ2xlVG9Eb1wiO1xuICAgICAgdG9kb0Rpdi50ZXh0Q29udGVudCA9IHNpbmdsZVRvRG8uaXRlbVRpdGxlO1xuXG4gICAgICBjb25zdCBjb2xvclByaW9yaXR5ID0ge1xuICAgICAgICBoaWdoOiBwYXN0ZWxSZWQsXG4gICAgICAgIG1lZGl1bTogcGFzdGVsWWVsbG93LFxuICAgICAgICBsb3c6IHBhc3RlbEdyZWVuLFxuICAgICAgfTtcblxuICAgICAgdG9kb0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICBjb2xvclByaW9yaXR5W3NpbmdsZVRvRG8uaXRlbVByaW9yaXR5XTtcblxuICAgICAgaWYgKHNpbmdsZVRvRG8uaXRlbUNvbXBsZXRpb25TdGF0dXMpIHtcbiAgICAgICAgLy8gdG9kb0Rpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInN0cmlrZVwiKTtcbiAgICAgICAgdG9kb0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXN0ZWxHcmVlbjtcbiAgICAgIH1cblxuICAgICAgdG9kb0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzaW5nbGVUYXNrRGlzcGxheShzaW5nbGVUb0RvLmlkLCBzaW5nbGVUb0RvLnBhcmVudElEKTtcbiAgICAgIH0pO1xuXG4gICAgICB0b2Rvcy5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgICB9KTtcbiAgICBkYXNoYm9hcmQuYXBwZW5kQ2hpbGQodG9kb3MpO1xuICB9O1xuXG4gIGNvbnN0IHNpbmdsZVRhc2tEaXNwbGF5ID0gKHRhc2tJRCwgcHJvamVjdElEKSA9PiB7XG4gICAgY29uc3QgdGFza0Rpc3BsYXlDaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2luZ2xlSXRlbVwiKTtcbiAgICBpZiAodGFza0Rpc3BsYXlDaGVjaykge1xuICAgICAgdGFza0Rpc3BsYXlDaGVjay5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0VGFzayA9IGFsbFByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0SUQgPT09IHByb2plY3RJRCxcbiAgICApO1xuXG4gICAgY29uc3QgdGFzayA9IHByb2plY3RUYXNrXG4gICAgICAuZ2V0VG9kbygpXG4gICAgICAuZmluZCgodGFzaykgPT4gdGFzay50b2RvSXRlbSgpLmlkID09PSB0YXNrSUQpO1xuXG4gICAgY29uc3QgdGFza0RldGFpbHMgPSB0YXNrLnRvZG9JdGVtKCk7XG5cbiAgICBjb25zdCBzaW5nbGVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaW5nbGVJdGVtLmlkID0gXCJzaW5nbGVJdGVtXCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5pZCA9IFwidG9kb1RpdGxlXCI7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrRGV0YWlscy5pdGVtVGl0bGU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9IFwidG9kb0Rlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZChcInRvZG9MYWJlbFwiKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjcmlwdGlvbi5pZCA9IFwidG9kb0Rlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrRGV0YWlscy5pdGVtRGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9IFwidG9kb1ByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGFiZWxcIik7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHkuaWQgPSBcInRvZG9Qcmlvcml0eVwiO1xuXG4gICAgY29uc3QgcHJpb3JpdHlUeXBlcyA9IFtcbiAgICAgIHsgdHlwZTogXCJsb3dcIiwgY29sb3I6IHBhc3RlbEdyZWVuIH0sXG4gICAgICB7IHR5cGU6IFwibWVkaXVtXCIsIGNvbG9yOiBwYXN0ZWxZZWxsb3cgfSxcbiAgICAgIHsgdHlwZTogXCJoaWdoXCIsIGNvbG9yOiBwYXN0ZWxSZWQgfSxcbiAgICBdO1xuXG4gICAgcHJpb3JpdHlUeXBlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtLnR5cGU7XG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGl0ZW0uY29sb3I7XG4gICAgICBlbGVtZW50LnN0eWxlLmZvbnRTaXplID0gXCIxNHB4XCI7XG5cbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFzay51cGRhdGVQcmlvcml0eShpdGVtLnR5cGUpO1xuICAgICAgICB0b0Rvc0Rpc3BsYXkodGFza0RldGFpbHMucGFyZW50SUQpO1xuICAgICAgICBzaW5nbGVUYXNrRGlzcGxheSh0YXNrRGV0YWlscy5pZCwgdGFza0RldGFpbHMucGFyZW50SUQpO1xuICAgICAgfSk7XG5cbiAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gXCJ0b2RvRHVlRGF0ZVwiO1xuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgICBkdWVEYXRlTGFiZWwuY2xhc3NMaXN0LmFkZChcInRvZG9MYWJlbFwiKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZURhdGUuaWQgPSBcInRvZG9EdWVEYXRlXCI7XG5cbiAgICBjb25zdCBkYXlzTGVmdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAgICAgIG5ldyBEYXRlKHRhc2tEZXRhaWxzLml0ZW1EdWUpLFxuICAgICAgbmV3IERhdGUoKSxcbiAgICApO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPVxuICAgICAgZGF5c0xlZnQgPiAxXG4gICAgICAgID8gYCR7ZGF5c0xlZnR9IGRheXNgXG4gICAgICAgIDogZGF5c0xlZnQgPiAwXG4gICAgICAgID8gYCR7ZGF5c0xlZnR9IGRheWBcbiAgICAgICAgOiBcIkRhdGUgb3ZlclwiO1xuXG4gICAgaWYgKGRheXNMZWZ0IDwgMCkge1xuICAgICAgZHVlRGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXN0ZWxSZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGlvbkNvbG9yID0ge1xuICAgICAgdHJ1ZTogcGFzdGVsR3JlZW4sXG4gICAgICBmYWxzZTogcGFzdGVsUmVkLFxuICAgIH07XG5cbiAgICBjb25zdCBjb21wbGV0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29tcGxldGlvbkxhYmVsLmh0bWxGb3IgPSBcInRvZG9Db21wbGV0aW9uXCI7XG4gICAgY29tcGxldGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIFN0YXR1c1wiO1xuICAgIGNvbXBsZXRpb25MYWJlbC5jbGFzc0xpc3QuYWRkKFwidG9kb0xhYmVsXCIpO1xuXG4gICAgY29uc3QgY29tcGxldGlvblN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29tcGxldGlvblN0YXR1cy5pZCA9IFwidG9kb0NvbXBsZXRpb25cIjtcbiAgICBjb21wbGV0aW9uU3RhdHVzLnRleHRDb250ZW50ID0gdGFza0RldGFpbHMuaXRlbUNvbXBsZXRpb25TdGF0dXNcbiAgICAgID8gXCJDb21wbGV0ZWRcIlxuICAgICAgOiBcIk5vdCBDb21wbGV0ZWRcIjtcbiAgICBjb21wbGV0aW9uU3RhdHVzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICBjb21wbGV0aW9uQ29sb3JbdGFza0RldGFpbHMuaXRlbUNvbXBsZXRpb25TdGF0dXNdO1xuXG4gICAgY29tcGxldGlvblN0YXR1cy5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcblxuICAgIGNvbXBsZXRpb25TdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRhc2sudXBkYXRlQ29tcGxldGlvblN0YXR1cygpO1xuICAgICAgdG9Eb3NEaXNwbGF5KHRhc2tEZXRhaWxzLnBhcmVudElEKTtcbiAgICAgIHNpbmdsZVRhc2tEaXNwbGF5KHRhc2tEZXRhaWxzLmlkLCB0YXNrRGV0YWlscy5wYXJlbnRJRCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVUYXNrLnRleHRDb250ZW50ID0gXCJEZWxldGUgVGFza1wiO1xuICAgIGRlbGV0ZVRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcblxuICAgIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHByb2plY3RUYXNrLmRlbGV0ZVRvZG8odGFza0lEKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0VGFzay5wcm9qZWN0SUQpO1xuICAgICAgdG9Eb3NEaXNwbGF5KHByb2plY3RUYXNrLnByb2plY3RJRCk7XG4gICAgfSk7XG5cbiAgICBzaW5nbGVJdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBzaW5nbGVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgIHNpbmdsZUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIHNpbmdsZUl0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgc2luZ2xlSXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgc2luZ2xlSXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgIHNpbmdsZUl0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgc2luZ2xlSXRlbS5hcHBlbmRDaGlsZChjb21wbGV0aW9uTGFiZWwpO1xuICAgIHNpbmdsZUl0ZW0uYXBwZW5kQ2hpbGQoY29tcGxldGlvblN0YXR1cyk7XG4gICAgc2luZ2xlSXRlbS5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcbiAgICBkYXNoYm9hcmQuYXBwZW5kQ2hpbGQoc2luZ2xlSXRlbSk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVByb2plY3RzID0gKGlkKSA9PiB7XG4gICAgY29uc3QgY2xlYXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuICAgIGlmIChjbGVhckRpdikge1xuICAgICAgY2xlYXJEaXYucmVtb3ZlKCk7XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0cy5pZCA9IFwicHJvamVjdHNcIjtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCI7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheUZvcm1zKFwiXCIsIFwicHJvamVjdFwiKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuXG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3Qgc2luZ2xlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaW5nbGVQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICAgIHNpbmdsZVByb2plY3QuY2xhc3NOYW1lID0gXCJzaW5nbGVQcm9qZWN0XCI7XG4gICAgICBzaW5nbGVQcm9qZWN0LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5wcm9qZWN0SUQ7XG5cbiAgICAgIGlmIChwcm9qZWN0LnByb2plY3RJRCA9PT0gaWQpIHtcbiAgICAgICAgc2luZ2xlUHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM3YWEwOWJcIjtcbiAgICAgIH1cblxuICAgICAgc2luZ2xlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMocHJvamVjdC5wcm9qZWN0SUQpO1xuICAgICAgICB0b0Rvc0Rpc3BsYXkocHJvamVjdC5wcm9qZWN0SUQpO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHNpbmdsZVByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgZGFzaGJvYXJkLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgfTtcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhc2hib2FyZCk7XG4gIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0SUQpO1xuICB0b0Rvc0Rpc3BsYXkocHJvamVjdElEKTtcbn07XG5cbmV4cG9ydCB7IG1haW5MYXlvdXQgfTtcbiIsImltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9sb2dpYy9wcm9qZWN0XCI7XG5pbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vbG9naWMvdG9kb1wiO1xuXG5mdW5jdGlvbiBJREdlbmVyYXRvcigpIHtcbiAgdmFyIFM0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKSB8IDApXG4gICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAuc3Vic3RyaW5nKDEpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIFM0KCkgK1xuICAgIFM0KCkgK1xuICAgIFwiLVwiICtcbiAgICBTNCgpICtcbiAgICBcIi1cIiArXG4gICAgUzQoKSArXG4gICAgXCItXCIgK1xuICAgIFM0KCkgK1xuICAgIFwiLVwiICtcbiAgICBTNCgpICtcbiAgICBTNCgpICtcbiAgICBTNCgpXG4gICk7XG59XG5cbmNvbnN0IHBhc3RlbEdyZWVuID0gXCIjOUFEN0E1XCI7XG5jb25zdCBwYXN0ZWxZZWxsb3cgPSBcIiNGRkQ5QkRcIjtcbmNvbnN0IHBhc3RlbFJlZCA9IFwiI0VFOUQ5NFwiO1xuXG5jb25zdCBjaGVja0JsYW5rU3RyaW5nID0gKHN0cmluZykgPT4ge1xuICByZXR1cm4gc3RyaW5nLnRyaW0oKS5sZW5ndGg7XG59O1xuXG5jb25zdCBnZXRGcm9tTG9jYWxTdG9yYWdlID0gKGNoZWNrTG9jYWxTdG9yYWdlKSA9PiB7XG4gIGNoZWNrTG9jYWxTdG9yYWdlLm1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHNpbmdsZVByb2plY3QgPSBwcm9qZWN0KGl0ZW0ucHJvamVjdE5hbWUsIGl0ZW0ucHJvamVjdElEKTtcblxuICAgIGl0ZW0udG9kb3MuZm9yRWFjaCgoc2luZ2xlVG9kbykgPT4ge1xuICAgICAgc2luZ2xlUHJvamVjdC5hZGRUb2RvKFxuICAgICAgICB0b2RvKFxuICAgICAgICAgIHNpbmdsZVRvZG8udGl0bGUsXG4gICAgICAgICAgc2luZ2xlVG9kby5kZXNjcmlwdGlvbixcbiAgICAgICAgICBzaW5nbGVUb2RvLmR1ZURhdGUsXG4gICAgICAgICAgc2luZ2xlVG9kby5wcmlvcml0eSxcbiAgICAgICAgICBzaW5nbGVUb2RvLnBhcmVudElELFxuICAgICAgICAgIHNpbmdsZVRvZG8uY29tcGxldGlvbixcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBhbGxQcm9qZWN0cy5wdXNoKHNpbmdsZVByb2plY3QpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNhdmVUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHNUb0xvY2FsU3RvcmFnZSA9IGFsbFByb2plY3RzLm1hcCgocHJvamVjdCkgPT5cbiAgICBwcm9qZWN0LnRvSlNPTigpLFxuICApO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIFwidG9kby1wcm9qZWN0c1wiLFxuICAgIEpTT04uc3RyaW5naWZ5KHByb2plY3RzVG9Mb2NhbFN0b3JhZ2UpLFxuICApO1xufTtcblxuZXhwb3J0IHtcbiAgSURHZW5lcmF0b3IsXG4gIHBhc3RlbEdyZWVuLFxuICBwYXN0ZWxZZWxsb3csXG4gIHBhc3RlbFJlZCxcbiAgY2hlY2tCbGFua1N0cmluZyxcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlLFxuICBnZXRGcm9tTG9jYWxTdG9yYWdlLFxufTtcblxuLy8gT2JqZWN0IHJlbGF0aW9uc2hpcFxuLy8gQ2hlY2tsaXN0IC0+IFRvZG8gLT4gUHJvamVjdFxuLy8gQ2hlY2tsaXN0IC0+IENoZWNrbGlzdCBJRCBhbmQgVG9kbyBJRFxuLy8gVG9kbyAtPiBUb2RvIElEIGFuZCBQcm9qZWN0IElEXG4iLCJpbXBvcnQgXCIuLi9zdHlsZS9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vbG9naWMvcHJvamVjdFwiO1xuaW1wb3J0IHsgcGFpbnRET00gfSBmcm9tIFwiLi9ET00vYXBwRmxvd1wiO1xuaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmxldCBhbGxQcm9qZWN0cyA9IFtdO1xuY29uc3QgY2hlY2tMb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKFxuICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG8tcHJvamVjdHNcIiksXG4pO1xubGV0IGZpcnN0VmlzaXQgPSBmYWxzZTtcblxuaWYgKGNoZWNrTG9jYWxTdG9yYWdlKSB7XG4gIGdldEZyb21Mb2NhbFN0b3JhZ2UoY2hlY2tMb2NhbFN0b3JhZ2UpO1xufSBlbHNlIHtcbiAgY29uc3Qgc3RhcnRQcm9qZWN0ID0gcHJvamVjdChcIlN0YXJ0ZXJcIik7XG5cbiAgYWxsUHJvamVjdHMucHVzaChzdGFydFByb2plY3QpO1xuICBmaXJzdFZpc2l0ID0gdHJ1ZTtcblxuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbn1cblxuY29uc3Qgc3RhcnRlclByb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKFxuICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gXCJTdGFydGVyXCIsXG4pO1xuXG5wYWludERPTShzdGFydGVyUHJvamVjdC5wcm9qZWN0SUQsIGZpcnN0VmlzaXQpO1xuXG5leHBvcnQgeyBhbGxQcm9qZWN0cyB9O1xuIiwiaW1wb3J0IHsgSURHZW5lcmF0b3IsIHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxuY29uc3QgcHJvamVjdCA9IChuYW1lLCBpZCA9IFwiXCIpID0+IHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBuYW1lO1xuICBjb25zdCBwcm9qZWN0SUQgPSBpZCA/IGlkIDogSURHZW5lcmF0b3IoKTtcbiAgbGV0IHRvZG9MaXN0ID0gW107XG5cbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gKGlkKSA9PiB7XG4gICAgdG9kb0xpc3QgPSB0b2RvTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udG9kb0l0ZW0oKS5pZCAhPT0gaWQpO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG8gPSAoKSA9PiB0b2RvTGlzdDtcblxuICBjb25zdCB0b0pTT04gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2plY3ROYW1lLFxuICAgICAgcHJvamVjdElELFxuICAgICAgdG9kb3M6IHRvZG9MaXN0Lm1hcCgodG9kbykgPT4ge1xuICAgICAgICBjb25zdCBzaW5nbGVUb0RvID0gdG9kby50b2RvSXRlbSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiBzaW5nbGVUb0RvLml0ZW1UaXRsZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogc2luZ2xlVG9Eby5pdGVtRGVzY3JpcHRpb24sXG4gICAgICAgICAgZHVlRGF0ZTogc2luZ2xlVG9Eby5pdGVtRHVlLFxuICAgICAgICAgIHByaW9yaXR5OiBzaW5nbGVUb0RvLml0ZW1Qcmlvcml0eSxcbiAgICAgICAgICBwYXJlbnRJRDogc2luZ2xlVG9Eby5wYXJlbnRJRCxcbiAgICAgICAgICBjb21wbGV0aW9uOiBzaW5nbGVUb0RvLml0ZW1Db21wbGV0aW9uU3RhdHVzLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb2plY3ROYW1lLFxuICAgIHByb2plY3RJRCxcbiAgICBnZXRUb2RvLFxuICAgIGFkZFRvZG8sXG4gICAgZGVsZXRlVG9kbyxcbiAgICB0b0pTT04sXG4gIH07XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBJREdlbmVyYXRvciwgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuXG5jb25zdCB0b2RvID0gKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBwcm9qZWN0SUQsXG4gIGNvbXBsZXRpb24gPSBcIlwiLFxuKSA9PiB7XG4gIGNvbnN0IGl0ZW1UaXRsZSA9IHRpdGxlO1xuICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgY29uc3QgaXRlbUR1ZSA9IGR1ZURhdGU7XG4gIGxldCBpdGVtUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgbGV0IGl0ZW1Db21wbGV0aW9uU3RhdHVzID0gY29tcGxldGlvbiA/IGNvbXBsZXRpb24gOiBmYWxzZTtcbiAgY29uc3QgcGFyZW50SUQgPSBwcm9qZWN0SUQ7XG4gIGNvbnN0IGlkID0gSURHZW5lcmF0b3IoKTtcblxuICBjb25zdCB1cGRhdGVQcmlvcml0eSA9IChwcmlvcml0eSkgPT4ge1xuICAgIGl0ZW1Qcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiBpdGVtUHJpb3JpdHk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQ29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICBpdGVtQ29tcGxldGlvblN0YXR1cyA9ICFpdGVtQ29tcGxldGlvblN0YXR1cztcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gaXRlbUNvbXBsZXRpb25TdGF0dXM7XG4gIH07XG5cbiAgY29uc3QgdG9kb0l0ZW0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgcGFyZW50SUQsXG4gICAgICBpdGVtVGl0bGUsXG4gICAgICBpdGVtRGVzY3JpcHRpb24sXG4gICAgICBpdGVtRHVlLFxuICAgICAgaXRlbVByaW9yaXR5LFxuICAgICAgaXRlbUNvbXBsZXRpb25TdGF0dXMsXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRvZG9JdGVtLFxuICAgIHVwZGF0ZVByaW9yaXR5LFxuICAgIHVwZGF0ZUNvbXBsZXRpb25TdGF0dXMsXG4gIH07XG59O1xuXG5leHBvcnQgeyB0b2RvIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdC9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==