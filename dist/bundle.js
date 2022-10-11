/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Use the fetch API to call the appropriate routes to display the data (/api/users and /api/restaurants)\n// Display users in the users-list unordered list and restaurants can be displayed in the restaurants-list unordered list.\n// Create HTML with a template literal by mapping over the users and restaurants.\nconst userColumn = document.getElementById('users-list');\nconst restColumn = document.getElementById('restaurants-list');\nconst reservationColumn = document.getElementById('reservations-list');\n\n//render user function:\nconst renderUsers = (users) => {\n  console.log('14', users);\n  for (let user of users) {\n    // console.log('users', users);\n    const element = document.createElement('li');\n    element.innerText = 'User Name: ' + user.name;\n    userColumn.appendChild(element);\n  }\n};\n\n//get all users function:\nconst getUsers = async () => {\n  const response = await fetch('http://localhost:3000/api/users');\n  const users = await response.json();\n  renderUsers(users);\n  return users;\n};\n\nconst getRestaurants = async () => {\n  const response = await fetch('http://localhost:3000/api/restaurants');\n  const restaurants = await response.json();\n  console.log('26', restaurants);\n  renderRestaurants(restaurants);\n  return restaurants;\n};\n\nconst renderRestaurants = (restaurants) => {\n  for (let restaurant of restaurants) {\n    const element = document.createElement('li');\n    element.innerText = 'Restaurant Name: ' + restaurant.name;\n    restColumn.appendChild(element);\n  }\n};\n\nconst renderReservations = (reservations) => {\n  for (let reservation of reservations) {\n    const element = document.createElement('li');\n    element.innerText = 'Reservation id: ' + reservation.id;\n    reservationColumn.appendChild(element);\n  }\n};\n\nconst getReservations = async () => {\n  const response = await fetch('http://localhost:3000/api/users/:userId/reservations');\n  const reservations = await response.json();\n  console.log('54', reservations);\n  renderReservations(reservations);\n  return reservations;\n};\ngetUsers();\ngetRestaurants();\ngetReservations();\n\n\n//# sourceURL=webpack://acme_reservation_planner/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;