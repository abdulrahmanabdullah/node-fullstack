import { createTable } from './createTable';
import { tableUI } from './elementUI';
// Fetch users
export function loadUsers() {
  fetch('https://node-fullstack-app.herokuapp.com/users')
    .then((result) => result.json())
    .then((data) => {
      createTable(tableUI, data.users);
    });
}
