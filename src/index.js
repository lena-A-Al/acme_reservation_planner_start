// Use the fetch API to call the appropriate routes to display the data (/api/users and /api/restaurants)
// Display users in the users-list unordered list and restaurants can be displayed in the restaurants-list unordered list.
// Create HTML with a template literal by mapping over the users and restaurants.
const userColumn = document.getElementById('users-list');
const restColumn = document.getElementById('restaurants-list');
const reservationColumn = document.getElementById('reservations-list');

//render user function:
const renderUsers = (users) => {
  console.log('14', users);
  for (let user of users) {
    // console.log('users', users);
    const element = document.createElement('li');
    element.innerText = 'User Name: ' + user.name;
    userColumn.appendChild(element);
  }
};

//get all users function:
const getUsers = async () => {
  const response = await fetch('http://localhost:3000/api/users');
  const users = await response.json();
  renderUsers(users);
  return users;
};

const getRestaurants = async () => {
  const response = await fetch('http://localhost:3000/api/restaurants');
  const restaurants = await response.json();
  console.log('26', restaurants);
  renderRestaurants(restaurants);
  return restaurants;
};

const renderRestaurants = (restaurants) => {
  for (let restaurant of restaurants) {
    const element = document.createElement('li');
    element.innerText = 'Restaurant Name: ' + restaurant.name;
    restColumn.appendChild(element);
  }
};

const renderReservations = (reservations) => {
  for (let reservation of reservations) {
    const element = document.createElement('li');
    element.innerText = 'Reservation id: ' + reservation.id;
    reservationColumn.appendChild(element);
  }
};

const getReservations = async () => {
  const response = await fetch('http://localhost:3000/api/users/:userId/reservations');
  const reservations = await response.json();
  console.log('54', reservations);
  renderReservations(reservations);
  return reservations;
};
getUsers();
getRestaurants();
getReservations();
