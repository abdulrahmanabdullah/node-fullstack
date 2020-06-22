export function deleteUser(id) {
  // fetch(`https://node-fullstack-app.herokuapp.com/users:${id}`, {
  //   method: 'DELETE',
  // })
  console.log(id);

  fetch(`http://localhost:2221/users/${id}`, {
    method: 'DELETE',
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
