// Post new user
export function addUser(name, email) {
  const data = {
    name,
    email,
  };
  fetch('https://node-fullstack-app.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data, null, 2),
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => console.log(data));
}
