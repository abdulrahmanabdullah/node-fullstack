export function deleteUser(id) {
  fetch(`https://node-fullstack-app.herokuapp.com/users/${id}`, {
    method: 'DELETE',
  })
    .then((result) => result.json())
    .then((data) => {
      if (data.message === 'success') {
        location.reload();
      }
    })
    .catch((err) => console.log(err));
}
