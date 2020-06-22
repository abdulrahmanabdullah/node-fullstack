import { createTable } from './createTable';
import { tableUI } from './elementUI';
// Fetch users
export function loadUsers() {
  fetch('http://localhost:2221/users')
    .then((result) => result.json())
    .then((data) => {
      createTable(tableUI, data.users);
    });
}
