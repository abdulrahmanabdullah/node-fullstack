// Post new user
export function addUser(name, email) {
  const data = {
    name,
    email,
  };
  fetch('http://localhost:2221/users', {
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
