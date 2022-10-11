// Use the fetch API to call the appropriate routes to display the data (/api/users and /api/restaurants)
// Display users in the users-list unordered list and restaurants can be displayed in the restaurants-list unordered list.
// Create HTML with a template literal by mapping over the users and restaurants.
const userColumn = document.getElementById('users-list');
const restColumn = document.getElementById('restaurants-list');
const getUsers = async () => {
  const response = await fetch('http://localhost:3000/api/users');
  const users = await response.json();
  //   console.log(typeof users);
  renderUsers(users);
  return users;
};

const renderUsers = (users) => {
  console.log('14', users);
  for (let user of users) {
    console.log('users', users);
    const element = document.createElement('li');
    element.innerText = 'User Name: ' + user.name;
    userColumn.appendChild(element);
  }
};

const getRest = async () => {
  const response = await fetch('http://localhost:3000/api/restaurants');
  const restaurants = await response.json();
  return restaurants;
};

getUsers();
// getRest();
// renderUsers(getUsers());
