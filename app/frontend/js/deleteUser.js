export function deleteUser(id) {
  fetch(`https://node-fullstack-app.herokuapp.com/users/${id}`, {
    method: 'DELETE',
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
