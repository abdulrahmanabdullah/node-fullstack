import { deleteUser } from './deleteUser';
// create table
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    // ????? es6
    let th = document.createElement('th');
    let td = document.createTextNode(key);
    th.appendChild(td);
    row.appendChild(th);
  }
}

function generateTableBody(table, data) {
  for (let element of data) {
    // {id : id , name : name , ... }
    let row = table.insertRow();
    for (let key in element) {
      // index .. id , name , email .
      let cell = row.insertCell();
      let td = document.createTextNode(element[key]);
      cell.appendChild(td);
    }
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.classList.add('delete-btn', 'btn', 'btn-danger');
    deleteBtn.addEventListener('click', () => deleteUser(element.id));
    row.appendChild(deleteBtn);
  }
}

export function createTable(table, data) {
  generateTableBody(table, data);
  const key = Object.keys(data[0]);
  generateTableHead(table, key);
}
