// CONSTANT
import { formUI } from './elementUI';
export function run(load, postUser) {
  load();
  formUI.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const username = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    postUser(username, email);
  });
}
